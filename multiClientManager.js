/**
 * Client WebSocket per sincronizzazione multi-client
 * Gestisce connessione, ruoli master/slave e sincronizzazione stato oggetti 3D
 */
class MultiClientManager {
    constructor() {
        this.ws = null;
        this.clientId = null;
        this.isMaster = false;
        this.isEnabled = false;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
        this.pingInterval = null;
        
        // Callbacks per eventi
        this.onStateChange = null;
        this.onMasterChange = null;
        this.onTransformReceived = null;
        this.onObjectCreatedReceived = null;
        
        // Buffer per messaggi in attesa
        this.messageQueue = [];
        
        console.log('MultiClientManager inizializzato');
    }

    /**
     * Abilita/disabilita modalità multi-client
     */
    setEnabled(enabled) {
        console.log('setEnabled chiamato con:', enabled, 'isEnabled corrente:', this.isEnabled);
        
        // Rimuoviamo il check di guard per evitare problemi di inizializzazione
        // if (this.isEnabled === enabled) {
        //     console.log('setEnabled: valore già impostato, esco');
        //     return;
        // }
        
        this.isEnabled = enabled;
        console.log('setEnabled: isEnabled ora è:', this.isEnabled);
        
        if (enabled) {
            console.log('setEnabled: chiamando connect()...');
            this.connect();
        } else {
            console.log('setEnabled: chiamando disconnect()...');
            this.disconnect();
        }
        
        console.log(`Modalità multi-client: ${enabled ? 'ATTIVA' : 'DISATTIVA'}`);
    }

    /**
     * Connessione al server WebSocket
     */
    connect() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('WebSocket già connesso');
            return;
        }

        // Usa lo stesso hostname del browser (funziona sia in locale che su rete)
        const wsHost = window.location.hostname;
        const wsUrl = `ws://${wsHost}:8080/ws`;
        console.log(`Connessione a ${wsUrl}...`);
        
        try {
            this.ws = new WebSocket(wsUrl);
            
            this.ws.onopen = () => {
                console.log('WebSocket connesso');
                this.reconnectAttempts = 0;
                this.startPing();
                this.processMessageQueue();
            };
            
            this.ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                this.handleMessage(message);
            };
            
            this.ws.onclose = () => {
                console.log('WebSocket disconnesso');
                this.stopPing();
                this.handleDisconnection();
            };
            
            this.ws.onerror = (error) => {
                console.error('Errore WebSocket:', error);
            };
            
        } catch (error) {
            console.error('Errore creazione WebSocket:', error);
        }
    }

    /**
     * Disconnessione dal server
     */
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.stopPing();
        this.clientId = null;
        this.isMaster = false;
    }

    /**
     * Gestisce messaggi dal server
     */
    handleMessage(message) {
        switch (message.type) {
            case 'init':
                this.clientId = message.clientId;
                this.isMaster = message.isMaster;
                
                // NON caricare stato iniziale per evitare oggetti a caso
                // if (message.state && Object.keys(message.state).length > 0) {
                //     this.loadInitialState(message.state);
                // }
                
                this.notifyStateChange();
                console.log(`Inizializzato come ${this.isMaster ? 'MASTER' : 'SLAVE'} (${this.clientId})`);
                break;

            case 'role_change':
                const wasMaster = this.isMaster;
                this.isMaster = message.isMaster;
                
                if (wasMaster !== this.isMaster) {
                    this.notifyMasterChange(this.isMaster);
                    console.log(`Ruolo cambiato: ${this.isMaster ? 'MASTER' : 'SLAVE'}`);
                }
                break;

            case 'master_changed':
                console.log(`Nuovo master: ${message.newMasterId}`);
                break;

            case 'transform':
                if (!this.isMaster && message.fromMaster) {
                    this.handleTransformMessage(message);
                }
                break;

            case 'object_created':
                if (!this.isMaster && message.fromMaster) {
                    console.log('SLAVE riceve creazione oggetto:', message.objectId, message.objectType, message.name);
                    this.handleObjectCreatedMessage(message);
                } else {
                    console.log('ObjectCreated IGNORATO - isMaster:', this.isMaster, 'fromMaster:', message.fromMaster);
                }
                break;

            case 'pong':
                // Risposta al ping
                break;

            default:
                console.log('Messaggio sconosciuto:', message);
        }
    }

    /**
     * Gestisce trasformazioni ricevute dal master
     */
    handleTransformMessage(message) {
        if (this.onTransformReceived) {
            const data = {
                objectId: message.objectId,
                position: message.position,
                rotation: message.rotation,
                scale: message.scale
            };
            // Includi tags se presenti nel messaggio
            if (message.tags) {
                data.tags = message.tags;
            }
            this.onTransformReceived(data);
        }
    }

    /**
     * Gestisce creazione oggetti ricevuta dal master
     */
    handleObjectCreatedMessage(message) {
        if (this.onObjectCreatedReceived) {
            this.onObjectCreatedReceived({
                objectId: message.objectId,
                objectType: message.objectType,
                name: message.name,
                position: message.position,
                rotation: message.rotation,
                scale: message.scale,
                properties: message.properties,
                tags: message.tags || [0] // Includi tags con default [0]
            });
        }
    }

    /**
     * Carica stato iniziale degli oggetti
     */
    loadInitialState(state) {
        console.log('Caricamento stato iniziale:', state);
        
        // Per ogni oggetto nello stato
        for (const [objectId, objectData] of Object.entries(state)) {
            console.log('Processando oggetto iniziale:', objectId, objectData);
            
            // Se ha informazioni complete di creazione, crea l'oggetto
            if (objectData.objectType && objectData.name && this.onObjectCreatedReceived) {
                console.log('Creando oggetto iniziale:', objectData.objectType, objectData.name);
                this.onObjectCreatedReceived({
                    objectId: objectId,
                    objectType: objectData.objectType,
                    name: objectData.name,
                    position: objectData.position,
                    rotation: objectData.rotation,
                    scale: objectData.scale,
                    properties: objectData.properties
                });
            } 
            // Altrimenti, se ha solo trasformazioni, applicale (per compatibilità)
            else if (objectData.position && this.onTransformReceived) {
                console.log('Applicando solo trasformazione iniziale:', objectId);
                this.onTransformReceived({
                    objectId: objectId,
                    position: objectData.position,
                    rotation: objectData.rotation,
                    scale: objectData.scale
                });
            }
        }
    }

    /**
     * Invia trasformazione (solo se master) con throttling
     */
    sendTransform(objectId, position, rotation, scale, tags = null) {
        if (!this.isMaster || !this.isEnabled) {
            console.log('sendTransform BLOCKED - isMaster:', this.isMaster, 'isEnabled:', this.isEnabled);
            return;
        }

        // Throttling: massimo 20 FPS per oggetto
        // ECCEZIONE: se ci sono tags, forza l'invio (cambio tags esplicito)
        const now = Date.now();
        const throttleKey = `transform_${objectId}`;
        
        if (!this.lastSent) this.lastSent = {};
        
        // Se non ci sono tags espliciti, applica throttling normale
        if (tags === null && this.lastSent[throttleKey] && now - this.lastSent[throttleKey] < 50) {
            return; // Skip se troppo frequente (solo per transform senza tags)
        }
        this.lastSent[throttleKey] = now;

        const message = {
            type: 'transform',
            objectId: objectId,
            position: position,
            rotation: rotation,
            scale: scale
        };
        
        // Aggiungi tags solo se specificati (evita di inviare tags ad ogni frame)
        if (tags !== null) {
            message.tags = tags;
        }

        this.sendMessage(message);
    }

    /**
     * Notifica creazione oggetto (solo se master)
     */
    notifyObjectCreated(objectId, objectType, name, position, rotation, scale, properties = {}, tags = [0]) {
        if (!this.isMaster || !this.isEnabled) {
            console.log('notifyObjectCreated BLOCKED - isMaster:', this.isMaster, 'isEnabled:', this.isEnabled);
            return;
        }

        console.log('MASTER notifica creazione oggetto:', objectId, objectType, name, 'tags:', tags);

        const message = {
            type: 'object_created',
            objectId: objectId,
            objectType: objectType,
            name: name,
            position: position,
            rotation: rotation,
            scale: scale,
            properties: properties,
            tags: tags
        };

        this.sendMessage(message);
    }

    /**
     * Richiede di diventare master
     */
    requestMaster() {
        if (!this.isEnabled) return;
        
        this.sendMessage({
            type: 'request_master'
        });
    }

    /**
     * Invia messaggio al server
     */
    sendMessage(message) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(message));
        } else {
            // Accoda messaggio se non connesso
            this.messageQueue.push(message);
        }
    }

    /**
     * Processa coda messaggi
     */
    processMessageQueue() {
        while (this.messageQueue.length > 0 && this.ws.readyState === WebSocket.OPEN) {
            const message = this.messageQueue.shift();
            this.ws.send(JSON.stringify(message));
        }
    }

    /**
     * Gestisce disconnessione e riconnessione
     */
    handleDisconnection() {
        if (!this.isEnabled) return;

        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
            
            console.log(`Tentativo riconnessione ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${delay}ms`);
            
            setTimeout(() => {
                this.connect();
            }, delay);
        } else {
            console.error('Massimo numero di tentativi di riconnessione raggiunto');
            this.setEnabled(false);
        }
    }

    /**
     * Sistema di ping per mantenere connessione
     */
    startPing() {
        this.pingInterval = setInterval(() => {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                this.sendMessage({ type: 'ping' });
            }
        }, 30000); // Ping ogni 30 secondi
    }

    /**
     * Ferma ping
     */
    stopPing() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }

    /**
     * Notifica cambio di stato
     */
    notifyStateChange() {
        if (this.onStateChange) {
            this.onStateChange({
                clientId: this.clientId,
                isMaster: this.isMaster,
                isConnected: this.ws && this.ws.readyState === WebSocket.OPEN
            });
        }
    }

    /**
     * Notifica cambio master
     */
    notifyMasterChange(isMaster) {
        if (this.onMasterChange) {
            this.onMasterChange(isMaster);
        }
    }

    /**
     * Getter per stato connessione
     */
    get isConnected() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * Info stato corrente
     */
    getStatus() {
        return {
            isEnabled: this.isEnabled,
            isConnected: this.isConnected,
            isMaster: this.isMaster,
            clientId: this.clientId
        };
    }
}

// Istanza globale
window.multiClientManager = new MultiClientManager();

export default window.multiClientManager;
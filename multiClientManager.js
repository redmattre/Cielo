/**
 * Client WebSocket per sincronizzazione multi-client
 * Gestisce connessione, ruoli master/slave e sincronizzazione stato oggetti 3D
 */
class MultiClientManager {
    constructor() {
        this.ws = null;
        this.clientId = null;
        this.isMaster = false;
        this.syncEnabled = false; // Sincronizzazione oggetti on/off
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
        
        // Connetti sempre il WebSocket per messaggi broadcast (es. Nuvola)
        this.connect();
    }

    /**
     * Abilita/disabilita sincronizzazione oggetti multi-client
     */
    setEnabled(enabled) {
        console.log('setEnabled chiamato con:', enabled, 'syncEnabled corrente:', this.syncEnabled);
        
        this.syncEnabled = enabled;
        console.log('setEnabled: syncEnabled ora è:', this.syncEnabled);
        
        console.log(`Sincronizzazione multi-client: ${enabled ? 'ATTIVA' : 'DISATTIVA'}`);
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
        console.log('[MultiClient] Messaggio ricevuto:', message.type, message);
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

            case 'nuvola_status':
                // Broadcast status device Nuvola
                if (this.onNuvolaStatus) {
                    this.onNuvolaStatus(message.data);
                }
                break;

            default:
                console.log('Messaggio sconosciuto:', message);
        }
    }

    /**
     * Gestisce trasformazioni ricevute dal master
     */
    handleTransformMessage(message) {
        console.log('[MultiClient] handleTransformMessage ricevuto:', {
            objectId: message.objectId,
            hasMenuState: !!message.menuState,
            menuState: message.menuState
        });
        
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
            // Includi menuState se presente nel messaggio
            if (message.menuState) {
                data.menuState = message.menuState;
            }
            
            console.log('[MultiClient] Passando data a onTransformReceived:', {
                hasMenuState: !!data.menuState,
                menuStateKeys: data.menuState ? Object.keys(data.menuState) : []
            });
            
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
                tags: message.tags || [0], // Includi tags con default [0]
                menuState: message.menuState || {} // Includi menuState con default {}
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
    sendTransform(objectId, position, rotation, scale, tags = null, menuState = null) {
        if (!this.isMaster || !this.syncEnabled) {
            console.log('sendTransform BLOCKED - isMaster:', this.isMaster, 'syncEnabled:', this.syncEnabled);
            return;
        }

        // Throttling: massimo 20 FPS per oggetto
        // ECCEZIONE: se ci sono tags o menuState, forza l'invio (cambio esplicito)
        const now = Date.now();
        const throttleKey = `transform_${objectId}`;
        
        if (!this.lastSent) this.lastSent = {};
        
        // Se non ci sono tags o menuState espliciti, applica throttling normale
        if (tags === null && menuState === null && this.lastSent[throttleKey] && now - this.lastSent[throttleKey] < 50) {
            return; // Skip se troppo frequente (solo per transform senza tags/menuState)
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
        
        // Aggiungi menuState solo se specificato
        if (menuState !== null) {
            message.menuState = menuState;
        }
        
        console.log('[MultiClient] sendTransform inviando:', {
            objectId,
            hasTags: tags !== null,
            hasMenuState: menuState !== null,
            menuStateKeys: menuState ? Object.keys(menuState) : []
        });

        this.sendMessage(message);
    }

    /**
     * Notifica creazione oggetto (solo se master)
     */
    notifyObjectCreated(objectId, objectType, name, position, rotation, scale, properties = {}, tags = [0], menuState = {}) {
        if (!this.isMaster || !this.syncEnabled) {
            console.log('notifyObjectCreated BLOCKED - isMaster:', this.isMaster, 'syncEnabled:', this.syncEnabled);
            return;
        }

        console.log('MASTER notifica creazione oggetto:', objectId, objectType, name, 'tags:', tags, 'menuState:', menuState);

        const message = {
            type: 'object_created',
            objectId: objectId,
            objectType: objectType,
            name: name,
            position: position,
            rotation: rotation,
            scale: scale,
            properties: properties,
            tags: tags,
            menuState: menuState
        };

        this.sendMessage(message);
    }

    /**
     * Richiede di diventare master
     */
    requestMaster() {
        console.log('[requestMaster] syncEnabled:', this.syncEnabled, 'isConnected:', this.isConnected, 'isMaster:', this.isMaster);
        
        if (!this.syncEnabled) {
            console.warn('[requestMaster] BLOCCATO: syncEnabled è false');
            return;
        }
        
        if (!this.isConnected) {
            console.warn('[requestMaster] BLOCCATO: WebSocket non connesso');
            return;
        }
        
        console.log('[requestMaster] Invio richiesta al server...');
        this.sendMessage({
            type: 'request_master'
        });
    }

    /**
     * Invia messaggio al server
     */
    sendMessage(message) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            // Log prima di inviare per verificare il contenuto
            if (message.type === 'transform') {
                console.log('[MultiClient] INVIO REALE via WebSocket:', {
                    type: message.type,
                    objectId: message.objectId,
                    hasMenuState: !!message.menuState,
                    menuStateContent: message.menuState
                });
            }
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
        // Sempre riconnetti per messaggi broadcast (Nuvola, ecc.)
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
    /**
     * Getter/setter per compatibilità con codice esistente
     */
    get isEnabled() {
        return this.syncEnabled;
    }
    
    set isEnabled(value) {
        this.setEnabled(value);
    }

    get isConnected() {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * Info stato corrente
     */
    getStatus() {
        return {
            isEnabled: this.syncEnabled,
            isConnected: this.isConnected,
            isMaster: this.isMaster,
            clientId: this.clientId
        };
    }
}

// Istanza globale
window.multiClientManager = new MultiClientManager();

export default window.multiClientManager;
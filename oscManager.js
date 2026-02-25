/**
 * Client OSC Manager
 * Gestisce connessione WebSocket al plugin OSC e invia messaggi OSC
 */
class OSCManager {
    constructor() {
        this.ws = null;
        this.isEnabled = true; // OSC attivo di default
        this.host = '192.168.0.255';
        this.port = 5000;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
        this.messageQueue = [];
        
        // Callbacks
        this.onConfigChange = null;
        this.onConnectionChange = null;
        
        // Connetti automaticamente all'avvio
        this.connect();
    }

    /**
     * Abilita/disabilita OSC output
     */
    setEnabled(enabled) {
        this.isEnabled = enabled;
        
        if (enabled) {
            this.connect();
        } else {
            this.disconnect();
        }
    }

    /**
     * Connessione al plugin OSC
     */
    connect() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            console.log('OSC WebSocket già connesso');
            return;
        }

        const wsHost = window.location.hostname;
        const wsUrl = `ws://${wsHost}:8081/osc`;
        console.log(`Connessione OSC a ${wsUrl}...`);
        
        try {
            this.ws = new WebSocket(wsUrl);
            
            this.ws.onopen = () => {
                console.log('OSC WebSocket connesso');
                this.reconnectAttempts = 0;
                this.processMessageQueue();
                
                if (this.onConnectionChange) {
                    this.onConnectionChange(true);
                }
            };
            
            this.ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                this.handleMessage(message);
            };
            
            this.ws.onclose = () => {
                console.log('OSC WebSocket disconnesso');
                this.handleDisconnection();
            };
            
            this.ws.onerror = (error) => {
                console.error('Errore OSC WebSocket:', error);
            };
        } catch (error) {
            console.error('Errore creazione OSC WebSocket:', error);
        }
    }

    /**
     * Disconnessione
     */
    disconnect() {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        
        if (this.onConnectionChange) {
            this.onConnectionChange(false);
        }
    }

    /**
     * Gestisce disconnessione e riconnessione
     */
    handleDisconnection() {
        if (this.onConnectionChange) {
            this.onConnectionChange(false);
        }

        if (!this.isEnabled) return;

        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            const delay = this.reconnectDelay * this.reconnectAttempts;
            console.log(`Tentativo riconnessione OSC ${this.reconnectAttempts}/${this.maxReconnectAttempts} tra ${delay}ms...`);
            
            setTimeout(() => {
                if (this.isEnabled) {
                    this.connect();
                }
            }, delay);
        } else {
            console.error('OSC: Raggiunto limite tentativi riconnessione');
        }
    }

    /**
     * Gestisce messaggi dal server
     */
    handleMessage(message) {
        switch (message.type) {
            case 'config':
                this.host = message.host;
                this.port = message.port;
                console.log(`OSC configurazione ricevuta: ${this.host}:${this.port}`);
                
                if (this.onConfigChange) {
                    this.onConfigChange(this.host, this.port);
                }
                break;

            case 'dump_request':
                console.log('[OSC] Richiesta DUMP ricevuta dal server');
                // Trigger dump tramite messageBroker
                if (window.messageBroker && window.messageBroker.sendDump) {
                    window.messageBroker.sendDump();
                }
                break;
            
            case 'set_position':
                console.log('[OSC] Comando SET_POSITION ricevuto:', message);
                // Trigger movimento oggetto
                this.handleSetPosition(message);
                break;

            case 'pong':
                // Risposta al ping
                break;

            default:
                console.log('Messaggio OSC sconosciuto:', message);
        }
    }

    /**
     * Gestisce comando di set position da OSC remoto
     */
    handleSetPosition(message) {
        let { objectType, index, x, y, z } = message;
        
        // Inverti il segno di Y prima di trasformare
        y = -y;
        
        // Importa dinamicamente scene e utility functions
        Promise.all([
            import('./setup.js'),
            import('./nameUtils.js'),
            import('./addgeometries.js')
        ]).then(([{ scene }, { extractChannelNumber }, { getObjectTypeFromObject }]) => {
            // Cerca l'oggetto nella scena per tipo e indice (non per nome esatto)
            let targetObject = null;
            
            // Itera su tutti gli oggetti nella scena
            for (const obj of scene.children) {
                if (!obj.name) continue;
                
                // Estrai il tipo e l'indice dall'oggetto
                const objType = getObjectTypeFromObject(obj);
                const objIndex = extractChannelNumber(obj.name);
                
                // Confronta tipo e indice
                if (objType === objectType && objIndex === index) {
                    targetObject = obj;
                    break;
                }
            }
            
            if (targetObject) {
                // Imposta posizione (ricorda: y e z sono invertiti in Three.js rispetto al sistema OSC)
                targetObject.position.set(x, z, y);
                
                // Notifica al messageBroker per sincronizzare con altri client e Max
                if (window.messageBroker) {
                    window.messageBroker.sendObjectTransform({
                        name: targetObject.name,
                        type: objectType,
                        position: { x: targetObject.position.x, y: targetObject.position.y, z: targetObject.position.z }
                    });
                }
                
                // Sincronizza con Max
                import('./maxSync.js').then(({ syncMaxDictionaries }) => {
                    syncMaxDictionaries();
                });
            } else {
                console.warn(`[OSC] Oggetto non trovato: tipo=${objectType}, indice=${index}`);
            }
        }).catch(error => {
            console.error('[OSC] Errore nel caricamento moduli:', error);
        });
    }

    /**
     * Aggiorna configurazione OSC (IP e porta destinazione)
     */
    updateConfig(host, port) {
        this.host = host;
        this.port = port;
        
        this.sendMessage({
            type: 'config',
            host: host,
            port: port
        });
        
        console.log(`OSC configurazione aggiornata: ${host}:${port}`);
    }

    /**
     * Invia messaggio OSC
     */
    sendOSC(address, args = []) {
        if (!this.isEnabled) {
            console.log('OSC: Messaggio bloccato (OSC disabilitato)');
            return;
        }

        console.log('OSC inviato:', address, args);

        this.sendMessage({
            type: 'osc',
            address: address,
            args: args
        });
    }

    /**
     * Invia messaggio al server WebSocket
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
     * Processa coda messaggi dopo riconnessione
     */
    processMessageQueue() {
        while (this.messageQueue.length > 0) {
            const message = this.messageQueue.shift();
            this.sendMessage(message);
        }
    }
}

// Crea istanza globale
window.oscManager = new OSCManager();

export default window.oscManager;

import { WebSocketServer } from 'ws';

/**
 * Plugin Vite per integrazione WebSocket Server
 * Gestisce la sincronizzazione multi-client in tempo reale
 */
export function websocketPlugin(options = {}) {
  const {
    port = 8080,
    path = '/ws',
    host = '0.0.0.0', // Default: accetta connessioni da qualsiasi IP
    onConnection,
    onMessage,
    onClose
  } = options;

  let wss = null;
  let connectedClients = new Map();
  let currentMaster = null;
  let stateStore = {
    objects: new Map() // Mappa ID oggetto -> posizione/rotazione/scala
  };

  /**
   * Gestisce connessione nuovo client
   */
  function handleConnection(ws, request) {
    const clientId = generateClientId();
    const clientInfo = {
      id: clientId,
      ws: ws,
      isMaster: false,
      lastActivity: Date.now()
    };

    connectedClients.set(clientId, clientInfo);
    
    // Assegna master se è il primo client
    if (connectedClients.size === 1) {
      assignMaster(clientId);
    }

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        handleClientMessage(clientId, message);
      } catch (error) {
        console.error(`Errore parsing messaggio da client ${clientId}:`, error);
      }
    });

    ws.on('close', () => {
      handleClientDisconnect(clientId);
    });

    ws.on('error', (error) => {
      console.error(`Errore WebSocket client ${clientId}:`, error);
      handleClientDisconnect(clientId);
    });

    // Invia stato iniziale al client
    sendToClient(clientId, {
      type: 'init',
      clientId: clientId,
      isMaster: clientInfo.isMaster,
      state: Array.from(stateStore.objects.entries()).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {})
    });

    console.log(`Client ${clientId} connesso. Totale: ${connectedClients.size}`);
    
    if (onConnection) {
      onConnection(clientId, clientInfo);
    }
  }

  /**
   * Gestisce messaggi dai client
   */
  function handleClientMessage(clientId, message) {
    const client = connectedClients.get(clientId);
    if (!client) return;

    client.lastActivity = Date.now();

    switch (message.type) {
      case 'transform':
        // Solo il master può inviare transform
        if (client.isMaster && message.objectId) {
          stateStore.objects.set(message.objectId, {
            position: message.position,
            rotation: message.rotation,
            scale: message.scale,
            timestamp: Date.now()
          });

          // Broadcast ai client slave
          broadcastToSlaves({
            type: 'transform',
            objectId: message.objectId,
            position: message.position,
            rotation: message.rotation,
            scale: message.scale,
            fromMaster: true
          });
        }
        break;

      case 'object_created':
        // Solo il master può notificare creazione oggetti
        if (client.isMaster) {
          console.log(`Master created object: ${message.objectId} (${message.objectType})`);
          
          // Aggiungi oggetto allo state store
          stateStore.objects.set(message.objectId, {
            objectType: message.objectType,
            name: message.name,
            position: message.position,
            rotation: message.rotation,
            scale: message.scale,
            properties: message.properties,
            timestamp: Date.now()
          });

          // Broadcast ai client slave
          broadcastToSlaves({
            type: 'object_created',
            objectId: message.objectId,
            objectType: message.objectType,
            name: message.name,
            position: message.position,
            rotation: message.rotation,
            scale: message.scale,
            properties: message.properties,
            fromMaster: true
          });
        }
        break;

      case 'request_master':
        // Assegna master role a questo client
        assignMaster(clientId);
        break;

      case 'ping':
        sendToClient(clientId, { type: 'pong' });
        break;

      default:
        if (onMessage) {
          onMessage(clientId, message);
        }
    }
  }

  /**
   * Gestisce disconnessione client
   */
  function handleClientDisconnect(clientId) {
    const client = connectedClients.get(clientId);
    if (!client) return;

    const wasMaster = client.isMaster;
    connectedClients.delete(clientId);

    // Se era il master, assegna master al prossimo client
    if (wasMaster && connectedClients.size > 0) {
      const nextMaster = connectedClients.keys().next().value;
      assignMaster(nextMaster);
    }

    console.log(`Client ${clientId} disconnesso. Totale: ${connectedClients.size}`);
    
    if (onClose) {
      onClose(clientId);
    }
  }

  /**
   * Assegna ruolo master a un client
   */
  function assignMaster(clientId) {
    // Rimuovi master corrente
    if (currentMaster) {
      const oldMaster = connectedClients.get(currentMaster);
      if (oldMaster) {
        oldMaster.isMaster = false;
        sendToClient(currentMaster, {
          type: 'role_change',
          isMaster: false
        });
      }
    }

    // Assegna nuovo master
    const newMaster = connectedClients.get(clientId);
    if (newMaster) {
      newMaster.isMaster = true;
      currentMaster = clientId;
      
      sendToClient(clientId, {
        type: 'role_change',
        isMaster: true
      });

      // Notifica agli altri client
      broadcastToSlaves({
        type: 'master_changed',
        newMasterId: clientId
      });

      console.log(`Client ${clientId} è ora il master`);
    }
  }

  /**
   * Invia messaggio a client specifico
   */
  function sendToClient(clientId, message) {
    const client = connectedClients.get(clientId);
    if (client && client.ws.readyState === 1) { // WebSocket.OPEN
      client.ws.send(JSON.stringify(message));
    }
  }

  /**
   * Broadcast ai client slave
   */
  function broadcastToSlaves(message) {
    connectedClients.forEach((client, clientId) => {
      if (!client.isMaster) {
        sendToClient(clientId, message);
      }
    });
  }

  /**
   * Genera ID univoco per client
   */
  function generateClientId() {
    return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  return {
    name: 'websocket-plugin',
    configureServer(server) {
      // Integrazione con server Vite
      console.log(`Inizializzando WebSocket Server sulla porta ${port}...`);
      
      wss = new WebSocketServer({
        host: host,
        port: port,
        path: path
      });

      wss.on('connection', handleConnection);

      console.log(`WebSocket Server attivo su ws://${host}:${port}${path}`);
    },
    
    buildStart() {
      console.log('WebSocket Plugin: Build iniziato');
    },
    
    closeBundle() {
      // Cleanup quando il server si chiude
      if (wss) {
        console.log('Chiusura WebSocket Server...');
        wss.clients.forEach(ws => {
          if (ws.readyState === 1) {
            ws.close();
          }
        });
        wss.close();
      }
    }
  };
}
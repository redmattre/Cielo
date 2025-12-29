import { WebSocketServer } from 'ws';
import osc from 'osc';

/**
 * Plugin Vite per integrazione OSC Output
 * Riceve messaggi via WebSocket dal browser e li converte in OSC UDP
 */
export function oscPlugin(options = {}) {
  const {
    wsPort = 8081,
    wsPath = '/osc',
    defaultOscHost = '127.0.0.1',
    defaultOscPort = 5000
  } = options;

  let wss = null;
  let connectedClients = new Map();
  let oscConfig = {
    host: defaultOscHost,
    port: defaultOscPort
  };

  // OSC UDP Port
  let udpPort = null;

  /**
   * Inizializza porta OSC UDP
   */
  function initOSCPort() {
    if (udpPort) {
      udpPort.close();
    }

    udpPort = new osc.UDPPort({
      localAddress: '0.0.0.0',
      localPort: 0, // Random port per invio
      remoteAddress: oscConfig.host,
      remotePort: oscConfig.port,
      metadata: false  // Cambiato a false per compatibilità Max
    });

    udpPort.on('ready', () => {
      console.log(`OSC UDP pronto per inviare a ${oscConfig.host}:${oscConfig.port}`);
    });

    udpPort.on('error', (error) => {
      console.error('Errore OSC UDP:', error);
    });

    udpPort.open();
  }

  /**
   * Invia messaggio OSC via UDP
   */
  function sendOSC(address, args = []) {
    if (!udpPort) {
      console.warn('OSC UDP non inizializzato');
      return;
    }

    try {
      // Con metadata: false, args è un array semplice
      const message = {
        address: address,
        args: args  // Valori plain senza wrapper type/value
      };

      console.log(`[OSC Plugin] Invio UDP a ${oscConfig.host}:${oscConfig.port} →`, address, args);
      udpPort.send(message);
      console.log('[OSC Plugin] Messaggio inviato con successo');
    } catch (error) {
      console.error('[OSC Plugin] Errore invio OSC:', error);
    }
  }

  /**
   * Gestisce connessione nuovo client WebSocket
   */
  function handleConnection(ws, request) {
    const clientId = generateClientId();
    connectedClients.set(clientId, { id: clientId, ws: ws });
    
    console.log(`Client OSC connesso: ${clientId} (${connectedClients.size} totali)`);

    // Invia configurazione corrente al client
    ws.send(JSON.stringify({
      type: 'config',
      host: oscConfig.host,
      port: oscConfig.port
    }));

    ws.on('message', (data) => {
      try {
        const message = JSON.parse(data);
        handleClientMessage(clientId, message);
      } catch (error) {
        console.error(`Errore parsing messaggio da client ${clientId}:`, error);
      }
    });

    ws.on('close', () => {
      connectedClients.delete(clientId);
      console.log(`Client OSC disconnesso: ${clientId} (${connectedClients.size} rimasti)`);
    });

    ws.on('error', (error) => {
      console.error(`Errore WebSocket client ${clientId}:`, error);
    });
  }

  /**
   * Gestisce messaggi dai client
   */
  function handleClientMessage(clientId, message) {
    switch (message.type) {
      case 'osc':
        // Invia messaggio OSC
        sendOSC(message.address, message.args);
        break;

      case 'config':
        // Aggiorna configurazione OSC
        if (message.host) oscConfig.host = message.host;
        if (message.port) oscConfig.port = message.port;
        
        console.log(`Configurazione OSC aggiornata: ${oscConfig.host}:${oscConfig.port}`);
        
        // Reinizializza porta UDP con nuova config
        initOSCPort();
        
        // Broadcast nuova config a tutti i client
        broadcastConfig();
        break;

      case 'ping':
        // Risposta al ping
        const client = connectedClients.get(clientId);
        if (client && client.ws.readyState === 1) {
          client.ws.send(JSON.stringify({ type: 'pong' }));
        }
        break;

      default:
        console.log('Messaggio OSC sconosciuto:', message.type);
    }
  }

  /**
   * Broadcast configurazione a tutti i client
   */
  function broadcastConfig() {
    const configMessage = JSON.stringify({
      type: 'config',
      host: oscConfig.host,
      port: oscConfig.port
    });

    connectedClients.forEach(client => {
      if (client.ws.readyState === 1) {
        client.ws.send(configMessage);
      }
    });
  }

  /**
   * Genera ID univoco per client
   */
  function generateClientId() {
    return `osc_client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  return {
    name: 'osc-plugin',
    
    configureServer(server) {
      console.log(`Inizializzando OSC Plugin...`);
      console.log(`WebSocket OSC sulla porta ${wsPort}${wsPath}`);
      
      // Inizializza OSC UDP
      initOSCPort();
      
      // Crea WebSocket Server
      wss = new WebSocketServer({
        port: wsPort,
        path: wsPath
      });

      wss.on('connection', handleConnection);

      console.log(`OSC Plugin attivo - WebSocket: ws://localhost:${wsPort}${wsPath}`);
      console.log(`OSC Output: ${oscConfig.host}:${oscConfig.port}`);
    },
    
    closeBundle() {
      // Cleanup quando il server si chiude
      if (udpPort) {
        console.log('Chiusura OSC UDP...');
        udpPort.close();
      }
      
      if (wss) {
        console.log('Chiusura WebSocket OSC...');
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

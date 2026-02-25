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
    defaultOscHost = '192.168.0.255',
    defaultOscPort = 5000,
    oscInPort = 7777 // Porta per ricevere comandi OSC in ingresso
  } = options;

  let wss = null;
  let connectedClients = new Map();
  let oscConfig = {
    host: defaultOscHost,
    port: defaultOscPort
  };

  // OSC UDP Port
  let udpPort = null;
  let oscInPortListener = null; // Listener per comandi in ingresso

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
      
      // Abilita broadcast dopo che il socket è pronto
      if (udpPort.socket) {
        udpPort.socket.setBroadcast(true);
        console.log('Broadcast UDP abilitato');
      }
    });

    udpPort.on('error', (error) => {
      console.error('Errore OSC UDP:', error);
    });

    udpPort.open();
  }

  /**
   * Inizializza ricevitore OSC per comandi in ingresso
   */
  function initOSCInputListener() {
    oscInPortListener = new osc.UDPPort({
      localAddress: '0.0.0.0',
      localPort: oscInPort,
      metadata: true
    });

    oscInPortListener.on('ready', () => {
      console.log(`✓ ========================================`);
      console.log(`✓ OSC INPUT RECEIVER ATTIVO`);
      console.log(`✓ Porta: ${oscInPort}`);
      console.log(`✓ Invia /cielo/dump per testare`);
      console.log(`✓ ========================================`);
    });

    oscInPortListener.on('message', (oscMsg) => {
      // Gestisci comando /cielo/dump
      if (oscMsg.address === '/cielo/dump') {
        console.log('[OSC IN] Comando DUMP ricevuto - inoltrando ai client');
        
        // Invia richiesta dump a tutti i client WebSocket connessi
        let sentCount = 0;
        connectedClients.forEach(client => {
          if (client.ws.readyState === 1) {
            client.ws.send(JSON.stringify({ 
              type: 'dump_request'
            }));
            sentCount++;
          }
        });
        console.log(`[OSC IN] Dump inviato a ${sentCount} client(i)`);
        return;
      }
      
      // Gestisci comandi di posizione: /cielo/{type}/position {index} {x} {y} {z}
      const positionMatch = oscMsg.address.match(/^\/cielo\/(omnifonte|altoparlante|orifonte|aureola|zona)\/position$/i);
      if (positionMatch) {
        const objectType = positionMatch[1].toLowerCase();
        
        // Estrai argomenti: index, x, y, z
        // Gli argomenti OSC arrivano con metadata: { type: 'f', value: 1.0 }
        if (oscMsg.args && oscMsg.args.length >= 4) {
          const index = oscMsg.args[0].value !== undefined ? oscMsg.args[0].value : oscMsg.args[0];
          const x = oscMsg.args[1].value !== undefined ? oscMsg.args[1].value : oscMsg.args[1];
          const y = oscMsg.args[2].value !== undefined ? oscMsg.args[2].value : oscMsg.args[2];
          const z = oscMsg.args[3].value !== undefined ? oscMsg.args[3].value : oscMsg.args[3];
          
          console.log(`[OSC IN] Position: ${objectType} #${index} -> (${x}, ${y}, ${z})`);
          
          // Inoltra comando ai client WebSocket
          let sentCount = 0;
          connectedClients.forEach(client => {
            if (client.ws.readyState === 1) {
              client.ws.send(JSON.stringify({
                type: 'set_position',
                objectType: objectType,
                index: index,
                x: x,
                y: y,
                z: z
              }));
              sentCount++;
            }
          });
          console.log(`[OSC IN] Comando inviato a ${sentCount} client(i)`);
        } else {
          console.warn(`[OSC IN] Argomenti insufficienti per ${oscMsg.address}`);
        }
        return;
      }
      
      // Comando non riconosciuto
      console.warn(`[OSC IN] Comando non riconosciuto: ${oscMsg.address}`);
    });

    oscInPortListener.on('error', (error) => {
      console.error('✗ ========================================');
      console.error('✗ ERRORE OSC INPUT RECEIVER');
      console.error('✗', error);
      console.error('✗ ========================================');
    });

    console.log(`[OSC IN] Apertura porta ${oscInPort}...`);
    oscInPortListener.open();
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
      
      // Inizializza OSC UDP per output
      initOSCPort();
      
      // Inizializza OSC Input Listener
      initOSCInputListener();
      
      // Crea WebSocket Server
      wss = new WebSocketServer({
        port: wsPort,
        path: wsPath
      });

      wss.on('connection', handleConnection);

      console.log(`OSC Plugin attivo - WebSocket: ws://localhost:${wsPort}${wsPath}`);
      console.log(`OSC Output: ${oscConfig.host}:${oscConfig.port}`);
      console.log(`OSC Input: porta ${oscInPort}`);
    },
    
    closeBundle() {
      // Cleanup quando il server si chiude
      if (oscInPortListener) {
        console.log('Chiusura OSC Input Listener...');
        oscInPortListener.close();
      }
      
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

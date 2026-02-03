#!/usr/bin/env node

/**
 * Server standalone per OSC e Multi-Client WebSocket
 * Da usare sia in dev che in produzione
 */

import { WebSocketServer } from 'ws';
import osc from 'osc';
import http from 'http';
import dgram from 'dgram';

const OSC_WS_PORT = 8081;
const MULTICLIENT_WS_PORT = 8080;
const DEFAULT_OSC_HOST = '192.168.0.255';
const DEFAULT_OSC_PORT = 5000;
const NUVOLA_UDP_PORT = 9998;
const OSC_IN_PORT = 7777; // Porta per ricevere comandi OSC in ingresso

// ============== OSC WebSocket Server ==============

let oscConfig = {
  host: DEFAULT_OSC_HOST,
  port: DEFAULT_OSC_PORT
};

let udpPort = null;

function initOSCPort() {
  if (udpPort) {
    udpPort.close();
  }

  udpPort = new osc.UDPPort({
    localAddress: '0.0.0.0',
    localPort: 0,
    remoteAddress: oscConfig.host,
    remotePort: oscConfig.port,
    metadata: false
  });

  udpPort.on('ready', () => {
    console.log(`✓ OSC UDP pronto per inviare a ${oscConfig.host}:${oscConfig.port}`);
    
    // Abilita broadcast dopo che il socket è pronto
    if (udpPort.socket) {
      udpPort.socket.setBroadcast(true);
      console.log('✓ Broadcast UDP abilitato');
    }
  });

  udpPort.on('error', (error) => {
    console.error('✗ Errore OSC UDP:', error);
  });

  udpPort.open();
}

// ============== OSC Input Receiver (comandi in ingresso) ==============

const oscInPort = new osc.UDPPort({
  localAddress: '0.0.0.0',
  localPort: OSC_IN_PORT,
  metadata: true
});

oscInPort.on('ready', () => {
  console.log(`✓ OSC Input receiver in ascolto su porta ${OSC_IN_PORT}`);
});

oscInPort.on('message', (oscMsg) => {
  console.log(`[OSC IN] Ricevuto: ${oscMsg.address}`, oscMsg.args);
  
  // Gestisci comando /cielo/dump
  if (oscMsg.address === '/cielo/dump') {
    console.log('[OSC IN] Comando DUMP ricevuto - inoltrando al client web');
    
    // Invia richiesta dump a tutti i client OSC WebSocket connessi
    oscWss.clients.forEach((client) => {
      if (client.readyState === 1) { // WebSocket.OPEN
        client.send(JSON.stringify({ 
          type: 'dump_request'
        }));
      }
    });
  }
});

oscInPort.on('error', (error) => {
  console.error('✗ Errore OSC Input:', error);
});

oscInPort.open();

// ============== OSC WebSocket Server ==============

// Crea server HTTP per OSC WebSocket
const oscHttpServer = http.createServer();
const oscWss = new WebSocketServer({ 
  server: oscHttpServer,
  path: '/osc'
});

oscWss.on('connection', (ws) => {
  console.log('✓ OSC client connesso');

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);

      if (message.type === 'config') {
        // Aggiorna configurazione OSC
        oscConfig.host = message.host;
        oscConfig.port = message.port;
        console.log(`OSC config aggiornata: ${oscConfig.host}:${oscConfig.port}`);
        initOSCPort();
        ws.send(JSON.stringify({ 
          type: 'config_updated', 
          host: oscConfig.host, 
          port: oscConfig.port 
        }));
      } else if (message.type === 'osc' && udpPort) {
        // Invia messaggio OSC
        udpPort.send({
          address: message.address,
          args: message.args || []
        });
      }
    } catch (error) {
      console.error('Errore handling messaggio OSC:', error);
    }
  });

  ws.on('close', () => {
    console.log('✗ OSC client disconnesso');
  });

  // Invia configurazione corrente al client
  ws.send(JSON.stringify({ 
    type: 'config', 
    host: oscConfig.host, 
    port: oscConfig.port 
  }));
});

oscHttpServer.listen(OSC_WS_PORT, '0.0.0.0', () => {
  console.log(`✓ OSC WebSocket server in ascolto su ws://0.0.0.0:${OSC_WS_PORT}/osc`);
  initOSCPort();
});

// ============== Multi-Client WebSocket Server ==============

const multiClientHttpServer = http.createServer();
const multiClientWss = new WebSocketServer({ 
  server: multiClientHttpServer,
  path: '/ws'
});

let connectedClients = new Map();
let currentMaster = null;
let stateStore = new Map();

function generateClientId() {
  return `client_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

function assignMaster(clientId) {
  if (currentMaster) {
    const oldMaster = connectedClients.get(currentMaster);
    if (oldMaster) {
      oldMaster.isMaster = false;
      oldMaster.ws.send(JSON.stringify({ 
        type: 'role_change', 
        isMaster: false 
      }));
    }
  }

  currentMaster = clientId;
  const newMaster = connectedClients.get(clientId);
  if (newMaster) {
    newMaster.isMaster = true;
    newMaster.ws.send(JSON.stringify({ 
      type: 'role_change', 
      isMaster: true 
    }));
    
    broadcast({ 
      type: 'master_changed', 
      newMasterId: clientId 
    }, clientId);
  }

  console.log(`✓ Master assegnato a: ${clientId}`);
}

function broadcast(message, excludeId = null) {
  const messageStr = JSON.stringify(message);
  connectedClients.forEach((client, id) => {
    if (id !== excludeId && client.ws.readyState === 1) {
      client.ws.send(messageStr);
    }
  });
}

multiClientWss.on('connection', (ws) => {
  const clientId = generateClientId();
  const clientInfo = {
    id: clientId,
    ws: ws,
    isMaster: false,
    lastActivity: Date.now()
  };

  connectedClients.set(clientId, clientInfo);
  console.log(`✓ Multi-client connesso: ${clientId} (totale: ${connectedClients.size})`);

  // Assegna master se è il primo client
  if (connectedClients.size === 1) {
    assignMaster(clientId);
  }

  // Invia stato iniziale
  const state = {};
  stateStore.forEach((value, key) => {
    state[key] = value;
  });

  ws.send(JSON.stringify({
    type: 'init',
    clientId: clientId,
    isMaster: clientInfo.isMaster,
    state: state
  }));

  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      clientInfo.lastActivity = Date.now();

      switch (message.type) {
        case 'request_master':
          // Sempre assegna master quando richiesto (permette passaggio tra client)
          assignMaster(clientId);
          break;

        case 'transform':
          if (clientInfo.isMaster) {
            console.log('[SERVER] Ricevuto transform da master:', {
              objectId: message.objectId,
              hasMenuState: !!message.menuState,
              menuStateKeys: message.menuState ? Object.keys(message.menuState) : []
            });
            
            // Aggiorna stato
            if (message.objectId) {
              stateStore.set(message.objectId, {
                position: message.position,
                rotation: message.rotation,
                scale: message.scale,
                tags: message.tags,
                menuState: message.menuState  // AGGIUNTO: salva anche menuState
              });
            }
            
            // Broadcast a altri client (inoltra tutto il messaggio)
            const broadcastMsg = { ...message, fromMaster: true };
            console.log('[SERVER] Broadcasting transform:', {
              objectId: broadcastMsg.objectId,
              hasMenuState: !!broadcastMsg.menuState,
              menuStateKeys: broadcastMsg.menuState ? Object.keys(broadcastMsg.menuState) : []
            });
            broadcast(broadcastMsg, clientId);
          }
          break;

        case 'object_created':
          if (clientInfo.isMaster) {
            // Salva oggetto nello stato
            if (message.objectId) {
              stateStore.set(message.objectId, {
                objectType: message.objectType,
                name: message.name,
                position: message.position,
                rotation: message.rotation,
                scale: message.scale,
                properties: message.properties,
                tags: message.tags
              });
            }
            // Broadcast a altri client
            broadcast({ ...message, fromMaster: true }, clientId);
          }
          break;

        case 'object_deleted':
          if (clientInfo.isMaster) {
            if (message.objectId) {
              stateStore.delete(message.objectId);
            }
            broadcast({ ...message, fromMaster: true }, clientId);
          }
          break;

        case 'ping':
          ws.send(JSON.stringify({ type: 'pong' }));
          break;
      }
    } catch (error) {
      console.error('Errore handling messaggio multi-client:', error);
    }
  });

  ws.on('close', () => {
    connectedClients.delete(clientId);
    console.log(`✗ Multi-client disconnesso: ${clientId} (totale: ${connectedClients.size})`);

    // Se era master, assegna nuovo master
    if (currentMaster === clientId) {
      currentMaster = null;
      if (connectedClients.size > 0) {
        const newMasterId = connectedClients.keys().next().value;
        assignMaster(newMasterId);
      }
    }
  });
});

multiClientHttpServer.listen(MULTICLIENT_WS_PORT, '0.0.0.0', () => {
  console.log(`✓ Multi-Client WebSocket server in ascolto su ws://0.0.0.0:${MULTICLIENT_WS_PORT}/ws`);
});

// ============== Nuvola UDP Listener ==============

const nuvolaUdpSocket = dgram.createSocket('udp4');

nuvolaUdpSocket.on('message', (data, rinfo) => {
  try {
    const deviceInfo = JSON.parse(data.toString('utf-8'));
    const hostname = deviceInfo.hostname;
    
    // Broadcast ai client connessi via WebSocket
    broadcast({
      type: 'nuvola_status',
      data: deviceInfo
    });
    
    const statusSymbol = {
      'online': '✅',
      'booting': '⏳',
      'stopped': '⏹️',
      'offline': '⚫'
    }[deviceInfo.status] || '❓';
    
    console.log(`[NUVOLA] ${statusSymbol} ${hostname}: ${deviceInfo.status} | ${deviceInfo.temperature}`);
  } catch (error) {
    console.error('[NUVOLA] Errore parsing messaggio:', error);
  }
});

nuvolaUdpSocket.on('error', (error) => {
  console.error('[NUVOLA] Errore UDP:', error);
});

nuvolaUdpSocket.bind(NUVOLA_UDP_PORT, '0.0.0.0', () => {
  console.log(`✓ Nuvola UDP listener in ascolto su porta ${NUVOLA_UDP_PORT}`);
});

console.log('\n=== Server WebSocket Standalone Avviato ===');
console.log('Per connessioni remote, usa l\'indirizzo IP della macchina invece di localhost\n');

// Gestione shutdown graceful
process.on('SIGINT', () => {
  console.log('\n\nShutdown in corso...');
  if (udpPort) udpPort.close();
  if (nuvolaUdpSocket) nuvolaUdpSocket.close();
  oscHttpServer.close();
  multiClientHttpServer.close();
  process.exit(0);
});

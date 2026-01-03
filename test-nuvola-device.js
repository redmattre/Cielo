#!/usr/bin/env node
/**
 * Simula un dispositivo Nuvola che invia broadcast UDP
 * Usa: node test-nuvola-device.js [hostname] [status]
 */

import dgram from 'dgram';

const UDP_PORT = 9998;
const BROADCAST_INTERVAL = 3000; // 3 secondi

// Parametri da riga di comando
const hostname = process.argv[2] || 'nuvola-test-01';
const initialStatus = process.argv[3] || 'online';

let deviceStatus = initialStatus;
let temperature = 45 + Math.random() * 15; // 45-60°C
let battery = 80 + Math.random() * 20; // 80-100%

console.log('🎧 Simulatore dispositivo Nuvola');
console.log('================================');
console.log(`Hostname: ${hostname}`);
console.log(`Status iniziale: ${deviceStatus}`);
console.log(`Broadcast UDP su porta: ${UDP_PORT}`);
console.log(`Intervallo: ${BROADCAST_INTERVAL}ms`);
console.log('');
console.log('Premi Ctrl+C per terminare');
console.log('');

function sendBroadcast() {
    const message = {
        hostname: hostname,
        ip: '192.168.1.100',
        temperature: `${temperature.toFixed(1)}°C`,
        battery: Math.round(battery),
        status: deviceStatus,
        timestamp: Date.now() / 1000 // Unix timestamp in secondi
    };
    
    const data = Buffer.from(JSON.stringify(message));
    const client = dgram.createSocket('udp4');
    
    // Invia a localhost
    client.send(data, 0, data.length, UDP_PORT, 'localhost', (err) => {
        if (err) {
            console.error('Errore invio:', err);
        } else {
            const statusSymbol = {
                'online': '✅',
                'booting': '⏳',
                'stopped': '⏹️',
                'offline': '⚫'
            }[deviceStatus] || '❓';
            
            console.log(`${new Date().toLocaleTimeString()} ${statusSymbol} ${hostname}: ${deviceStatus} | ${message.temperature} | Battery: ${message.battery}%`);
        }
        client.close();
    });
    
    // Simula piccole variazioni
    temperature += (Math.random() - 0.5) * 2;
    temperature = Math.max(40, Math.min(70, temperature));
    
    battery -= Math.random() * 0.5;
    battery = Math.max(0, battery);
}

// Invia subito il primo messaggio
sendBroadcast();

// Continua a inviare periodicamente
const intervalId = setInterval(sendBroadcast, BROADCAST_INTERVAL);

// Gestisci Ctrl+C
process.on('SIGINT', () => {
    console.log('\n\n👋 Stopping device simulator...');
    clearInterval(intervalId);
    process.exit(0);
});

// Simula cambio di stato dopo 20 secondi
setTimeout(() => {
    console.log('\n🔄 Cambio stato in "booting"...\n');
    deviceStatus = 'booting';
}, 20000);

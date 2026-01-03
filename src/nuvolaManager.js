/**
 * Nuvola Dashboard Manager
 * Gestisce la visualizzazione dello stato dei device Nuvola (Aureole)
 */

import { createNuvolaAureola, removeNuvolaAureola } from '../addgeometries.js';

const OFFLINE_TIMEOUT = 12000; // 12 secondi per UI offline
const DELETION_TIMEOUT = 15000; // 15 secondi per eliminare aureola
const UPDATE_INTERVAL = 1000; // Aggiorna UI ogni secondo

const devices = new Map();
const deviceAureoleMap = new Map(); // hostname → { aureoleId, aureoleName, index }
const freedIndices = []; // Indici liberati da eliminazioni
let nextAureoleIndex = 1;
let updateIntervalId = null;

/**
 * Inizializza il manager Nuvola
 */
export function initNuvolaManager() {
    console.log('🎧 Nuvola Manager initialized');
    
    // Avvia aggiornamento UI periodico (il container verrà creato dopo)
    if (updateIntervalId) {
        clearInterval(updateIntervalId);
    }
    updateIntervalId = setInterval(() => {
        updateDashboard();
        checkForDeletion();
    }, UPDATE_INTERVAL);
    
    // Registra callback per messaggi nuvola
    if (window.multiClientManager) {
        console.log('✓ multiClientManager trovato, registering callback');
        window.multiClientManager.onNuvolaStatus = (data) => {
            console.log('[NUVOLA] Device update ricevuto:', data.hostname, data.status);
            updateDevice(data);
        };
    } else {
        console.warn('[NUVOLA] multiClientManager non trovato');
    }
}

/**
 * Aggiorna dati di un device
 */
function updateDevice(data) {
    const now = Date.now();
    const hostname = data.hostname;
    
    devices.set(hostname, {
        ...data,
        lastSeen: now,
        timestamp: data.timestamp // Timestamp originale in secondi
    });
    console.log(`[NUVOLA] Device aggiornato: ${hostname}, totale devices: ${devices.size}`);
    
    // Gestione Aureola 3D
    if (!deviceAureoleMap.has(hostname)) {
        // Device nuovo: crea aureola
        const index = freedIndices.length > 0 ? freedIndices.shift() : nextAureoleIndex++;
        const aureoleInfo = createNuvolaAureola(hostname, index);
        deviceAureoleMap.set(hostname, { ...aureoleInfo, index });
        console.log(`[NUVOLA] Aureola creata per ${hostname}: index ${index}`);
    }
    
    // Aggiorna immediatamente il dashboard
    updateDashboard();
}

/**
 * Controlla device offline per eliminazione aureole
 */
function checkForDeletion() {
    const now = Date.now();
    
    devices.forEach((device, hostname) => {
        const offlineTime = now - device.lastSeen;
        
        // Se offline > 15 secondi, elimina aureola
        if (offlineTime > DELETION_TIMEOUT && deviceAureoleMap.has(hostname)) {
            const aureoleInfo = deviceAureoleMap.get(hostname);
            console.log(`[NUVOLA] Device ${hostname} offline da ${Math.round(offlineTime/1000)}s, eliminando aureola`);
            
            removeNuvolaAureola(aureoleInfo.id);
            freedIndices.push(aureoleInfo.index); // Riusa questo indice
            deviceAureoleMap.delete(hostname);
            devices.delete(hostname); // Rimuovi anche dal Map devices
        }
    });
}

/**
 * Formatta timestamp relativo
 */
function formatTimestamp(timestamp) {
    const now = Date.now() / 1000;
    const diff = now - timestamp;
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
}

/**
 * Ottiene classe CSS per lo status
 */
function getStatusClass(status) {
    const statusMap = {
        'online': 'nuvola-status-online',
        'booting': 'nuvola-status-booting',
        'stopped': 'nuvola-status-stopped',
        'offline': 'nuvola-status-offline'
    };
    return statusMap[status] || 'nuvola-status-offline';
}

/**
 * Renderizza/aggiorna il dashboard
 */
function updateDashboard() {
    const container = document.getElementById('nuvola-dashboard');
    if (!container) {
        // Container non ancora creato (menu non ancora aperto), silently skip
        return;
    }
    
    const now = Date.now();
    
    if (devices.size === 0) {
        container.innerHTML = `
            <div class="nuvola-no-devices">
                Waiting for devices...
            </div>
        `;
        return;
    }
    
    console.log(`[NUVOLA] Rendering ${devices.size} devices`);
    let html = '';
    
    devices.forEach((device, hostname) => {
        const isOffline = (now - device.lastSeen) > OFFLINE_TIMEOUT;
        const status = isOffline ? 'offline' : device.status;
        const statusClass = getStatusClass(status);
        
        html += `
            <div class="nuvola-device-card ${isOffline ? 'offline' : ''}">
                <div class="nuvola-device-header">
                    <div class="nuvola-device-name">${hostname}</div>
                    <div class="nuvola-status-badge ${statusClass}">${status}</div>
                </div>
                <div class="nuvola-device-info">
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">IP</span>
                        <span class="nuvola-info-value">${device.ip || 'N/A'}</span>
                    </div>
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">Temp</span>
                        <span class="nuvola-info-value">${device.temperature}</span>
                    </div>
                    ${device.battery !== undefined ? `
                    <div class="nuvola-info-row">
                        <span class="nuvola-info-label">Battery</span>
                        <span class="nuvola-info-value" style="color: ${device.battery > 20 ? '#48bb78' : '#fc8181'}">${device.battery}%</span>
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

/**
 * Cleanup quando si chiude
 */
export function destroyNuvolaManager() {
    if (updateIntervalId) {
        clearInterval(updateIntervalId);
        updateIntervalId = null;
    }
    devices.clear();
}

// Esponi globalmente per debug
window.nuvolaManager = {
    getDevices: () => devices,
    updateDevice: updateDevice
};

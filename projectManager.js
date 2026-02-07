import { objToBeDetected } from './setup.js';
import { getObjectTypeFromObject } from './addgeometries.js';

// Funzione per mostrare notifiche al centro dello schermo
export function showNotification(message, isError = false) {
  // Crea l'elemento notifica se non esiste già
  let notification = document.getElementById('project-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'project-notification';
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1.5rem 3rem;
      border-radius: 12px;
      font-size: 1.2rem;
      font-weight: 500;
      z-index: 100000;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(notification);
  }
  
  // Imposta il colore in base al tipo di notifica
  const bgColor = isError ? 'rgba(240, 128, 128, 0.9)' : 'rgba(128, 128, 128, 0.9)';
  const textColor = 'white';
  
  notification.style.background = bgColor;
  notification.style.color = textColor;
  
  // Imposta il messaggio e mostra la notifica
  notification.textContent = message;
  notification.style.opacity = '1';
  
  // Nascondi dopo 3 secondi con fade out
  setTimeout(() => {
    notification.style.opacity = '0';
  }, 3000);
}

// Variabile globale per il progetto attivo
let activeProjectHandle = null;
let activeProjectName = null;
let autosaveEnabled = false;
let autosaveTimeout = null;
const AUTOSAVE_DELAY = 2000; // 2 secondi dopo l'ultima interazione

// Carica dal localStorage il path del progetto (se esiste)
function loadActiveProjectFromStorage() {
  const storedName = localStorage.getItem('activeProjectName');
  if (storedName) {
    activeProjectName = storedName;
    console.log('[PROJECT] Progetto attivo caricato da localStorage:', activeProjectName);
    // NOTA: activeProjectHandle non può essere salvato in localStorage (è un oggetto FileSystem),
    // quindi l'autosave si attiverà solo dopo il primo salvataggio della sessione
  }
}

// Salva nel localStorage il progetto attivo
function saveActiveProjectToStorage() {
  if (activeProjectName) {
    localStorage.setItem('activeProjectName', activeProjectName);
  }
}

// Estrae le settings globali (OSC, Plastico, etc.)
function extractGlobalSettings() {
  const settings = {};
  
  // Leggi config OSC
  const oscHostInput = document.getElementById('oscHost');
  const oscPortInput = document.getElementById('oscPort');
  if (oscHostInput && oscPortInput) {
    settings.osc = {
      host: oscHostInput.value,
      port: parseInt(oscPortInput.value, 10)
    };
  }
  
  // Leggi stato Plastico
  const plasticoCheckbox = document.getElementById('plasticoToggle');
  const plasticoThresholdInput = document.getElementById('plasticoThreshold');
  if (plasticoCheckbox) {
    settings.plastico = {
      visible: plasticoCheckbox.checked,
      threshold: plasticoThresholdInput ? parseFloat(plasticoThresholdInput.value) : 0.5
    };
  }
  
  return settings;
}

// Estrae posizioni/parametri degli oggetti (senza settings)
function extractPositions(typePrefix) {
  const result = {};
  
  // Converti il prefix in objectType corrispondente
  const typeMap = {
    'Altoparlante': 'altoparlante',
    'Omnifonte': 'omnifonte',
    'Orifonte': 'orifonte',
    'Aureola': 'aureola',
    'Zona': 'zona'
  };
  const targetType = typeMap[typePrefix];
  
  // Filtra oggetti usando getObjectTypeFromObject (stessa logica di messageBroker!)
  objToBeDetected
    .filter(obj => {
      const detectedType = getObjectTypeFromObject(obj);
      return detectedType === targetType.toLowerCase();
    })
    .forEach(obj => {
      const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
      const safeName = obj.name.replace(/\s+/g, '_');
      
      result[safeName] = {
        position: {
          x: target.position.x,
          y: target.position.z,
          z: target.position.y
        },
        rotation: {
          x: target.rotation.x,
          y: target.rotation.z,
          z: target.rotation.y
        },
        scale: {
          x: target.scale.x,
          y: target.scale.z,
          z: target.scale.y
        },
        // Salva il tipo per identificazione durante il caricamento
        objectType: obj.userData?.objectType || targetType.toLowerCase(),
        tags: obj.userData.tags || [],
        menuState: obj.userData.menuState || {}
      };
    });
    
  return result;
}

// Salva progetto completo
export async function saveProject() {
  try {
    // Se non c'è progetto attivo, chiedi di crearne uno nuovo
    if (!activeProjectHandle) {
      // Chiedi dove creare la cartella del progetto
      activeProjectHandle = await window.showDirectoryPicker({
        mode: 'readwrite'
      });
      activeProjectName = activeProjectHandle.name;
      saveActiveProjectToStorage();
      console.log('[PROJECT] Nuovo progetto creato:', activeProjectName);
    }
    
    // Salva i 3 file
    const projectName = activeProjectName;
    
    // 1. Settings
    const settings = {
      metadata: {
        name: projectName,
        created: new Date().toISOString(),
        version: '2.0'
      },
      settings: extractGlobalSettings()
    };
    
    const settingsFile = await activeProjectHandle.getFileHandle(`${projectName}_settings.json`, { create: true });
    const settingsWritable = await settingsFile.createWritable();
    await settingsWritable.write(JSON.stringify(settings, null, 2));
    await settingsWritable.close();
    
    // 2. Speakers
    const speakers = extractPositions('Altoparlante');
    const speakersData = {
      metadata: {
        name: `${projectName} - Speakers`,
        created: new Date().toISOString(),
        version: '2.0'
      },
      speakers: speakers
    };
    
    const speakersFile = await activeProjectHandle.getFileHandle(`${projectName}_speakers.json`, { create: true });
    const speakersWritable = await speakersFile.createWritable();
    await speakersWritable.write(JSON.stringify(speakersData, null, 2));
    await speakersWritable.close();
    
    // 3. Sources
    const omnifonti = extractPositions('Omnifonte');
    const orifonti = extractPositions('Orifonte');
    const zone = extractPositions('Zona');
    const sources = { ...omnifonti, ...orifonti, ...zone };
    
    const sourcesData = {
      metadata: {
        name: `${projectName} - Sources`,
        created: new Date().toISOString(),
        version: '2.0'
      },
      sources: sources
    };
    
    const sourcesFile = await activeProjectHandle.getFileHandle(`${projectName}_sources.json`, { create: true });
    const sourcesWritable = await sourcesFile.createWritable();
    await sourcesWritable.write(JSON.stringify(sourcesData, null, 2));
    await sourcesWritable.close();
    
    console.log('[PROJECT] Progetto salvato:', projectName);
    showNotification(`Progetto "${projectName}" salvato con successo!`);
    
    // Abilita autosave dopo il primo salvataggio
    if (!autosaveEnabled) {
      autosaveEnabled = true;
      initAutosave();
      console.log('[AUTOSAVE] Sistema di autosave attivato');
    }
    
  } catch (err) {
    console.error('[PROJECT] Errore nel salvataggio:', err);
    alert('Errore nel salvataggio del progetto: ' + err.message);
  }
}

// Salva progetto come nuovo (chiede sempre nuova cartella)
export async function saveProjectAs() {
  try {
    // Chiedi sempre una nuova cartella
    activeProjectHandle = await window.showDirectoryPicker({
      mode: 'readwrite'
    });
    activeProjectName = activeProjectHandle.name;
    saveActiveProjectToStorage();
    console.log('[PROJECT] Nuovo progetto creato (Save As):', activeProjectName);
    
    // Salva i 3 file
    const projectName = activeProjectName;
    
    // 1. Settings
    const settings = {
      metadata: {
        name: projectName,
        created: new Date().toISOString(),
        version: '2.0'
      },
      settings: extractGlobalSettings()
    };
    
    const settingsFile = await activeProjectHandle.getFileHandle(`${projectName}_settings.json`, { create: true });
    const settingsWritable = await settingsFile.createWritable();
    await settingsWritable.write(JSON.stringify(settings, null, 2));
    await settingsWritable.close();
    
    // 2. Speakers
    const speakers = extractPositions('Altoparlante');
    const speakersData = {
      metadata: {
        name: `${projectName} - Speakers`,
        created: new Date().toISOString(),
        version: '2.0'
      },
      speakers: speakers
    };
    
    const speakersFile = await activeProjectHandle.getFileHandle(`${projectName}_speakers.json`, { create: true });
    const speakersWritable = await speakersFile.createWritable();
    await speakersWritable.write(JSON.stringify(speakersData, null, 2));
    await speakersWritable.close();
    
    // 3. Sources
    const omnifonti = extractPositions('Omnifonte');
    const orifonti = extractPositions('Orifonte');
    const zone = extractPositions('Zona');
    const sources = { ...omnifonti, ...orifonti, ...zone };
    
    const sourcesData = {
      metadata: {
        name: `${projectName} - Sources`,
        created: new Date().toISOString(),
        version: '2.0'
      },
      sources: sources
    };
    
    const sourcesFile = await activeProjectHandle.getFileHandle(`${projectName}_sources.json`, { create: true });
    const sourcesWritable = await sourcesFile.createWritable();
    await sourcesWritable.write(JSON.stringify(sourcesData, null, 2));
    await sourcesWritable.close();
    
    console.log('[PROJECT] Progetto salvato come:', projectName);
    alert(`Progetto "${projectName}" salvato come nuovo progetto!`);
    
  } catch (err) {
    console.error('[PROJECT] Errore nel salvataggio:', err);
    alert('Errore nel salvataggio del progetto: ' + err.message);
  }
}

// Controlla se esistono backup più recenti dei file principali
async function checkForNewerBackup(directoryHandle, projectName) {
  try {
    // Ottieni timestamp dei file principali
    const mainSettingsFile = await directoryHandle.getFileHandle(`${projectName}_settings.json`);
    const mainFile = await mainSettingsFile.getFile();
    const mainTimestamp = mainFile.lastModified;
    
    // Cerca nella cartella Backup
    const backupFolder = await directoryHandle.getDirectoryHandle('Backup', { create: false });
    
    let latestBackupTimestamp = null;
    let latestBackupTime = null;
    
    for await (const entry of backupFolder.values()) {
      if (entry.kind !== 'file') continue;
      
      const match = entry.name.match(new RegExp(`${projectName}_settings_(\\d{4}-\\d{2}-\\d{2}T\\d{2}-\\d{2}-\\d{2})\\.json`));
      if (match) {
        const timestampStr = match[1];
        const file = await backupFolder.getFileHandle(entry.name);
        const fileData = await file.getFile();
        
        if (fileData.lastModified > mainTimestamp) {
          if (!latestBackupTime || fileData.lastModified > latestBackupTime) {
            latestBackupTime = fileData.lastModified;
            latestBackupTimestamp = timestampStr;
          }
        }
      }
    }
    
    return latestBackupTimestamp; // Ritorna timestamp string o null
  } catch (err) {
    console.log('[PROJECT] Nessun backup trovato o errore:', err);
    return null;
  }
}

// Mostra prompt per recuperare backup
async function showBackupPrompt(backupTimestamp) {
  return new Promise((resolve) => {
    // Crea backdrop con blur (come addElementMenu)
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
      z-index: 9999;
    `;
    
    // Crea dialog (stile come addElementCenterMenu)
    const dialog = document.createElement('div');
    dialog.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--fondale);
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      padding: 2rem;
      z-index: 10000;
      min-width: 420px;
      max-width: 500px;
    `;
    
    const title = document.createElement('div');
    title.textContent = 'Backup più recente trovato';
    title.style.cssText = `
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--testo);
      text-align: center;
      margin-bottom: 1rem;
      letter-spacing: 0.02em;
    `;
    
    const message = document.createElement('p');
    message.innerHTML = `È stato trovato un backup più recente:<br><strong>${backupTimestamp}</strong><br><br>Vuoi recuperare il backup o ignorarlo?`;
    message.style.cssText = `
      margin: 0 0 1.5rem 0;
      line-height: 1.6;
      color: var(--testo);
      opacity: 0.9;
      text-align: center;
    `;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display: flex; gap: 1rem; justify-content: center;';
    
    const ignoreBtn = document.createElement('button');
    ignoreBtn.textContent = 'Ignora';
    ignoreBtn.style.cssText = `
      padding: 0.75rem 1.5rem;
      background: transparent;
      color: var(--testo);
      border: 1px solid var(--dettaglio);
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      font-weight: 500;
      width: auto;
    `;
    ignoreBtn.onmouseover = () => {
      ignoreBtn.style.background = 'var(--dettaglio)';
      ignoreBtn.style.color = 'var(--fondale)';
    };
    ignoreBtn.onmouseout = () => {
      ignoreBtn.style.background = 'transparent';
      ignoreBtn.style.color = 'var(--testo)';
    };
    
    const recoverBtn = document.createElement('button');
    recoverBtn.textContent = 'Recupera Backup';
    recoverBtn.style.cssText = `
      padding: 0.75rem 1.5rem;
      background: var(--dettaglio);
      color: var(--fondale);
      border: 1px solid var(--dettaglio);
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
      width: auto;
    `;
    recoverBtn.onmouseover = () => {
      recoverBtn.style.opacity = '0.8';
    };
    recoverBtn.onmouseout = () => {
      recoverBtn.style.opacity = '1';
    };
    
    recoverBtn.onclick = () => {
      document.body.removeChild(backdrop);
      document.body.removeChild(dialog);
      resolve(true);
    };
    
    ignoreBtn.onclick = () => {
      document.body.removeChild(backdrop);
      document.body.removeChild(dialog);
      resolve(false);
    };
    
    buttonContainer.appendChild(ignoreBtn);
    buttonContainer.appendChild(recoverBtn);
    
    dialog.appendChild(title);
    dialog.appendChild(message);
    dialog.appendChild(buttonContainer);
    
    document.body.appendChild(backdrop);
    document.body.appendChild(dialog);
  });
}

// Carica i file del progetto (da file principali o backup)
async function loadProjectFiles(directoryHandle, projectName, fromBackup = false) {
  let sourceFolder = directoryHandle;
  let filePattern = projectName;
  
  if (fromBackup) {
    sourceFolder = await directoryHandle.getDirectoryHandle('Backup', { create: false });
    
    // Trova i file più recenti nel backup
    let latestTimestamp = null;
    for await (const entry of sourceFolder.values()) {
      if (entry.kind !== 'file') continue;
      const match = entry.name.match(new RegExp(`${projectName}_\\w+_(\\d{4}-\\d{2}-\\d{2}T\\d{2}-\\d{2}-\\d{2})\\.json`));
      if (match && (!latestTimestamp || match[1] > latestTimestamp)) {
        latestTimestamp = match[1];
      }
    }
    filePattern = `${projectName}_FILETYPE_${latestTimestamp}`;
  } else {
    filePattern = `${projectName}_FILETYPE`;
  }
  
  // 1. Carica settings
  try {
    const fileName = fromBackup ? filePattern.replace('FILETYPE', 'settings') + '.json' : `${projectName}_settings.json`;
    const settingsFile = await sourceFolder.getFileHandle(fileName);
    const settingsFileData = await settingsFile.getFile();
    const settingsText = await settingsFileData.text();
    const settingsData = JSON.parse(settingsText);
    
    if (settingsData.settings) {
      applyGlobalSettings(settingsData.settings);
    }
    console.log('[PROJECT] Settings caricati');
  } catch (err) {
    console.warn('[PROJECT] File settings non trovato o errore:', err);
  }
  
  // 2. Carica speakers
  try {
    const fileName = fromBackup ? filePattern.replace('FILETYPE', 'speakers') + '.json' : `${projectName}_speakers.json`;
    const speakersFile = await sourceFolder.getFileHandle(fileName);
    const speakersFileData = await speakersFile.getFile();
    const speakersText = await speakersFileData.text();
    const speakersData = JSON.parse(speakersText);
    
    const { loadSpeakersFromData } = await import('./presetLoader.js');
    await loadSpeakersFromData(speakersData);
    console.log('[PROJECT] Speakers caricati');
  } catch (err) {
    console.warn('[PROJECT] File speakers non trovato o errore:', err);
  }
  
  // 3. Carica sources
  try {
    const fileName = fromBackup ? filePattern.replace('FILETYPE', 'sources') + '.json' : `${projectName}_sources.json`;
    const sourcesFile = await sourceFolder.getFileHandle(fileName);
    const sourcesFileData = await sourcesFile.getFile();
    const sourcesText = await sourcesFileData.text();
    const sourcesData = JSON.parse(sourcesText);
    
    const { loadSourcesFromData } = await import('./presetLoader.js');
    await loadSourcesFromData(sourcesData);
    console.log('[PROJECT] Sources caricati');
  } catch (err) {
    console.warn('[PROJECT] File sources non trovato o errore:', err);
  }
}

// Carica progetto completo
export async function loadProject() {
  try {
    // Chiedi di selezionare la cartella del progetto
    const directoryHandle = await window.showDirectoryPicker({
      mode: 'readwrite'
    });
    
    activeProjectHandle = directoryHandle;
    activeProjectName = directoryHandle.name;
    saveActiveProjectToStorage();
    
    const projectName = activeProjectName;
    console.log('[PROJECT] Caricamento progetto:', projectName);
    
    // Controlla se esistono backup più recenti dei file principali
    const hasNewerBackup = await checkForNewerBackup(directoryHandle, projectName);
    
    if (hasNewerBackup) {
      // Mostra prompt all'utente
      const shouldRestore = await showBackupPrompt(hasNewerBackup);
      
      if (shouldRestore) {
        // Carica dal backup e attiva autosave
        console.log('[PROJECT] Utente ha scelto di recuperare il backup');
        await loadProjectFiles(directoryHandle, projectName, true); // true = carica da backup
        showNotification(`Backup recuperato: ${hasNewerBackup}`);
        
        // Attiva autosave subito
        if (!autosaveEnabled) {
          autosaveEnabled = true;
          initAutosave();
          console.log('[AUTOSAVE] Sistema di autosave attivato dopo recupero backup');
        }
      } else {
        // Carica dai file principali e attiva autosave (ignora backup)
        console.log('[PROJECT] Utente ha scelto di ignorare il backup');
        await loadProjectFiles(directoryHandle, projectName, false); // false = carica da file principali
        showNotification(`Progetto "${projectName}" caricato con successo!`);
        
        // Attiva autosave subito (backup ignorato, può sovrascrivere)
        if (!autosaveEnabled) {
          autosaveEnabled = true;
          initAutosave();
          console.log('[AUTOSAVE] Sistema di autosave attivato');
        }
      }
    } else {
      // Nessun backup o backup più vecchio - carica normalmente
      await loadProjectFiles(directoryHandle, projectName, false);
      showNotification(`Progetto "${projectName}" caricato con successo!`);
      
      // Attiva autosave subito (nessun backup da proteggere)
      if (!autosaveEnabled) {
        autosaveEnabled = true;
        initAutosave();
        console.log('[AUTOSAVE] Sistema di autosave attivato');
      }
    }
    
  } catch (err) {
    console.error('[PROJECT] Errore nel caricamento:', err);
    showNotification('Errore nel caricamento del progetto: ' + err.message, true);
  }
}

// Funzione per applicare le settings globali
function applyGlobalSettings(settings) {
  if (!settings) return;
  
  // Applica config OSC
  if (settings.osc) {
    const oscHostInput = document.getElementById('oscHost');
    const oscPortInput = document.getElementById('oscPort');
    if (oscHostInput) oscHostInput.value = settings.osc.host;
    if (oscPortInput) oscPortInput.value = settings.osc.port;
    
    if (oscHostInput) oscHostInput.dispatchEvent(new Event('change'));
    if (oscPortInput) oscPortInput.dispatchEvent(new Event('change'));
  }
  
  // Applica config Plastico
  if (settings.plastico) {
    const plasticoCheckbox = document.getElementById('plasticoToggle');
    const plasticoThresholdInput = document.getElementById('plasticoThreshold');
    if (plasticoCheckbox) {
      plasticoCheckbox.checked = settings.plastico.visible;
      plasticoCheckbox.dispatchEvent(new Event('change'));
    }
    if (plasticoThresholdInput && settings.plastico.threshold !== undefined) {
      plasticoThresholdInput.value = settings.plastico.threshold;
      plasticoThresholdInput.dispatchEvent(new Event('input'));
    }
  }
}

// Restituisce il path del progetto attivo (per i preset individuali)
export function getActiveProjectHandle() {
  return activeProjectHandle;
}

export function getActiveProjectName() {
  return activeProjectName;
}

// Collega i bottoni agli handler
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const btnSaveProject = document.getElementById('saveProjectBtn');
    if (btnSaveProject) {
      btnSaveProject.addEventListener('click', () => {
        saveProject();
      });
    }
    
    const btnSaveProjectAs = document.getElementById('saveProjectAsBtn');
    if (btnSaveProjectAs) {
      btnSaveProjectAs.addEventListener('click', () => {
        saveProjectAs();
      });
    }
    
    // Quick save button in alto a destra
    const btnQuickSave = document.getElementById('quickSaveBtn');
    if (btnQuickSave) {
      btnQuickSave.addEventListener('click', () => {
        saveProject();
      });
    }
    
    const btnLoadProject = document.getElementById('loadProjectBtn');
    if (btnLoadProject) {
      btnLoadProject.addEventListener('click', () => {
        loadProject();
      });
    }
  });
}

// ============================================
// SISTEMA DI AUTOSAVE
// ============================================

// Funzione per salvare backup (rinomina i file con timestamp, mantiene solo 3 file)
async function saveBackup() {
  if (!autosaveEnabled || !activeProjectHandle || !activeProjectName) {
    console.log('[AUTOSAVE] Backup skipped - autosaveEnabled:', autosaveEnabled, 'activeProjectHandle:', !!activeProjectHandle, 'activeProjectName:', activeProjectName);
    return;
  }
  
  // Non creare backup se siamo già dentro una cartella Backup
  if (activeProjectHandle.name === 'Backup') {
    console.log('[AUTOSAVE] Backup skipped - già dentro una cartella Backup');
    return;
  }
  
  try {
    console.log('[AUTOSAVE] Inizio salvataggio backup...');
    const projectName = activeProjectName;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5); // Format: 2026-02-05T14-30-45
    
    // Crea o ottieni la cartella Backup
    let backupFolder;
    try {
      backupFolder = await activeProjectHandle.getDirectoryHandle('Backup', { create: true });
      console.log('[AUTOSAVE] Cartella Backup creata/ottenuta');
    } catch (err) {
      console.error('[AUTOSAVE] Errore creazione cartella Backup:', err);
      return;
    }
    
    // Elimina i vecchi file di backup prima di creare i nuovi
    try {
      for await (const entry of backupFolder.values()) {
        if (entry.kind === 'file' && entry.name.startsWith(projectName)) {
          await backupFolder.removeEntry(entry.name);
        }
      }
      console.log('[AUTOSAVE] Vecchi backup eliminati');
    } catch (err) {
      console.log('[AUTOSAVE] Nessun vecchio backup da eliminare');
    }
    
    // 1. Settings con timestamp nel nome
    // 1. Settings con timestamp nel nome
    const settings = {
      metadata: {
        name: projectName,
        created: new Date().toISOString(),
        version: '2.0',
        backup: true,
        timestamp: timestamp
      },
      settings: extractGlobalSettings()
    };
    
    const settingsFile = await backupFolder.getFileHandle(`${projectName}_settings_${timestamp}.json`, { create: true });
    const settingsWritable = await settingsFile.createWritable();
    await settingsWritable.write(JSON.stringify(settings, null, 2));
    await settingsWritable.close();
    
    // 2. Speakers con timestamp nel nome
    const speakers = extractPositions('Altoparlante');
    const speakersData = {
      metadata: {
        name: `${projectName} - Speakers`,
        created: new Date().toISOString(),
        version: '2.0',
        backup: true,
        timestamp: timestamp
      },
      speakers: speakers
    };
    
    const speakersFile = await backupFolder.getFileHandle(`${projectName}_speakers_${timestamp}.json`, { create: true });
    const speakersWritable = await speakersFile.createWritable();
    await speakersWritable.write(JSON.stringify(speakersData, null, 2));
    await speakersWritable.close();
    
    // 3. Sources con timestamp nel nome
    const omnifonti = extractPositions('Omnifonte');
    const orifonti = extractPositions('Orifonte');
    const zone = extractPositions('Zona');
    const sources = { ...omnifonti, ...orifonti, ...zone };
    
    const sourcesData = {
      metadata: {
        name: `${projectName} - Sources`,
        created: new Date().toISOString(),
        version: '2.0',
        backup: true,
        timestamp: timestamp
      },
      sources: sources
    };
    
    const sourcesFile = await backupFolder.getFileHandle(`${projectName}_sources_${timestamp}.json`, { create: true });
    const sourcesWritable = await sourcesFile.createWritable();
    await sourcesWritable.write(JSON.stringify(sourcesData, null, 2));
    await sourcesWritable.close();
    
    console.log('[AUTOSAVE] Backup salvato:', timestamp);
    
  } catch (err) {
    console.error('[AUTOSAVE] Errore nel salvataggio backup:', err);
  }
}

// Funzione per triggerare autosave con debounce
function triggerAutosave() {
  if (!autosaveEnabled) return;
  
  // Cancella il timeout precedente
  if (autosaveTimeout) {
    clearTimeout(autosaveTimeout);
  }
  
  // Imposta un nuovo timeout
  autosaveTimeout = setTimeout(() => {
    saveBackup();
  }, AUTOSAVE_DELAY);
}

// Inizializza i listener per autosave (solo su azioni che modificano la scena)
function initAutosave() {
  console.log('[AUTOSAVE] Inizializzazione listener intelligenti');
  
  // NON usiamo listener generici su mouseup/keyup perché triggerano su TUTTO
  // Invece, i trigger specifici vengono chiamati manualmente nelle funzioni che modificano la scena:
  // - TransformControls mouseUp (vedi raycaster.js)
  // - Aggiunta/rimozione oggetti (vedi addgeometries.js, raycaster.js)
  // - Modifica parametri nei menu (vedi objmenu.js)
  
  console.log('[AUTOSAVE] Sistema attivato - trigger su azioni specifiche di modifica scena');
}

// Funzione pubblica per triggerare autosave dalle altre parti del codice
export function triggerAutosaveFromAction() {
  triggerAutosave();
}

// Inizializza al caricamento
loadActiveProjectFromStorage();

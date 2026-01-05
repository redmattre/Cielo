import { objToBeDetected } from './setup.js';

// Variabile globale per il progetto attivo
let activeProjectHandle = null;
let activeProjectName = null;

// Carica dal localStorage il path del progetto (se esiste)
function loadActiveProjectFromStorage() {
  const storedName = localStorage.getItem('activeProjectName');
  if (storedName) {
    activeProjectName = storedName;
    console.log('[PROJECT] Progetto attivo caricato da localStorage:', activeProjectName);
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
  
  objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith(typePrefix))
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
    alert(`Progetto "${projectName}" salvato con successo!`);
    
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

// Carica progetto completo
export async function loadProject() {
  try {
    // Chiedi di selezionare la cartella del progetto
    const directoryHandle = await window.showDirectoryPicker({
      mode: 'read'
    });
    
    activeProjectHandle = directoryHandle;
    activeProjectName = directoryHandle.name;
    saveActiveProjectToStorage();
    
    const projectName = activeProjectName;
    console.log('[PROJECT] Caricamento progetto:', projectName);
    
    // 1. Carica settings
    try {
      const settingsFile = await directoryHandle.getFileHandle(`${projectName}_settings.json`);
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
      const speakersFile = await directoryHandle.getFileHandle(`${projectName}_speakers.json`);
      const speakersFileData = await speakersFile.getFile();
      const speakersText = await speakersFileData.text();
      const speakersData = JSON.parse(speakersText);
      
      // Importa dinamicamente loadSpeakersFromData
      const { loadSpeakersFromData } = await import('./presetLoader.js');
      await loadSpeakersFromData(speakersData);
      console.log('[PROJECT] Speakers caricati');
    } catch (err) {
      console.warn('[PROJECT] File speakers non trovato o errore:', err);
    }
    
    // 3. Carica sources
    try {
      const sourcesFile = await directoryHandle.getFileHandle(`${projectName}_sources.json`);
      const sourcesFileData = await sourcesFile.getFile();
      const sourcesText = await sourcesFileData.text();
      const sourcesData = JSON.parse(sourcesText);
      
      // Importa dinamicamente loadSourcesFromData
      const { loadSourcesFromData } = await import('./presetLoader.js');
      await loadSourcesFromData(sourcesData);
      console.log('[PROJECT] Sources caricati');
    } catch (err) {
      console.warn('[PROJECT] File sources non trovato o errore:', err);
    }
    
    alert(`Progetto "${projectName}" caricato con successo!`);
    
  } catch (err) {
    console.error('[PROJECT] Errore nel caricamento:', err);
    alert('Errore nel caricamento del progetto: ' + err.message);
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
    
    const btnLoadProject = document.getElementById('loadProjectBtn');
    if (btnLoadProject) {
      btnLoadProject.addEventListener('click', () => {
        loadProject();
      });
    }
  });
}

// Inizializza al caricamento
loadActiveProjectFromStorage();

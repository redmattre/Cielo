import { objToBeDetected } from './setup.js';
import { getActiveProjectHandle, getActiveProjectName } from './projectManager.js';
import { getObjectTypeFromObject } from './addgeometries.js';

// Utility per estrarre posizione, nome e rotazione nel formato Max
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
  const filtered = objToBeDetected.filter(obj => {
    const detectedType = getObjectTypeFromObject(obj);
    return detectedType === targetType.toLowerCase();
  });
  
  console.log(`[SAVE PRESET] Trovati ${filtered.length} oggetti di tipo ${typePrefix}`);
  
  filtered.forEach(obj => {
      // Prendi il parent se è un group, altrimenti l'oggetto stesso
      const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
      // Sostituisci gli spazi con underscore nel nome
      const safeName = obj.name.replace(/\s+/g, '_');
      
      result[safeName] = {
        position: {
          x: target.position.x,
          y: target.position.z, // invertito come in maxSync
          z: target.position.y  // invertito come in maxSync
        },
        rotation: {
          x: target.rotation.x,
          y: target.rotation.z, // invertito come in maxSync
          z: target.rotation.y  // invertito come in maxSync
        },
        scale: {
          x: target.scale.x,
          y: target.scale.z, // invertito come in maxSync
          z: target.scale.y  // invertito come in maxSync
        },
        // Salva il tipo per identificazione durante il caricamento
        objectType: obj.userData?.objectType || typePrefix.toLowerCase(),
        // Aggiungi tags
        tags: obj.userData.tags || [],
        // Aggiungi menuState
        menuState: obj.userData.menuState || {}
      };
    });
    
  return result;
}

// Salva preset altoparlanti (.json) - NON include più settings globali
export async function saveSpeakersPreset() {
  const speakers = extractPositions('Altoparlante');
  
  const data = {
    metadata: {
      name: 'Speakers Preset',
      created: new Date().toISOString(),
      version: '2.0'
    },
    speakers: speakers
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  
  // Usa la cartella del progetto attivo come directory di default se disponibile
  const projectHandle = getActiveProjectHandle();
  const projectName = getActiveProjectName();
  
  let suggestedName = 'speakers_preset.json';
  if (projectName) {
    suggestedName = `${projectName}_speakers.json`;
  }
  
  const options = {
    suggestedName: suggestedName,
    types: [{ description: 'Preset Altoparlanti', accept: { 'application/json': ['.json'] } }]
  };
  
  // Se c'è un progetto attivo, usa la sua cartella come punto di partenza
  if (projectHandle) {
    options.startIn = projectHandle;
  }
  
  const fileHandle = await window.showSaveFilePicker(options);
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
  
  console.log('[PRESET] Speakers preset salvato');
}

// Salva preset fonti sonore e zone (.json) - NON include più settings globali
export async function saveSourcesPreset() {
  // Omnifonte, Orifonte, Zona
  const result = {};
  
  // Aggiungi Omnifonti
  const omnifonti = extractPositions('Omnifonte');
  Object.assign(result, omnifonti);
  
  // Aggiungi Orifonti
  const orifonti = extractPositions('Orifonte');
  Object.assign(result, orifonti);
  
  // Aggiungi Zone
  const zone = extractPositions('Zona');
  Object.assign(result, zone);
  
  const data = {
    metadata: {
      name: 'Sources Preset',
      created: new Date().toISOString(),
      version: '2.0'
    },
    sources: result
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  
  // Usa la cartella del progetto attivo come directory di default se disponibile
  const projectHandle = getActiveProjectHandle();
  const projectName = getActiveProjectName();
  
  let suggestedName = 'sources_preset.json';
  if (projectName) {
    suggestedName = `${projectName}_sources.json`;
  }
  
  const options = {
    suggestedName: suggestedName,
    types: [{ description: 'Preset Fonti/Zona', accept: { 'application/json': ['.json'] } }]
  };
  
  // Se c'è un progetto attivo, usa la sua cartella come punto di partenza
  if (projectHandle) {
    options.startIn = projectHandle;
  }
  
  const fileHandle = await window.showSaveFilePicker(options);
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
  
  console.log('[PRESET] Sources preset salvato');
}

// Collega i bottoni di salvataggio ai rispettivi handler
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const btnSaveSpeakers = document.getElementById('saveSpeakersPresetBtn');
    if (btnSaveSpeakers) {
      btnSaveSpeakers.addEventListener('click', () => {
        saveSpeakersPreset();
      });
    }
    const btnSaveSources = document.getElementById('saveSourcesPresetBtn');
    if (btnSaveSources) {
      btnSaveSources.addEventListener('click', () => {
        saveSourcesPreset();
      });
    }
  });

  // Shortcut per salvataggio preset (cmd+s / ctrl+s)
  window.addEventListener('keydown', async (e) => {
    // Ignora shortcut se l'utente sta scrivendo in un campo di testo
    const activeElement = document.activeElement;
    const isTyping = activeElement && (
      activeElement.tagName === 'INPUT' || 
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.isContentEditable
    );
    
    if (isTyping) return;
    
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      // Importa saveProject da projectManager.js
      import('./projectManager.js').then(module => {
        module.saveProject();
      }).catch(err => {
        console.error('[SHORTCUT] Errore nel caricamento di projectManager:', err);
      });
    }
  });
}

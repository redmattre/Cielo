import { objToBeDetected } from './setup.js';

// Utility per estrarre posizione, nome e rotazione nel formato Max
function extractPositions(typePrefix) {
  const result = {};
  
  objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith(typePrefix))
    .forEach(obj => {
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
        }
      };
    });
    
  return result;
}

// Salva preset altoparlanti (.json)
export async function saveSpeakersPreset() {
  const data = extractPositions('Altoparlante');
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: 'preset.json',
    types: [{ description: 'Preset Altoparlanti', accept: { 'application/json': ['.json'] } }]
  });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}

// Salva preset fonti sonore e zone (.json)
export async function saveSourcesPreset() {
  // Omnifonte, Orifonte, Zona
  const result = {};
  
  // Aggiungi Omnifonti
  objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith('Omnifonte'))
    .forEach(obj => {
      const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
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
        }
      };
    });
    
  // Aggiungi Orifonti
  objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith('Orifonte'))
    .forEach(obj => {
      const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
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
        }
      };
    });
    
  // Aggiungi Zone
  objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith('Zona'))
    .forEach(obj => {
      const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
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
        }
      };
    });
  
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: 'preset.json',
    types: [{ description: 'Preset Fonti/Zona', accept: { 'application/json': ['.json'] } }]
  });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
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
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      try {
        await saveSpeakersPreset();
        await saveSourcesPreset();
        alert('Preset salvati con successo!');
      } catch (err) {
        alert('Errore nel salvataggio preset: ' + err);
      }
    }
  });
}

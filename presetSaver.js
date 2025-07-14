import { objToBeDetected } from './setup.js';

// Utility per estrarre posizione, nome e rotazione
function extractPositions(typePrefix) {
  return objToBeDetected
    .filter(obj => obj.name && obj.name.startsWith(typePrefix))
    .map(obj => ({
      name: obj.name,
      position: obj.position ? {
        x: obj.position.x,
        y: obj.position.y,
        z: obj.position.z
      } : null,
      rotation: obj.rotation ? {
        x: obj.rotation.x,
        y: obj.rotation.y,
        z: obj.rotation.z
      } : null
    }));
}

// Salva preset altoparlanti (.speakers)
export async function saveSpeakersPreset() {
  const data = extractPositions('Altoparlante');
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: 'preset.speakers',
    types: [{ description: 'Preset Altoparlanti', accept: { 'application/json': ['.speakers'] } }]
  });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}

// Salva preset fonti sonore e zone (.sources)
export async function saveSourcesPreset() {
  // Omnifonte, Orifonte, Zona
  const sources = [
    ...extractPositions('Omnifonte'),
    ...extractPositions('Orifonte'),
    ...objToBeDetected
      .filter(obj => obj.name && obj.name.startsWith('Zona'))
      .map(obj => ({
        name: obj.name,
        position: obj.position ? {
          x: obj.position.x,
          y: obj.position.y,
          z: obj.position.z
        } : null,
        rotation: obj.rotation ? {
          x: obj.rotation.x,
          y: obj.rotation.y,
          z: obj.rotation.z
        } : null
      }))
  ];
  const blob = new Blob([JSON.stringify(sources, null, 2)], { type: 'application/json' });
  const fileHandle = await window.showSaveFilePicker({
    suggestedName: 'preset.sources',
    types: [{ description: 'Preset Fonti/Zona', accept: { 'application/json': ['.sources'] } }]
  });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}

// Shortcut per salvataggio preset (cmd+s / ctrl+s)
if (typeof window !== 'undefined') {
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

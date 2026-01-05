import { scene, objToBeDetected } from './setup.js';
import { loadObj } from './loaders.js';
import { goochMaterialSp, goochMaterialArrow, dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD } from './materials.js';
import * as THREE from 'three';
import { createMenu, updateMenuForObject } from './objmenu_new.js';
import { syncMaxDictionaries } from './maxSync.js';
import { sendSpeakersLoadedToMax, sendOmnifontesLoadedToMax } from './max.js';
import { generateUniqueId } from './addgeometries.js';

// Funzione per applicare le config globali dal preset
function applyGlobalSettings(settings) {
  if (!settings) return;
  
  // Applica config OSC
  if (settings.osc) {
    const oscHostInput = document.getElementById('oscHost');
    const oscPortInput = document.getElementById('oscPort');
    if (oscHostInput) oscHostInput.value = settings.osc.host;
    if (oscPortInput) oscPortInput.value = settings.osc.port;
    
    // Trigger change event per aggiornare OSC manager
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

// Funzione per inviare tutti i messaggi OSC relativi a un oggetto caricato
function sendAllOscMessagesForObject(obj, objectType, sendCreatedAndTags = true) {
  if (!window.messageBroker) return;
  
  const match = obj.name.match(/(\d+)$/);
  const index = match ? parseInt(match[1], 10) : 1;
  
  // Invia creazione e tags solo se richiesto (per evitare duplicati quando loadObj li ha già inviati)
  if (sendCreatedAndTags) {
    // 1. Invia messaggio di creazione con posizione, rotazione, scala, tags
    window.messageBroker.sendObjectCreated({
      id: obj.userData.id,
      name: obj.name,
      type: objectType,
      position: { x: obj.position.x, y: obj.position.y, z: obj.position.z },
      rotation: { x: obj.rotation.x, y: obj.rotation.y, z: obj.rotation.z },
      scale: { x: obj.scale.x, y: obj.scale.y, z: obj.scale.z },
      tags: obj.userData.tags || [0]
    });
    
    // 2. Invia messaggio tags esplicito
    window.messageBroker.sendObjectTags({
      name: obj.name,
      type: objectType,
      tags: obj.userData.tags || [0]
    });
  }
  
  // 3. Invia tutti i parametri del menu
  if (obj.userData.menuState) {
    for (const paramName in obj.userData.menuState) {
      window.messageBroker.sendCustomParameter({
        type: objectType,
        index: index,
        paramName: paramName,
        value: obj.userData.menuState[paramName]
      });
    }
  }
  
  console.log(`[PRESET] Inviati messaggi OSC per ${obj.name}:`, {
    sentCreatedAndTags: sendCreatedAndTags,
    tags: obj.userData.tags,
    menuParams: Object.keys(obj.userData.menuState || {})
  });
}


// Utility per rimuovere oggetti di una tipologia
function removeObjectsByPrefix(prefix) {
  for (let i = objToBeDetected.length - 1; i >= 0; i--) {
    const obj = objToBeDetected[i];
    if (obj.name && obj.name.startsWith(prefix)) {
      if (obj.parent) obj.parent.remove(obj);
      objToBeDetected.splice(i, 1);
    }
  }
  // Rimuovi anche dalla scena (se non già fatto)
  scene.children.forEach(child => {
    if (child.name && child.name.startsWith(prefix)) {
      scene.remove(child);
    }
  });
}

// Carica preset altoparlanti (.json)
export async function loadSpeakersPreset() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Preset Altoparlanti', accept: { 'application/json': ['.json'] } }]
  });
  const file = await fileHandle.getFile();
  const text = await file.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    alert('File preset non valido');
    return;
  }
  
  await loadSpeakersFromData(data);
}

// Funzione riutilizzabile per caricare speakers da JSON data
export async function loadSpeakersFromData(data) {
  removeObjectsByPrefix('Altoparlante');
  
  // Determina il formato del file (vecchio o nuovo)
  const isNewFormat = data.metadata || data.settings || data.speakers;
  const speakersData = isNewFormat ? data.speakers : data;
  
  // NON applica più settings globali (gestite da projectManager)
  
  // Carica speakers in sequenza per evitare problemi di timing
  const speakerEntries = Object.entries(speakersData);
  
  for (let i = 0; i < speakerEntries.length; i++) {
    const [objectName, item] = speakerEntries[i];
    
    // Converti il nome con underscore in nome con spazi per il 3D
    const displayName = objectName.replace(/_/g, ' ');
    
    // Converti le coordinate: Max usa y,z invertiti rispetto a Three.js
    const position = {
      x: item.position.x,
      y: item.position.z, // z di Max diventa y di Three.js
      z: item.position.y  // y di Max diventa z di Three.js
    };
    
    const rotation = item.rotation ? {
      x: item.rotation.x,
      y: item.rotation.z, // z di Max diventa y di Three.js
      z: item.rotation.y  // y di Max diventa z di Three.js
    } : null;
    
    // Genera ID univoco per l'oggetto
    const uniqueId = generateUniqueId();
    
    // Ricrea altoparlante con ID
    loadObj('./modelli/galleriaOBJ/speaker3dec.obj', displayName, goochMaterialSp, 0.045, position.x, position.z, position.y, rotation, uniqueId);
    
    // Aspetta che l'oggetto sia effettivamente caricato
    await new Promise(resolve => {
      const checkInterval = setInterval(() => {
        const obj = objToBeDetected.find(o => o.name === displayName);
        if (obj) {
          clearInterval(checkInterval);
          clearTimeout(timeoutHandle); // Cancella il timeout di sicurezza
          
          // Ripristina tags
          if (item.tags) {
            obj.userData.tags = item.tags;
          }
          // Ripristina menuState
          if (item.menuState) {
            obj.userData.menuState = item.menuState;
          }
          
          console.log('[PRESET LOADER] Altoparlante caricato:', displayName, {
            tags: obj.userData.tags,
            menuState: obj.userData.menuState
          });
          
          // Aggiorna il menu per riflettere i valori caricati
          updateMenuForObject(obj);
          
          // Invia SOLO parametri menu (created/tags già inviati da loadObj)
          sendAllOscMessagesForObject(obj, 'altoparlante', false);
          
          resolve();
        }
      }, 50); // Controlla ogni 50ms
      
      // Timeout di sicurezza dopo 3 secondi
      const timeoutHandle = setTimeout(() => {
        clearInterval(checkInterval);
        console.warn('[PRESET LOADER] Timeout caricamento per:', displayName);
        resolve();
      }, 3000);
    });
  }
  
  createMenu();
  setTimeout(() => syncMaxDictionaries('altoparlanti'), 50);
}

// Carica preset fonti sonore e zone (.json)
export async function loadSourcesPreset() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Preset Fonti/Zona', accept: { 'application/json': ['.json'] } }]
  });
  const file = await fileHandle.getFile();
  const text = await file.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    alert('File preset non valido');
    return;
  }
  
  await loadSourcesFromData(data);
}

// Funzione riutilizzabile per caricare sources da JSON data
export async function loadSourcesFromData(data) {
  // Rimuovi Omnifonte, Orifonte, Zona
  removeObjectsByPrefix('Omnifonte');
  removeObjectsByPrefix('Orifonte');
  removeObjectsByPrefix('Zona');
  
  // Determina il formato del file (vecchio o nuovo)
  const isNewFormat = data.metadata || data.settings || data.sources;
  const sourcesData = isNewFormat ? data.sources : data;
  
  // NON applica più settings globali (gestite da projectManager)
  
  // Materiali per le zone
  const materials = [dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD];
  let zoneCount = 0;
  
  // Gestisce il formato oggetto di Max
  for (const [objectName, item] of Object.entries(sourcesData)) {
    // Converti il nome con underscore in nome con spazi per il 3D
    const displayName = objectName.replace(/_/g, ' ');
    
    // Converti le coordinate: Max usa y,z invertiti rispetto a Three.js
    const position = {
      x: item.position.x,
      y: item.position.z, // z di Max diventa y di Three.js
      z: item.position.y  // y di Max diventa z di Three.js
    };
    
    const rotation = item.rotation ? {
      x: item.rotation.x,
      y: item.rotation.z, // z di Max diventa y di Three.js
      z: item.rotation.y  // y di Max diventa z di Three.js
    } : null;
    
    if (objectName.startsWith('Omnifonte')) {
      // Genera ID univoco per l'oggetto
      const uniqueId = generateUniqueId();
      
      // Sfera
      const geometry = new THREE.SphereGeometry(0.3, 40, 40);
      const mesh = new THREE.Mesh(geometry, goochMaterialArrow);
      mesh.scale.set(0.25, 0.24, 0.25);
      mesh.name = displayName;
      mesh.isDashed = false;
      mesh.position.set(position.x, position.y, position.z);
      if (rotation) {
        mesh.rotation.set(rotation.x, rotation.y, rotation.z);
      }
      
      // Assegna ID univoco
      mesh.userData.id = uniqueId;
      
      // Ripristina tags e menuState
      if (item.tags) mesh.userData.tags = item.tags;
      if (item.menuState) mesh.userData.menuState = item.menuState;
      
      scene.add(mesh);
      objToBeDetected.push(mesh);
      
      // Aggiorna il menu per riflettere i valori caricati
      setTimeout(() => {
        updateMenuForObject(mesh);
        // Invia tutti i messaggi OSC (creazione, tags, parametri menu)
        sendAllOscMessagesForObject(mesh, 'omnifonte');
      }, 100);
      
      // Emit outlet for Omnifonte position
      if (window.max && window.max.outlet) {
        // Use same logic as sendImmediateOmniLike
        mesh.updateMatrixWorld(true);
        const pos = new THREE.Vector3();
        mesh.getWorldPosition(pos);
        let index = 1;
        const match = mesh.name.match(/^(.*?)[\s_-]?(\d+)$/);
        if (match) index = parseInt(match[2], 10);
        const x = pos.x;
        const z = pos.z;
        const y = pos.y;
        const distanceXY = Math.sqrt(x * x + z * z);
        let angleDeg = Math.atan2(z, x) * (180 / Math.PI) - 90;
        if (angleDeg < 0) angleDeg += 360;
        window.max.outlet('Omnifonte', index, x, z, y, angleDeg, distanceXY);
      }
    } else if (objectName.startsWith('Orifonte')) {
      // Genera ID univoco per l'oggetto
      const uniqueId = generateUniqueId();
      
      // Freccia con ID
      loadObj('./modelli/galleriaOBJ/arrow.obj', displayName, goochMaterialArrow, 0.045, position.x, position.z, position.y, rotation, uniqueId);
      
      // Ripristina tags e menuState dopo il caricamento
      setTimeout(() => {
        const obj = scene.children.find(o => o.name === displayName) || objToBeDetected.find(o => o.name === displayName);
        if (obj) {
          if (item.tags) obj.userData.tags = item.tags;
          if (item.menuState) obj.userData.menuState = item.menuState;
          updateMenuForObject(obj);
          // Invia SOLO parametri menu (created/tags già inviati da loadObj)
          sendAllOscMessagesForObject(obj, 'orifonte', false);
          
          // Emit outlet for Orifonte position
          if (window.max && window.max.outlet) {
            obj.updateMatrixWorld(true);
            const pos = new THREE.Vector3();
            obj.getWorldPosition(pos);
            let index = 1;
            const match = obj.name.match(/^(.*?)[\s_-]?(\d+)$/);
            if (match) index = parseInt(match[2], 10);
            const x = pos.x;
            const z = pos.z;
            const y = pos.y;
            const distanceXY = Math.sqrt(x * x + z * z);
            let angleDeg = Math.atan2(z, x) * (180 / Math.PI) - 90;
            if (angleDeg < 0) angleDeg += 360;
            window.max.outlet('Omnifonte', index, x, z, y, angleDeg, distanceXY);
          }
        }
      }, 100);
    } else if (objectName.startsWith('Zona')) {
      // Genera ID univoco per l'oggetto
      const uniqueId = generateUniqueId();
      
      // Zona (alternanza materiali)
      const index = zoneCount % materials.length;
      const color = materials[index];
      zoneCount++;
      
      // Cubo o sfera? (qui default cubo, puoi estendere se serve)
      const isSphere = false;
      // Funzione newZone simile a quella in addgeometries.js
      const group = new THREE.Group();
      group.name = displayName;
      let geometry = isSphere
        ? new THREE.SphereGeometry(0.5, 8, 8)
        : new THREE.BoxGeometry(3.2, 1.8, 3.2);
      const edges = new THREE.EdgesGeometry(geometry);
      const { LineSegmentsGeometry } = await import('three/addons/lines/LineSegmentsGeometry.js');
      const { LineSegments2 } = await import('three/addons/lines/LineSegments2.js');
      const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges);
      const line = new LineSegments2(lineGeometry, color);
      line.computeLineDistances();
      line.name = displayName;
      line.isDashed = true;
      
      // Assegna ID univoco
      line.userData.id = uniqueId;
      
      // Ripristina tags e menuState
      if (item.tags) line.userData.tags = item.tags;
      if (item.menuState) line.userData.menuState = item.menuState;
      
      const meshMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xf25d00),
        transparent: true,
        depthTest: true,
        wireframe: false,
        opacity: 0.,
        visible: true
      });
      const mesh = new THREE.Mesh(geometry, meshMaterial);
      mesh.name = displayName;
      group.add(mesh);
      group.add(line);
      
      group.position.set(position.x, position.y, position.z);
      if (rotation) {
        group.rotation.set(rotation.x, rotation.y, rotation.z);
      }
      scene.add(group);
      objToBeDetected.push(line);
      
      // Aggiorna il menu per riflettere i valori caricati
      setTimeout(() => {
        updateMenuForObject(line);
        // Invia tutti i messaggi OSC (creazione, tags, parametri menu)
        sendAllOscMessagesForObject(line, 'zona');
      }, 100);
    }
  }
  
  createMenu();
  setTimeout(() => syncMaxDictionaries('omnifonti'), 50);
}

// Funzione per resettare la scena (rimuove altoparlanti, fonti e zone)
export function resetScene() {
  removeObjectsByPrefix('Altoparlante');
  removeObjectsByPrefix('Omnifonte');
  removeObjectsByPrefix('Orifonte');
  removeObjectsByPrefix('Zona');
  createMenu();
  setTimeout(() => syncMaxDictionaries(['altoparlanti', 'omnifonti']), 50);
}

// Collega i bottoni di import e reset ai rispettivi handler
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const btnLoadSpeakers = document.getElementById('loadSpeakersPresetBtn');
    if (btnLoadSpeakers) {
      btnLoadSpeakers.addEventListener('click', () => {
        loadSpeakersPreset();
      });
    }
    const btnLoadSources = document.getElementById('loadSourcesPresetBtn');
    if (btnLoadSources) {
      btnLoadSources.addEventListener('click', () => {
        loadSourcesPreset();
      });
    }
    const btnResetScene = document.getElementById('resetSceneBtn');
    if (btnResetScene) {
      btnResetScene.addEventListener('click', () => {
        if (confirm('Vuoi davvero cancellare tutti gli altoparlanti, fonti e zone dalla scena?')) {
          resetScene();
        }
      });
    }
  });
}
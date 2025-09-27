import { scene, objToBeDetected } from './setup.js';
import { loadObj } from './loaders.js';
import { goochMaterialSp, goochMaterialArrow, dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD } from './materials.js';
import * as THREE from 'three';
import { createMenu } from './objmenu.js';
import { syncMaxDictionaries } from './maxSync.js';
import { sendSpeakersLoadedToMax, sendOmnifontesLoadedToMax } from './max.js'; // <--- aggiunto

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
  
  removeObjectsByPrefix('Altoparlante');
  
  // Gestisce il formato oggetto di Max
  for (const [objectName, item] of Object.entries(data)) {
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
    
    // Ricrea altoparlante
    loadObj('./modelli/galleriaOBJ/speaker3dec.obj', displayName, goochMaterialSp, 0.045, position.x, position.z, position.y, rotation);
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
  
  // Rimuovi Omnifonte, Orifonte, Zona
  removeObjectsByPrefix('Omnifonte');
  removeObjectsByPrefix('Orifonte');
  removeObjectsByPrefix('Zona');
  
  // Materiali per le zone
  const materials = [dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD];
  let zoneCount = 0;
  
  // Gestisce il formato oggetto di Max
  for (const [objectName, item] of Object.entries(data)) {
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
      scene.add(mesh);
      objToBeDetected.push(mesh);
    } else if (objectName.startsWith('Orifonte')) {
      // Freccia
      loadObj('./modelli/galleriaOBJ/arrow.obj', displayName, goochMaterialArrow, 0.045, position.x, position.z, position.y, rotation);
    } else if (objectName.startsWith('Zona')) {
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
import { scene, objToBeDetected } from './setup.js';
import { loadObj } from './loaders.js';
import { goochMaterialSp, goochMaterialArrow, dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD } from './materials.js';
import * as THREE from 'three';
import { createMenu } from './objmenu.js';

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

// Carica preset altoparlanti (.speakers)
export async function loadSpeakersPreset() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Preset Altoparlanti', accept: { 'application/json': ['.speakers'] } }]
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
  for (const item of data) {
    // Ricrea altoparlante
    loadObj('./modelli/galleriaOBJ/speaker3dec.obj', item.name, goochMaterialSp, 0.045, item.position.x, item.position.z, item.position.y, item.rotation);
    // La funzione loadObj deve accettare un parametro rotation opzionale
  }
  createMenu();
}

// Carica preset fonti sonore e zone (.sources)
export async function loadSourcesPreset() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Preset Fonti/Zona', accept: { 'application/json': ['.sources'] } }]
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
  for (const item of data) {
    if (item.name.startsWith('Omnifonte')) {
      // Sfera
      const geometry = new THREE.SphereGeometry(0.3, 40, 40);
      const mesh = new THREE.Mesh(geometry, goochMaterialArrow);
      mesh.scale.set(0.25, 0.24, 0.25);
      mesh.name = item.name;
      mesh.isDashed = false;
      mesh.position.set(item.position.x, item.position.y, item.position.z);
      if (item.rotation) {
        mesh.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
      }
      scene.add(mesh);
      objToBeDetected.push(mesh);
    } else if (item.name.startsWith('Orifonte')) {
      // Freccia
      // FIX: usa x, y, z (non x, z, y)
      loadObj('./modelli/galleriaOBJ/arrow.obj', item.name, goochMaterialArrow, 0.045, item.position.x, item.position.z, item.position.y, item.rotation);
    } else if (item.name.startsWith('Zona')) {
      // Zona (alternanza materiali)
      const index = zoneCount % materials.length;
      const color = materials[index];
      zoneCount++;
      // Cubo o sfera? (qui default cubo, puoi estendere se serve)
      const isSphere = false;
      // Funzione newZone simile a quella in addgeometries.js
      const group = new THREE.Group();
      group.name = item.name;
      let geometry = isSphere
        ? new THREE.SphereGeometry(0.5, 8, 8)
        : new THREE.BoxGeometry(3.2, 1.8, 3.2);
      const edges = new THREE.EdgesGeometry(geometry);
      const { LineSegmentsGeometry } = await import('three/addons/lines/LineSegmentsGeometry.js');
      const { LineSegments2 } = await import('three/addons/lines/LineSegments2.js');
      const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges);
      const line = new LineSegments2(lineGeometry, color);
      line.computeLineDistances();
      line.name = item.name;
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
      mesh.name = item.name;
      group.add(mesh);
      group.add(line);
      // CORREZIONE: usa x, y, z
      group.position.set(item.position.x, item.position.y, item.position.z);
      if (item.rotation) {
        group.rotation.set(item.rotation.x, item.rotation.y, item.rotation.z);
      }
      scene.add(group);
      objToBeDetected.push(line);
    }
  }
  createMenu();
}

// Funzione per resettare la scena (rimuove altoparlanti, fonti e zone)
export function resetScene() {
  removeObjectsByPrefix('Altoparlante');
  removeObjectsByPrefix('Omnifonte');
  removeObjectsByPrefix('Orifonte');
  removeObjectsByPrefix('Zona');
  createMenu();
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

// Modifica suggerita per loadObj (in loaders.js):
// function loadObj(path, name, material, scale, x, y, z, rotation) {
//   // ...existing code...
//   mesh.position.set(x, y, z);
//   if (rotation) mesh.rotation.set(rotation.x, rotation.y, rotation.z);
//   // ...existing code...
// }

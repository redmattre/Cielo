import * as THREE from 'three';
import { loadObj } from './loaders.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD, goochMaterialArrow, goochMaterialSp, standardMat } from './materials.js';
import { objToBeDetected, scene, renderer } from './setup.js';
import { createMenu } from './objmenu.js';
import { loadGenericGltf } from './loadersFIX.js';
import { saveSpeakersPreset, saveSourcesPreset } from './presetSaver.js';
import { loadSpeakersPreset, loadSourcesPreset } from './presetLoader.js';
import { syncMaxDictionaries } from './maxSync.js';
import { sendUpdateToMax } from './max.js'; // <--- aggiunto
import { ConditionalLinesManager } from './ConditionalLinesManager.js';

// Initialize ConditionalLinesManager
let conditionalLinesManager;
let currentPlasticoControl = null;

// Export the manager for use in other modules
export function getConditionalLinesManager() {
  return conditionalLinesManager;
}

// Export the color helper function
export function getCSSColorAsHex(cssVariable) {
  const rootStyles = getComputedStyle(document.documentElement);
  const colorValue = rootStyles.getPropertyValue(cssVariable).trim();
  
  console.log(`getCSSColorAsHex: ${cssVariable} = "${colorValue}"`);
  
  // Handle common CSS color values
  if (colorValue === 'black' || colorValue === '#000000' || colorValue === 'rgb(0, 0, 0)') {
    console.log(`  -> Returning black: 0x000000`);
    return 0x000000;
  }
  if (colorValue === 'white' || colorValue === '#ffffff' || colorValue === 'rgb(255, 255, 255)') {
    console.log(`  -> Returning white: 0xffffff`);
    return 0xffffff;
  }
  if (colorValue === '#d6d6d6' || colorValue === 'rgb(214, 214, 214)') {
    console.log(`  -> Returning light gray: 0xd6d6d6`);
    return 0xd6d6d6;
  }
  
  // Try to parse hex color
  if (colorValue.startsWith('#')) {
    const hexValue = parseInt(colorValue.slice(1), 16);
    console.log(`  -> Parsed hex: 0x${hexValue.toString(16)} (decimal: ${hexValue})`);
    return hexValue;
  }
  
  // Try to parse rgb color
  const rgbMatch = colorValue.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);
    const hexValue = (r << 16) | (g << 8) | b;
    console.log(`  -> Parsed RGB(${r}, ${g}, ${b}): 0x${hexValue.toString(16)}`);
    return hexValue;
  }
  
  // Fallback colors based on variable name
  if (cssVariable === '--fondale') {
    console.log(`  -> Fallback for --fondale: 0xd6d6d6`);
    return 0xd6d6d6; // Light gray for background
  } else if (cssVariable === '--testo') {
    console.log(`  -> Fallback for --testo: 0x000000`);
    return 0x000000; // Black for text/lines
  }
  
  console.log(`  -> Default fallback: 0x000000`);
  return 0x000000; // Default to black
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize ConditionalLinesManager
  conditionalLinesManager = new ConditionalLinesManager(scene, renderer);
  
  // Make it globally available for resize updates
  window.conditionalLinesManager = conditionalLinesManager;
  
  // Make the current control globally available for theme changes
  window.currentPlasticoControl = null;
  const addSpeaker = document.getElementById('addCone');
  const addHalo = document.getElementById('addHalo');
  const addSphere = document.getElementById('addSphere');
  const addArrow = document.getElementById('addArrow');
  const addCloudClient = document.getElementById('addCloudElement');
  const addGenericModel = document.getElementById('loadGenericGltf');

  //da modificare: fare che sia un tasto nel dock che ogni volta apre finestra di dialogo per importare un modello esterno
  let howManyGenericModels = 0;
  if (addGenericModel) {
    addGenericModel.addEventListener('click', () => {
      howManyGenericModels++;
      let nome = `Modello custom ${howManyGenericModels}`
      loadGenericGltf('./modelli/galleriaGLTF/scultura.glb', nome, 0.045, -3.5, -0.7, 0.5);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  if (addSpeaker) {
    addSpeaker.addEventListener('click', () => {
      // Conta solo gli speaker di primo livello nella scena
      let howManySpeakers = 0;
      scene.children.forEach((obj) => {
        if (obj.name && obj.name.startsWith("Altoparlante ")) {
          howManySpeakers++;
        }
      });
      let nome = `Altoparlante ${howManySpeakers + 1}`;
      loadObj('./modelli/galleriaOBJ/speaker3dec.obj', nome, goochMaterialSp, 0.045, 0., 0, 1.2);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  let howManyHalos = 0;
  if (addHalo) {
    addHalo.addEventListener('click', () => {
      howManyHalos++;
      let nome = `Aureola-${howManyHalos}`
      loadObj('./modelli/galleriaOBJ/halo2_lowpoly.obj', nome, goochMaterialSp, 0.15, 0., 0, 1.2);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  let howManyArrows = 0;
  if (addArrow) {
    addArrow.addEventListener('click', () => {
      howManyArrows++;
      const nome = `Orifonte ${howManyArrows}`;
      loadObj('./modelli/galleriaOBJ/arrow.obj', nome, goochMaterialArrow, 0.045, 0., 0., 1.2);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  let howManyCloudClients = 0;
  if (addCloudClient) {
    addCloudClient.addEventListener('click', () => {
      howManyCloudClients++;
      const nome = `Nuvola:client ${howManyCloudClients}`;
      loadObj('./modelli/galleriaOBJ/cloudDec.obj', nome, goochMaterialSp, 0.035, 0., 0, 1.2);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  if (addSphere) {
    addSphere.addEventListener('click', (event) => {
      // Conta solo le sfere di primo livello nella scena
      let howManySpheres = 0;
      scene.children.forEach((obj) => {
        if (obj.name && obj.name.startsWith("Omnifonte ")) {
          howManySpheres++;
        }
      });
      let nome = `Omnifonte ${howManySpheres + 1}`;
      const geometry = new THREE.SphereGeometry(0.3, 40, 40);
      const material = goochMaterialArrow;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.25, 0.24, 0.25);
      mesh.name = nome;
      mesh.isDashed = false;
      mesh.position.set(0., 1.2, 0.);
      scene.add(mesh);
      objToBeDetected.push(mesh);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  //zones

  let howManyZones = 0;

  const materials = [dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD];
  const multimenu = document.getElementById("infoDivCenter");
  const addZone = document.getElementById('addZone');
  const addZoneCube = document.getElementById('addZoneCube');
  const addZoneSphere = document.getElementById('addZoneSphere');
  const closeMultimenu = document.getElementById('closeInfoDivCenter');

  if (addZone && multimenu) {
    addZone.addEventListener('click', () => {
      multimenu.style.opacity = 1;
      multimenu.style.pointerEvents = "all";
    });
  }
  if (addZoneCube && multimenu) {
    addZoneCube.addEventListener('click', () => {
      howManyZones++;
      const index = (howManyZones - 1) % materials.length;
      const color = materials[index];
      const nome = `Zona ${howManyZones}`;

      newZone(false, nome, color, 0., 0., 1.2);
      multimenu.style.opacity = 0;
      multimenu.style.pointerEvents = "none";
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }
  if (closeMultimenu && multimenu) {
    closeMultimenu.addEventListener('click', () => {
      multimenu.style.opacity = 0;
      multimenu.style.pointerEvents = "none";
    });
  }
  if (addZoneSphere && multimenu) {
    addZoneSphere.addEventListener('click', () => {
      howManyZones++;
      const index = (howManyZones - 1) % materials.length;
      const color = materials[index];
      const nome = `Zona ${howManyZones}`;

      newZone(true, nome, color, 0., 0., 1.2);
      multimenu.style.opacity = 0;
      multimenu.style.pointerEvents = "none";
      setTimeout(syncMaxDictionaries, 50);
      sendUpdateToMax(); // <--- aggiunto
    });
  }

  //functions

  function newZone(boolgeo, name, materiale, x, y, z) {

      const group = new THREE.Group();
      group.name = `${name}`;

      let geometry;

      if (!boolgeo) {
          geometry = new THREE.BoxGeometry(3.2, 1.8, 3.2);
      } else {
          geometry = new THREE.SphereGeometry(0.5, 8, 8);
      }
      
      const edges = new THREE.EdgesGeometry(geometry); // Estrai gli edge del cubo

      // LineSegmentsGeometry compatibile con Line2
      const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges);

      // Crea una LineSegments2 con il materiale dashed
      const line = new LineSegments2(lineGeometry, materiale);

      // Assicurati di abilitare il calcolo delle distanze (è richiesto per il dashed)
      line.computeLineDistances();
      line.name = `${name}`;
      line.isDashed = true;

      //parte della mesh
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xf25d00),
        transparent: true,
        depthTest: true,
        wireframe: false,
        opacity: 0.,
        visible: true
      });;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.name = `${name}`; //non serve davvero

      group.add(mesh);
      group.add(line);
      group.position.set(x, z, y);
      scene.add(group);
      objToBeDetected.push(line);
      createMenu();
      sendUpdateToMax(); // <--- aggiunto
      // syncMaxDictionaries() viene già chiamata dopo la funzione
  }

  function newShape(boolgeo, name, materiale, x, y, z) {
      // const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 32);
      let geometry;

      if (!boolgeo) {
          geometry = new THREE.BoxGeometry(0.2,0.2,0.2);
      } else {
          geometry = new THREE.SphereGeometry(0.3, 40, 40);
      }

      const material = materiale;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.25, 0.24, 0.25);
      mesh.name = name;
      mesh.isDashed = false;
      mesh.position.set(x, z, y);
      scene.add(mesh);
      objToBeDetected.push(mesh);
      createMenu();
      syncMaxDictionaries();
      sendUpdateToMax(); // <--- aggiunto
  }

  // Funzione per rimuovere il modello architettura dalla scena
  function removeArchitetturaModel() {
    // Remove original model if it exists
    const arch = scene.getObjectByName('architettura');
    if (arch) {
      const idx = objToBeDetected.indexOf(arch);
      if (idx !== -1) objToBeDetected.splice(idx, 1);
      if (arch.parent) arch.parent.remove(arch);
      if (arch.geometry) arch.geometry.dispose?.();
      if (arch.material) arch.material.dispose?.();
    }
    
    // Remove ConditionalLines models if they exist
    const archBackground = scene.getObjectByName('architettura-background');
    if (archBackground) {
      scene.remove(archBackground);
    }
    
    const archEdges = scene.getObjectByName('architettura-edges');
    if (archEdges) {
      scene.remove(archEdges);
    }
    
    const archConditional = scene.getObjectByName('architettura-conditional');
    if (archConditional) {
      scene.remove(archConditional);
    }
    
    // Clean up conditional lines control
    if (currentPlasticoControl) {
      currentPlasticoControl.dispose();
      currentPlasticoControl = null;
    }
  }

  // Gestione caricamento nuovo modello plastico con ConditionalLines
  const plasticoBtn = document.getElementById('loadPlastico');
  if (plasticoBtn) {
    // Crea input file nascosto
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.glb,.gltf,.obj';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Get sliders
    const thresholdSlider = document.getElementById('plasticoThreshold');
    const thicknessSlider = document.getElementById('plasticoThickness');
    const opacitySlider = document.getElementById('plasticoOpacity');

    function applyConditionalLinesToModel(model) {
      // Get current slider values
      const threshold = thresholdSlider ? parseFloat(thresholdSlider.value) : 60;
      const thickness = thicknessSlider ? parseFloat(thicknessSlider.value) : 2;
      const opacity = opacitySlider ? parseFloat(opacitySlider.value) : 0.8;
      
      // Get CSS colors
      const materialColor = getCSSColorAsHex('--fondale');
      const lineColor = getCSSColorAsHex('--testo');

      // Apply conditional lines
      try {
        console.log('About to call applyConditionalLines with colors:', {
          materialColor: materialColor,
          lineColor: lineColor
        });
        
        currentPlasticoControl = conditionalLinesManager.applyConditionalLines(model, {
          threshold: threshold,
          thickness: thickness,
          opacity: opacity,
          materialColor: materialColor,
          lineColor: lineColor
        });
        
        console.log('applyConditionalLines returned:', currentPlasticoControl);
        
        // Make currentPlasticoControl globally available for theme changes
        window.currentPlasticoControl = currentPlasticoControl;
        console.log('Set window.currentPlasticoControl:', window.currentPlasticoControl);
        
        // Remove the original model from the scene
        scene.remove(model);
        
        // Add the new models to the scene
        scene.add(currentPlasticoControl.backgroundModel);
        scene.add(currentPlasticoControl.edgesModel);
        scene.add(currentPlasticoControl.conditionalModel);
        
        // Preserve the name and position
        currentPlasticoControl.backgroundModel.name = 'architettura-background';
        currentPlasticoControl.edgesModel.name = 'architettura-edges'; 
        currentPlasticoControl.conditionalModel.name = 'architettura-conditional';
        
      } catch (error) {
        console.error('Error applying ConditionalLines:', error);
      }
    }

    function updateConditionalLines() {
      if (currentPlasticoControl) {
        const threshold = thresholdSlider ? parseFloat(thresholdSlider.value) : 60;
        const thickness = thicknessSlider ? parseFloat(thicknessSlider.value) : 2;
        const opacity = opacitySlider ? parseFloat(opacitySlider.value) : 0.8;
        
        currentPlasticoControl.setThreshold(threshold);
        currentPlasticoControl.setThickness(thickness);
        currentPlasticoControl.setOpacity(opacity);
        
        // Also update colors to current CSS values
        const materialColor = getCSSColorAsHex('--fondale');
        const lineColor = getCSSColorAsHex('--testo');
        currentPlasticoControl.setMaterialColor(materialColor);
        currentPlasticoControl.setLineColor(lineColor);
      }
    }

    // Add event listeners for sliders
    if (thresholdSlider) {
      thresholdSlider.addEventListener('input', updateConditionalLines);
    }
    if (thicknessSlider) {
      thicknessSlider.addEventListener('input', updateConditionalLines);
    }
    if (opacitySlider) {
      opacitySlider.addEventListener('input', updateConditionalLines);
    }

    plasticoBtn.addEventListener('click', () => {
      removeArchitetturaModel();
      fileInput.value = '';
      fileInput.click();
    });

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const ext = file.name.split('.').pop().toLowerCase();
      if (ext === 'glb' || ext === 'gltf') {
        // Dynamic import for GLTFLoader
        const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
        const reader = new FileReader();
        reader.onload = function(ev) {
          let loader = new GLTFLoader();
          let onLoad = function(gltf) {
            console.log('GLTF loaded:', gltf);
            const model = gltf.scene;
            model.name = 'architettura';
            console.log('Adding model to scene:', model);
            scene.add(model);
            
            // Apply conditional lines instead of regular materials
            console.log('About to apply conditional lines...');
            applyConditionalLinesToModel(model);
            
            setTimeout(syncMaxDictionaries, 50);
          };
          let onError = function(err) {
            alert('Errore nel parsing del modello GLTF/GLB');
          };
          if (ext === 'glb') {
            loader.parse(ev.target.result, '', onLoad, onError);
          } else {
            loader.parse(ev.target.result, '', onLoad, onError);
          }
        };
        if (ext === 'glb') {
          reader.readAsArrayBuffer(file);
        } else {
          reader.readAsText(file);
        }
      } else if (ext === 'obj') {
        // Dynamic import for OBJLoader
        const { OBJLoader } = await import('three/addons/loaders/OBJLoader.js');
        const reader = new FileReader();
        reader.onload = function(ev) {
          let loader = new OBJLoader();
          const object = loader.parse(ev.target.result);
          console.log('OBJ loaded:', object);
          object.name = 'architettura';
          console.log('Adding OBJ to scene:', object);
          scene.add(object);
          
          // Apply conditional lines instead of regular materials
          console.log('About to apply conditional lines to OBJ...');
          applyConditionalLinesToModel(object);
          
          setTimeout(syncMaxDictionaries, 50);
        };
        reader.readAsText(file);
      } else {
        alert('Formato non supportato. Usa .glb, .gltf o .obj');
      }
    });
  }

  // Aggiungi bottoni nel menu "Generali"
  const generaliMenu = document.getElementById('generaliMenu');
  if (generaliMenu) {
    // Bottone Carica Setup Altoparlanti
    const btnLoadSpeakers = document.createElement('button');
    btnLoadSpeakers.textContent = 'Carica Setup Altoparlanti';
    btnLoadSpeakers.onclick = () => loadSpeakersPreset();
    generaliMenu.appendChild(btnLoadSpeakers);

    // Bottone Carica Setup Fonti Sonore
    const btnLoadSources = document.createElement('button');
    btnLoadSources.textContent = 'Carica Setup Fonti Sonore';
    btnLoadSources.onclick = () => loadSourcesPreset();
    generaliMenu.appendChild(btnLoadSources);
  }

  // Trova il menu di destra dove sono presenti "tema eco" o "super superficie"
  const rightMenu = document.getElementById('rightMenu'); // Sostituisci con l'id corretto se diverso
  if (rightMenu) {
    // Bottone Carica Setup Altoparlanti
    const btnLoadSpeakers = document.createElement('button');
    btnLoadSpeakers.textContent = 'Carica Setup Altoparlanti';
    btnLoadSpeakers.className = 'menu-btn'; // usa la classe delle voci del menu se presente
    btnLoadSpeakers.onclick = () => loadSpeakersPreset();
    rightMenu.appendChild(btnLoadSpeakers);

    // Bottone Carica Setup Fonti Sonore
    const btnLoadSources = document.createElement('button');
    btnLoadSources.textContent = 'Carica Setup Fonti Sonore';
    btnLoadSources.className = 'menu-btn';
    btnLoadSources.onclick = () => loadSourcesPreset();
    rightMenu.appendChild(btnLoadSources);
  }
});
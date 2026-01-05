import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { loadObj } from './loaders.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD, goochMaterialArrow, goochMaterialSp, standardMat } from './materials.js';
import { objToBeDetected, scene, renderer } from './setup.js';
import { createMenu } from './objmenu_new.js';
import { loadGenericGltf } from './loadersFIX.js';
import { saveSpeakersPreset, saveSourcesPreset } from './presetSaver.js';
import { loadSpeakersPreset, loadSourcesPreset } from './presetLoader.js';
import { syncMaxDictionaries } from './maxSync.js';
import { sendSpeakersLoadedToMax, sendOmnifontesLoadedToMax } from './max.js'; // <--- aggiunto
import { ConditionalLinesManager } from './ConditionalLinesManager.js';
import messageBroker from './messageBroker.js';

// Initialize ConditionalLinesManager
let conditionalLinesManager;
let currentPlasticoControl = null;

// POV Cursor global variables
let povCursorModel = null;

// Sistema ID univoci per oggetti 3D
let objectIdCounter = 0;
export function generateUniqueId() {
  return `obj_${Date.now()}_${++objectIdCounter}`;
}

// Load the POV Cursor model at initialization (invisible)
function initializePovCursor() {
  const loader = new GLTFLoader();
  const filename = 'modelli/galleriaGLTF/horsehead.glb';
  // Use BASE_URL for correct path resolution
  const fullPath = import.meta.env.BASE_URL + filename;
  
  loader.load(
    fullPath,
    function (gltf) {
      povCursorModel = gltf.scene;
      povCursorModel.name = 'POV Cursor';
      
      // Add flag to always include in Max dictionary
      povCursorModel.alwaysInDict = true;
      
      // Apply transformations
      povCursorModel.scale.setScalar(0.1);
      povCursorModel.position.set(0, 1.2, 0);
      povCursorModel.visible = false; // Start invisible
      
      // Use same material as speakers
      povCursorModel.traverse((child) => {
        if (child.isMesh) {
          child.material = goochMaterialSp; // Same material as speakers
        }
      });
      
      scene.add(povCursorModel);
      // Don't add to objToBeDetected initially since it's invisible
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      
      console.log('POV Cursor model loaded and initialized');
    },
    function (xhr) {
      console.log(`POV Cursor: ${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
    },
    function (error) {
      console.error('Error loading POV Cursor model:', error);
    }
  );
}

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
  const addPovCursor = document.getElementById('addPovCursor');

  // Counters to ensure unique, sequential naming even when loading is async
  // Dinamicamente conta gli altoparlanti nella scena ogni volta
  function getNextSpeakerIndex() {
    let speakerCount = 0;
    scene.children.forEach((obj) => {
      if (obj.name && obj.name.startsWith('Altoparlante ')) speakerCount++;
    });
    return speakerCount + 1;
  }

  //da modificare: fare che sia un tasto nel dock che ogni volta apre finestra di dialogo per importare un modello esterno
  let howManyGenericModels = 0;
  if (addGenericModel) {
    addGenericModel.addEventListener('click', () => {
      howManyGenericModels++;
      let nome = `Modello custom ${howManyGenericModels}`
      loadGenericGltf('./modelli/galleriaGLTF/scultura.glb', nome, 0.045, -3.5, -0.7, 0.5);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
    });
  }

  if (addSpeaker) {
    addSpeaker.addEventListener('click', () => {
      // Use persistent counter to assign a unique sequential name immediately
      const index = getNextSpeakerIndex();
      const nome = `Altoparlante ${index}`;
      const uniqueId = generateUniqueId();
      console.log('Creando altoparlante:', nome, 'con ID:', uniqueId);
      loadObj('./modelli/galleriaOBJ/speaker3dec.obj', nome, goochMaterialSp, 0.045, 0., 0, 1.2, null, uniqueId);
      createMenu();
      setTimeout(() => syncMaxDictionaries('altoparlanti'), 50);
    });
  }

  let howManyHalos = 0;
  if (addHalo) {
    addHalo.addEventListener('click', () => {
      howManyHalos++;
      let nome = `Aureola ${howManyHalos}`;
      const uniqueId = generateUniqueId();
      console.log('Creando aureola:', nome, 'con ID:', uniqueId);
      loadObj('./modelli/galleriaOBJ/halo2_lowpoly.obj', nome, goochMaterialSp, 0.15, 0., 0, 1.2, null, uniqueId);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
    });
  }

  let howManyArrows = 0;
  if (addArrow) {
    addArrow.addEventListener('click', () => {
      howManyArrows++;
      const nome = `Orifonte ${howManyArrows}`;
      const uniqueId = generateUniqueId();
      loadObj('./modelli/galleriaOBJ/arrow.obj', nome, goochMaterialArrow, 0.045, 0., 0., 1.2, null, uniqueId);
      createMenu();
      setTimeout(syncMaxDictionaries, 50);
      // Invia subito coordinate Orifonte
      setTimeout(() => {
        const obj = scene.children.find(o => o.name === nome);
        if (obj && window.max && window.max.outlet) {
          sendImmediateOmniLike(obj);
        }
      }, 60);
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
      mesh.userData.id = generateUniqueId();
      mesh.userData.tags = [0]; // Tag di default
      mesh.isDashed = false;
      mesh.position.set(0., 1.2, 0.);
      scene.add(mesh);
      objToBeDetected.push(mesh);
      
      // Notifica creazione oggetto al multi-client manager
      if (window.multiClientManager?.isMaster && window.multiClientManager?.isEnabled) {
        window.multiClientManager.notifyObjectCreated(
          mesh.userData.id,
          'omnifonte', 
          nome,
          { x: 0, y: 1.2, z: 0 },
          { x: 0, y: 0, z: 0 },
          { x: 0.25, y: 0.24, z: 0.25 },
          {},
          mesh.userData.tags || [0]
        );
      }
      
      // Notifica creazione oggetto al message broker (OSC + Max)
      window.messageBroker.sendObjectCreated({
        id: mesh.userData.id,
        name: nome,
        type: 'omnifonte',
        position: { x: 0, y: 1.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 0.25, y: 0.24, z: 0.25 },
        tags: mesh.userData.tags || [0]
      });
      
      createMenu();
      setTimeout(() => syncMaxDictionaries('omnifonti'), 50);
      // Invia subito coordinate Omnifonte
      setTimeout(() => {
        if (window.max && window.max.outlet) {
          sendImmediateOmniLike(mesh);
        }
      }, 60);
    });
  }

  if (addPovCursor) {
    addPovCursor.addEventListener('click', () => {
      if (povCursorModel) {
        // Toggle visibility
        povCursorModel.visible = !povCursorModel.visible;
        
        // Add/remove from objToBeDetected based on visibility (for raycaster only)
        const index = objToBeDetected.indexOf(povCursorModel);
        if (povCursorModel.visible && index === -1) {
          // Add to objToBeDetected when becoming visible (for raycaster)
          objToBeDetected.push(povCursorModel);
        } else if (!povCursorModel.visible && index !== -1) {
          // Remove from objToBeDetected when becoming invisible (for raycaster)
          objToBeDetected.splice(index, 1);
        }
        
        createMenu(); // Update menu to reflect visibility change
        setTimeout(syncMaxDictionaries, 50); // Sync immediately - will always include POV Cursor due to alwaysInDict flag
      } else {
        // Initialize if not already loaded
        initializePovCursor();
      }
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
      // Se è Omnifonte / Orifonte invia subito coordinate
      if (/^(Omnifonte|Orifonte)\s/i.test(name)) {
        setTimeout(() => {
          if (window.max && window.max.outlet) {
            sendImmediateOmniLike(mesh);
          }
        }, 40);
      }
  }

  // Funzioni helper per il menu avanzato di aggiunta elementi
  // Queste funzioni sono esportate globalmente per essere usate dal sistema di menu

  window.addSphereAtPosition = function(x, y, z, providedId = null, providedName = null) {
    // Use provided values or generate new ones
    let nome, uniqueId;
    
    if (providedName && providedId) {
      nome = providedName;
      uniqueId = providedId;
      console.log('addSphereAtPosition:', nome, 'ID:', uniqueId, 'pos:', x, y, z, '(from master)');
    } else {
      // Conta solo le sfere di primo livello nella scena
      let howManySpheres = 0;
      scene.children.forEach((obj) => {
        if (obj.name && obj.name.startsWith("Omnifonte ")) {
          howManySpheres++;
        }
      });
      nome = `Omnifonte ${howManySpheres + 1}`;
      uniqueId = generateUniqueId();
      console.log('addSphereAtPosition:', nome, 'ID:', uniqueId, 'pos:', x, y, z, '(generated)');
    }
    
    const geometry = new THREE.SphereGeometry(0.3, 40, 40);
    const material = goochMaterialArrow;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(0.25, 0.24, 0.25);
    mesh.name = nome;
    mesh.userData.id = uniqueId;
    mesh.userData.tags = [0]; // Tag di default
    mesh.isDashed = false;
    mesh.position.set(x, z, y);
    scene.add(mesh);
    objToBeDetected.push(mesh);
    
    // Notifica creazione oggetto al multi-client manager
    if (window.multiClientManager?.isMaster && window.multiClientManager?.isEnabled) {
      window.multiClientManager.notifyObjectCreated(
        mesh.userData.id,
        'omnifonte', 
        nome,
        { x: x, y: z, z: y },
        { x: 0, y: 0, z: 0 },
        { x: 0.25, y: 0.24, z: 0.25 }
      );
    }
    
    // Notifica creazione oggetto al message broker (OSC + Max)
    window.messageBroker.sendObjectCreated({
      id: mesh.userData.id,
      name: nome,
      type: 'omnifonte',
      position: { x: x, y: y, z: z },  // Coordinate applicazione
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0.25, y: 0.24, z: 0.25 },
      tags: mesh.userData.tags || [0]
    });
    
    createMenu();
    setTimeout(() => syncMaxDictionaries('omnifonti'), 50);
    // Invia subito coordinate Omnifonte
    setTimeout(() => {
      if (window.max && window.max.outlet) {
        sendImmediateOmniLike(mesh);
      }
    }, 60);
  };

  window.addSpeakerAtPosition = function(x, y, z, providedId = null, providedName = null) {
    // Use provided values or generate new ones
    const index = providedName ? parseInt(providedName.split(' ')[1]) || getNextSpeakerIndex() : getNextSpeakerIndex();
    const nome = providedName || `Altoparlante ${index}`;
    const uniqueId = providedId || generateUniqueId();
    console.log('addSpeakerAtPosition:', nome, 'ID:', uniqueId, 'pos:', x, y, z, providedId ? '(from master)' : '(generated)');
    loadObj('./modelli/galleriaOBJ/speaker3dec.obj', nome, goochMaterialSp, 0.045, x, y, z, null, uniqueId);
    createMenu();
    setTimeout(() => syncMaxDictionaries('altoparlanti'), 50);
  };

  window.addArrowAtPosition = function(x, y, z, providedId = null, providedName = null) {
    // Use provided values or generate new ones
    let nome, uniqueId;
    
    if (providedName && providedId) {
      nome = providedName;
      uniqueId = providedId;
      console.log('addArrowAtPosition:', nome, 'ID:', uniqueId, 'pos:', x, y, z, '(from master)');
    } else {
      // Usa il contatore condiviso howManyArrows (dichiarato nello scope superiore)
      if (typeof howManyArrows === 'undefined') {
        // fallback: conteggia
        let tmp = 0;
        scene.children.forEach((obj) => { if (obj.name && obj.name.startsWith('Orifonte ')) tmp++; });
        howManyArrows = tmp;
      }
      howManyArrows++;
      nome = `Orifonte ${howManyArrows}`;
      uniqueId = generateUniqueId();
      console.log('addArrowAtPosition:', nome, 'ID:', uniqueId, 'pos:', x, y, z, '(generated)');
    }
    
    loadObj('./modelli/galleriaOBJ/arrow.obj', nome, goochMaterialArrow, 0.045, x, y, z, null, uniqueId);
    createMenu();
    setTimeout(syncMaxDictionaries, 50);
    // Invia subito coordinate Orifonte
    setTimeout(() => {
      const obj = scene.children.find(o => o.name === nome);
      if (obj && window.max && window.max.outlet) {
        sendImmediateOmniLike(obj);
      }
    }, 60);
  };

  window.addHaloAtPosition = function(x, y, z) {
    // Usa il contatore condiviso howManyHalos (dichiarato nello scope superiore)
    if (typeof howManyHalos === 'undefined') {
      let tmp = 0;
      scene.children.forEach((obj) => { if (obj.name && obj.name.startsWith('Aureola')) tmp++; });
      howManyHalos = tmp;
    }
    howManyHalos++;
    let nome = `Aureola ${howManyHalos}`;
    const uniqueId = generateUniqueId();
    console.log('Creando aureola:', nome, 'con ID:', uniqueId);
    loadObj('./modelli/galleriaOBJ/halo2_lowpoly.obj', nome, goochMaterialSp, 0.15, x, y, z, null, uniqueId);
    createMenu();
    setTimeout(syncMaxDictionaries, 50);
  };

  window.addZoneAtPosition = function(x, y, z) {
    // Usa il contatore condiviso howManyZones (dichiarato nello scope superiore)
    if (typeof howManyZones === 'undefined') {
      let tmp = 0;
      scene.children.forEach((obj) => { if (obj.name && obj.name.startsWith('Zona ')) tmp++; });
      howManyZones = tmp;
    }
    howManyZones++;
    const materials = [dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD];
    const index = (howManyZones - 1) % materials.length;
    const color = materials[index];
    const nome = `Zona ${howManyZones}`;

    newZone(false, nome, color, x, y, z); // Default a cubo
    setTimeout(syncMaxDictionaries, 50);
  };

// Helper per inviare coordinate iniziali di Omnifonte/Orifonte
function sendImmediateOmniLike(obj) {
  if (!obj || !obj.name) return;
  const lower = obj.name.toLowerCase();
  if (!(lower.includes('omnifonte') || lower.includes('orifonte'))) return;
  obj.updateMatrixWorld(true);
  const pos = new THREE.Vector3();
  obj.getWorldPosition(pos);
  // Estrai index
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

// Initialize POV Cursor model on page load
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for everything to be initialized
  setTimeout(initializePovCursor, 1000);
});

/**
 * Gestione programmatica Aureole per integrazione Nuvola
 */
let nuvolaAureoleCounter = 0;

export function createNuvolaAureola(hostname, assignedIndex) {
  const nome = `Aureola ${assignedIndex}`;
  const uniqueId = generateUniqueId();
  
  console.log(`[NUVOLA] Creando aureola per device ${hostname}: ${nome} (ID: ${uniqueId})`);
  
  loadObj('./modelli/galleriaOBJ/halo2_lowpoly.obj', nome, goochMaterialSp, 0.15, 0., 0, 1.2, null, uniqueId);
  createMenu();
  setTimeout(syncMaxDictionaries, 50);
  
  return { id: uniqueId, name: nome };
}

export function removeNuvolaAureola(aureoleId) {
  const aureole = scene.children.find(obj => obj.userData.id === aureoleId);
  if (aureole) {
    console.log(`[NUVOLA] Rimuovendo aureola: ${aureole.name} (ID: ${aureoleId})`);
    scene.remove(aureole);
    createMenu();
    setTimeout(syncMaxDictionaries, 50);
    return true;
  }
  return false;
}
/**
 * ESEMPIO DI UTILIZZO DEL ConditionalLinesManager
 * 
 * Questo file mostra come integrare il ConditionalLinesManager 
 * in un progetto Three.js esistente
 */

import * as THREE from '//cdn.skypack.dev/three@0.130.1/build/three.module.js';
import { OrbitControls } from '//cdn.skypack.dev/three@0.130.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '//cdn.skypack.dev/three@0.130.1/examples/jsm/loaders/GLTFLoader.js';
import { ConditionalLinesManager } from './ConditionalLinesManager.js';

// Setup base di Three.js
let scene, camera, renderer, controls;
let conditionalLinesManager;

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Controls
    controls = new OrbitControls(camera, renderer.domElement);

    // Lighting per il MeshToonMaterial
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Inizializza il manager
    conditionalLinesManager = new ConditionalLinesManager(scene, renderer);

    // Carica e applica l'effetto a un modello
    loadAndApplyEffect();

    // Resize handler
    window.addEventListener('resize', onWindowResize, false);

    // Start animation
    animate();
}

function loadAndApplyEffect() {
    // Esempio 1: Modello semplice (cubo)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const mesh = new THREE.Mesh(geometry);
    const group = new THREE.Group();
    group.add(mesh);

    // Applica l'effetto conditional lines
    const modelControl = conditionalLinesManager.applyConditionalLines(group, {
        threshold: 30,
        thickness: 3,
        opacity: 0.7,
        materialColor: 0xffffff,
        lineColor: 0x000000
    });

    // Esempio di controllo dinamico
    setTimeout(() => {
        modelControl.setOpacity(0.3);
        modelControl.setThickness(5);
        modelControl.setMaterialColor(0xff6b6b);
    }, 2000);

    // Esempio 2: Caricamento GLTF
    const loader = new GLTFLoader();
    loader.load('path/to/your/model.gltf', (gltf) => {
        const modelControl2 = conditionalLinesManager.applyConditionalLines(gltf.scene, {
            threshold: 40,
            thickness: 2,
            opacity: 0.8,
            materialColor: 0x74b9ff,
            lineColor: 0x2d3436
        });

        // Posiziona il secondo modello
        modelControl2.backgroundModel.position.x = 3;
        modelControl2.edgesModel.position.x = 3;
        modelControl2.conditionalModel.position.x = 3;
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Importante: aggiorna le risoluzioni delle linee
    conditionalLinesManager.updateResolutions();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    
    // Aggiorna le risoluzioni ogni frame per linee perfette
    conditionalLinesManager.updateResolutions();
    
    renderer.render(scene, camera);
}

// Inizializza
init();

// Esempio di controlli GUI (opzionale, con dat.GUI)
/*
import dat from '//cdn.skypack.dev/dat.gui/build/dat.gui.module.js';

function setupGUI(modelControl) {
    const gui = new dat.GUI();
    
    const params = {
        opacity: 0.5,
        thickness: 2,
        threshold: 40,
        materialColor: '#ffffff',
        lineColor: '#000000'
    };
    
    gui.add(params, 'opacity', 0.1, 1.0).onChange((value) => {
        modelControl.setOpacity(value);
    });
    
    gui.add(params, 'thickness', 0.5, 10).onChange((value) => {
        modelControl.setThickness(value);
    });
    
    gui.add(params, 'threshold', 0, 120).onChange((value) => {
        modelControl.setThreshold(value);
    });
    
    gui.addColor(params, 'materialColor').onChange((value) => {
        modelControl.setMaterialColor(parseInt(value.replace('#', '0x')));
    });
    
    gui.addColor(params, 'lineColor').onChange((value) => {
        modelControl.setLineColor(parseInt(value.replace('#', '0x')));
    });
}
*/

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { standardMat, phongMat, dashedLineMat, dashedMaterial, solidMaterial, goochMaterial, goochMaterialArrow } from './materials.js';
import { loadObj } from './loaders.js';
import { updateMenu } from './objmenu.js';

export let scene, ssuper, renderer, control, orbit, orbitOrtho;
export let objToBeDetected = [];
export let cameraPersp, cameraOrtho, currentCamera, camera;
let rendererBackgoundColor = 0xd6d6d6; //inizia bianco
// let rendererBackgoundColor = 0x000000; //inizia nero
let ghostButton = document.getElementById('ghostButton');

const visualizzazione = document.getElementById("visualizzazione");
const stato = document.getElementById("infoDivBottomLeft");
export let transfo = false;

export function changeGrid(size, divisions) {
	scene.remove(ssuper);
	ssuper = new THREE.GridHelper(size, divisions, 0x888888, 0x888888)
	scene.add(ssuper);
}

export function init() {
    // Scene setup
	ssuper = new THREE.GridHelper(10, 16, 0x888888, 0x888888)
    scene = new THREE.Scene();
    scene.add(ssuper);

    // Camere
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 8;
    cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.3, 200);
    cameraOrtho = new THREE.OrthographicCamera(
        -frustumSize * aspect,
        frustumSize * aspect,
        frustumSize,
        -frustumSize,
        0.3,
        200
    );
    currentCamera = cameraPersp; // Default camera
    currentCamera.position.set(12, 3, 12);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xe7e7e7, 4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.6);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

	const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.6);
    directionalLight2.position.set(-5, 10, -7.5);
    directionalLight2.castShadow = true;
    scene.add(directionalLight2);

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // cameraPersp.add(pointLight);
    scene.add(currentCamera);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(rendererBackgoundColor);
    document.body.appendChild(renderer.domElement);

    // Controlli scena prospettiva
    orbit = new OrbitControls(cameraPersp, renderer.domElement);
    orbit.update();

    // Controlli scena ortogonale
    orbitOrtho = new OrbitControls(cameraOrtho, renderer.domElement);
    orbitOrtho.enableRotate = false;
    orbitOrtho.enablePan = true;
    orbitOrtho.enableZoom = true;
    orbitOrtho.update();

    initTransformControls();

    // Listener per cambiare camera
    window.addEventListener('keydown', (event) => {
		switch (event.key) {
			case '1': // Tasto 1: Camera prospettica
				currentCamera = cameraPersp;
				orbit.enabled = true;
				orbitOrtho.enabled = false;
	
				// Aggiorna i controlli per la nuova camera
				orbit.object = currentCamera;
				orbit.update();
				// currentCamera.position.set(0, 5, 0); // Posizione dall'alto
				// currentCamera.lookAt(0, 0, 0);
				control.camera = currentCamera; // Aggiorna la camera nei c
	
				visualizzazione.textContent = "Prospettiva";
				break;
	
			case '2': // Tasto 2: Camera ortogonale
				currentCamera = cameraOrtho;
				orbit.enabled = false;
				orbitOrtho.enabled = true;
	
				// Aggiorna i controlli per la nuova camera
				orbitOrtho.object = currentCamera;
				orbitOrtho.update();
				currentCamera.position.set(0, 8, 0); // Posizione dall'alto
				currentCamera.lookAt(0, 0, 0); // Guarda verso il centro della scena
				orbitOrtho.target.set(0, 0, 0);
				control.camera = currentCamera; // Aggiorna la camera nei c
	
				visualizzazione.textContent = "Pianta";
				break;
			case '3': // Tasto 2: Camera ortogonale
				currentCamera = cameraOrtho;
				orbit.enabled = false;
				orbitOrtho.enabled = true;

				// Aggiorna i controlli per la nuova camera
				orbitOrtho.object = currentCamera;
				orbitOrtho.update();
				currentCamera.position.set(0, 0, 8); // Posizione da di fronte
				currentCamera.lookAt(0, 0, 0); // Guarda verso il centro della scena
				orbitOrtho.target.set(0, 0, 0);
				control.camera = currentCamera; // Aggiorna la camera nei c

				visualizzazione.textContent = "Fronte";
				break;
			case '4': // Tasto 2: Camera ortogonale
				currentCamera = cameraOrtho;
				orbit.enabled = false;
				orbitOrtho.enabled = true;

				// Aggiorna i controlli per la nuova camera
				orbitOrtho.object = currentCamera;
				orbitOrtho.update();
				currentCamera.position.set(8, 0, 0); // Posizione da destra
				currentCamera.lookAt(0, 0, 0); // Guarda verso il centro della scena
				orbitOrtho.target.set(0, 0, 0);
				control.camera = currentCamera; // Aggiorna la camera nei c

				visualizzazione.textContent = "Lato";
				break;
		}
	
		// Aggiungi la nuova camera alla scena
		// scene.add(currentCamera);
	
		// Forza il renderer a utilizzare la nuova camera
		renderer.render(scene, currentCamera);
	});

	window.addEventListener('keydown', function(event) {
		switch (event.key) {
			case 'q':
				transfo = !transfo;
				control.setSpace(control.space === 'local' ? 'world' : 'local');
				updateStato1();
				break;
			case 'g':
				control.setMode('translate');
				updateStato('Spostamento');
				ghostButton.style.display = 'block';
				ghostButton.style.right = '21.5rem';
				break;
	
			case 'r':
				control.setMode('rotate');
				updateStato('Rotazione');
				ghostButton.style.display = 'block';
				ghostButton.style.right = '16.5rem';
				break;
	
			case 's':
				control.setMode('scale');
				updateStato('Scala');
				ghostButton.style.display = 'block';
				ghostButton.style.right = '11.5rem';
				break;
			case 'Escape':
				control.detach();
				orbit.enabled = true;
				updateStato3();
				ghostButton.style.display = 'none';
				break;
				
		}
	});

	const canvas = renderer.domElement;

	canvas.addEventListener('dblclick', function () {
		const currentZoom = currentCamera.zoom;

		if (currentCamera === cameraPersp) {
			currentCamera.position.set(12, 3, 12); // Posizione di default
			currentCamera.lookAt(0, 0, 0);
		} else if (currentCamera === cameraOrtho) {
			
			//nient
		}

		currentCamera.zoom = currentZoom;
		currentCamera.updateProjectionMatrix();

		orbit.target.set(0, 0, 0); // Reimposta il target al centro
		orbit.update();            // Aggiorna i controlli Orbit
	});

    window.addEventListener('resize', onWindowResize);
}

let miao;
let tipo;
const transTriangle = document.getElementById("transTriangle");

export function changeTransfo(state) {
	transfo = state;
}

export function updateStato(type) {
	tipo = type;
	if (transfo) {
		miao = "locale";
	} else {
		miao = "globale";
	}
	stato.textContent = type + " " + miao;
	transTriangle.style.display = "block";
}

export function updateStato1() {
	if (transfo) {
		miao = "locale";
	} else {
		miao = "globale";
	}
	stato.textContent = tipo + " " + miao;
}

export function updateStato3() {
	stato.textContent = "---";
	transTriangle.style.display = "none";
}

export function changeTheme(state) {
    var root = document.documentElement;

    if (state) {
        rendererBackgoundColor = 0x000;
        renderer.setClearColor(rendererBackgoundColor);
        root.style.setProperty('--fondale', 'var(--fondaleNero)');
        root.style.setProperty('--testo', 'var(--fondaleBianco)');
        root.style.setProperty('--dettaglio', 'var(--grigino)');
		// dashedMaterial.color.set('yellow');
		// solidMaterial.color.set(0xd6d6d6);
		goochMaterialArrow.uniforms.coolColor.value = new THREE.Color(0xd6d6d6);
		goochMaterialArrow.uniforms.warmColor.value = new THREE.Color(0xe8e8e8);
    } else {
        rendererBackgoundColor = 0xd6d6d6;
        renderer.setClearColor(rendererBackgoundColor);
        root.style.setProperty('--fondale', 'var(--fondaleBianco)');
        root.style.setProperty('--testo', 'var(--fondaleNero)');
        root.style.setProperty('--dettaglio', 'var(--grigio)');
		// dashedMaterial.color.set(0x343434);
		// dashedMaterial.color.set('yellow');
		// solidMaterial.color.set("black");
		goochMaterialArrow.uniforms.coolColor.value = new THREE.Color(0x303030);
		goochMaterialArrow.uniforms.warmColor.value = new THREE.Color(0x000000);
    }
}

export function render() {
    renderer.render(scene, currentCamera);
	requestAnimationFrame(render);
}

// export function debugGeo() {
//     const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 32);
//     // const geometry = new THREE.BoxGeometry(0.2,0.2,0.2);
// 	// const geometry = new THREE.SphereGeometry;
//     const material = goochMaterial;
//     const mesh = new THREE.Mesh(geometry, material);
// 	mesh.scale.set(0.25, 0.24, 0.25);
// 	mesh.name = `debug-${scene.children.length}`
// 	mesh.isDashed = false;
// 	mesh.position.set(0, 0.44, 0);
//     // control.attach(mesh);
//     scene.add(mesh);
// 	objToBeDetected.push(mesh);
// }

// export function debugGeo1() {
//     // const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 32);
// 	const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
//     const edges = new THREE.EdgesGeometry(geometry); // Crea una geometria di bordi
//     const line = new THREE.LineSegments(edges, dashedLineMat);
//     line.computeLineDistances(); // Necessario per il materiale LineDashedMaterial
//     line.name = `debug-dashed-${scene.children.length}`;
// 	line.isDashed = true;
//     scene.add(line);
//     objToBeDetected.push(line);
// }

// export function LineaContinuaObj() {
//     const geometry = new THREE.BoxGeometry(1, 1, 1); 
// 	// const geometry = new THREE.TorusKnotGeometry(1, 0.3, 256, 32);
//     const edges = new THREE.EdgesGeometry(geometry); // Estrai gli edge del cubo

//     const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges); // LineSegmentsGeometry compatibile
//     const line = new LineSegments2(lineGeometry, solidMaterial); // Applica il materiale dashed

//     scene.add(line); // Aggiungi alla scena
// 	line.name = "architettura";
// 	line.isDashed = true;
// 	objToBeDetected.push(line);
// }

// export function debugGeo4() {
//     const geometry = loadObj('parkinglot.obj');
//     const edges = new THREE.EdgesGeometry(geometry); // Estrai gli edge del cubo

//     const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges); // LineSegmentsGeometry compatibile
//     const line = new LineSegments2(lineGeometry, solidMaterial); // Applica il materiale dashed

//     scene.add(line); // Aggiungi alla scena
// }

function initTransformControls() {
    control = new TransformControls( cameraPersp, renderer.domElement );

	control.setTranslationSnap(0.05);
	control.setRotationSnap(THREE.MathUtils.degToRad(15));
	control.setScaleSnap(0.05);

	control.addEventListener( 'dragging-changed', function ( event ) {

		orbit.enabled = ! event.value;

	} );

	const gizmo = control.getHelper();
	scene.add( gizmo );
}

export function onWindowResize() {

	const aspect = window.innerWidth / window.innerHeight;

	cameraPersp.aspect = aspect;
	cameraPersp.updateProjectionMatrix();

	cameraOrtho.left = cameraOrtho.bottom * aspect;
	cameraOrtho.right = cameraOrtho.top * aspect;
	cameraOrtho.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}
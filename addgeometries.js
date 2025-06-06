import * as THREE from 'three';
import { loadObj } from './loaders.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD, goochMaterialArrow, goochMaterialSp, standardMat } from './materials.js';
import { objToBeDetected, scene } from './setup.js';
// import { color } from 'three/tsl';
// import { bool } from 'three/tsl';
import { createMenu } from './objmenu.js';
import { loadGenericGltf } from './loadersFIX.js';

const addSpeaker = document.getElementById('addCone');
const addHalo = document.getElementById('addHalo');
const addSphere = document.getElementById('addSphere');
const addArrow = document.getElementById('addArrow');
const addCloudClient = document.getElementById('addCloudElement');
const addGenericModel = document.getElementById('loadGenericGltf');

let howManyGenericModels = 0;

addGenericModel.addEventListener('click', () => {
    howManyGenericModels++;
    let nome = `Modello custom ${howManyGenericModels}`
    loadGenericGltf('./modelli/galleriaGLTF/scultura.glb', nome, 0.045, -3.5, -0.7, 0.5);
    // createMenu(); //qui non fa perchè deve caricare il modello sec me
});

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
    // createMenu(); //qui non fa perchè deve caricare il modello sec me
});

let howManyHalos = 0;

addHalo.addEventListener('click', () => {
    howManyHalos++;
    let nome = `Aureola-${howManyHalos}`
    loadObj('./modelli/galleriaOBJ/halo2_lowpoly.obj', nome, goochMaterialSp, 0.15, 0., 0, 1.2);
    // createMenu();
});

let howManyArrows = 0;

addArrow.addEventListener('click', () => {
    howManyArrows++;
    const nome = `Orifonte ${howManyArrows}`;
    loadObj('./modelli/galleriaOBJ/arrow.obj', nome, goochMaterialArrow, 0.045, 0., 0., 1.2)
    // createMenu();
});

let howManyCloudClients = 0;

addCloudClient.addEventListener('click', () => {
    howManyCloudClients++;
    const nome = `Nuvola:client ${howManyCloudClients}`;
    // loadObj('bunnySpeaker.obj', nome, goochMaterialSp, 0.025, 0., 0, 0.5);
    loadObj('./modelli/galleriaOBJ/cloudDec.obj', nome, goochMaterialSp, 0.035, 0., 0, 1.2);
});

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
});

//zones

let howManyZones = 0;

const materials = [dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD];
const multimenu = document.getElementById("infoDivCenter");
const addZone = document.getElementById('addZone');
const addZoneCube = document.getElementById('addZoneCube');
const addZoneSphere = document.getElementById('addZoneSphere');
const closeMultimenu = document.getElementById('closeInfoDivCenter');

addZone.addEventListener('click', () => {
    multimenu.style.opacity = 1;
    multimenu.style.pointerEvents = "all";
});

addZoneCube.addEventListener('click', () => {
    howManyZones++;
    const index = (howManyZones - 1) % materials.length;
    const color = materials[index];
    const nome = `Zona ${howManyZones}`;

    newZone(false, nome, color, 0., 0., 1.2);
    multimenu.style.opacity = 0;
    multimenu.style.pointerEvents = "none";
});

closeMultimenu.addEventListener('click', () => {
    multimenu.style.opacity = 0;
    multimenu.style.pointerEvents = "none";
});

addZoneSphere.addEventListener('click', () => {
    howManyZones++;
    const index = (howManyZones - 1) % materials.length;
    const color = materials[index];
    const nome = `Zona ${howManyZones}`;

    newZone(true, nome, color, 0., 0., 1.2);
    multimenu.style.opacity = 0;
    multimenu.style.pointerEvents = "none";
});

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
}
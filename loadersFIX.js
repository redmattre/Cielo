import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { scene } from './setup.js'; // Assumendo che tu abbia una scena configurata in setup.js
import { dashedMaterial, goochMaterialAlpha, solidMaterial } from './materials.js';

// Variabile per tenere traccia dei wireframe
const wireframeObjects = {};

export function loadGltfModel(filepath) {
    const loader = new GLTFLoader();

    loader.load(
        filepath,
        function (gltf) {
            const model = gltf.scene;

            // Posizionamento e scala del modello (adatta secondo necessità)
            model.position.set(0, 0, 0);
            // model.position.set(3, 0, 3);
            // model.scale.set(0.025, 0.025, 0.025);
            model.name = 'architettura';
            model.visible = false;

            // Aggiungi il modello alla scena
            scene.add(model);

            // addWireframe('architettura', solidMaterial);
            console.log(`Loaded GLTF model: ${filepath}`);
        },
        function (xhr) {
            console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
        },
        function (error) {
            console.error('An error occurred while loading the GLTF model:', error);
        }
    );
}

export let nativeMaterialsTransparency = 0.7

export function toggleTransparency(modelName, isTransparent) {

    console.log(scene.getObjectByName('architettura'));
    const model = scene.getObjectByName(modelName);

    model.traverse((child) => {
        if (child.isMesh && child.material) {
            child.material.transparent = isTransparent;
            child.material.opacity = isTransparent ? nativeMaterialsTransparency : 1; // Modifica l'opacità se necessario
        }
    });
    console.log(`Transparency toggled: ${isTransparent}`);
}

export function changeNatMatTransparency(value) {
    nativeMaterialsTransparency = value;
}

export function toggleMaterial(modelName, useCustomMaterial) {
    const model = scene.getObjectByName(modelName);
    model.traverse((child) => {
        if (child.isMesh && child.material) {
            // Salva il materiale originale se non è già salvato
            if (!child.userData.originalMaterial) {
                child.userData.originalMaterial = child.material.clone();
            }
            // Alterna tra materiale originale e personalizzato
            child.material = useCustomMaterial
                ? goochMaterialAlpha
                : child.userData.originalMaterial;
        }
    });
    console.log(`Material toggled: ${useCustomMaterial ? 'Custom' : 'Original'}`);
}

export function toggleModelVisibility(modelName, isVisible) {
    const model = scene.getObjectByName(modelName);

    if (!model) {
        console.warn(`Model with name "${modelName}" not found.`);
        return;
    }

    model.visible = isVisible; // Imposta la visibilità del modello

    console.log(`Model "${modelName}" visibility toggled: ${isVisible}`);
}

//l'importer di obj funziona male, anche nel caso di
export function loadObjWithMaterials(path, objFilename, mtlFilename) {
    const mtlLoader = new MTLLoader();
    mtlLoader.setPath(path);

    mtlLoader.load(mtlFilename, function (materials) {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(path);

        objLoader.load(
            objFilename,
            function (object) {
                object.position.set(0, 0, 0); // Posizionamento iniziale
                object.scale.set(0.001, 0.001, 0.001);   // Scala iniziale
                scene.add(object);
                console.log(`Loaded ${objFilename} successfully.`);
            },
            function (xhr) {
                console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
            },
            function (error) {
                console.error('An error happened while loading the OBJ file:', error);
            }
        );
    });
}

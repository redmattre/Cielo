import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Rhino3dmLoader } from 'three/addons/loaders/3DMLoader.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry';
import { objToBeDetected, scene } from './setup.js';
import * as THREE from 'three';
import { goochMaterial, goochMaterialAlpha, normalMat, phongMat, standardMat } from './materials.js';
import { createMenu } from './objmenu.js';

// Helper per risolvere il percorso asset in modo compatibile con Vite e server statici
function resolveAssetPath(filename) {
    // Se BASE_URL è definito e non è '/', usalo. Altrimenti usa il percorso relativo.
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/')
        ? import.meta.env.BASE_URL
        : '';
    return base + filename;
}

//questa è la funzione utilizzata per caricare tutti gli obj
export function loadObj(filename, name, material, scaleFactor, x, y, z, rotation) {
    const loader = new OBJLoader();

    const fullPath = resolveAssetPath(filename);

    loader.load(
        fullPath,
        function (object) {
            // Create a group to handle transformations
            const group = new THREE.Group();
            group.name = name; // Assign a name to the group

            object.traverse(function (child) {
                if (child.isMesh) {
                    child.material = material; // Apply the material
                    child.name = name;
                    group.add(child); // Add children to the group
                }
            });

            // Apply transformations to the group
            group.scale.multiplyScalar(scaleFactor);
            group.position.set(x, z, y);
            if (rotation) {
                group.rotation.set(rotation.x, rotation.y, rotation.z);
            }

            // Add the group to the scene and the objects to detect
            scene.add(group);
            objToBeDetected.push(group);

            console.log(`Loaded ${fullPath} successfully.`);
            createMenu();
        },
        function (xhr) {
            console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
        },
        function (error) {
            console.error('An error happened', error);
        }
    );
}

export function loadObjGeometry(filename) {
    return new Promise((resolve, reject) => {
        const loader = new OBJLoader();

        const fullPath = resolveAssetPath(filename);

        loader.load(
            fullPath,
            function (object) {
                let geometries = [];
                
                object.traverse(function (child) {
                    if (child.isMesh) {
                        geometries.push(child.geometry); // Salva la geometria
                    }
                });

                if (geometries.length > 0) {
                    console.log(`Loaded ${filename} successfully.`);
                    resolve(geometries); // Restituisci le geometrie
                } else {
                    reject(new Error(`No geometries found in ${filename}`));
                }
            },
            function (xhr) {
                console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
            },
            function (error) {
                console.error('An error happened', error);
                reject(error);
            }
        );
    });
}

export function loadObjWithDashedEdges(filename, dashedMaterial) {
    const loader = new OBJLoader();

    const fullPath = resolveAssetPath(filename);

    loader.load(
        fullPath,
        function (object) {
            object.traverse(function (child) {
                if (child.isMesh) {
                    // Applica il materiale custom alla mesh (diverso da quello originale)
                    child.material = goochMaterialAlpha;

                    // Creiamo gli edge della geometria della mesh
                    const edges = new THREE.EdgesGeometry(child.geometry); // Estrai gli edge

                    // Crea una geometria di LineSegments compatibile con LineMaterial
                    const lineGeometry = new LineSegmentsGeometry().fromEdgesGeometry(edges);

                    // Crea il materiale dashed
                    const dashedLine = new LineSegments2(lineGeometry, dashedMaterial);

                    dashedLine.scale.multiplyScalar(0.1);
                    dashedLine.position.set(-0.5, 0, -5);

                    //fai che solo sul wireframe viene selezionato
                    dashedLine.name = `architecture`;
                    dashedLine.isDashed = true;

                    // Aggiungi le linee alla scena
                    scene.add(dashedLine);
                    // objToBeDetected.push(dashedLine); //sospendiamo la detection per ora
                }
            });

            object.scale.multiplyScalar(0.1);
            object.position.set(-0.5, 0, -5);
            // Aggiungi l'oggetto principale alla scena
            scene.add(object);

            console.log(`Loaded ${filename} with custom material and dashed edges successfully.`);
        },
        function (xhr) {
            console.log(`${Math.round((xhr.loaded / xhr.total) * 100)}% loaded`);
        },
        function (error) {
            console.error('An error happened', error);
        }
    );
}
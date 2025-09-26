import * as THREE from 'three';
import { objToBeDetected, scene } from "./setup";
import { loadObj } from './loaders.js';
import { goochMaterialSp, goochMaterialArrow } from './materials.js';
import { createMenu } from './objmenu.js';

// Proteggi tutte le chiamate a window.max.bindInlet
function safeBindInlet(name, fn) {
    if (typeof window !== 'undefined' && window.max && typeof window.max.bindInlet === 'function') {
        window.max.bindInlet(name, fn);
    }
}

safeBindInlet("meshlist", function(){
	sendMeshesToMax();
});

function sendMeshesToMax() {
    let conta = 0;
    objToBeDetected.forEach((object) => {
        // Traverse the object tree if it contains meshes or groups
        object.traverse((mesh) => {
            if (mesh.isMesh && mesh.name) {
                // Ensure the world position is up-to-date
                mesh.updateMatrixWorld(true); // Force update of the world matrix
                
                // Get the world position of the mesh
                const worldPosition = new THREE.Vector3();
                mesh.getWorldPosition(worldPosition);

                // Get the world rotation as a quaternion
                const worldQuaternion = new THREE.Quaternion();
                mesh.getWorldQuaternion(worldQuaternion);

                // Convert the quaternion to Euler angles (if needed)
                const worldEuler = new THREE.Euler();
                worldEuler.setFromQuaternion(worldQuaternion);

                // Create the message in the requested format
                const message = `dict set ${conta} ${mesh.name} position ${worldPosition.x} ${worldPosition.y} ${worldPosition.z} rotation ${worldEuler.x} ${worldEuler.y} ${worldEuler.z}`;

                // Send the message to Max
                if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
                    window.max.outlet(message);
                }
                conta++;
            }
        });
    });
}

safeBindInlet("moveHalo", function(index, x, z, y) {
    const targetName = `Aureola-${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("halo", index, x, y, z);
        }
    } else {
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("halo", index, "not found");
        }
    }
});

safeBindInlet("rotateHalo", function(index, x, z, y) {
    const xRotation = x * Math.PI * 2;
    const yRotation = y * Math.PI * 2;
    const zRotation = z * Math.PI * 2;
    const targetName = `Aureola-${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.rotation.set(xRotation, yRotation, zRotation);
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("halo", index, xRotation, yRotation, zRotation);
        }
    } else {
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("halo", index, "not found");
        }
    }
});

safeBindInlet("addSpeaker", function(x, y, z, rx = 0, ry = 0, rz = 0) {
    // Conta solo gli speaker di primo livello nella scena
    let howManySpeakers = 0;
    scene.children.forEach((obj) => {
        if (obj.name && obj.name.startsWith("Altoparlante ")) {
            howManySpeakers++;
        }
    });
    let nome = `Altoparlante ${howManySpeakers + 1}`;
    loadObj('./modelli/galleriaOBJ/speaker3dec.obj', nome, goochMaterialSp, 0.045, x, y, z);
    // Dopo il caricamento, imposta la rotazione se specificata
    // Serve un piccolo timeout per assicurarsi che l'oggetto sia stato aggiunto
    setTimeout(() => {
        const targetObject = scene.getObjectByName(nome);
        if (targetObject) {
            // Se i valori non sono specificati, saranno 0 (default)
            const xRotation = rx * Math.PI * 2;
            const yRotation = ry * Math.PI * 2;
            const zRotation = rz * Math.PI * 2;
            targetObject.rotation.set(xRotation, yRotation, zRotation);
        }
    }, 100);
    if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
        window.max.outlet(`Speaker ${nome}, ${x}, ${y}, ${z}, rot: ${rx}, ${ry}, ${rz}`);
    }
    // Notifica che il setup altoparlanti è cambiato
    sendSpeakersLoadedToMax();
});

safeBindInlet("moveSpeaker", function(index, x, z, y) {
    const targetName = `Altoparlante ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("speaker", index, x, y, z);
        }
    } else {
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("speaker", index, "not found");
        }
    }
});

safeBindInlet("rotateSpeaker", function(index, x, z, y) {
    const xRotation = x * Math.PI * 2;
    const yRotation = y * Math.PI * 2;
    const zRotation = z * Math.PI * 2;
    const targetName = `Altoparlante ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.rotation.set(xRotation, yRotation, zRotation);
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("speaker", index, xRotation, yRotation, zRotation);
        }
    } else {
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("speaker", index, "not found");
        }
    }
});

safeBindInlet("addSphere", function(x, y, z) {
    // Conta solo le sfere di primo livello nella scena
    let howManySpheres = 0;
    scene.children.forEach((obj) => {
        if (obj.name && obj.name.startsWith("Omnifonte ")) {
            howManySpheres++;
        }
    });
    let nome = `Omnifonte ${howManySpheres + 1}`;
    // Crea la sfera come in addgeometries.js
    const geometry = new THREE.SphereGeometry(0.3, 40, 40);
    const material = goochMaterialArrow;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(0.25, 0.24, 0.25);
    mesh.name = nome;
    mesh.isDashed = false;
    mesh.position.set(x, y, z);
    scene.add(mesh);
    objToBeDetected.push(mesh);
    createMenu(); // Aggiorna il menu dopo aver aggiunto la sfera
    if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
        window.max.outlet(`Sfera aggiunta: ${nome} in posizione (${x}, ${y}, ${z})`);
    }
    // Notifica che il setup omnifonti è cambiato
    sendOmnifontesLoadedToMax();
});

safeBindInlet("moveSphere", function(index, x, z, y) {
    const targetName = `Omnifonte ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    z = 1-z;
    if (targetObject) {
        targetObject.position.set(x, y, z);
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("Omnifonte", index, x, z, y);
        }
    } else {
        if (typeof window !== 'undefined' && window.max && typeof window.max.outlet === 'function') {
            window.max.outlet("Omnifonte", index, "not found");
        }
    }
});

safeBindInlet("setSphere", function(index, x, z, y) {
    const targetName = `Omnifonte ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        // Nessun output sugli outlet
    }
});

export function sendUpdateToMax() {
    if (
        typeof window !== 'undefined' &&
        window.max &&
        typeof window.max.outlet === 'function'
    ) {
        window.max.outlet("update");
    }
}

// Variabile per tracciare l'ultimo oggetto inviato a Max
let lastSentObjectName = null;

export function sendLastHoveredObjectToMax(objectName) {
    // Se l'objectName è null/undefined, non fare nulla (mantieni l'ultimo oggetto valido)
    if (!objectName) {
        return;
    }

    // Invia solo se l'oggetto è effettivamente cambiato
    if (objectName !== lastSentObjectName) {
        if (
            typeof window !== 'undefined' &&
            window.max &&
            typeof window.max.outlet === 'function'
        ) {
            window.max.outlet("LOJ", objectName);
            lastSentObjectName = objectName; // Aggiorna l'ultimo oggetto inviato
        }
    }
}

// Funzione per resettare il tracking (utile quando si elimina l'oggetto corrente)
export function resetLastHoveredObject() {
    lastSentObjectName = null;
}

// Funzione per notificare a Max che il setup degli altoparlanti è cambiato
export function sendSpeakersLoadedToMax() {
    if (
        typeof window !== 'undefined' &&
        window.max &&
        typeof window.max.outlet === 'function'
    ) {
        window.max.outlet("loaded", "Altoparlanti");
    }
}

// Funzione per notificare a Max che il setup delle omnifonti è cambiato
export function sendOmnifontesLoadedToMax() {
    if (
        typeof window !== 'undefined' &&
        window.max &&
        typeof window.max.outlet === 'function'
    ) {
        window.max.outlet("loaded", "Omnifonti");
    }
}

// Funzione per notificare a Max che la posizione degli altoparlanti è stata aggiornata
export function sendSpeakersUpdatedToMax() {
    if (
        typeof window !== 'undefined' &&
        window.max &&
        typeof window.max.outlet === 'function'
    ) {
        window.max.outlet("update", "Altoparlanti");
    }
}


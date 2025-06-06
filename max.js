import * as THREE from 'three';
import { objToBeDetected, scene } from "./setup";
import { loadObj } from './loaders.js';
import { goochMaterialSp, goochMaterialArrow } from './materials.js';
import { createMenu } from './objmenu.js';

window.max.bindInlet("hello", function(){
	max.outlet("from the other side!");
});


window.max.bindInlet("meshlist", function(){
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
                max.outlet(message);
                conta++;
            }
        });
    });
}

window.max.bindInlet("moveHalo", function(index, x, z, y) {
    const targetName = `Aureola-${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        max.outlet("halo", index, x, y, z);
    } else {
        max.outlet("halo", index, "not found");
    }
});

window.max.bindInlet("rotateHalo", function(index, x, z, y) {
    const xRotation = x * Math.PI * 2;
    const yRotation = y * Math.PI * 2;
    const zRotation = z * Math.PI * 2;
    const targetName = `Aureola-${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.rotation.set(xRotation, yRotation, zRotation);
        max.outlet("halo", index, xRotation, yRotation, zRotation);
    } else {
        max.outlet("halo", index, "not found");
    }
});

window.max.bindInlet("addSpeaker", function(x, y, z, rx = 0, ry = 0, rz = 0) {
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
    max.outlet(`Speaker ${nome}, ${x}, ${y}, ${z}, rot: ${rx}, ${ry}, ${rz}`);
});

window.max.bindInlet("moveSpeaker", function(index, x, z, y) {
    const targetName = `Altoparlante ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        max.outlet("speaker", index, x, y, z);
    } else {
        max.outlet("speaker", index, "not found");
    }
});

window.max.bindInlet("rotateSpeaker", function(index, x, z, y) {
    const xRotation = x * Math.PI * 2;
    const yRotation = y * Math.PI * 2;
    const zRotation = z * Math.PI * 2;
    const targetName = `Altoparlante ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.rotation.set(xRotation, yRotation, zRotation);
        max.outlet("speaker", index, xRotation, yRotation, zRotation);
    } else {
        max.outlet("speaker", index, "not found");
    }
});

window.max.bindInlet("addSphere", function(x, y, z) {
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
    max.outlet(`Sfera aggiunta: ${nome} in posizione (${x}, ${y}, ${z})`);
});

window.max.bindInlet("moveSphere", function(index, x, z, y) {
    const targetName = `Omnifonte ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        max.outlet("omnifonte", index, x, y, z);
    } else {
        max.outlet("omnifonte", index, "not found");
    }
});

window.max.bindInlet("setSphere", function(index, x, z, y) {
    const targetName = `Omnifonte ${index}`;
    const targetObject = scene.getObjectByName(targetName);
    if (targetObject) {
        targetObject.position.set(x, y, z);
        // Nessun output sugli outlet
    }
});


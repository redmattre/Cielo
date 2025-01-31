import * as THREE from 'three';
import { objToBeDetected, scene } from "./setup";

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

window.max.bindInlet("moveHalo", function(index, x, y, z) {
    // Construct the target object's name based on the index
    max.outlet("move halo");
    const targetName = `Aureola-${index}`;
    
    // Find the object in the scene by its name
    const targetObject = scene.getObjectByName(targetName);
    // If the object exists, move it to the specified position
    if (targetObject) {
        targetObject.position.set(x, y, z);
    }
});

window.max.bindInlet("rotateHalo", function(index, x, y, z) {

    // Map 0-1 range to 0-2π radians (360 degrees)
    const xRotation = x * Math.PI * 2; // 0-1 mapped to 0-360° in radians
    const yRotation = y * Math.PI * 2;
    const zRotation = z * Math.PI * 2;

    // Construct the target object's name based on the index
    const targetName = `Aureola-${index}`;

    // Find the object in the scene by its name
    const targetObject = scene.getObjectByName(targetName);

    // If the object exists, set its rotation
    if (targetObject) {
        targetObject.rotation.set(xRotation, yRotation, zRotation);
        console.log(`Rotated ${targetName} to rotation (${xRotation}, ${yRotation}, ${zRotation})`);
    } else {
        console.error(`Object with name ${targetName} not found in the scene.`);
    }
});
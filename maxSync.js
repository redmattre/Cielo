import { objToBeDetected, scene } from './setup.js';
import { sendSpeakersLoadedToMax, sendOmnifontesLoadedToMax, sendSpeakersUpdatedToMax } from './max.js';
import * as THREE from 'three';

function extractDataByPrefix(prefix) {
    const result = {};
    
    // First, check objects in objToBeDetected (standard behavior)
    objToBeDetected.forEach(obj => {
        if (obj.name && obj.name.startsWith(prefix)) {
            addObjectToResult(obj, result);
        }
    });
    
    // Then, check all scene objects with alwaysInDict flag for this prefix
    scene.traverse(obj => {
        if (obj.alwaysInDict && obj.name && obj.name.startsWith(prefix)) {
            // Only add if not already in result (avoid duplicates)
            const safeName = obj.name.replace(/\s+/g, '_');
            if (!result[safeName]) {
                addObjectToResult(obj, result);
            }
        }
    });
    
    return result;
}

function addObjectToResult(obj, result) {
    // Sostituisci gli spazi con underscore nel nome
    const safeName = obj.name.replace(/\s+/g, '_');

    // Distinzione: per Omnifonte (e POV Cursor) manteniamo comportamento precedente (usa parent se group)
    const isOmniLike = obj.name.startsWith('Omnifonte') || obj.name.startsWith('POV Cursor') || obj.name.startsWith('Orifonte');
    let target = obj;
    if (isOmniLike && obj.parent && obj.parent.type === 'Group') {
        target = obj.parent; // Mantieni semantica esistente per omnifonti/orifonti/pov
    }

    // Per Altoparlanti dentro un gruppo, vogliamo la loro world position reale (non quella del parent)
    // Anche per altri tipi non-omni usiamo direttamente l'oggetto.
    obj.updateMatrixWorld(true);
    const worldPos = new THREE.Vector3();
    obj.getWorldPosition(worldPos);
    const worldQuat = new THREE.Quaternion();
    const worldScale = new THREE.Vector3();
    obj.matrixWorld.decompose(worldPos, worldQuat, worldScale);

    // Rotazioni: estrai Euler dallo quaternion (ordine predefinito Three.js)
    const worldEuler = new THREE.Euler().setFromQuaternion(worldQuat, 'XYZ');

    // Se stiamo usando parent (solo per omni-like), sovrascrivi con parent local transforms come prima
    let positionSource = worldPos;
    let rotationSource = worldEuler;
    let scaleSource = worldScale;
    if (target !== obj) {
        // Comportamento legacy per omnifonte/orifonte/pov cursor
        positionSource = target.position;
        rotationSource = target.rotation;
        scaleSource = target.scale;
    }

    const objData = {
        position: {
            x: positionSource.x,
            y: positionSource.z, // invertito
            z: positionSource.y  // invertito
        },
        rotation: {
            x: rotationSource.x,
            y: rotationSource.z, // invertito
            z: rotationSource.y  // invertito
        },
        scale: {
            x: scaleSource.x,
            y: scaleSource.z, // invertito
            z: scaleSource.y  // invertito
        }
    };

    if (obj.name.startsWith('Omnifonte') || obj.name.startsWith('POV Cursor')) {
        const distance = Math.sqrt(
            positionSource.x * positionSource.x + 
            positionSource.y * positionSource.y + 
            positionSource.z * positionSource.z
        );
        const angle = Math.atan2(positionSource.z, positionSource.x) * 180 / Math.PI;
        objData.distance = distance;
        objData.angle = angle;
    }

    if (obj.name.startsWith('POV Cursor')) {
        objData.visible = target.visible;
    }

    result[safeName] = objData;
}

export function syncMaxDictionaries(notifyLoaded = null) {
    if (!window.max || typeof window.max.setDict !== 'function') return;
    // window.max.outlet(extractDataByPrefix('Altoparlante'));
    // window.max.outlet("è sata chiamata!");
    window.max.setDict('altoparlanti', extractDataByPrefix('Altoparlante'));
    window.max.setDict('omnifonti', extractDataByPrefix('Omnifonte'));
    window.max.setDict('orifonti', extractDataByPrefix('Orifonte'));
    window.max.setDict('zone', extractDataByPrefix('Zona'));
    window.max.setDict('aureole', extractDataByPrefix('Aureola'));
    window.max.setDict('povcursor', extractDataByPrefix('POV Cursor'));
    
    // Invia notifica se richiesto (può essere stringa singola o array)
    const notifications = Array.isArray(notifyLoaded) ? notifyLoaded : [notifyLoaded];
    
    notifications.forEach(notification => {
        if (notification === 'altoparlanti') {
            sendSpeakersLoadedToMax();
        } else if (notification === 'omnifonti') {
            sendOmnifontesLoadedToMax();
        } else if (notification === 'update-altoparlanti') {
            sendSpeakersUpdatedToMax();
        }
    });
}

import { objToBeDetected, scene } from './setup.js';

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
    // Prendi il parent se è un group, altrimenti l'oggetto stesso
    const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
    // Sostituisci gli spazi con underscore nel nome
    const safeName = obj.name.replace(/\s+/g, '_');
    
    const objData = {
        position: {
            x: target.position.x,
            y: target.position.z, // invertito
            z: target.position.y  // invertito
        },
        rotation: {
            x: target.rotation.x,
            y: target.rotation.z, // invertito
            z: target.rotation.y  // invertito
        },
        scale: {
            x: target.scale.x,
            y: target.scale.z, // invertito
            z: target.scale.y  // invertito
        }
    };
    
    // Add special properties for certain object types
    if (obj.name.startsWith('Omnifonte') || obj.name.startsWith('POV Cursor')) {
        // Calculate distance from center (0,0,0)
        const distance = Math.sqrt(
            target.position.x * target.position.x + 
            target.position.y * target.position.y + 
            target.position.z * target.position.z
        );
        
        // Calculate angle in XZ plane (Y is up)
        const angle = Math.atan2(target.position.z, target.position.x) * 180 / Math.PI;
        
        objData.distance = distance;
        objData.angle = angle;
    }
    
    // Add visibility property for POV Cursor
    if (obj.name.startsWith('POV Cursor')) {
        objData.visible = target.visible;
    }
    
    result[safeName] = objData;
}

export function syncMaxDictionaries() {
    if (!window.max || typeof window.max.setDict !== 'function') return;
    // window.max.outlet(extractDataByPrefix('Altoparlante'));
    // window.max.outlet("è sata chiamata!");
    window.max.setDict('altoparlanti', extractDataByPrefix('Altoparlante'));
    window.max.setDict('omnifonti', extractDataByPrefix('Omnifonte'));
    window.max.setDict('orifonti', extractDataByPrefix('Orifonte'));
    window.max.setDict('zone', extractDataByPrefix('Zona'));
    window.max.setDict('aureole', extractDataByPrefix('Aureola'));
    window.max.setDict('povcursor', extractDataByPrefix('POV Cursor'));
}

import { objToBeDetected } from './setup.js';

function extractDataByPrefix(prefix) {
    const result = {};
    objToBeDetected.forEach(obj => {
        if (obj.name && obj.name.startsWith(prefix)) {
            // Prendi il parent se è un group, altrimenti l'oggetto stesso
            const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
            // Sostituisci gli spazi con underscore nel nome
            const safeName = obj.name.replace(/\s+/g, '_');
            result[safeName] = {
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
        }
    });
    return result;
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
}

import { objToBeDetected } from './setup.js';

function extractDataByPrefix(prefix) {
    const result = {};
    objToBeDetected.forEach(obj => {
        if (obj.name && obj.name.startsWith(prefix)) {
            // Prendi il parent se è un group, altrimenti l'oggetto stesso
            const target = obj.parent && obj.parent.type === 'Group' ? obj.parent : obj;
            result[obj.name] = {
                position: {
                    x: target.position.x,
                    y: target.position.y,
                    z: target.position.z
                },
                rotation: {
                    x: target.rotation.x,
                    y: target.rotation.y,
                    z: target.rotation.z
                },
                scale: {
                    x: target.scale.x,
                    y: target.scale.y,
                    z: target.scale.z
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

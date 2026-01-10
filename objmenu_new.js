import { scene, objToBeDetected } from './setup.js';
import { TAG_COLORS, hasTag, toggleTag, initializeTags } from './tagColors.js';
import * as THREE from 'three';
import { undoManager, TransformCommand } from './undoRedo.js';

// Stili CSS minimali per i controlli del menu
const existingStyle = document.getElementById('objmenu-styles');
if (existingStyle) {
    existingStyle.remove();
}

const style = document.createElement('style');
style.id = 'objmenu-styles';
style.textContent = `
        /* Stile base per tutti gli input */
        .menu-control-row {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            padding: 0.25rem 0;
        }
        
        .menu-label {
            font-size: 0.75rem;
            min-width: 50px;
            flex-shrink: 0;
            color: var(--testo);
        }
        
        /* Slider */
        .menu-slider {
            flex: 1;
            min-width: 0;
            max-width: 100%;
            height: 4px;
            -webkit-appearance: none;
            appearance: none;
            background: var(--dettaglio);
            border-radius: 2px;
            outline: none;
            cursor: pointer;
        }
        
        .menu-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 14px;
            height: 14px;
            background: var(--testo);
            border-radius: 2px;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .menu-slider::-webkit-slider-thumb:hover {
            background: var(--fondale);
            outline: 2px solid var(--testo);
        }
        
        .menu-slider::-moz-range-thumb {
            width: 14px;
            height: 14px;
            background: var(--testo);
            border: none;
            border-radius: 2px;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .menu-slider::-moz-range-thumb:hover {
            background: var(--fondale);
            outline: 2px solid var(--testo);
        }
        
        .menu-value {
            font-size: 0.7rem;
            min-width: 40px;
            flex-shrink: 0;
            text-align: right;
            color: var(--testo);
        }
        
        /* Checkbox */
        .menu-checkbox {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            border: 1px solid var(--dettaglio);
            border-radius: 3px;
            background: transparent;
            position: relative;
            transition: all 0.15s;
        }
        
        .menu-checkbox:hover {
            border-color: var(--testo);
        }
        
        .menu-checkbox:checked {
            background: transparent;
            border-color: var(--testo);
        }
        
        .menu-checkbox:checked::after {
            content: '✕';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--testo);
            font-size: 11px;
            font-weight: bold;
            line-height: 1;
        }
        
        /* Numbox */
        .menu-numbox {
            width: 50px;
            flex-shrink: 0;
            padding: 0.2rem 0.3rem;
            background: transparent;
            border: 1px solid var(--dettaglio);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.75rem;
            outline: none;
        }
        
        .menu-numbox:focus {
            border-color: var(--testo);
        }
        
        /* Multitoggle */
        .menu-multitoggle {
            display: flex;
            gap: 0.25rem;
            flex: 1;
            min-width: 0;
        }
        
        .menu-multitoggle-btn {
            flex: 1;
            // min-width: 0;
            height: auto;
            width: auto;
            padding: none;
            margin: 0;
            background: transparent;
            border: 1px solid var(--dettaglio);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.7rem;
            // line-height: 0;
            cursor: pointer;
            transition: all 0.15s;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            // box-sizing: border-box;
        }
        
        .menu-multitoggle-btn:hover {
            background: var(--dettaglio);
        }
        
        .menu-multitoggle-btn.active {
            background: var(--testo);
            color: var(--fondale);
            border-color: var(--testo);
        }
        
        /* Button */
        .menu-button {
            height: 10px;
            width: auto;
            background: var(--fondale);
            border: 1px solid var(--testo);
            border-radius: 4px;
            color: var(--testo);
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.15s;
            user-select: none;
        }
        
        .menu-button:hover {
            background: var(--testo);
            color: var(--fondale);
        }
        
        .menu-button:active {
            transform: scale(0.95);
        }
        
        /* Tags section */
        .submenu-tags-wrapper {
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid var(--dettaglio);
        }
        
        .submenu-tags-label {
            font-size: 0.75rem;
            color: var(--testo);
            margin-bottom: 0.3rem;
        }
        
        .submenu-tags-container {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(2, 18px);
            gap: 0.15rem;
        }
    `;
document.head.appendChild(style);

// --- Configurazione sottomenu per tipo di oggetto ---
// Configurazioni di default (fallback se i JSON non sono disponibili)
const submenuConfigsDefault = {
    omnifonte: {
        title: 'Omnifonte Settings',
        controls: [
            { type: 'slider', label: 'Volume', min: 0, max: 1, step: 0.1, value: 0.8 },
            { type: 'slider', label: 'Distance', min: 0, max: 10, step: 0.1, value: 5.0 },
            { type: 'toggle', label: 'Active', value: true },
            { type: 'numbox', label: 'Channel', value: 1, min: 1, max: 16 },
            { type: 'toggle', label: 'Reverb', value: false }
        ]
    },
    orifonte: {
        title: 'Orifonte Settings', 
        controls: [
            { type: 'slider', label: 'Gain', min: -60, max: 12, step: 1, value: 0 },
            { type: 'slider', label: 'Spread', min: 0, max: 180, step: 5, value: 30 },
            { type: 'toggle', label: 'Enabled', value: true },
            { type: 'numbox', label: 'Input', value: 1, min: 1, max: 8 }
        ]
    },
    altoparlante: {
        title: 'Speaker Settings',
        controls: [
            { type: 'slider', label: 'Level', min: 0, max: 1, step: 0.05, value: 1.0 },
            { type: 'slider', label: 'Delay', min: 0, max: 100, step: 1, value: 0 },
            { type: 'toggle', label: 'Mute', value: false },
            { type: 'numbox', label: 'Output', value: 1, min: 1, max: 32 },
            { type: 'slider', label: 'EQ High', min: -12, max: 12, step: 0.5, value: 0 },
            { type: 'toggle', label: 'Guarda origine', value: true }
        ]
    },
    aureola: {
        title: 'Aureola Settings',
        controls: [
            { type: 'toggle', label: 'Visible', value: true },
            { type: 'slider', label: 'Opacity', min: 0, max: 1, step: 0.1, value: 0.5 },
            { type: 'numbox', label: 'Segments', value: 32, min: 8, max: 64 }
        ]
    },
    zona: {
        title: 'Zone Settings',
        controls: [
            { type: 'toggle', label: 'Active', value: true },
            { type: 'slider', label: 'Size', min: 0.1, max: 5, step: 0.1, value: 1.0 },
            { type: 'numbox', label: 'Priority', value: 1, min: 1, max: 10 }
        ]
    },
    povcursor: {
        title: 'POV Cursor Settings', 
        controls: [
            { type: 'toggle', label: 'Show', value: true },
            { type: 'slider', label: 'Height', min: 0.5, max: 3, step: 0.1, value: 1.2 },
            { type: 'slider', label: 'Speed', min: 0.1, max: 2, step: 0.1, value: 1.0 }
        ]
    }
};

// Configurazioni caricate dinamicamente dai JSON
let submenuConfigs = { ...submenuConfigsDefault };

// Funzione helper per sincronizzare menuState via multi-client
function syncMenuStateToSlaves(object) {
    if (!window.multiClientManager || !object) {
        console.log('[MENU SYNC] multiClientManager o object mancante');
        return;
    }
    
    const objectId = object.userData?.id;
    if (!objectId) {
        console.log('[MENU SYNC] objectId mancante');
        return;
    }
    
    console.log('[MENU SYNC] Sincronizzando menuState:', {
        objectName: object.name,
        isMaster: window.multiClientManager.isMaster,
        syncEnabled: window.multiClientManager.syncEnabled,
        menuState: object.userData?.menuState
    });
    
    // Calcola posizione globale
    object.updateMatrixWorld(true);
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    object.matrixWorld.decompose(position, quaternion, scale);
    
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    
    // Invia trasformazione completa con menuState
    window.multiClientManager.sendTransform(
        objectId,
        { x: position.x, y: position.y, z: position.z },
        { x: euler.x, y: euler.y, z: euler.z },
        { x: scale.x, y: scale.y, z: scale.z },
        object.userData?.tags || null,
        object.userData?.menuState || {}
    );
}

// Funzione helper per creare undo command per cambio parametro menu
function createMenuChangeCommand(object, paramName, oldValue, newValue) {
    const oldMenuState = { ...object.userData.menuState, [paramName]: oldValue };
    const newMenuState = { ...object.userData.menuState, [paramName]: newValue };
    
    const oldState = {
        position: { x: object.position.x, y: object.position.y, z: object.position.z },
        rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
        scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
        tags: object.userData?.tags ? [...object.userData.tags] : [],
        menuState: oldMenuState
    };
    
    const newState = {
        position: { x: object.position.x, y: object.position.y, z: object.position.z },
        rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
        scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
        tags: object.userData?.tags ? [...object.userData.tags] : [],
        menuState: newMenuState
    };
    
    const command = new TransformCommand(object, oldState, newState);
    undoManager.execute(command);
}

// Funzione per caricare le configurazioni dai JSON
async function loadMenuConfigs() {
    const configTypes = ['omnifonte', 'orifonte', 'altoparlante', 'aureola', 'zona', 'povcursor'];
    
    for (const type of configTypes) {
        try {
            // Usa import.meta.env.BASE_URL per gestire correttamente la base path
            const basePath = import.meta.env.BASE_URL || '/';
            const response = await fetch(`${basePath}config/${type}.json`);
            if (response.ok) {
                const config = await response.json();
                
                // Converti il formato JSON nel formato interno
                submenuConfigs[type] = {
                    title: config.title,
                    controls: config.controls.map(ctrl => ({
                        type: ctrl.type,
                        label: ctrl.label,
                        oscName: ctrl.oscName,
                        min: ctrl.min,
                        max: ctrl.max,
                        step: ctrl.step,
                        value: ctrl.defaultValue,
                        options: ctrl.options,  // Per multitoggle
                        defaultValue: ctrl.defaultValue,  // Per multitoggle e reset
                        unitType: ctrl.unitType  // Unità di misura
                    }))
                };
                
                console.log(`✅ Loaded config for ${type}`);
            } else {
                console.warn(`⚠️ Could not load config for ${type}, using default`);
            }
        } catch (error) {
            console.warn(`⚠️ Error loading config for ${type}:`, error);
        }
    }
}

// Carica le configurazioni all'avvio
loadMenuConfigs().then(() => {
    console.log('📋 Menu configurations loaded');
});

// Funzione per determinare il tipo di oggetto dal nome
function getObjectType(objectName) {
    const name = objectName.toLowerCase();
    if (name.includes('omnifonte')) return 'omnifonte';
    if (name.includes('orifonte')) return 'orifonte'; 
    if (name.includes('altoparlante')) return 'altoparlante';
    if (name.includes('aureola') || name.includes('cloud')) return 'aureola';
    if (name.includes('zona')) return 'zona';
    if (name.includes('pov cursor')) return 'povcursor';
    return 'default';
}

// Funzione helper per aggiornare il toggle UI di un oggetto
function updateToggleInMenu(object, paramName, value) {
    // Accesso diretto al submenu tramite riferimento salvato
    const submenu = object.userData?._submenuElement;
    if (!submenu) return; // Submenu non ancora creato
    
    // Trova il checkbox con il paramName
    const toggle = submenu.querySelector(`input[type="checkbox"][data-param="${paramName}"]`);
    if (toggle) {
        toggle.checked = value;
    }
}

// Funzione per orientare gli altoparlanti verso il centro rialzato
function orientSpeakerToCenter(object, enable = true) {
    if (!object || !object.lookAt) return;
    
    if (enable) {
        // Target: centro rialzato a y = 1.2 (altezza in Three.js)
        const target = { x: 0, y: 1.2, z: 0 };
        object.lookAt(target.x, target.y, target.z);
        
        // Memorizza che questo oggetto ha la rotazione automatica attiva
        object.userData = object.userData || {};
        object.userData.autoRotateToCenter = true;
        
        console.log(`${object.name} oriented to center (0, 1.2, 0)`);
    } else {
        // Disabilita la rotazione automatica e ripristina rotazione di default
        if (object.userData) {
            object.userData.autoRotateToCenter = false;
        }
        
        // Ripristina la rotazione di default (0, 0, 0)
        object.rotation.set(0, 0, 0);
        console.log(`${object.name} auto-rotation disabled, reset to default rotation (0, 0, 0)`);
    }
}

// Funzione per applicare automaticamente la rotazione dopo movimento
function applyAutoRotationIfEnabled(object) {
    if (!object || !object.userData || !object.userData.autoRotateToCenter) return;
    
    // Controlla se è un altoparlante
    if (!object.name || !(/Altoparlante/i).test(object.name)) return;
    
    // Applica la rotazione verso il centro rialzato
    const target = { x: 0, y: 1.2, z: 0 };
    object.lookAt(target.x, target.y, target.z);
    
    console.log(`Auto-rotation applied to ${object.name} -> (0, 1.2, 0)`);
}

// Funzione per inizializzare il flag "guarda origine" per tutti gli altoparlanti esistenti
function initializeAutoRotationForExistingSpeakers() {
    // Ottieni tutti gli oggetti nella scena
    const allObjects = objToBeDetected || [];
    
    allObjects.forEach(object => {
        // Controlla se è un altoparlante
        if (object.name && (/Altoparlante/i).test(object.name)) {
            // Se non ha ancora userData o il flag, imposta il comportamento di default
            object.userData = object.userData || {};
            if (object.userData.autoRotateToCenter === undefined) {
                object.userData.autoRotateToCenter = true; // Default: attivo
                
                // Applica immediatamente la rotazione verso il centro
                orientSpeakerToCenter(object, true);
                console.log(`Initialized auto-rotation for existing speaker: ${object.name}`);
            }
        }
    });
}

// Funzione per controllo globale del look at di tutti gli altoparlanti
function setGlobalSpeakerLookAt(enabled) {
    // Ottieni tutti gli altoparlanti nella scena
    const allSpeakers = objToBeDetected.filter(obj => 
        obj.name && (/Altoparlante/i).test(obj.name)
    );
    
    console.log(`Setting global look at to ${enabled} for ${allSpeakers.length} speakers`);
    
    allSpeakers.forEach(speaker => {
        // Applica la funzione orientSpeakerToCenter a ogni altoparlante
        orientSpeakerToCenter(speaker, enabled);
    });
    
    // Aggiorna visivamente i toggle individuali nel menu di sinistra
    updateIndividualTogglesVisually(enabled);
    
    console.log(`Global speaker look at ${enabled ? 'enabled' : 'disabled'} for all speakers`);
}

// Funzione per aggiornare visivamente i toggle individuali nel menu
function updateIndividualTogglesVisually(globalState) {
    // Trova tutti i toggle "Guarda origine" nei submenu degli altoparlanti
    const toggles = document.querySelectorAll('input[type="checkbox"]');
    
    toggles.forEach(toggle => {
        // Trova il toggle che appartiene a un controllo "Guarda origine"
        const container = toggle.closest('div');
        if (container) {
            const label = container.querySelector('label');
            if (label && label.textContent === 'Guarda origine') {
                toggle.checked = globalState;
                console.log(`Updated individual toggle for speaker to: ${globalState}`);
            }
        }
    });
}

// Funzione per controllo globale della visibilità di tutti gli altoparlanti
function setGlobalSpeakerVisibility(visible) {
    // Ottieni tutti gli altoparlanti nella scena
    const allSpeakers = objToBeDetected.filter(obj => 
        obj.name && (/Altoparlante/i).test(obj.name)
    );
    
    console.log(`Setting global visibility to ${visible} for ${allSpeakers.length} speakers`);
    
    allSpeakers.forEach(speaker => {
        speaker.visible = visible;
        console.log(`Speaker ${speaker.name} visibility set to: ${visible}`);
    });
    
    console.log(`Global speaker visibility ${visible ? 'enabled' : 'disabled'} for all speakers`);
}

// Esporta le funzioni per uso globale
// Funzione per aggiornare l'UI del menu per un oggetto specifico
export function updateMenuForObject(targetObject) {
    if (!targetObject) return;
    
    console.log('Updating menu for:', targetObject.name, 'menuState:', targetObject.userData.menuState);
    
    // Trova l'header del menu nella menuObjectMap
    const menuHeader = window.menuObjectMap?.get(targetObject);
    if (!menuHeader) {
        console.log('No menu header found for:', targetObject.name);
        return;
    }
    
    // Il submenu è il fratello successivo del header (dentro item-container)
    const itemContainer = menuHeader.parentElement;
    const submenu = itemContainer?.querySelector('.submenu');
    
    if (!submenu) {
        console.log('No submenu found for:', targetObject.name);
        return;
    }
    
    // Aggiorna i controlli esistenti con i valori da menuState
    const menuState = targetObject.userData.menuState || {};
    
    // Aggiorna tutti gli slider
    const sliders = submenu.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        // Trova il nome del parametro dal container padre o dai dati
        const container = slider.closest('.menu-control-row');
        const label = container?.querySelector('.menu-label');
        if (label) {
            // Cerca il parametro corrispondente in menuState
            // Usa l'attributo data-param se esiste, altrimenti cerca per label
            const paramName = slider.dataset.param;
            if (paramName && menuState[paramName] !== undefined) {
                slider.value = menuState[paramName];
                const valueDisplay = container.querySelector('.menu-value');
                if (valueDisplay) {
                    const unit = slider.dataset.unit || '';
                    valueDisplay.textContent = parseFloat(menuState[paramName]).toFixed(2) + unit;
                }
                console.log(`Updated slider ${paramName}: ${menuState[paramName]}`);
            }
        }
    });
    
    // Aggiorna tutti i checkbox/toggle
    const checkboxes = submenu.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const container = checkbox.closest('.menu-control-row');
        const label = container?.querySelector('label');
        const paramName = checkbox.dataset.param;
        
        if (paramName && menuState[paramName] !== undefined) {
            checkbox.checked = menuState[paramName];
            console.log(`Updated checkbox ${paramName}: ${menuState[paramName]}`);
        }
    });
    
    // Aggiorna tutti i numbox
    const numboxes = submenu.querySelectorAll('input[type="number"]');
    numboxes.forEach(numbox => {
        const paramName = numbox.dataset.param;
        if (paramName && menuState[paramName] !== undefined) {
            numbox.value = menuState[paramName];
            console.log(`Updated numbox ${paramName}: ${menuState[paramName]}`);
        }
    });
    
    // Aggiorna tutti i multitoggle
    const multitoggleButtons = submenu.querySelectorAll('.menu-multitoggle-btn');
    const multitoggleGroups = new Map(); // Raggruppa per param
    
    multitoggleButtons.forEach(btn => {
        const paramName = btn.dataset.param;
        if (!multitoggleGroups.has(paramName)) {
            multitoggleGroups.set(paramName, []);
        }
        multitoggleGroups.get(paramName).push(btn);
    });
    
    // Per ogni gruppo, attiva il bottone corretto
    multitoggleGroups.forEach((buttons, paramName) => {
        if (menuState[paramName] !== undefined) {
            const targetValue = menuState[paramName];
            buttons.forEach(btn => {
                const btnValue = parseFloat(btn.dataset.value);
                if (btnValue === targetValue) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            console.log(`Updated multitoggle ${paramName}: ${targetValue}`);
        }
    });
    
    console.log('Menu updated successfully');
}

window.applyAutoRotationIfEnabled = applyAutoRotationIfEnabled;
window.initializeAutoRotationForExistingSpeakers = initializeAutoRotationForExistingSpeakers;
window.setGlobalSpeakerLookAt = setGlobalSpeakerLookAt;
window.setGlobalSpeakerVisibility = setGlobalSpeakerVisibility;
window.orientSpeakerToCenter = orientSpeakerToCenter;
window.updateMenuForObject = updateMenuForObject;

// Funzioni per creare i controlli del sottomenu
function createSlider(config, object) {
    const container = document.createElement('div');
    container.className = 'menu-control-row';
    
    const label = document.createElement('label');
    label.className = 'menu-label';
    label.textContent = config.label;
    
    // Inizializza menuState se non esiste
    if (!object.userData.menuState) {
        object.userData.menuState = {};
    }
    
    // Leggi il valore da userData.menuState o usa il default
    const savedValue = object.userData.menuState[config.oscName];
    const currentValue = savedValue !== undefined ? savedValue : config.value;
    
    // Se non esiste, salva il default in menuState (importante per undo)
    if (savedValue === undefined) {
        object.userData.menuState[config.oscName] = config.value;
    }
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.className = 'menu-slider';
    slider.min = config.min;
    slider.max = config.max;
    slider.step = config.step;
    slider.value = currentValue;
    slider.dataset.param = config.oscName; // Per identificarlo in updateMenuForObject
    slider.dataset.unit = config.unitType || ''; // Per aggiornare l'unità
    
    const valueDisplay = document.createElement('span');
    valueDisplay.className = 'menu-value';
    const unit = config.unitType || '';
    valueDisplay.textContent = parseFloat(currentValue).toFixed(2) + unit;
    
    // Salva stato iniziale per undo quando inizia il drag
    let initialMenuState = null;
    slider.addEventListener('mousedown', () => {
        initialMenuState = { ...object.userData.menuState };
        
        // Richiedi ruolo master se necessario (come per transform controls)
        if (window.multiClientManager?.isEnabled && !window.multiClientManager?.isMaster) {
            console.log('[MENU SLIDER] Richiedo ruolo master...');
            window.multiClientManager.requestMaster();
        }
    });
    
    // Crea comando undo quando finisce il drag
    slider.addEventListener('mouseup', () => {
        if (initialMenuState && JSON.stringify(initialMenuState) !== JSON.stringify(object.userData.menuState)) {
            const newMenuState = { ...object.userData.menuState };
            
            // Crea command con solo menuState cambiato
            const oldState = {
                position: { x: object.position.x, y: object.position.y, z: object.position.z },
                rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
                scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
                tags: object.userData?.tags ? [...object.userData.tags] : [],
                menuState: initialMenuState
            };
            
            const newState = {
                position: { x: object.position.x, y: object.position.y, z: object.position.z },
                rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
                scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
                tags: object.userData?.tags ? [...object.userData.tags] : [],
                menuState: newMenuState
            };
            
            const command = new TransformCommand(object, oldState, newState);
            undoManager.execute(command);
        }
        initialMenuState = null;
    });
    
    slider.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        valueDisplay.textContent = value.toFixed(2) + unit;
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = value;
        
        // Invia messaggio OSC
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: value
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    // Doppio click per reset
    slider.addEventListener('dblclick', () => {
        const defaultValue = parseFloat(config.value);
        slider.value = defaultValue;
        valueDisplay.textContent = defaultValue.toFixed(2) + unit;
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = defaultValue;
        
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: defaultValue
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    container.appendChild(label);
    container.appendChild(slider);
    container.appendChild(valueDisplay);
    return container;
}

function createToggle(config, object) {
    const container = document.createElement('div');
    container.className = 'menu-control-row';
    
    const label = document.createElement('label');
    label.className = 'menu-label';
    label.textContent = config.label;
    
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.className = 'menu-checkbox';
    toggle.dataset.param = config.oscName; // Per identificarlo in updateMenuForObject
    
    // Inizializza menuState se non esiste
    if (!object.userData.menuState) {
        object.userData.menuState = {};
    }
    
    // Per il toggle "Guarda origine" / "Look at Origin", leggi il valore dall'oggetto
    const isLookAtOrigin = (config.label === 'Guarda origine' || config.label === 'Look at Origin') && 
                           getObjectType(object.name) === 'altoparlante';
    
    if (isLookAtOrigin) {
        object.userData = object.userData || {};
        if (object.userData.autoRotateToCenter === undefined) {
            object.userData.autoRotateToCenter = config.value;
        }
        toggle.checked = object.userData.autoRotateToCenter;
    } else {
        // Leggi da menuState o usa default
        const savedValue = object.userData.menuState[config.oscName];
        toggle.checked = savedValue !== undefined ? savedValue : config.value;
        
        // Se non esiste, salva il default in menuState (importante per undo)
        if (savedValue === undefined) {
            object.userData.menuState[config.oscName] = config.value;
        }
    }
    
    toggle.addEventListener('change', (e) => {
        const value = e.target.checked;
        const oldValue = object.userData.menuState[config.oscName];
        
        // Richiedi ruolo master se necessario
        if (window.multiClientManager?.isEnabled && !window.multiClientManager?.isMaster) {
            console.log('[MENU TOGGLE] Richiedo ruolo master...');
            window.multiClientManager.requestMaster();
        }
        
        // Flag per sapere se abbiamo già mandato il messaggio OSC
        let oscAlreadySent = false;
        
        // Gestione speciale per SOLO esclusivo
        if (config.oscName === 'solo') {
            const currentObjectType = getObjectType(object.name);
            
            if (value) {
                // ATTIVAZIONE SOLO - disattiva tutti gli altri solo dello stesso tipo
                scene.children.forEach(obj => {
                    if (obj !== object && obj.userData?.menuState?.solo !== undefined) {
                        const objType = getObjectType(obj.name);
                        
                        // Invia OSC solo 0 a tutti dello stesso tipo (eccetto quello corrente)
                        if (objType === currentObjectType && window.messageBroker) {
                            const match = obj.name.match(/(\d+)$/);
                            const idx = match ? parseInt(match[1], 10) : 1;
                            window.messageBroker.sendCustomParameter({
                                type: objType,
                                index: idx,
                                paramName: 'solo',
                                value: 0
                            });
                        }
                        
                        // Disattiva menuState degli altri solo dello stesso tipo
                        if (objType === currentObjectType && obj.userData.menuState.solo === true) {
                            obj.userData.menuState.solo = false;
                            // Aggiorna UI solo se il submenu è visibile
                            updateToggleInMenu(obj, 'solo', false);
                            
                            // Crea undo command per l'oggetto che viene disattivato
                            createMenuChangeCommand(obj, 'solo', true, false);
                        }
                    }
                });
            } else {
                // DISATTIVAZIONE SOLO - tutti dello stesso tipo mandano solo 1
                scene.children.forEach(obj => {
                    if (obj.userData?.menuState?.solo !== undefined) {
                        const objType = getObjectType(obj.name);
                        if (objType === currentObjectType && window.messageBroker) {
                            const match = obj.name.match(/(\d+)$/);
                            const idx = match ? parseInt(match[1], 10) : 1;
                            window.messageBroker.sendCustomParameter({
                                type: objType,
                                index: idx,
                                paramName: 'solo',
                                value: 1
                            });
                        }
                    }
                });
                // Abbiamo già mandato il messaggio per l'oggetto corrente nel loop sopra
                oscAlreadySent = true;
            }
        }
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = value;
        
        // Crea undo command
        if (oldValue !== value) {
            createMenuChangeCommand(object, config.oscName, oldValue, value);
        }
        
        // Gestione speciale per il toggle "Guarda origine"/"Look at Origin" degli altoparlanti
        if (isLookAtOrigin) {
            orientSpeakerToCenter(object, value);
        }
        
        // Invia messaggio OSC solo se c'è oscName definito E non è già stato mandato
        if (window.messageBroker && config.oscName && !oscAlreadySent) {
            const objectType = getObjectType(object.name);
            // Estrai index dal nome (es: "Omnifonte 3" -> 3)
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            // Invia: /cielo/{type}/{index}/{oscName} 0|1
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: value ? 1 : 0
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    container.appendChild(label);
    container.appendChild(toggle);
    return container;
}

function createButton(config, object) {
    const container = document.createElement('div');
    container.className = 'menu-control-row';
    
    const button = document.createElement('button');
    button.className = 'menu-button';
    button.textContent = config.label;
    
    // Mouse down: invia 1
    button.addEventListener('mousedown', (e) => {
        e.preventDefault();
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: 1
            });
        }
    });
    
    // Mouse up: invia 0
    button.addEventListener('mouseup', (e) => {
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: 0
            });
        }
    });
    
    // Mouse leave mentre premuto: invia 0
    button.addEventListener('mouseleave', (e) => {
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: 0
            });
        }
    });
    
    container.appendChild(button);
    return container;
}

function createNumbox(config, object) {
    const container = document.createElement('div');
    container.className = 'menu-control-row';
    
    const label = document.createElement('label');
    label.className = 'menu-label';
    label.textContent = config.label;
    
    // Inizializza menuState se non esiste
    if (!object.userData.menuState) {
        object.userData.menuState = {};
    }
    
    // Leggi da menuState o usa default
    const savedValue = object.userData.menuState[config.oscName];
    const currentValue = savedValue !== undefined ? savedValue : config.value;
    
    // Se non esiste, salva il default in menuState (importante per undo)
    if (savedValue === undefined) {
        object.userData.menuState[config.oscName] = config.value;
    }
    
    const numbox = document.createElement('input');
    numbox.type = 'number';
    numbox.className = 'menu-numbox';
    numbox.value = currentValue;
    numbox.min = config.min || '';
    numbox.max = config.max || '';
    numbox.dataset.param = config.oscName; // Per identificarlo in updateMenuForObject
    
    const unit = config.unitType || '';
    const valueDisplay = document.createElement('span');
    valueDisplay.className = 'menu-value';
    if (unit) valueDisplay.textContent = unit;
    
    numbox.addEventListener('change', (e) => {
        const value = parseInt(e.target.value, 10);
        const oldValue = object.userData.menuState[config.oscName];
        
        // Richiedi ruolo master se necessario
        if (window.multiClientManager?.isEnabled && !window.multiClientManager?.isMaster) {
            console.log('[MENU NUMBOX] Richiedo ruolo master...');
            window.multiClientManager.requestMaster();
        }
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = value;
        
        // Crea undo command
        if (oldValue !== value) {
            createMenuChangeCommand(object, config.oscName, oldValue, value);
        }
        
        // Invia messaggio OSC
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: value
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    // Doppio click per reset
    numbox.addEventListener('dblclick', () => {
        const defaultValue = parseInt(config.value, 10);
        numbox.value = defaultValue;
        
        // Richiedi ruolo master se necessario
        if (window.multiClientManager?.isEnabled && !window.multiClientManager?.isMaster) {
            console.log('[MENU NUMBOX RESET] Richiedo ruolo master...');
            window.multiClientManager.requestMaster();
        }
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = defaultValue;
        
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: defaultValue
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    container.appendChild(label);
    container.appendChild(numbox);
    if (unit) container.appendChild(valueDisplay);
    return container;
}

function createMultitoggle(config, object) {
    const container = document.createElement('div');
    container.style.marginBottom = '0.3rem';
    
    const label = document.createElement('div');
    label.className = 'menu-label';
    label.textContent = config.label;
    label.style.marginBottom = '0.3rem';
    label.style.fontSize = '0.75rem';
    
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'menu-multitoggle';
    
    // Inizializza menuState se non esiste
    if (!object.userData.menuState) {
        object.userData.menuState = {};
    }
    
    const buttons = [];
    const options = config.options || [];
    const savedValue = object.userData.menuState[config.oscName];
    const currentValue = savedValue !== undefined ? savedValue : (config.defaultValue || 0);
    
    // Se non esiste, salva il default in menuState (importante per undo)
    if (savedValue === undefined) {
        object.userData.menuState[config.oscName] = config.defaultValue || 0;
    }
    
    options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option.label;
        btn.className = 'menu-multitoggle-btn';
        btn.dataset.param = config.oscName; // Per identificarlo in updateMenuForObject
        btn.dataset.value = option.value !== undefined ? option.value : idx; // Salva il valore
        
        const isActive = (option.value === currentValue) || (idx === currentValue);
        if (isActive) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            // Deseleziona tutti
            buttons.forEach(b => b.classList.remove('active'));
            
            // Seleziona questo
            btn.classList.add('active');
            
            const selectedValue = option.value !== undefined ? option.value : idx;
            const oldValue = object.userData.menuState[config.oscName];
            
            // Salva in userData.menuState
            object.userData.menuState[config.oscName] = selectedValue;
            
            // Crea undo command
            if (oldValue !== selectedValue) {
                createMenuChangeCommand(object, config.oscName, oldValue, selectedValue);
            }
            
            // Invia messaggio OSC
            if (window.messageBroker && config.oscName) {
                const objectType = getObjectType(object.name);
                const match = object.name.match(/(\d+)$/);
                const index = match ? parseInt(match[1], 10) : 1;
                
                window.messageBroker.sendCustomParameter({
                    type: objectType,
                    index: index,
                    paramName: config.oscName,
                    value: selectedValue
                });
            }
            
            // Sincronizza via multi-client
            syncMenuStateToSlaves(object);
        });
        
        buttons.push(btn);
        buttonsContainer.appendChild(btn);
    });
    
    // Doppio click per reset
    buttonsContainer.addEventListener('dblclick', () => {
        const defaultValue = config.defaultValue || 0;
        
        options.forEach((option, idx) => {
            const isDefault = (option.value === defaultValue) || (idx === defaultValue);
            const btn = buttons[idx];
            
            if (isDefault) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Salva in userData.menuState
        object.userData.menuState[config.oscName] = defaultValue;
        
        if (window.messageBroker && config.oscName) {
            const objectType = getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            window.messageBroker.sendCustomParameter({
                type: objectType,
                index: index,
                paramName: config.oscName,
                value: defaultValue
            });
        }
        
        // Sincronizza via multi-client
        syncMenuStateToSlaves(object);
    });
    
    container.appendChild(label);
    container.appendChild(buttonsContainer);
    return container;
}

// Crea selettore tag per submenu (sincronizzato con context menu)
function createTagsSelector(object) {
    const wrapper = document.createElement('div');
    wrapper.className = 'submenu-tags-wrapper';
    
    const label = document.createElement('div');
    label.className = 'submenu-tags-label';
    label.textContent = 'Tags';
    
    const container = document.createElement('div');
    container.className = 'submenu-tags-container';
    
    wrapper.appendChild(label);
    wrapper.appendChild(container);
    
    // Store reference
    wrapper._container = container;
    wrapper._object = object;
    
    // Inizializza grid
    updateTagsGrid(wrapper);
    
    return wrapper;
}

// Aggiorna grid tag
function updateTagsGrid(wrapper) {
    const container = wrapper._container;
    const object = wrapper._object;
    
    if (!object) return;
    
    initializeTags(object);
    container.innerHTML = '';
    
    // Mostra tutti i tag da 1 a 16 (no pagination)
    for (let tagNum = 1; tagNum <= 16; tagNum++) {
        const chip = document.createElement('button');
        chip.textContent = tagNum;
        chip.dataset.tag = tagNum;
        
        const isActive = hasTag(object, tagNum);
        const color = TAG_COLORS[tagNum];
        
        chip.style.cssText = `
            width: 100%;
            height: 18px;
            border-radius: 3px;
            border: none;
            margin: 0;
            padding: 0;
            font-size: 0.6rem;
            font-weight: bold;
            cursor: pointer;
            transition: opacity 0.15s;
            background-color: ${color};
            color: #000;
            opacity: ${isActive ? '1' : '0.3'};
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        chip.addEventListener('click', () => {
            if (window.multiClientManager?.isEnabled && !window.multiClientManager?.isMaster) {
                window.multiClientManager.requestMaster();
            }
            
            // Salva stato precedente per undo
            const oldTags = [...object.userData.tags];
            const oldState = {
                position: { x: object.position.x, y: object.position.y, z: object.position.z },
                rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
                scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
                tags: oldTags,
                menuState: object.userData?.menuState ? { ...object.userData.menuState } : {}
            };
            
            toggleTag(object, tagNum);
            const newState = hasTag(object, tagNum);
            chip.style.opacity = newState ? '1' : '0.3';
            
            // Crea comando undo con i nuovi tag
            const newStateForUndo = {
                position: { x: object.position.x, y: object.position.y, z: object.position.z },
                rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
                scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
                tags: [...object.userData.tags],
                menuState: object.userData?.menuState ? { ...object.userData.menuState } : {}
            };
            
            if (window.undoManager && window.TransformCommand) {
                const command = new window.TransformCommand(object, oldState, newStateForUndo);
                window.undoManager.execute(command);
                console.log('[UNDO] Tag modificato, comando salvato. Tags:', oldTags, '->', object.userData.tags);
            }
            
            // Invia messaggio OSC
            if (window.messageBroker) {
                window.messageBroker.sendObjectTags({
                    name: object.name,
                    type: null,
                    tags: object.userData.tags || [0]
                });
            }
            
            // Sync con context menu
            if (window.updateTagsChipsExternal) {
                window.updateTagsChipsExternal(object);
            }
        });
        
        container.appendChild(chip);
    }
}

function createSubmenu(object) {
    const objectType = getObjectType(object.name);
    const config = submenuConfigs[objectType];
    
    if (!config) return null;
    
    const submenu = document.createElement('div');
    submenu.className = 'submenu';
    submenu.style.display = 'none';
    submenu.style.background = 'var(--fondale)';
    submenu.style.border = '1px solid var(--dettaglio)';
    submenu.style.borderTop = 'none';
    submenu.style.borderRadius = '0 0 10px 10px';
    submenu.style.padding = '0.4rem';
    submenu.style.marginBottom = '0.5rem';
    
    // Controlli (senza titolo)
    config.controls.forEach(controlConfig => {
        let control;
        switch (controlConfig.type) {
            case 'slider':
                control = createSlider(controlConfig, object);
                break;
            case 'toggle':
                control = createToggle(controlConfig, object);
                // Applica automaticamente la rotazione per "Guarda origine" se attivo di default
                if (controlConfig.label === 'Guarda origine' && controlConfig.value === true && 
                    getObjectType(object.name) === 'altoparlante') {
                    orientSpeakerToCenter(object, true);
                }
                break;
            case 'numbox':
                control = createNumbox(controlConfig, object);
                break;
            case 'multitoggle':
                control = createMultitoggle(controlConfig, object);
                break;
            case 'button':
                control = createButton(controlConfig, object);
                break;
        }
        if (control) submenu.appendChild(control);
    });
    
    // Aggiungi selettore tag in fondo
    const tagsSelector = createTagsSelector(object);
    submenu.appendChild(tagsSelector);
    
    // Store reference per aggiornamenti
    submenu._tagsSelector = tagsSelector;
    
    return submenu;
}

export function createMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    // Pulisci la mappa precedente
    if (window.menuObjectMap) {
        window.menuObjectMap.clear();
    }

    // --- Configurazione categorie ---
    const categories = [
        { key: 'fonti', label: 'F' },
        { key: 'halo', label: 'H' },
        { key: 'altoparlanti', label: 'A' },
        { key: 'zone', label: 'Z' },
        { key: 'povcursor', label: 'P' }
    ];

    let selectedCategory = localStorage.getItem('cielo_menu_category') || 'fonti';

    // --- Creazione barra categorie ---
    const bar = document.createElement('div');
    bar.className = 'menuCatBar'; // Aggiungiamo la classe CSS
    bar.style.display = 'flex';
    bar.style.gap = '0.3rem';
    bar.style.marginBottom = '1rem';
    bar.style.justifyContent = 'flex-start';
    bar.style.alignItems = 'flex-end';
    bar.style.height = '1.7rem';
    bar.style.position = 'relative';

    const btns = [];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat.label;
        btn.style.padding = '0 0.5rem';
        btn.style.height = '1.4rem';
        btn.style.minWidth = '1.4rem';
        btn.style.fontSize = '0.95rem';
        btn.style.fontWeight = 'bold';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.borderRadius = '0';
        btn.style.color = selectedCategory === cat.key ? 'var(--dettaglio)' : 'var(--testo)';
        btn.style.opacity = selectedCategory === cat.key ? '0.85' : '0.45';
        btn.style.position = 'relative';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'color 0.2s, opacity 0.2s';
        btn.classList.toggle('menuCatActive', selectedCategory === cat.key);
        btn.classList.add('menuCatBtn');

        btn.addEventListener('click', () => {
            // Anima lo slider prima di cambiare categoria
            const newCategory = cat.key;
            if (newCategory !== selectedCategory) {
                // Trova il bottone cliccato per l'animazione
                const clickedBtnIndex = categories.findIndex(c => c.key === newCategory);
                if (btns[clickedBtnIndex]) {
                    const clickedBtn = btns[clickedBtnIndex];
                    const newLeft = clickedBtn.offsetLeft + clickedBtn.offsetWidth * 0.1;
                    const newWidth = clickedBtn.offsetWidth * 0.8;
                    
                    // Anima lo slider
                    const currentIndicator = bar.querySelector('.menuCatSlider');
                    if (currentIndicator) {
                        currentIndicator.style.left = newLeft + 'px';
                        currentIndicator.style.width = newWidth + 'px';
                    }
                }
                
                // Attendi l'animazione prima di ricreare il menu
                setTimeout(() => {
                    localStorage.setItem('cielo_menu_category', newCategory);
                    createMenu(); // Ricrea tutto il menu
                }, 150); // Metà dell'animazione (0.28s)
            }
        });

        bar.appendChild(btn);
        btns.push(btn);
    });

    // --- Sliding Indicator (versione sistemata) ---
    const indicator = document.createElement('div');
    indicator.className = 'menuCatSlider';
    indicator.style.position = 'absolute';
    indicator.style.height = '0.13rem';
    indicator.style.background = 'var(--dettaglio)';
    indicator.style.borderRadius = '2px';
    indicator.style.bottom = '-0.25rem';
    indicator.style.zIndex = '2';
    indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';

    bar.appendChild(indicator);
    menuList.appendChild(bar);

    // Posiziona l'indicatore DOPO che la barra è nel DOM
    requestAnimationFrame(() => {
        const idx = categories.findIndex(c => c.key === selectedCategory);
        if (btns[idx]) {
            const btn = btns[idx];
            const newLeft = btn.offsetLeft + btn.offsetWidth * 0.1;
            const newWidth = btn.offsetWidth * 0.8;
            
            // Imposta la posizione iniziale senza transizione per evitare animazioni indesiderate
            indicator.style.transition = 'none';
            indicator.style.left = newLeft + 'px';
            indicator.style.width = newWidth + 'px';
            
            // Riattiva la transizione per future animazioni
            setTimeout(() => {
                indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';
            }, 50);
        }
    });

    // --- Filtra oggetti in base alla categoria selezionata ---
    let filterFn;
    if (selectedCategory === 'fonti') {
        filterFn = obj => obj.name && (/Omnifonte|Orifonte/i).test(obj.name);
    } else if (selectedCategory === 'halo') {
        filterFn = obj => obj.name && (/Aureola|Cloud/i).test(obj.name);
    } else if (selectedCategory === 'altoparlanti') {
        filterFn = obj => obj.name && (/Altoparlante/i).test(obj.name);
        // Inizializza il comportamento auto-rotazione per tutti gli altoparlanti esistenti
        initializeAutoRotationForExistingSpeakers();
    } else if (selectedCategory === 'zone') {
        filterFn = obj => obj.name && (/Zona|Zone/i).test(obj.name);
    } else if (selectedCategory === 'povcursor') {
        filterFn = obj => obj.name && (/POV Cursor/i).test(obj.name);
    } else {
        filterFn = () => true;
    }

    const filteredObjects = objToBeDetected.filter(filterFn);

    // --- Contenuto espandibile: lista oggetti con sottomenu ---
    // Creiamo una mappa globale per la sincronizzazione con raycaster
    window.menuObjectMap = new Map();
    
    filteredObjects.forEach((object) => {
        // Container principale per elemento + sottomenu
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        itemContainer.style.marginBottom = '0.5rem';

        // Elemento principale (header)
        const itemList = document.createElement('div');
        itemList.className = 'itemList';
        itemList.style.height = '2rem';
        itemList.style.display = 'flex';
        itemList.style.alignItems = 'center';
        itemList.style.padding = '0';
        itemList.style.background = 'var(--fondale)';
        itemList.style.border = '1px solid var(--dettaglio)';
        itemList.style.borderRadius = '5px';
        itemList.style.cursor = 'pointer';
        itemList.style.transition = 'border-color 0.2s, box-shadow 0.2s, border-radius 0.2s';

        // Contenitore per nome oggetto
        const nameContainer = document.createElement('div');
        nameContainer.style.flex = '1';
        nameContainer.style.overflow = 'hidden';
        nameContainer.style.textOverflow = 'ellipsis';
        nameContainer.style.whiteSpace = 'nowrap';
        nameContainer.style.padding = '0.5rem';
        nameContainer.textContent = object.name || 'Unnamed';

        // Indicatore espansione (freccia)
        const expandIcon = document.createElement('div');
        expandIcon.textContent = '▶';
        expandIcon.style.padding = '0.5rem';
        expandIcon.style.fontSize = '0.8rem';
        expandIcon.style.transition = 'transform 0.2s';
        expandIcon.style.userSelect = 'none';

        itemList.appendChild(nameContainer);
        itemList.appendChild(expandIcon);

        // Crea il sottomenu
        const submenu = createSubmenu(object);
        let isExpanded = false;
        
        // Salva riferimento al submenu nell'oggetto per accesso diretto
        if (submenu) {
            object.userData._submenuElement = submenu;
        }

        // Click per espansione (separato dal hover)
        itemList.addEventListener('click', (e) => {
            e.stopPropagation();
            isExpanded = !isExpanded;
            
            if (submenu) {
                if (isExpanded) {
                    submenu.style.display = 'block';
                    expandIcon.style.transform = 'rotate(90deg)';
                    itemList.style.borderRadius = '5px 5px 0 0';
                } else {
                    submenu.style.display = 'none';
                    expandIcon.style.transform = 'rotate(0deg)';
                    itemList.style.borderRadius = '5px';
                }
            }
        });

        // Assembla il container
        itemContainer.appendChild(itemList);
        if (submenu) {
            itemContainer.appendChild(submenu);
        }
        menuList.appendChild(itemContainer);

        // Memorizza la mappatura oggetto -> elemento menu per il raycaster
        window.menuObjectMap.set(object, itemList);

        // --- Interazioni con raycaster (mantenute, solo hover non click) ---
        itemList.addEventListener('mouseenter', () => {
            itemList.classList.add('itemList-hover');
            
            // Attiva outline sull'oggetto corrispondente
            if (window.setMenuOutline) {
                window.setMenuOutline(object, true);
            }
        });

        itemList.addEventListener('mouseleave', () => {
            itemList.classList.remove('itemList-hover');
            
            // Disattiva outline sull'oggetto corrispondente
            if (window.setMenuOutline) {
                window.setMenuOutline(object, false);
            }
        });
    });
}

// Funzione di aggiornamento semplificata (non più necessaria con il nuovo design)
export function updateMenu() {
    // Nel nuovo design non abbiamo campi da aggiornare,
    // ma manteniamo la funzione per compatibilità
    console.log('updateMenu called - no action needed in simplified menu');
}

// Funzione per aggiornare i tag nel submenu quando modificati dal context menu
export function updateSubmenuTags(object) {
    if (!object) return;
    
    console.log('updateSubmenuTags chiamata per:', object.name);
    
    // Usa la menuObjectMap per trovare l'itemList di questo oggetto
    if (!window.menuObjectMap) {
        console.log('✗ window.menuObjectMap non esiste');
        return;
    }
    
    const itemList = window.menuObjectMap.get(object);
    if (!itemList) {
        console.log('✗ itemList non trovato in menuObjectMap per:', object.name);
        return;
    }
    
    console.log('✓ itemList trovato');
    
    // Risali al parent (itemContainer) e trova il submenu
    const itemContainer = itemList.parentElement;
    if (!itemContainer) {
        console.log('✗ itemContainer non trovato');
        return;
    }
    
    const submenu = itemContainer.querySelector('.submenu');
    if (!submenu) {
        console.log('✗ submenu non trovato nel container');
        return;
    }
    
    console.log('✓ submenu trovato, ha _tagsSelector?', !!submenu._tagsSelector);
    
    if (submenu._tagsSelector) {
        console.log('✓ Aggiornando tag grid per:', object.name);
        updateTagsGrid(submenu._tagsSelector);
    } else {
        console.log('✗ submenu non ha _tagsSelector');
    }
}

// Esponi globalmente per sync con context menu
window.updateSubmenuTags = updateSubmenuTags;

// Funzione per ottenere il nome dell'oggetto selezionato (mantenuta per compatibilità)
export function getSelectedObjectName(itemIndex) {
    return objToBeDetected[itemIndex]?.name || null;
}
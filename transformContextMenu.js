// Transform Context Menu System
// Sistema di menu contestuale per trasformazioni 3D

import groupScaleUIDiv from './src/GroupScaleUIDiv.js';

// Funzione per calcolare il path corretto per GitHub Pages
function getAssetPath(path) {
    const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
    return basePath + '/' + path;
}

// Configurazione controlli per tipo di oggetto
const objectTransformConfigs = {
    omnifonte: {
        tools: ['move'],
        toggles: ['global_local', 'snap']
    },
    orifonte: {
        tools: ['move', 'rotate'],
        toggles: ['global_local', 'snap']
    },
    altoparlante: {
        tools: ['move', 'rotate'],
        toggles: ['global_local', 'snap']
    },
    aureola: {
        tools: ['move', 'rotate'],
        toggles: ['global_local', 'snap']
    },
    zona: {
        tools: ['move', 'rotate', 'scale'],
        toggles: ['global_local', 'snap']
    },
    gruppo: {
        tools: ['move', 'rotate', 'scale'],
        toggles: ['global_local', 'snap']
    }
};

// Stato corrente del menu
let currentTransformMode = 'move'; // 'move', 'rotate', 'scale'
let isGlobalMode = true; // true = global, false = local
let isSnapEnabled = true; // true = snap on, false = snap off (default: ON con lock icon)
let currentObjectType = null;
let menuVisible = false;

// Elementi DOM del menu
let menuContainer = null;
let toolButtons = {};
let toggleButtons = {};
let colorPicker = null;

// Funzione per inizializzare il menu contestuale
function initTransformContextMenu() {
    createMenuHTML();
    setupEventListeners();
    hideMenu(); // Inizialmente nascosto
    console.log('Transform Context Menu initialized');
}

// Crea la struttura HTML del menu
function createMenuHTML() {
    // Container principale del menu
    menuContainer = document.createElement('div');
    menuContainer.id = 'transform-context-menu';
    menuContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--fondale, #2a2a2a);
        border-radius: 8px;
        padding: 0.25rem 0.5rem;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transition: opacity 0.2s ease, transform 0.2s ease;
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
        min-height: 40px;
    `;

    // Gruppo strumenti di trasformazione (esclusivi)
    const toolsGroup = document.createElement('div');
    toolsGroup.style.cssText = `
        display: flex;
        align-items: center;
        gap: 4px;
        border-radius: 6px;
    `;

    // Bottoni strumenti
    const tools = [
        { id: 'move', icon: getAssetPath('svg/sposta.svg'), key: 'G' },
        { id: 'rotate', icon: getAssetPath('svg/ruota.svg'), key: 'R' },
        { id: 'scale', icon: getAssetPath('svg/scala.svg'), key: 'S' }
    ];

    tools.forEach(tool => {
        const button = createToolButton(tool);
        toolButtons[tool.id] = button;
        toolsGroup.appendChild(button);
    });

    // Separatore
    const separator = document.createElement('div');
    separator.style.cssText = `
        width: 1px;
        height: 32px;
        background: var(--dettaglio, #555);
        margin: 0 4px;
        align-self: center;
    `;

    // Toggle buttons
    const togglesGroup = document.createElement('div');
    togglesGroup.style.cssText = `
        display: flex;
        gap: 4px;
        align-items: center;
    `;

    // Toggle Global/Local
    const globalToggle = createToggleButton('global_local', 
        getAssetPath('svg/global.svg'), getAssetPath('svg/noglobal.svg'), isGlobalMode);
    toggleButtons.global_local = globalToggle;
    togglesGroup.appendChild(globalToggle);

    // Toggle Snap
    const snapToggle = createToggleButton('snap',
        getAssetPath('svg/lock.svg'), getAssetPath('svg/nolock.svg'), true); // Default: snap enabled (lock icon)
    toggleButtons.snap = snapToggle;
    togglesGroup.appendChild(snapToggle);

    // Color picker
    colorPicker = createColorPicker();
    togglesGroup.appendChild(colorPicker);

    // Assemblaggio
    menuContainer.appendChild(toolsGroup);
    menuContainer.appendChild(separator);
    menuContainer.appendChild(togglesGroup);

    // Aggiungi al DOM
    document.body.appendChild(menuContainer);
}

// Crea un bottone strumento
function createToolButton(tool) {
    const button = document.createElement('button');
    button.id = `transform-tool-${tool.id}`;
    button.title = `${tool.id.charAt(0).toUpperCase() + tool.id.slice(1)} (${tool.key})`;
    
    button.style.cssText = `
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `;

    // Icona SVG
    const icon = document.createElement('img');
    icon.src = tool.icon;
    icon.style.cssText = `
        width: 36px;
        height: 36px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
    `;

    button.appendChild(icon);

    // Stati hover e active
    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('active')) {
            button.style.background = 'rgba(255, 255, 255, 0.1)';
            icon.style.filter = 'brightness(1)';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active')) {
            button.style.background = 'transparent';
            icon.style.filter = 'brightness(0.8)';
        }
    });

    return button;
}

// Crea un toggle button
function createToggleButton(id, iconOn, iconOff, initialState) {
    const button = document.createElement('button');
    button.id = `transform-toggle-${id}`;
    button.title = id === 'global_local' ? 
        (initialState ? 'Global Mode' : 'Local Mode') :
        (initialState ? 'Snap On' : 'Snap Off');
    
    button.style.cssText = `
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 4px;
        background: transparent;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    `;

    // Icona SVG
    const icon = document.createElement('img');
    icon.src = initialState ? iconOn : iconOff;
    icon.style.cssText = `
        width: 16px;
        height: 16px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
    `;

    button.appendChild(icon);
    
    // Memorizza le icone per lo switch
    button.dataset.iconOn = iconOn;
    button.dataset.iconOff = iconOff;
    button.dataset.state = initialState;

    // Stati hover
    button.addEventListener('mouseenter', () => {
        button.style.background = 'rgba(255, 255, 255, 0.1)';
        icon.style.filter = 'brightness(1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = 'transparent';
        icon.style.filter = 'brightness(0.8)';
    });

    return button;
}

// Crea il color picker
function createColorPicker() {
    const container = document.createElement('div');
    container.style.cssText = `
        position: relative;
        width: 28px;
        height: 28px;
    `;

    const colorButton = document.createElement('div');
    colorButton.style.cssText = `
        width: 28px;
        height: 28px;
        border-radius: 4px;
        background: #ff6b6b;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    `;

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'color';
    hiddenInput.value = '#ff6b6b';
    hiddenInput.style.cssText = `
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    `;

    colorButton.addEventListener('mouseenter', () => {
        colorButton.style.transform = 'scale(1.1)';
    });

    colorButton.addEventListener('mouseleave', () => {
        colorButton.style.transform = 'scale(1)';
    });

    hiddenInput.addEventListener('change', (e) => {
        colorButton.style.background = e.target.value;
        // TODO: Applicare colore all'oggetto selezionato
        console.log('Color changed to:', e.target.value);
    });

    container.appendChild(colorButton);
    container.appendChild(hiddenInput);

    return container;
}

// Setup event listeners
function setupEventListeners() {
    // Tool buttons (esclusivi)
    Object.entries(toolButtons).forEach(([toolId, button]) => {
        button.addEventListener('click', () => {
            console.log('Tool button clicked:', toolId);
            console.log('Control object attached:', window.setupGlobals?.control?.object?.name || 'none');
            setActiveTool(toolId);
            triggerTransformMode(toolId);
        });
    });

    // Toggle buttons
    Object.entries(toggleButtons).forEach(([toggleId, button]) => {
        button.addEventListener('click', () => {
            toggleState(toggleId);
        });
    });
}

// Triggera le modalità di trasformazione (simula i tasti G, R, S)
function triggerTransformMode(mode) {
    // Ottieni il controllo e l'oggetto attualmente selezionato
    const control = window.setupGlobals?.control;
    if (!control) {
        console.log('No transform controls available');
        return;
    }
    
    if (!control.object) {
        console.log('No object attached to transform controls - mode will be set for next attach');
        // Imposta la modalità per il prossimo attach anche se non c'è oggetto
        control.setMode(mode === 'move' ? 'translate' : mode);
        return;
    }
    
    switch (mode) {
        case 'move':
            // IMPORTANTE: Spegni sempre il gizmo custom quando si attiva move
            groupScaleUIDiv.hide();
            
            console.log('Setting transform mode to: translate');
            control.setMode('translate');
            console.log('Transform mode successfully set to: translate');
            console.log('Current control mode after change:', control.getMode());
            // Aggiorna UI state se disponibile
            if (window.updateStato) {
                window.updateStato('Spostamento');
            }
            break;
            
        case 'rotate':
            // IMPORTANTE: Spegni sempre il gizmo custom quando si attiva rotate
            groupScaleUIDiv.hide();
            
            console.log('Setting transform mode to: rotate');
            
            // GESTIONE SPECIALE ALTOPARLANTI: disabilita lookAt center quando si attiva rotazione
            if (control.object) {
                const targetObject = control.object;
                const objectName = targetObject.name || '';
                
                if (objectName.toLowerCase().includes('altoparlante')) {
                    console.log('Activating rotation for speaker:', objectName);
                    
                    // Controlla se il lookAt center era attivo prima di disabilitarlo
                    const wasLookAtActive = targetObject.userData?.autoRotateToCenter === true;
                    console.log('LookAt was active:', wasLookAtActive);
                    
                    if (wasLookAtActive && window.orientSpeakerToCenter) {
                        // Solo se era attivo, disabilita e resetta a (0,0,0)
                        window.orientSpeakerToCenter(targetObject, false);
                    } else if (targetObject.userData) {
                        // Se non era attivo, disabilita solo il flag senza toccare la rotazione
                        targetObject.userData.autoRotateToCenter = false;
                        console.log('LookAt disabled without resetting rotation - keeping current rotation');
                    }
                    
                    // Aggiorna il toggle nel menu di sinistra se è aperto
                    if (window.updateMenuForObject) {
                        window.updateMenuForObject(targetObject);
                    }
                    console.log('LookAt center flag updated to:', targetObject.userData?.autoRotateToCenter);
                    
                    console.log('Speaker rotation mode activated - lookAt center handled based on previous state');
                }
            }
            
            control.setMode('rotate');
            console.log('Transform mode successfully set to: rotate');
            console.log('Current control mode after change:', control.getMode());
            if (window.updateStato) {
                window.updateStato('Rotazione');
            }
            break;
            
        case 'scale':
            console.log('triggerTransformMode: Executing scale case');
            // SEMPRE usa il sistema custom invece del gizmo Three.js standard
            const attachedObject = control.object;
            console.log('triggerTransformMode: attachedObject is:', attachedObject?.name || 'null');
            
            if (attachedObject) {
                console.log('triggerTransformMode: Processing scale for object:', attachedObject.name);
                
                // IMPORTANTE: Prima di fare detach, salva l'oggetto per il sistema custom
                console.log('triggerTransformMode: Saving to raycasterGlobals...');
                if (window.raycasterGlobals) {
                    window.raycasterGlobals.lastHoveredObject = attachedObject;
                    console.log('triggerTransformMode: Saved to raycasterGlobals');
                } else {
                    console.log('triggerTransformMode: ERROR - raycasterGlobals not found');
                }
                
                // Stacca sempre i transform controls Three.js
                console.log('triggerTransformMode: Detaching control...');
                control.detach();
                console.log('triggerTransformMode: Control detached');
                
                if (window.orbit) {
                    window.orbit.enabled = true;
                    console.log('triggerTransformMode: Orbit enabled');
                }
                
                // Usa sempre il sistema custom per tutti gli oggetti
                console.log('triggerTransformMode: Calling groupScaleUIDiv.show...');
                groupScaleUIDiv.show(attachedObject);
                console.log('triggerTransformMode: groupScaleUIDiv.show called');
                
                // Determina il tipo di stato basandosi sull'oggetto e la vista
                const isGroup = attachedObject.name === 'Gruppo di trasformazione';
                const currentCamera = window.currentCamera;
                
                if (isGroup && currentCamera && currentCamera.isOrthographicCamera && 
                    currentCamera.position.y > Math.abs(currentCamera.position.x) && 
                    currentCamera.position.y > Math.abs(currentCamera.position.z)) {
                    if (window.updateStato) {
                        window.updateStato('Scala Gruppo XY');
                    }
                } else {
                    if (window.updateStato) {
                        window.updateStato('Scala');
                    }
                }
                
                // NON nascondere il menu, ma aggiorna lo stato per mostrare "scale" attivo
                updateMenuState('scale');
            }
            break;
            
        default:
            console.warn('Unknown transform mode:', mode);
    }
}

// Imposta il tool attivo
function setActiveTool(toolId) {
    // Rimuovi active da tutti i tool
    Object.values(toolButtons).forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = 'transparent';
        btn.querySelector('img').style.filter = 'brightness(0.8)';
    });

    // Attiva il tool selezionato
    const activeButton = toolButtons[toolId];
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.style.background = 'var(--dettaglio, #555)';
        activeButton.querySelector('img').style.filter = 'brightness(1.2)';
        currentTransformMode = toolId;
        console.log(`Transform tool set to: ${toolId}`);
    }
}

// Cambia stato di un toggle
function toggleState(toggleId) {
    const button = toggleButtons[toggleId];
    if (!button) return;

    const currentState = button.dataset.state === 'true';
    const newState = !currentState;
    
    // Aggiorna icona
    const icon = button.querySelector('img');
    icon.src = newState ? button.dataset.iconOn : button.dataset.iconOff;
    button.dataset.state = newState;

    // Aggiorna stato globale
    if (toggleId === 'global_local') {
        isGlobalMode = newState;
        button.title = newState ? 'Global Mode' : 'Local Mode';
        console.log(`Global mode: ${newState}`);
    } else if (toggleId === 'snap') {
        isSnapEnabled = newState;
        button.title = newState ? 'Snap On' : 'Snap Off';
        console.log(`Snap: ${newState}`);
    }
}

// Determina il tipo di oggetto dall'ultimo oggetto hoverato
function getObjectType(object) {
    if (!object || !object.name) return 'gruppo';
    
    const name = object.name.toLowerCase();
    if (name.includes('omnifonte')) return 'omnifonte';
    if (name.includes('orifonte')) return 'orifonte';
    if (name.includes('altoparlante')) return 'altoparlante';
    if (name.includes('aureola') || name.includes('cloud')) return 'aureola';
    if (name.includes('zona')) return 'zona';
    
    return 'gruppo'; // Default per oggetti non riconosciuti o gruppi
}

// Mostra il menu per un oggetto specifico
function showMenu(object) {
    if (!menuContainer) return;
    
    currentObjectType = getObjectType(object);
    const config = objectTransformConfigs[currentObjectType];
    
    if (!config) return;

    // Mostra/nascondi tool basati sulla configurazione
    Object.entries(toolButtons).forEach(([toolId, button]) => {
        const shouldShow = config.tools.includes(toolId);
        button.style.display = shouldShow ? 'flex' : 'none';
    });

    // Sincronizza lo stato del menu con la modalità attuale dei TransformControls
    const control = window.setupGlobals?.control;
    if (control && control.object) {
        const currentMode = control.getMode();
        const modeMapping = {
            'translate': 'move',
            'rotate': 'rotate', 
            'scale': 'scale'
        };
        const menuMode = modeMapping[currentMode];
        if (menuMode && config.tools.includes(menuMode)) {
            setActiveTool(menuMode);
        } else if (config.tools.length > 0) {
            setActiveTool(config.tools[0]);
        }
    } else if (config.tools.length > 0) {
        setActiveTool(config.tools[0]);
    }

    // Mostra il menu con animazione
    menuContainer.style.opacity = '1';
    menuContainer.style.transform = 'translateY(0)';
    menuContainer.style.pointerEvents = 'auto';
    menuVisible = true;

    console.log(`Transform menu shown for object type: ${currentObjectType}`);
}

// Nascondi il menu
function hideMenu() {
    if (!menuContainer) return;
    
    menuContainer.style.opacity = '0';
    menuContainer.style.transform = 'translateY(10px)';
    menuContainer.style.pointerEvents = 'none';
    menuVisible = false;
    currentObjectType = null;

    console.log('Transform menu hidden');
}

// Aggiorna lo stato del menu basato su input esterni (tasti G, R, S)
function updateMenuState(mode) {
    if (!menuVisible) return;
    
    if (mode && toolButtons[mode] && currentObjectType) {
        const config = objectTransformConfigs[currentObjectType];
        if (config && config.tools.includes(mode)) {
            setActiveTool(mode);
        }
    }
}

// Funzione di coordinamento centralizzata per sincronizzare tutti i sistemi
function syncTransformState(mode, targetObject = null) {
    const control = window.setupGlobals?.control;
    if (!control) return;
    
    // Se c'è un oggetto target, attaccalo prima
    if (targetObject) {
        control.attach(targetObject);
        
        // Disabilita raycaster e orbit
        if (window.raycasterGlobals?.setRaycasterActiveForTransformControls) {
            window.raycasterGlobals.setRaycasterActiveForTransformControls(false);
        }
        if (window.orbit) window.orbit.enabled = false;
        
        // Pulisci outline
        if (window.raycasterGlobals?.outlinePass) {
            window.raycasterGlobals.outlinePass.selectedObjects = [];
        }
        
        // Mostra il menu contestuale
        showMenu(targetObject);
    }
    
    // Imposta la modalità nei TransformControls
    if (control.object) {
        triggerTransformMode(mode);
        
        // Aggiorna lo stato del menu per riflettere la modalità attiva
        updateMenuState(mode);
    } else if (mode && mode !== 'scale') {
        // Se non c'è oggetto attaccato, imposta solo la modalità per il prossimo attach
        // MA ESCLUDI 'scale' perché usiamo sempre il sistema custom per quello
        control.setMode(mode === 'move' ? 'translate' : mode);
        
        // Mostra ghost button appropriato
        const ghost = document.getElementById('ghostButton');
        if (ghost) {
            ghost.style.display = 'block';
            const positions = {
                'move': '21.5rem',
                'rotate': '16.5rem', 
                'scale': '11.5rem'
            };
            ghost.style.right = positions[mode] || '21.5rem';
        }
    }
}

// Esporta la funzione di sync globalmente
window.syncTransformState = syncTransformState;

// Funzioni esportate globalmente
window.transformContextMenu = {
    init: initTransformContextMenu,
    show: showMenu,
    hide: hideMenu,
    updateState: updateMenuState,
    getCurrentMode: () => currentTransformMode,
    isVisible: () => menuVisible,
    syncState: syncTransformState
};

// Auto-inizializzazione
document.addEventListener('DOMContentLoaded', initTransformContextMenu);

export { 
    initTransformContextMenu, 
    showMenu, 
    hideMenu, 
    updateMenuState 
};
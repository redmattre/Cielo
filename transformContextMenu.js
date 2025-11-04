// Transform Context Menu System
// Sistema di menu contestuale per trasformazioni 3D

import groupScaleUIDiv from './src/GroupScaleUIDiv.js';

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
        { id: 'move', icon: `<svg viewBox="0 0 110 135" xmlns="http://www.w3.org/2000/svg"><path d="m23.6,97.5l12.2,0c0.5,0 0.9,-0.3 1.2,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-2.1,-3.5l19.9,-11.4c0.1,-0.1 0.3,-0.1 0.4,0l19.9,11.4l-2.1,3.5c-0.2,0.4 -0.2,0.9 0,1.3c0.3,0.4 0.7,0.7 1.2,0.7l12.2,0c0.4,0 0.9,-0.3 1.1,-0.7c0.2,-0.4 0.2,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.7,-0.6 -1.1,-0.6c-0.5,0 -0.9,0.2 -1.2,0.6l-2,3.6l-19.8,-11.5c-0.1,-0.1 -0.2,-0.2 -0.2,-0.4l0,-22.9l4,0c0.5,0 0.9,-0.2 1.1,-0.6c0.3,-0.4 0.3,-0.9 0,-1.3l-6.1,-10.6c-0.2,-0.4 -0.6,-0.7 -1.1,-0.7c-0.5,0 -0.9,0.3 -1.1,0.7l-6.1,10.6c-0.3,0.4 -0.3,0.9 0,1.3c0.2,0.4 0.6,0.6 1.1,0.6l4,0l0,22.9c0,0.2 -0.1,0.3 -0.2,0.4l-19.8,11.5l-2,-3.6c-0.3,-0.4 -0.7,-0.6 -1.2,-0.6c-0.4,0 -0.9,0.2 -1.1,0.6l-6.1,10.6c-0.2,0.4 -0.2,0.9 0,1.3c0.2,0.4 0.7,0.7 1.1,0.7z" fill="currentColor"/></svg>`, key: 'G' },
        { id: 'rotate', icon: `<svg viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg"><path d="m31.9,45.9l-4,4c-0.5,0.6 -0.5,1.6 0,2.2l4,4c0.6,0.5 1.6,0.5 2.2,0c0.5,-0.6 0.5,-1.6 0,-2.2l-3,-2.9l3,-2.9c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0z" fill="currentColor"/><path d="m36.9,41.1l4,4c0.6,0.5 1.6,0.5 2.2,0l4,-4c0.5,-0.6 0.5,-1.6 0,-2.2c-0.6,-0.5 -1.6,-0.5 -2.2,0l-2.9,3l-2.9,-3c-0.6,-0.5 -1.6,-0.5 -2.2,0c-0.5,0.6 -0.5,1.6 0,2.2z" fill="currentColor"/><path d="m23.1,48.7c-4.6,-0.9 -8.3,-2.4 -10.6,-4.3c-1.2,-1 -2,-2.2 -2,-3.4c0,-1.8 1.5,-3.3 3.7,-4.6c4,-2.4 10.5,-3.9 17.8,-3.9c7.3,0 13.8,1.5 17.8,3.9c2.2,1.3 3.7,2.8 3.7,4.6c0,1.8 -1.5,3.3 -3.7,4.6c-4,2.4 -10.5,3.9 -17.8,3.9l-3,0c-0.8,0 -1.5,0.7 -1.5,1.5c0,0.8 0.7,1.5 1.5,1.5l3,0c7.9,0 15,-1.7 19.3,-4.3c3.4,-2 5.2,-4.6 5.2,-7.2c0,-2.6 -1.8,-5.2 -5.2,-7.2c-4.3,-2.6 -11.4,-4.3 -19.3,-4.3c-7.9,0 -15,1.7 -19.3,4.3c-3.4,2 -5.2,4.6 -5.2,7.2c0,2 1.1,4 3.1,5.7c2.5,2.2 6.8,4 11.9,4.9c0.9,0.2 1.6,-0.3 1.8,-1.1c0.2,-0.9 -0.4,-1.6 -1.2,-1.8z" fill="currentColor"/><path d="m39.7,49.9c-0.9,4.6 -2.4,8.3 -4.3,10.6c-1,1.2 -2.2,2 -3.4,2c-1.8,0 -3.3,-1.5 -4.6,-3.7c-2.4,-4 -3.9,-10.5 -3.9,-17.8c0,-7.3 1.5,-13.8 3.9,-17.8c1.3,-2.2 2.8,-3.7 4.6,-3.7c1.8,0 3.3,1.5 4.6,3.7c2.4,4 3.9,10.5 3.9,17.8l0,3c0,0.8 0.7,1.5 1.5,1.5c0.8,0 1.5,-0.7 1.5,-1.5l0,-3c0,-7.9 -1.7,-15 -4.3,-19.3c-2,-3.4 -4.6,-5.2 -7.2,-5.2c-2.6,0 -5.2,1.8 -7.2,5.2c-2.6,4.3 -4.3,11.4 -4.3,19.3c0,7.9 1.7,15 4.3,19.3c2,3.4 4.6,5.2 7.2,5.2c2,0 4,-1.1 5.7,-3.1c2.2,-2.5 4,-6.8 4.9,-11.9c0.2,-0.9 -0.3,-1.6 -1.1,-1.8c-0.9,-0.2 -1.6,0.4 -1.8,1.2z" fill="currentColor"/></svg>`, key: 'R' },
        { id: 'scale', icon: `<svg viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg"><path d="m2.8,13.4q-0.1,0 -0.3,-0.1q-0.1,0 -0.3,-0.1q-0.1,-0.1 -0.1,-0.3q-0.1,-0.1 -0.1,-0.3q0,-0.2 0.1,-0.3q0,-0.2 0.1,-0.3q0.2,-0.1 0.3,-0.2q0.2,0 0.3,0l5,0l0,1.6l-5,0zm21.4,0.8l0,10.7l-1.7,0l0,-10.7q0,-0.1 0,-0.3q-0.1,-0.1 -0.2,-0.2q-0.1,-0.2 -0.3,-0.2q-0.1,-0.1 -0.3,-0.1l-10.7,0l0,-1.6l10.7,0q0.5,0 1,0.1q0.4,0.2 0.8,0.6q0.3,0.3 0.5,0.8q0.2,0.4 0.2,0.9zm-1.7,14l-12.3,0q-0.5,0 -1,-0.2q-0.4,-0.2 -0.8,-0.5q-0.3,-0.3 -0.5,-0.8q-0.2,-0.4 -0.2,-0.9l0,-12.4l1.7,0l0,12.4q0,0.1 0,0.3q0.1,0.1 0.2,0.2q0.1,0.2 0.3,0.2q0.1,0.1 0.3,0.1l18.9,0q0.2,0 0.3,0q0.2,0.1 0.3,0.2q0.1,0.1 0.2,0.3q0.1,0.1 0.1,0.3q-0.1,0.2 -0.1,0.3q-0.1,0.2 -0.2,0.3q-0.1,0.1 -0.3,0.2q-0.1,0 -0.3,0l-4.9,0l0,-1.6l-1.7,0l0,1.6zm0,0l1.7,0l0,4.3l2.2,0l-3,3l-3,-3l2.1,0l0,-4.3zm-13.1,-16.5l-1.7,0l0,-4.3l-2,0l3,-3l3,3l-2.3,0l0,4.3z" fill="currentColor"/></svg>`, key: 'S' }
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
        `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.672c-0.004 0-0.007 0-0.011 0-0.002 0-0.003 0-0.005 0-0.005 0-0.010 0.001-0.016 0.001-7.347 0.017-13.296 5.977-13.296 13.327 0 7.348 5.949 13.309 13.296 13.327 0.005 0 0.010 0.001 0.016 0.001 0.002 0 0.004 0 0.005 0 0.004 0 0.008 0 0.011 0 7.36 0 13.328-5.968 13.328-13.328s-5.968-13.328-13.328-13.328zM16.533 10.648c1.413-0.039 2.788-0.225 4.112-0.548 0.399 1.571 0.647 3.382 0.686 5.367h-4.798v-4.819zM16.533 9.582v-5.759c1.437 0.398 2.893 2.314 3.821 5.252-1.231 0.297-2.509 0.47-3.821 0.507zM15.467 3.81v5.772c-1.323-0.037-2.611-0.213-3.852-0.515 0.936-2.956 2.405-4.879 3.852-5.256zM15.467 10.647v4.82h-4.831c0.039-1.988 0.287-3.801 0.687-5.373 1.334 0.326 2.72 0.515 4.144 0.553zM9.563 15.467h-5.811c0.118-2.741 1.139-5.252 2.773-7.241 1.187 0.654 2.446 1.189 3.766 1.589-0.431 1.7-0.689 3.617-0.728 5.652zM9.563 16.533c0.039 2.034 0.297 3.951 0.728 5.651-1.319 0.401-2.579 0.936-3.766 1.59-1.635-1.989-2.656-4.5-2.773-7.241h5.811zM10.636 16.533h4.831v4.814c-1.424 0.038-2.81 0.228-4.145 0.555-0.399-1.571-0.647-3.383-0.686-5.369zM15.467 22.412v5.778c-1.448-0.378-2.919-2.303-3.854-5.263 1.241-0.302 2.53-0.478 3.854-0.515zM16.533 28.178v-5.765c1.313 0.038 2.591 0.211 3.822 0.508-0.928 2.941-2.384 4.86-3.822 5.257zM16.533 21.347v-4.814h4.798c-0.039 1.983-0.286 3.791-0.684 5.361-1.325-0.323-2.7-0.51-4.113-0.548zM22.404 16.533h5.845c-0.118 2.741-1.138 5.251-2.773 7.24-1.197-0.658-2.467-1.197-3.797-1.599 0.43-1.698 0.687-3.611 0.726-5.64zM22.404 15.467c-0.039-2.033-0.297-3.946-0.727-5.646 1.33-0.402 2.599-0.94 3.795-1.598 1.636 1.989 2.658 4.501 2.776 7.244h-5.845zM24.738 7.409c-1.061 0.564-2.18 1.031-3.35 1.385-0.623-2.005-1.498-3.642-2.533-4.717 2.27 0.545 4.297 1.719 5.883 3.332zM13.103 4.087c-1.029 1.073-1.9 2.702-2.521 4.697-1.158-0.353-2.268-0.815-3.319-1.375 1.575-1.602 3.587-2.774 5.84-3.322zM7.259 24.587c1.052-0.561 2.163-1.024 3.322-1.377 0.621 1.997 1.492 3.629 2.522 4.702-2.255-0.549-4.268-1.721-5.844-3.326zM18.855 27.922c1.036-1.075 1.911-2.712 2.535-4.721 1.17 0.355 2.29 0.82 3.351 1.387-1.586 1.614-3.614 2.791-5.886 3.334z" fill="currentColor"/></svg>`,
        `<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><path d="m400 66.8q-0.1 0-0.3 0 0 0-0.1 0-0.2 0-0.4 0c-183.7 0.5-332.4 149.5-332.4 333.2 0 183.7 148.7 332.7 332.4 333.2q0.2 0 0.4 0 0.1 0 0.1 0 0.2 0 0.3 0c184 0 333.2-149.2 333.2-333.2 0-184-149.2-333.2-333.2-333.2zm13.3 199.4c35.4-1 69.7-5.6 102.8-13.7 10 39.3 16.2 84.5 17.2 134.2h-120zm0-26.7v-143.9c36 9.9 72.4 57.8 95.6 131.2-30.8 7.5-62.8 11.8-95.6 12.7zm-26.6-144.3v144.3c-33.1-0.9-65.3-5.3-96.3-12.8 23.4-73.9 60.1-122 96.3-131.5zm0 171v120.5h-120.8c1-49.7 7.2-95.1 17.2-134.4 33.3 8.2 68 12.9 103.6 13.9zm-147.6 120.5h-145.3c3-68.6 28.5-131.3 69.3-181.1 29.7 16.4 61.2 29.8 94.2 39.8-10.8 42.5-17.2 90.4-18.2 141.3zm0 26.6c1 50.9 7.4 98.8 18.2 141.3-33 10-64.5 23.4-94.2 39.7-40.8-49.7-66.4-112.5-69.3-181zm26.8 0h120.8v120.4c-35.6 0.9-70.3 5.7-103.6 13.8-10-39.3-16.2-84.5-17.2-134.2zm120.8 147v144.4c-36.2-9.4-73-57.6-96.4-131.6 31.1-7.5 63.3-11.9 96.4-12.8zm26.7 144.1v-144.1c32.8 0.9 64.7 5.3 95.5 12.7-23.2 73.5-59.6 121.5-95.5 131.4zm0-170.7v-120.4h119.9c-1 49.6-7.1 94.8-17.1 134-33.1-8-67.5-12.7-102.8-13.6zm146.7-120.4h146.2c-3 68.5-28.5 131.3-69.4 181-29.9-16.5-61.6-29.9-94.9-40 10.7-42.4 17.2-90.3 18.1-141zm0-26.7c-0.9-50.8-7.4-98.6-18.2-141.1 33.3-10.1 65-23.5 94.9-40 40.9 49.8 66.5 112.6 69.4 181.1 0 0-146.1 0-146.1 0zm58.4-201.4c-26.6 14.1-54.5 25.8-83.8 34.6-15.6-50.1-37.4-91-63.3-117.9 56.7 13.6 107.4 43 147.1 83.3zm-290.9-83.1c-25.7 26.9-47.5 67.6-63 117.5-29-8.9-56.7-20.4-83-34.4 39.4-40.1 89.7-69.4 146-83.1zm-146.1 512.5c26.3-14 54.1-25.6 83-34.4 15.6 50 37.3 90.8 63.1 117.6-56.4-13.7-106.7-43.1-146.1-83.2zm289.9 83.4c25.9-26.8 47.8-67.8 63.4-118 29.2 8.9 57.2 20.5 83.7 34.7-39.6 40.3-90.3 69.8-147.1 83.3z" fill="currentColor"/><path fill-rule="evenodd" fill="none" stroke="currentColor" stroke-miterlimit="100" stroke-width="23" d="m724.3 53l3.7 3.2-654.3 692.6-3.7-3.2z"/></svg>`, isGlobalMode);
    toggleButtons.global_local = globalToggle;
    togglesGroup.appendChild(globalToggle);

    // Toggle Snap
    const snapToggle = createToggleButton('snap',
        `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
        `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3L21 21M17 10V8C17 5.23858 14.7614 3 12 3C11.0283 3 10.1213 3.27719 9.35386 3.75681M7.08383 7.08338C7.02878 7.38053 7 7.6869 7 8V10.0288M19.5614 19.5618C19.273 20.0348 18.8583 20.4201 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288M19.9998 14.4023C19.9978 12.9831 19.9731 12.227 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.773 10.0269 17.0169 10.0022 15.5977 10.0002M10 10H8.8C8.05259 10 7.47142 10 7 10.0288" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`, true); // Default: snap enabled (lock icon)
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

    // Icona SVG inline
    const iconContainer = document.createElement('div');
    iconContainer.innerHTML = tool.icon;
    iconContainer.style.cssText = `
        width: 36px;
        height: 36px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Assicurati che l'SVG sia dimensionato correttamente
    const svg = iconContainer.querySelector('svg');
    if (svg) {
        svg.style.cssText = `
            width: 100%;
            height: 100%;
            color: currentColor;
        `;
    }

    button.appendChild(iconContainer);

    // Stati hover e active
    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('active')) {
            button.style.background = 'rgba(255, 255, 255, 0.1)';
            iconContainer.style.filter = 'brightness(1)';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active')) {
            button.style.background = 'transparent';
            iconContainer.style.filter = 'brightness(0.8)';
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

    // Icona SVG inline
    const iconContainer = document.createElement('div');
    iconContainer.innerHTML = initialState ? iconOn : iconOff;
    iconContainer.style.cssText = `
        width: 16px;
        height: 16px;
        filter: brightness(0.8);
        transition: filter 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Assicurati che l'SVG sia dimensionato correttamente
    const svg = iconContainer.querySelector('svg');
    if (svg) {
        svg.style.cssText = `
            width: 100%;
            height: 100%;
            color: currentColor;
        `;
    }

    button.appendChild(iconContainer);
    
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
        const iconContainer = btn.querySelector('div');
        if (iconContainer) iconContainer.style.filter = 'brightness(0.8)';
    });

    // Attiva il tool selezionato
    const activeButton = toolButtons[toolId];
    if (activeButton) {
        activeButton.classList.add('active');
        activeButton.style.background = 'var(--dettaglio, #555)';
        const iconContainer = activeButton.querySelector('div');
        if (iconContainer) iconContainer.style.filter = 'brightness(1.2)';
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
    const iconContainer = button.querySelector('div');
    if (iconContainer) {
        iconContainer.innerHTML = newState ? button.dataset.iconOn : button.dataset.iconOff;
        
        // Assicurati che l'SVG sia dimensionato correttamente
        const svg = iconContainer.querySelector('svg');
        if (svg) {
            svg.style.cssText = `
                width: 100%;
                height: 100%;
                color: currentColor;
            `;
        }
    }
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
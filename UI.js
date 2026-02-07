import * as THREE from 'three';
import { dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD, goochMaterialAlpha, solidMaterial } from "./materials";
import { currentSelectedObject, setRaycasterActive } from "./raycaster";
import { currentCamera, changeTheme, control, orbit, orbitOrtho, onWindowResize, ssuper, scene, renderer, changeGrid, render, updateStato, transfo, changeTransfo, updateStato1 } from "./setup";
import { changeNatMatTransparency, toggleMaterial, toggleModelVisibility, toggleTransparency } from './loadersFIX';

let scaleMoveSnap = 0.05;
let rotationSnapDegrees = 15;
let snapIsActive = true;

// SWITCHES
document.querySelectorAll('.switch input').forEach((checkbox) => {
	checkbox.addEventListener('change', (event) => {
		const isChecked = event.target.checked;
		const switchId = event.target.getAttribute('data-id');
		toggleSwitch(switchId, isChecked);
	});
});

let architectureTransparency = 0.7;

function toggleSwitch(id, state) {
	switch (id) {
		case 'lock':
            // Non interferire se i transform controls sono attivi
            if (window.setupGlobals?.control?.object) {
                console.log('Lock toggle ignored: transform controls are active');
                return;
            }
            setRaycasterActive(!state); // Update the value
			break;

        case 'transparencyA':
            toggleTransparency('architettura', state);
            isTransparent = state;
            if (state) {
                goochMaterialAlpha.uniforms.opacity.value = architectureTransparency;
                // architectureTransparency = 0.5;
                // goochMaterialAlpha.transparent = true;

            } else {
                goochMaterialAlpha.uniforms.opacity.value = 1.;
                // architectureTransparency = 1.;
                // goochMaterialAlpha.transparent = false;
            }
            
            break;
        case 'serioso':
            if (state) {
                goochMaterialAlpha.uniforms.coolColor.value = new THREE.Color(0x0077ff);
                goochMaterialAlpha.uniforms.warmColor.value = new THREE.Color(0xffaa00);
            } else {
                goochMaterialAlpha.uniforms.coolColor.value = new THREE.Color(0x000080);
                goochMaterialAlpha.uniforms.warmColor.value = new THREE.Color(0xF5F5DC);
            }

            if (state) {
                toggleMaterial('architettura', goochMaterialAlpha);
            } else {
                toggleMaterial('architettura');
            }
            break;
        case 'wireframeVisibility':
            break;
        case 'theme':
            changeTheme(state);
            break;
        case 'grid':
            ssuper.visible = state;
            break;
        case 'gridSnapState':
            if (state) {
                control.setTranslationSnap(scaleMoveSnap);
	            control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
	            control.setScaleSnap(scaleMoveSnap);
                snapIsActive = true;
            } else {
                control.setTranslationSnap(null);
                control.setRotationSnap(THREE.MathUtils.degToRad(null));
                control.setScaleSnap(null);
                snapIsActive = false;
            }
            break;
        case 'zoneVisibility':
            if (state) {
                dashedMaterial.visible = true;
                dashedMaterialB.visible = true;
                dashedMaterialC.visible = true;
                dashedMaterialD.visible = true;
            } else {
                dashedMaterial.visible = false;
                dashedMaterialB.visible = false;
                dashedMaterialC.visible = false;
                dashedMaterialD.visible = false;
            }
            break;
        case 'archVisibility':
            if (state) {
                goochMaterialAlpha.uniforms.opacity.value = isTransparent ? architectureTransparency : 1;
                solidMaterial.visible = true;
            } else {
                goochMaterialAlpha.uniforms.opacity.value = 0;
                solidMaterial.visible = false;
            }
            
            // Handle both old architecture model and new ConditionalLines models
            toggleModelVisibility('architettura', state);
            toggleModelVisibility('architettura-background', state);
            toggleModelVisibility('architettura-edges', state);
            toggleModelVisibility('architettura-conditional', state);
            break;
        case 'multiClient':
            if (window.multiClientManager) {
                window.multiClientManager.setEnabled(state);
                updateMultiClientStatusDisplay();
            }
            break;
		default:
			console.log('Switch non riconosciuto');
	}
}

// SLIDERS

document.querySelectorAll('.multitoggle input').forEach((range) => {
	range.addEventListener('change', (event) => {
		const valore = parseInt(event.target.value); // Converte in numero
		const sliderId = event.target.getAttribute('data-id');
		toggleSlider(sliderId, valore);
	});
});

function toggleSlider(id, val) {
    switch (id) {
        case 'gridsize':
            switch (val) {
                case 1:
                    changeGrid(5, 8);
                    break;
                case 2:
                    changeGrid(10, 16);
                    break;
                case 3:
                    changeGrid(20, 32);
                    break;
                case 4:
                    changeGrid(40, 64);
                    break;
                default:
                    console.log("Valore non riconosciuto.");
                    return;
            }
            break;
        case 'transArchVal':
            switch (val) {
                case 1:
                    architectureTransparency = 0.;
                    changeNatMatTransparency(0.1);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 2:
                    architectureTransparency = 0.2;
                    changeNatMatTransparency(0.3);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.2;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 3:
                    architectureTransparency = 0.5;
                    changeNatMatTransparency(0.5);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.5;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 4:
                    architectureTransparency = 0.7;
                    changeNatMatTransparency(0.7);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.7;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                default:
                    console.log("Valore non riconosciuto.");
                    return;
            }
            break;
        case 'snapDefinition':
            switch(val) {
                case 1:
                    scaleMoveSnap = 0.0125;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
                case 2:
                    scaleMoveSnap = 0.05;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
                case 3:
                    scaleMoveSnap = 0.1;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
            }

        default:
            console.log("ID non riconosciuto.");
    }
}

// BUTTONS

let counter = 1; // Definito al di fuori per mantenere lo stato tra i clic
let isTransparent = false;
let isVisible = false;

const menuList = document.getElementById("menuList");

document.getElementById('seeItemsList').addEventListener('click', (event) => {
    // Recupera lo stato del pulsante dal suo attributo data
    const isActive = event.target.getAttribute('data-active') === 'true';

    if (isActive) {
        // Disattiva
        menuList.style.opacity = 0;
        menuList.style.width = "0vw";
        menuList.style.color = "var(--fondale)";
        menuList.style.pointerEvents = "none";
        event.target.setAttribute('data-active', 'false');
    } else {
        // Attiva
        menuList.style.opacity = 1;
        menuList.style.width = "23vw";
        menuList.style.color = "var(--testo)";
        menuList.style.pointerEvents = "all";
        event.target.setAttribute('data-active', 'true');
    }
});

let toggleTransButton = document.getElementById('toggleTransButton');

toggleTransButton.addEventListener('click', () => {
    changeTransfo(!transfo);
    control.setSpace(control.space === 'local' ? 'world' : 'local');
    updateStato1();
});

// Bottone tilde per aprire il menu laterale
const openSideMenu = document.getElementById('openSideMenu');
const blackPanel = document.getElementById('black-panel');

openSideMenu.addEventListener('click', () => {
  if (blackPanel.style.opacity === '1') {
    blackPanel.style.opacity = 0;
    blackPanel.style.pointerEvents = 'none';
    blackPanel.style.width = '0vw';
    blackPanel.style.color = 'var(--fondale)';
  } else {
    blackPanel.style.opacity = 1;
    blackPanel.style.pointerEvents = 'all';
    blackPanel.style.width = '25vw';
    blackPanel.style.color = 'var(--testo)';
  }
});

// Chiudi il blackPanel quando si clicca sul canvas 3D (ma non durante un drag)
let mouseDownPos = null;

document.addEventListener('mousedown', (event) => {
  mouseDownPos = { x: event.clientX, y: event.clientY };
});

document.addEventListener('click', (event) => {
  // Verifica se il blackPanel è aperto
  if (blackPanel.style.opacity === '1') {
    // Calcola la distanza tra mousedown e click per rilevare un drag
    const dragThreshold = 5; // pixel
    const isDrag = mouseDownPos && (
      Math.abs(event.clientX - mouseDownPos.x) > dragThreshold ||
      Math.abs(event.clientY - mouseDownPos.y) > dragThreshold
    );
    
    // Se è un drag, non chiudere il menu
    if (isDrag) {
      mouseDownPos = null;
      return;
    }
    
    // Verifica se il click è sul canvas 3D (renderer.domElement)
    const canvas = renderer?.domElement;
    const clickedOnCanvas = canvas && event.target === canvas;
    
    // Chiudi solo se il click è sul canvas 3D
    if (clickedOnCanvas) {
      blackPanel.style.opacity = 0;
      blackPanel.style.pointerEvents = 'none';
      blackPanel.style.width = '0vw';
      blackPanel.style.color = 'var(--fondale)';
    }
  }
  
  mouseDownPos = null;
});



//MULTI-CLIENT INTEGRATION

/**
 * Aggiorna il display dello status multi-client
 */
function updateMultiClientStatusDisplay() {
    const statusDiv = document.getElementById('multiClientStatus');
    if (!statusDiv || !window.multiClientManager) return;

    const status = window.multiClientManager.getStatus();

    if (!status.isEnabled) {
        statusDiv.style.display = 'none';
    } else if (!status.isConnected) {
        statusDiv.textContent = 'Connecting...';
        statusDiv.style.cssText = 'padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: #ed8936; color: white; margin: 5px 0;';
    } else {
        const role = status.isMaster ? 'Master' : 'Slave';
        const bgColor = status.isMaster ? '#48bb78' : '#3498DB';
        statusDiv.textContent = role;
        statusDiv.style.cssText = `padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; background: ${bgColor}; color: white; margin: 5px 0;`;
    }
}

// Esponi la funzione globalmente per il rightmenu.js
window.updateMultiClientStatusDisplay = updateMultiClientStatusDisplay;

/**
 * Aggiorna il display dello status OSC
 */
function updateOSCStatusDisplay() {
    const statusDiv = document.getElementById('oscStatus');
    if (!statusDiv || !window.oscManager) return;

    let statusText = '';
    let statusColor = '#888';

    if (!window.oscManager.isEnabled) {
        statusText = 'Status: Disattivato';
        statusDiv.style.display = 'none';
    } else if (!window.oscManager.ws || window.oscManager.ws.readyState !== WebSocket.OPEN) {
        statusText = 'Status: Connessione...';
        statusColor = '#ff9500';
        statusDiv.style.display = 'block';
    } else {
        statusText = `Status: Attivo → ${window.oscManager.host}:${window.oscManager.port}`;
        statusColor = '#00ff00';
        statusDiv.style.display = 'block';
    }

    statusDiv.textContent = statusText;
    statusDiv.style.color = statusColor;
}

// Esponi la funzione globalmente
window.updateOSCStatusDisplay = updateOSCStatusDisplay;

/**
 * Inizializza l'integrazione multi-client
 */
function initMultiClientIntegration() {
    if (!window.multiClientManager) return;

    // Setup callbacks per eventi multi-client
    window.multiClientManager.onStateChange = updateMultiClientStatusDisplay;
    
    window.multiClientManager.onMasterChange = (isMaster) => {
        console.log(`Ruolo cambiato: ${isMaster ? 'MASTER' : 'SLAVE'}`);
        updateMultiClientStatusDisplay();
    };
    
    window.multiClientManager.onTransformReceived = (data) => {
        // Applica trasformazione ricevuta dal master
        applyTransformFromMultiClient(data);
    };
    
    window.multiClientManager.onObjectCreatedReceived = (data) => {
        // Crea oggetto ricevuto dal master
        createObjectFromMultiClient(data);
    };

    // Hook nel sistema di trasformazioni esistente
    setupTransformSyncHooks();
}

/**
 * Inizializza l'integrazione OSC
 */
function initOSCIntegration() {
    if (!window.oscManager) return;

    // Setup callbacks per eventi OSC
    window.oscManager.onConnectionChange = (isConnected) => {
        console.log(`OSC connessione: ${isConnected ? 'CONNESSO' : 'DISCONNESSO'}`);
        updateOSCStatusDisplay();
    };
    
    window.oscManager.onConfigChange = (host, port) => {
        console.log(`OSC configurazione aggiornata: ${host}:${port}`);
        updateOSCStatusDisplay();
        
        // Aggiorna anche i campi input nel menu
        const hostInput = document.getElementById('oscHost');
        const portInput = document.getElementById('oscPort');
        if (hostInput) hostInput.value = host;
        if (portInput) portInput.value = port;
    };
}

/**
 * Applica trasformazione ricevuta da altro client
 */
function applyTransformFromMultiClient(data) {
    // Cerca l'oggetto per ID in tutti gli oggetti della scena
    let targetObject = null;
    
    scene.traverse(function(child) {
        if (child.userData && child.userData.id === data.objectId) {
            targetObject = child;
        }
    });
    
    if (!targetObject) {
        console.warn('Oggetto non trovato per ID:', data.objectId, '- Ritentativo in 100ms...');
        
        // Ritenta dopo un breve delay (per oggetti in caricamento)
        setTimeout(() => {
            scene.traverse(function(child) {
                if (child.userData && child.userData.id === data.objectId) {
                    targetObject = child;
                }
            });
            
            if (targetObject) {
                console.log('Oggetto trovato al secondo tentativo:', targetObject.name);
                applyTransformToObject(targetObject, data);
            } else {
                console.error('Oggetto definitivamente non trovato per ID:', data.objectId);
            }
        }, 100);
        return;
    }
    
    applyTransformToObject(targetObject, data);
}

/**
 * Applica le trasformazioni a un oggetto
 */
function applyTransformToObject(targetObject, data) {
    console.log('Applicando trasformazione da master a:', targetObject.name);

    // Applica posizione, rotazione, scala
    if (data.position) {
        targetObject.position.set(data.position.x, data.position.y, data.position.z);
    }
    if (data.rotation) {
        targetObject.rotation.set(data.rotation.x, data.rotation.y, data.rotation.z);
    }
    if (data.scale) {
        targetObject.scale.set(data.scale.x, data.scale.y, data.scale.z);
    }
    
    // Applica tags se presenti
    if (data.tags) {
        targetObject.userData.tags = data.tags;
        
        // Aggiorna visualmente i tag nei menu
        if (window.updateSubmenuTags) {
            window.updateSubmenuTags(targetObject);
        }
        if (window.updateTagsChipsExternal) {
            window.updateTagsChipsExternal(targetObject);
        }
    }
    
    // Applica menuState se presente
    if (data.menuState) {
        console.log('[SLAVE] Ricevuto menuState:', data.menuState);
        console.log('[SLAVE] Object userData PRIMA:', targetObject.userData.menuState);
        targetObject.userData.menuState = data.menuState;
        console.log('[SLAVE] Object userData DOPO:', targetObject.userData.menuState);
        
        // Aggiorna visivamente il menu per riflettere i nuovi valori
        if (window.updateMenuForObject) {
            console.log('[SLAVE] Chiamando updateMenuForObject per:', targetObject.name);
            window.updateMenuForObject(targetObject);
        } else {
            console.error('[SLAVE] updateMenuForObject NON disponibile!');
        }
    }
    
    // Forza aggiornamento matrice
    targetObject.updateMatrixWorld(true);
}

/**
 * Crea oggetto ricevuto da altro client
 */
function createObjectFromMultiClient(data) {
    console.log('Creando oggetto da master:', data.objectType, data.name, data.objectId);
    
    // Mappa tipi di oggetto alle funzioni di creazione
    const position = data.position || { x: 0, y: 1.2, z: 0 };
    
    // Scambia Y e Z perché arrivano in ordine Three.js (x, z, y) ma servono in ordine app (x, y, z)
    const appPos = { x: position.x, y: position.z, z: position.y };
    
    switch (data.objectType) {
        case 'sphere':
        case 'omnifonte':
            if (window.addSphereAtPosition) {
                console.log('Creando omnifonte da sync:', data.name, 'alle coordinate:', appPos, 'con ID:', data.objectId);
                
                // NON disattivare sync globalmente, usa flag per skippa broadcast
                window.multiClientManager._skipNextBroadcast = true;
                
                // Crea l'omnifonte con ID e nome dal master
                window.addSphereAtPosition(appPos.x, appPos.y, appPos.z, data.objectId, data.name);
                
                // Applica tags se presenti
                if (data.tags) {
                    setTimeout(() => {
                        scene.traverse(child => {
                            if (child.userData.id === data.objectId) {
                                child.userData.tags = data.tags;
                            }
                        });
                    }, 50);
                }
                
                console.log('Omnifonte creato correttamente con ID:', data.objectId);
            }
            break;
            
        case 'speaker':
        case 'altoparlante':
            if (window.addSpeakerAtPosition) {
                console.log('Creando altoparlante da sync:', data.name, 'alle coordinate:', appPos, 'con ID:', data.objectId);
                
                // NON disattivare sync globalmente, usa flag per skippa broadcast
                window.multiClientManager._skipNextBroadcast = true;
                
                // Crea l'altoparlante con ID e nome dal master
                window.addSpeakerAtPosition(appPos.x, appPos.y, appPos.z, data.objectId, data.name);
                
                // Applica tags se presenti
                if (data.tags) {
                    setTimeout(() => {
                        scene.traverse(child => {
                            if (child.userData.id === data.objectId) {
                                child.userData.tags = data.tags;
                            }
                        });
                    }, 50);
                }
                
                // Monitora la scena per assicurarsi che l'oggetto sia stato creato correttamente
                let callbackTriggered = false;
                const checkForNewSpeaker = () => {
                    scene.traverse(child => {
                        if (child.userData.id === data.objectId) {
                            console.log('Altoparlante creato correttamente con ID:', data.objectId);
                            callbackTriggered = true;
                            return true;
                        }
                    });
                    
                    // Se non è stato trovato, riprova (massimo 10 tentativi)
                    if (!callbackTriggered && checkForNewSpeaker.attempts < 10) {
                        checkForNewSpeaker.attempts++;
                        setTimeout(checkForNewSpeaker, 50);
                    }
                };
                checkForNewSpeaker.attempts = 0;
                
                // Inizia il controllo
                setTimeout(checkForNewSpeaker, 50);
            }
            break;
            
        case 'arrow':
        case 'orifonte':
            if (window.addArrowAtPosition) {
                console.log('Creando orifonte da sync:', data.name, 'alle coordinate:', appPos, 'con ID:', data.objectId);
                
                // NON disattivare sync globalmente, usa flag per skippa broadcast
                window.multiClientManager._skipNextBroadcast = true;
                
                // Crea l'orifonte con ID e nome dal master
                window.addArrowAtPosition(appPos.x, appPos.y, appPos.z, data.objectId, data.name);
                
                // Applica tags se presenti
                if (data.tags) {
                    setTimeout(() => {
                        scene.traverse(child => {
                            if (child.userData.id === data.objectId) {
                                child.userData.tags = data.tags;
                            }
                        });
                    }, 50);
                }
                
                console.log('Orifonte creato correttamente con ID:', data.objectId);
            }
            break;
            
        default:
            console.warn('Tipo oggetto non supportato per sync:', data.objectType);
    }
}

/**
 * Setup hooks per sincronizzare trasformazioni
 */
function setupTransformSyncHooks() {
    if (!window.setupGlobals?.control) return;

    const originalControl = window.setupGlobals.control;
    
    // Hook evento 'objectChange' per sincronizzare trasformazioni
    originalControl.addEventListener('objectChange', (event) => {
        if (!window.multiClientManager?.isMaster || !window.multiClientManager?.isEnabled) {
            return;
        }

        const object = event.target.object;
        if (!object || !object.userData.id) return;

        // Invia trasformazione ai client slave
        window.multiClientManager.sendTransform(
            object.userData.id,
            {
                x: object.position.x,
                y: object.position.y,
                z: object.position.z
            },
            {
                x: object.rotation.x,
                y: object.rotation.y,
                z: object.rotation.z
            },
            {
                x: object.scale.x,
                y: object.scale.y,
                z: object.scale.z
            }
        );
    });
}

// Inizializza integrazione quando DOM è pronto
document.addEventListener('DOMContentLoaded', () => {
    // Ritarda l'inizializzazione per permettere ai manager di essere disponibili
    setTimeout(() => {
        initMultiClientIntegration();
        initOSCIntegration();
    }, 100);
});

//OPTIMIZATION


// canvas.addEventListener('mouseup', function () {
//     setRaycasterActive(true);
// });
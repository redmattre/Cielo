    // Se il gruppo scompare, nascondi l'handle
    groupScaleUIDiv.hide();
import groupScaleUIDiv from './src/GroupScaleUIDiv.js';
import * as THREE from 'three';
import { renderer, objToBeDetected, currentCamera, scene, control, updateStato3, orbit } from './setup';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { createMenu, updateMenu } from './objmenu';
import { syncMaxDictionaries } from './maxSync.js';
import { sendLastHoveredObjectToMax, resetLastHoveredObject } from './max.js'; // <--- aggiunto

export let raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();
export let isRaycasterActive = true;
let transformControlsOverride = false; // Flag per override dei transform controls

export function setRaycasterActive(state) {
    // console.log('setRaycasterActive called with:', state, 'transformControlsOverride:', transformControlsOverride);
    // console.trace('Call stack for setRaycasterActive:');
    
    // Se i transform controls hanno il controllo, ignora le chiamate esterne
    if (transformControlsOverride && state === true) {
        console.log('setRaycasterActive: BLOCKED by transform controls override');
        return;
    }
    
    isRaycasterActive = state;
    // console.log('isRaycasterActive now set to:', isRaycasterActive);
}

// Funzione helper per filtrare oggetti ed escludere transform controls
function filterTransformControls(objects) {
    return objects.filter(obj => {
        let current = obj;
        while (current) {
            // Controlla se l'oggetto è parte dei transform controls
            if (current.isTransformControls || 
                current.isTransformControlsGizmo ||
                current.isTransformControlsPlane ||
                current.isTransformControlsRotationGizmo ||
                current.isLine || // Molti gizmos sono Line/LineSegments
                (current.name && (
                    current.name.includes('TransformControls') || 
                    current.name.includes('Gizmo') ||
                    current.name.includes('picker') ||
                    current.name.includes('helper')
                )) ||
                (current.type && (
                    current.type === 'TransformControlsGizmo' ||
                    current.type === 'TransformControlsPlane' ||
                    current.type === 'Line' ||
                    current.type === 'LineSegments'
                )) ||
                // Controlla se è un figlio diretto dei transform controls
                (current.parent && (
                    current.parent.isTransformControls ||
                    current.parent.isTransformControlsGizmo
                ))) {
                return false; // Escludi questo oggetto
            }
            current = current.parent;
        }
        return true; // Includi questo oggetto
    });
}

export function getRaycasterActive() {
    return isRaycasterActive;
}

// Funzioni dedicate per i transform controls con priorità assoluta
export function setRaycasterActiveForTransformControls(state) {
    // console.log('setRaycasterActiveForTransformControls called with:', state);
    transformControlsOverride = !state; // Se disabilitiamo raycaster, attiviamo override
    isRaycasterActive = state;
}

export function clearTransformControlsOverride() {
    // console.log('clearTransformControlsOverride called');
    // console.trace('Call stack for clearTransformControlsOverride:');
    transformControlsOverride = false;
}

export let outlinePass;
let composer;

// Permette al menu di attivare/disattivare outline sugli oggetti
window.setMenuOutline = function(object, enable) {
    if (!outlinePass) return;
    if (enable) {
        outlinePass.selectedObjects = [object];
    } else {
        outlinePass.selectedObjects = [];
    }
};

// Sistema di throttling ottimizzato sincronizzato con rendering
let pendingMouseUpdate = false;
let lastMouseEvent = null;

// Variabili per gestione click/drag
let clickStartPos = null;
let clickStartTime = 0;
let isCameraDragging = false;
const CLICK_THRESHOLD = 5; // pixel
const CLICK_TIMEOUT = 300; // ms

// Variabile per tracking FXAA pass
let raycasterFxaaPass = null;

// Funzione per dispose del post-processing esistente
function disposePostProcessing() {
    if (composer) {
        // Dispose di tutti i pass
        composer.passes.forEach(pass => {
            if (pass.dispose) pass.dispose();
        });
        composer.dispose();
        composer = null;
    }
    if (outlinePass) {
        outlinePass.dispose();
        outlinePass = null;
    }
    raycasterFxaaPass = null;
    window.raycasterComposer = null;
}

// Inizializza il composer e l'outline pass (ottimizzato)
function initPostProcessing() {
    // Dispose precedente se esistente (evita memory leak)
    disposePostProcessing();

    const renderPass = new RenderPass(scene, currentCamera);

    outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, currentCamera);
    outlinePass.edgeStrength = 10; // Regola la forza del contorno
    outlinePass.edgeGlow = 1; // Nessun bagliore
    outlinePass.edgeThickness = 3; // Spessore del contorno
    outlinePass.visibleEdgeColor.set('#ffffff'); // Colore del contorno visibile
    outlinePass.hiddenEdgeColor.set('#ffffff'); // Colore del contorno nascosto

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(outlinePass);
    
    // Aggiungi FXAA (ora sincrono con imports statici)
    raycasterFxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    raycasterFxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
    raycasterFxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
    composer.addPass(raycasterFxaaPass);
    
    // Esponi il composer globalmente per il loop di rendering principale
    window.raycasterComposer = composer;
}

// Variabile per tracciare l'ultimo testo mostrato
let lastHoveredObject = null; // L'ultimo oggetto su cui si è fatto hover

export let currentSelectedObject = null; // L'ultimo oggetto selezionato rimane memorizzato

// Funzione per eliminare l'oggetto selezionato
function deleteSelectedObject() {
    const targetForTransform = lastHoveredObject || currentSelectedObject;
    if (!targetForTransform) return false; // Nessun oggetto disponibile

    const targetObject = targetForTransform.parent?.isGroup ? targetForTransform.parent : targetForTransform;
    const index = objToBeDetected.findIndex(obj => obj.name?.trim() === targetObject.name.trim());

    if (index !== -1) {
        const isAltoparlante = targetObject.name && targetObject.name.startsWith('Altoparlante');
        const isOmnifonte = targetObject.name && targetObject.name.startsWith('Omnifonte');
        const objectName = targetObject.name; // Salva il nome prima di rimuovere
        
        objToBeDetected.splice(index, 1);
        disposeObject(targetObject);
        console.log("Eliminato oggetto:", objectName);
        updateInfoTextBasso(objectName);
        
        // Notifica in base al tipo di oggetto eliminato
        if (isAltoparlante) {
            setTimeout(() => syncMaxDictionaries('altoparlanti'), 50);
        } else if (isOmnifonte) {
            setTimeout(() => syncMaxDictionaries('omnifonti'), 50);
        } else {
            setTimeout(syncMaxDictionaries, 50);
        }
        
        createMenu();
        currentSelectedObject = null;
        resetLastHoveredObject();
        return true;
    }
    return false;
}

// Esponi funzioni globalmente per comunicazione con setup.js (evita circular imports)
if (!window.raycasterGlobals) {
    window.raycasterGlobals = {};
}

window.raycasterGlobals = {
    get currentSelectedObject() { return currentSelectedObject; },
    set currentSelectedObject(value) { currentSelectedObject = value; },
    get lastHoveredObject() { return lastHoveredObject; },
    set lastHoveredObject(value) { lastHoveredObject = value; },
    get isRaycasterActive() { return isRaycasterActive; },
    get outlinePass() { return outlinePass; },
    setRaycasterActive: setRaycasterActive,
    setRaycasterActiveForTransformControls: setRaycasterActiveForTransformControls,
    clearTransformControlsOverride: clearTransformControlsOverride,
    duplicateObject: duplicateObject,
    deleteSelectedObject: deleteSelectedObject,
    updateMenu: updateMenu,
    processMouseRaycasting: processMouseRaycasting,
    resizeRaycasterComposer: resizeRaycasterComposer,
    disposePostProcessing: disposePostProcessing,
    initPostProcessing: initPostProcessing
};

// Funzione per processare raycasting (chiamata sync con render loop)
function processMouseRaycasting(event) {
    const active = getRaycasterActive();
    // console.log('processMouseRaycasting - isRaycasterActive:', active, 'transformControlsOverride:', transformControlsOverride);
    if (!active) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, currentCamera);
    
    // Filtra objToBeDetected escludendo i transform controls e i loro figli
    const filteredObjects = filterTransformControls(objToBeDetected);
    
    const intersects = raycaster.intersectObjects(filteredObjects, true);

    // --- CURSORE GRAB PER OMNIFONTE/ORIFONTE IN VISTA ORTOGONALE --- (COMMENTATO)
    /*
    if (isOrthoView() && intersects.length > 0) {
        let hovered = intersects[0].object;
        // Cerca il nome anche nei parent se serve
        let obj = hovered;
        let found = false;
        while (obj) {
            if (typeof obj.name === 'string' && (obj.name.toLowerCase().includes('omnifonte') || obj.name.toLowerCase().includes('orifonte'))) {
                found = true;
                break;
            }
            obj = obj.parent;
        }
        if (found) {
            renderer.domElement.style.cursor = 'grab';
        } else {
            renderer.domElement.style.cursor = '';
        }
    } else {
        renderer.domElement.style.cursor = '';
    }
    */

    if (intersects.length > 0) {
        let hovered = intersects[0].object;

        // --- INVIO A MAX/MSP DELLE INFO DELL'OGGETTO HOVERATO RIMOSSO ---
        // Cerca se hovered (o uno dei suoi parent) è figlio di un gruppo di trasformazione
        let group = null;
        let obj = hovered;
        while (obj) {
            if (obj.parent && obj.parent.name === 'Gruppo di trasformazione') {
                group = obj.parent;
                break;
            }
            obj = obj.parent;
        }

        if (group) {
            // Outline su tutti i membri del gruppo
            outlinePass.selectedObjects = group.children;
            currentSelectedObject = group;
            lastHoveredObject = group; // Aggiorna lastHoveredObject
            sendLastHoveredObjectToMax(group.name || 'Gruppo di trasformazione');
            updateInfoText(group.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(group);
            // Do not hide groupScaleUIDiv here (keep visible if S is active)
        } else if (hovered.name === 'Gruppo di trasformazione') {
            // Hover diretto sul gruppo
            outlinePass.selectedObjects = hovered.children;
            currentSelectedObject = hovered;
            lastHoveredObject = hovered; // Aggiorna lastHoveredObject
            sendLastHoveredObjectToMax(hovered.name || 'Gruppo di trasformazione');
            updateInfoText(hovered.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(hovered);
        } else {
            // Oggetto singolo (mesh o non mesh)
            outlinePass.selectedObjects = [hovered];
            currentSelectedObject = hovered;
            lastHoveredObject = hovered; // Aggiorna lastHoveredObject
            sendLastHoveredObjectToMax(hovered.name || 'Oggetto non trattato');
            updateInfoText(hovered.name || 'Oggetto non trattato');
            highlightMenuItemByObject(hovered);
        }

    } else {
        outlinePass.selectedObjects = [];
        currentSelectedObject = null;
        // NON resettiamo lastHoveredObject qui, così rimane disponibile per i tasti
        sendLastHoveredObjectToMax(null);
        highlightMenuItemByObject(null);
        // Nascondi il handle solo se NON c'è un gruppo selezionato
        const hovered = window.raycasterGlobals?.lastHoveredObject || window.raycasterGlobals?.currentSelectedObject;
        let isGroup = false;
        if (hovered) {
            if (hovered.name === 'Gruppo di trasformazione') isGroup = true;
            else if (hovered.parent && hovered.parent.name === 'Gruppo di trasformazione') isGroup = true;
        }
        if (!isGroup && !groupScaleUIDiv.isDragging) {
            console.log('[Raycaster] Chiamo groupScaleUIDiv.hide() perché nessun gruppo selezionato');
            groupScaleUIDiv.hide();
        }
    }
}

// Listener mousemove ottimizzato con requestAnimationFrame
renderer.domElement.addEventListener('mousemove', (event) => {
    if (!getRaycasterActive()) return;
    
    // Salva l'evento più recente
    lastMouseEvent = event;
    
    // Se non c'è già un aggiornamento pendente, programmane uno
    if (!pendingMouseUpdate) {
        pendingMouseUpdate = true;
        requestAnimationFrame(() => {
            if (lastMouseEvent) {
                processMouseRaycasting(lastMouseEvent);
                lastMouseEvent = null;
            }
            pendingMouseUpdate = false;
        });
    }
});

// Funzione per aggiornare il div con le informazioni
const infoDivDown = document.getElementById('infoDivBottomLeft');
function updateInfoTextBasso(text) {
    console.log("sto cancellando!");
    infoDivDown.textContent = "rimosso: " + (text || '---');
}


function disposeObject(obj) {
    // Rimuovi i figli ricorsivamente
    while (obj.children.length > 0) {
        disposeObject(obj.children[0]);
    }

    // Rimuovi il materiale
    if (obj.material) {
        if (Array.isArray(obj.material)) {
            obj.material.forEach(mat => {
                if (mat.map) mat.map.dispose();
                if (mat.envMap) mat.envMap.dispose();
                mat.dispose();
            });
        } else {
            if (obj.material.map) obj.material.map.dispose();
            if (obj.material.envMap) obj.material.envMap.dispose();
            obj.material.dispose();
        }
    }

    // Rimuovi la geometria
    if (obj.geometry) {
        obj.geometry.dispose();
    }

    // Rimuovi l'oggetto dal suo genitore
    if (obj.parent) {
        obj.parent.remove(obj);
    }

    console.log("Oggetto eliminato:", obj.name || obj.id);
}

// Funzione per aggiornare il div con le informazioni
const infoDiv = document.getElementById('infoDivTopLeft');
function updateInfoText(text) {
    infoDiv.textContent = text || '---';
}


// Quando il raycaster seleziona un oggetto, evidenzia anche il bordo del relativo elemento menu
function highlightMenuItemByObject(object) {
    const menuList = document.getElementById('menuList');
    if (!menuList) return;
    const items = menuList.querySelectorAll('.itemList');
    objToBeDetected.forEach((obj, idx) => {
        if (obj === object) {
            items[idx]?.classList.add('itemList-hover');
        } else {
            items[idx]?.classList.remove('itemList-hover');
        }
    });
}

// --- SELEZIONE MULTIPLA E GRUPPO TEMPORANEO ---
let tempGroup = null;
let selectedObjects = [];
let isDragging = false;
let dragStart = null;
let dragEnd = null;
let selectionMode = 'default'; // 'omni' o 'speaker'
const selectionRect = document.getElementById('selection-rectangle');

// Disegna il rettangolo di selezione
function updateSelectionRect() {
    if (!isDragging || !dragStart || !dragEnd) {
        selectionRect.style.display = 'none';
        return;
    }
    selectionRect.style.display = 'block';
    const x = Math.min(dragStart.x, dragEnd.x);
    const y = Math.min(dragStart.y, dragEnd.y);
    const w = Math.abs(dragEnd.x - dragStart.x);
    const h = Math.abs(dragEnd.y - dragStart.y);
    selectionRect.style.left = x + 'px';
    selectionRect.style.top = y + 'px';
    selectionRect.style.width = w + 'px';
    selectionRect.style.height = h + 'px';
    selectionRect.style.borderRadius = '4px';
    // Determina la direzione del drag
    if (dragEnd.y > dragStart.y) {
        // Alto -> basso: blu, omnifonti/orifonti
        selectionRect.style.borderColor = '#4488ff';
        selectionRect.style.background = 'rgba(68,136,255,0.08)';
        selectionMode = 'omni';
    } else {
        // Basso -> alto: verde, altoparlanti
        selectionRect.style.borderColor = '#ce572cff';
        selectionRect.style.background = 'rgba(187, 110, 68, 0.08)';
        selectionMode = 'speaker';
    }
}

// Seleziona oggetti nel rettangolo
function selectObjectsInRect(start, end) {
    // Trasforma coordinate schermo in normalized device coordinates
    const minX = Math.min(start.x, end.x);
    const maxX = Math.max(start.x, end.x);
    const minY = Math.min(start.y, end.y);
    const maxY = Math.max(start.y, end.y);

    selectedObjects = [];
    objToBeDetected.forEach(obj => {
        // Filtro per tipo
        let isOmni = obj.name && (obj.name.toLowerCase().includes('omnifonte') || obj.name.toLowerCase().includes('orifonte'));
        let isSpeaker = obj.name && obj.name.toLowerCase().includes('altoparlante');
        // Ottieni posizione proiettata
        let target = obj;
        if (!obj.isMesh && obj.children && obj.children.length > 0) {
            const meshChild = obj.children.find(child => child.isMesh);
            if (meshChild) target = meshChild;
        }
        const pos = target.getWorldPosition(new THREE.Vector3());
        const screenPos = pos.clone().project(currentCamera);
        const sx = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
        const sy = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
        if (sx >= minX && sx <= maxX && sy >= minY && sy <= maxY) {
            if (selectionMode === 'omni' && isOmni) selectedObjects.push(obj);
            else if (selectionMode === 'speaker' && isSpeaker) selectedObjects.push(obj);
        }
    });
    updateTempGroup();
}

// Aggiorna il gruppo temporaneo
function updateTempGroup() {
    // Rimuovi gruppo precedente
    if (tempGroup) {
        tempGroup.children.slice().forEach(obj => {
            if (obj.parent === tempGroup) {
                // Salva posizione globale
                obj.updateMatrixWorld(true);
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                scene.add(obj);
                obj.position.copy(worldPos);
            }
            if (obj.material && obj.material.emissive) {
                obj.material.emissive.setHex(0x000000);
            }
        });
        scene.remove(tempGroup);
        tempGroup = null;
    }
    // Rimuovi gli oggetti selezionati dal gruppo precedente, se necessario
    selectedObjects.forEach(obj => {
        if (obj.parent && obj.parent.type === 'Group' && obj.parent.name === 'Gruppo di trasformazione') {
            // Salva posizione globale
            obj.updateMatrixWorld(true);
            const worldPos = new THREE.Vector3();
            obj.getWorldPosition(worldPos);
            obj.parent.remove(obj);
            scene.add(obj);
            obj.position.copy(worldPos);
        }
    });
    if (selectedObjects.length > 1) {
        tempGroup = new THREE.Group();
        tempGroup.name = 'Gruppo di trasformazione';
        selectedObjects.forEach(obj => {
            if (obj.parent === scene) {
                // Salva posizione globale
                obj.updateMatrixWorld(true);
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                scene.remove(obj);
                tempGroup.add(obj);
                obj.position.copy(tempGroup.worldToLocal(worldPos));
            } else {
                tempGroup.add(obj);
            }
            // Evidenzia solo le mesh
            if (obj.material && obj.material.emissive) {
                obj.material.emissive.setHex(0x4444ff);
            }
            // Se obj è un gruppo/obj3d, evidenzia tutte le mesh figlie
            if (!obj.isMesh && obj.children && obj.children.length > 0) {
                obj.children.forEach(child => {
                    if (child.material && child.material.emissive) {
                        child.material.emissive.setHex(0x4444ff);
                    }
                });
            }
        });
        scene.add(tempGroup);
    } else if (selectedObjects.length === 1) {
        const obj = selectedObjects[0];
        if (obj.material && obj.material.emissive) {
            obj.material.emissive.setHex(0x4444ff);
        }
        if (!obj.isMesh && obj.children && obj.children.length > 0) {
            obj.children.forEach(child => {
                if (child.material && child.material.emissive) {
                    child.material.emissive.setHex(0x4444ff);
                }
            });
        }
    }
    // Aggiorna outline
    outlinePass.selectedObjects = selectedObjects.length > 0 ? selectedObjects : [];
    syncMaxDictionaries();
}

function clearSelection() {
    if (tempGroup) {
        tempGroup.children.slice().forEach(obj => {
            if (obj.parent === tempGroup) {
                obj.updateMatrixWorld(true);
                const worldPos = new THREE.Vector3();
                obj.getWorldPosition(worldPos);
                scene.add(obj);
                obj.position.copy(worldPos);
            }
            if (obj.material && obj.material.emissive) {
                obj.material.emissive.setHex(0x000000);
            }
            if (!obj.isMesh && obj.children && obj.children.length > 0) {
                obj.children.forEach(child => {
                    if (child.material && child.material.emissive) {
                        child.material.emissive.setHex(0x000000);
                    }
                });
            }
        });
        scene.remove(tempGroup);
        tempGroup = null;
    }
    selectedObjects.forEach(obj => {
        if (obj.material && obj.material.emissive) {
            obj.material.emissive.setHex(0x000000);
        }
        if (!obj.isMesh && obj.children && obj.children.length > 0) {
            obj.children.forEach(child => {
                if (child.material && child.material.emissive) {
                    child.material.emissive.setHex(0x000000);
                }
            });
        }
        if (obj.parent && obj.parent.type === 'Group' && obj.parent.name === 'Gruppo di trasformazione') {
            obj.updateMatrixWorld(true);
            const worldPos = new THREE.Vector3();
            obj.getWorldPosition(worldPos);
            obj.parent.remove(obj);
            scene.add(obj);
            obj.position.copy(worldPos);
        }
    });
    selectedObjects = [];
    outlinePass.selectedObjects = [];
    updateSelectionRect(); // Nascondi il rettangolo di selezione
}

function isTransformActive() {
    return control && (control.dragging || control.object);
}

// Gestione mouse
renderer.domElement.addEventListener('pointerdown', (event) => {
    if (!isOrthoView()) return;
    if (isTransformActive()) return; // Blocca selezione se TransformControls attivi
    isDragging = true;
    dragStart = { x: event.clientX, y: event.clientY };
    dragEnd = { x: event.clientX, y: event.clientY };
    updateSelectionRect();
});

renderer.domElement.addEventListener('pointermove', (event) => {
    if (!isOrthoView()) return;
    if (isTransformActive()) return; // Blocca selezione se TransformControls attivi
    if (isDragging) {
        dragEnd = { x: event.clientX, y: event.clientY };
        updateSelectionRect();
    }
});

renderer.domElement.addEventListener('pointerup', (event) => {
    if (!isOrthoView()) return;
    if (isTransformActive()) return; // Blocca selezione se TransformControls attivi
    if (isDragging) {
        dragEnd = { x: event.clientX, y: event.clientY };
        updateSelectionRect();
        if (Math.abs(dragEnd.x - dragStart.x) > 5 && Math.abs(dragEnd.y - dragStart.y) > 5) {
            clearSelection();
            selectObjectsInRect(dragStart, dragEnd);
        } else {
            // Click singolo
            const intersected = getIntersectedObject(event);
            if (intersected) {
                // Se l'oggetto fa parte di un gruppo di trasformazione, seleziona il gruppo e attacca i transform controls al gruppo
                if (intersected.parent && intersected.parent.type === 'Group' && intersected.parent.name === 'Gruppo di trasformazione') {
                    const gruppo = intersected.parent;
                    // Seleziona il gruppo
                    selectedObjects = [gruppo];
                    if (outlinePass) outlinePass.selectedObjects = gruppo.children;
                    currentSelectedObject = gruppo;
                    lastHoveredObject = gruppo;
                    sendLastHoveredObjectToMax(gruppo.name || 'Gruppo di trasformazione');
                    updateInfoText(gruppo.name || 'Gruppo di trasformazione');
                    highlightMenuItemByObject(gruppo);
                    // Attacca i transform controls al gruppo
                    control.attach(gruppo);
                    setRaycasterActiveForTransformControls(false);
                    orbit.enabled = false;
                    // FIX: pulisci subito l'outline per evitare glitch grafico
                    if (outlinePass) outlinePass.selectedObjects = [];
                    if (window.raycasterComposer) window.raycasterComposer.render();
                    if (window.updateStato) window.updateStato('Spostamento');
                } else {
                    // Se non è in gruppo, seleziona normalmente
                    clearSelection();
                    selectedObjects = [intersected];
                    updateTempGroup();
                }
            } else {
                clearSelection();
            }
        }
        isDragging = false;
        dragStart = null;
        dragEnd = null;
        updateSelectionRect(); // Nascondi il rettangolo di selezione
    }
});

// Shift+Click per selezione multipla
renderer.domElement.addEventListener('click', (event) => {
    if (!isOrthoView()) return;
    if (event.shiftKey) {
        const intersected = getIntersectedObject(event);
        if (intersected) {
            if (!selectedObjects.includes(intersected)) {
                selectedObjects.push(intersected);
            } else {
                selectedObjects = selectedObjects.filter(obj => obj !== intersected);
            }
            updateTempGroup();
        }
    }
});

// --- GESTIONE CLICK GLOBALE PER TRANSFORM CONTROLS ---
// Gestisce click in tutti i viewport per attaccare/staccare transform controls
renderer.domElement.addEventListener('mousedown', (event) => {
    // Solo tasto sinistro
    if (event.button !== 0) return;
    
    clickStartPos = { x: event.clientX, y: event.clientY };
    clickStartTime = Date.now();
    isCameraDragging = false;
    
    // Se i transform controls stanno già trascinando, non fare nulla
    if (control && control.dragging) return;
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (clickStartPos) {
        const dx = event.clientX - clickStartPos.x;
        const dy = event.clientY - clickStartPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Se il movimento supera la soglia, considera come drag
        if (distance > CLICK_THRESHOLD) {
            isCameraDragging = true;
        }
    }
});

renderer.domElement.addEventListener('mouseup', (event) => {
    // Solo tasto sinistro
    if (event.button !== 0) return;
    
    if (!clickStartPos) return;
    
    const clickDuration = Date.now() - clickStartTime;
    const dx = event.clientX - clickStartPos.x;
    const dy = event.clientY - clickStartPos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Verifica se è un click valido (non drag, non timeout, non camera dragging)
    const isValidClick = distance <= CLICK_THRESHOLD && 
                        clickDuration <= CLICK_TIMEOUT && 
                        !isCameraDragging;
    
    // Gestisce click solo se valido e:
    // 1. Non ci sono transform controls attivi, OPPURE
    // 2. Ci sono transform controls attivi ma vogliamo gestire il click nel vuoto per staccarli
    if (isValidClick) {
        const transformIsActive = isTransformActive();
        const intersected = getIntersectedObject(event);
        
        // Permetti click se:
        // - Non ci sono transform controls attivi (caso normale)
        // - Ci sono transform controls attivi ma click nel vuoto (per staccarli)
        if (!transformIsActive || (transformIsActive && !intersected)) {
            handleTransformClick(event);
        }
    }
    
    // Reset variabili
    clickStartPos = null;
    clickStartTime = 0;
    isCameraDragging = false;
});

// Funzione per gestire i click sui transform controls
function handleTransformClick(event) {
    const intersected = getIntersectedObject(event);
    
    if (intersected) {
        // Click su oggetto: attacca transform controls
        const targetObject = intersected.parent?.isGroup ? intersected.parent : intersected;
        
        // Attacca i transform controls all'oggetto
        control.attach(targetObject);
        
        // IMPORTANTE: Usa funzione dedicata per transform controls
        setRaycasterActiveForTransformControls(false);
        
        // Disabilita orbit controls durante transform
        orbit.enabled = false;
        
        // IMMEDIATAMENTE pulisci outline per evitare glitch sui transform controls
        if (outlinePass) {
            outlinePass.selectedObjects = [];
        }
        
        // Forza un aggiornamento immediato del rendering per rimuovere l'outline
        if (window.raycasterComposer) {
            window.raycasterComposer.render();
        }
        
        // Aggiorna currentSelectedObject e lastHoveredObject
        currentSelectedObject = intersected;
        lastHoveredObject = intersected;
        sendLastHoveredObjectToMax(intersected.name || 'Oggetto');
        updateInfoText(intersected.name || 'Oggetto');
        highlightMenuItemByObject(intersected);
        
        // Aggiorna lo stato UI per mostrare "Spostamento" (come con il tasto 'g')
        if (window.updateStato) {
            window.updateStato('Spostamento');
        }
        
    } else {
        // Click nel vuoto: stacca transform controls se attaccati
        if (control && control.object) {
            // Se l'oggetto attaccato è un gruppo di trasformazione, riaggiungi tutti i figli alla scena
            if (control.object.type === 'Group' && control.object.name === 'Gruppo di trasformazione') {
                control.object.children.slice().forEach(obj => {
                    obj.updateMatrixWorld(true);
                    const worldPos = new THREE.Vector3();
                    obj.getWorldPosition(worldPos);
                    control.object.remove(obj);
                    scene.add(obj);
                    obj.position.copy(worldPos);
                });
                scene.remove(control.object);
            }
            control.detach();
            orbit.enabled = true;
            outlinePass.selectedObjects = [];
            currentSelectedObject = null;
            lastHoveredObject = null;
            clearTransformControlsOverride();
            setRaycasterActive(true);
            updateMenu();
            updateStato3();
            const ghost = document.getElementById('ghostButton');
            if (ghost) {
                ghost.style.display = 'none';
            }
            // Nascondi anche l'handle di scala gruppo
            groupScaleUIDiv.hide();
        }
    }
}

// Funzione per verificare se la visuale è ortogonale
function isOrthoView() {
    // Implementazione reale: controlla che la camera sia ortogonale
    return currentCamera && currentCamera.isOrthographicCamera;
}

function getIntersectedObject(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, currentCamera);
    
    // Filtra objToBeDetected escludendo i transform controls e i loro figli  
    const filteredObjects = filterTransformControls(objToBeDetected);
    
    const intersects = raycaster.intersectObjects(filteredObjects, true);
    return intersects.length > 0 ? intersects[0].object : null;
}

// Inizializza post-processing
initPostProcessing();

// Funzione per aggiornare la camera nel post-processing
function updatePostProcessingCamera(newCamera) {
    if (outlinePass) {
        outlinePass.renderCamera = newCamera;
    }
    if (composer && composer.passes && composer.passes[0]) {
        // Aggiorna RenderPass
        composer.passes[0].camera = newCamera;
    }
}

// Funzione per resize del raycaster composer (completa)
function resizeRaycasterComposer() {
    if (composer) {
        composer.setSize(window.innerWidth, window.innerHeight);
    }
    if (outlinePass) {
        outlinePass.setSize(window.innerWidth, window.innerHeight);
    }
    // Aggiorna anche FXAA uniforms del raycaster
    if (raycasterFxaaPass) {
        const pixelRatio = renderer.getPixelRatio();
        raycasterFxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
        raycasterFxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
    }
}

// Esponi globalmente per evitare import circolari
window.updatePostProcessingCamera = updatePostProcessingCamera;
window.resizeRaycasterComposer = resizeRaycasterComposer;

// Cleanup automatico quando la pagina viene ricaricata o chiusa
window.addEventListener('beforeunload', () => {
    disposePostProcessing();
});

// --- INVIO A MAX/MSP DEL MOVIMENTO MANUALE ---
if (control) {
    // Evento change per aggiornamento continuo delle coordinate (senza notifiche)
    control.addEventListener('change', function () {
        if (control.object) {
            const obj = control.object;
            const fullName = obj.name || '';
            // Estrai nome e index (es: "Omnifonte 1" -> nome: "Omnifonte", index: 1)
            const match = fullName.match(/^(.*?)[\s_-]?(\d+)$/);
            let name = fullName;
            let index = 1;
            if (match) {
                name = match[1].trim();
                index = parseInt(match[2], 10);
            }
            const x = obj.position.x;
            const y = obj.position.z;
            const elevazione = obj.position.y;
            const distanceXY = Math.sqrt(x * x + y * y);
            let angleDeg = Math.atan2(y, x) * (180 / Math.PI) - 90;
            if (angleDeg < 0) angleDeg += 360;
            if (window.max && window.max.outlet) {
                window.max.outlet(name, index, x, y, elevazione, angleDeg, distanceXY);
            }
            
            // Solo aggiornamento dizionari senza notifiche speciali durante il movimento
            syncMaxDictionaries();
        }
    });
    
    // Evento mouseUp per notifica finale solo per altoparlanti
    control.addEventListener('mouseUp', function () {
        if (control.object) {
            const obj = control.object;
            const fullName = obj.name || '';
            const match = fullName.match(/^(.*?)[\s_-]?(\d+)$/);
            let name = fullName;
            if (match) {
                name = match[1].trim();
            }
            
            // Invia notifica "update Altoparlanti" solo alla fine del movimento di un altoparlante
            if (name === 'Altoparlante') {
                syncMaxDictionaries('update-altoparlanti');
            }
        }
    });
}

// Disattiva i TransformControls quando si clicca il bottone toggleTransButton
const toggleTransButton = document.getElementById('toggleTransButton');
if (toggleTransButton) {
    toggleTransButton.addEventListener('click', () => {
        if (control) {
            control.detach();
        }
        orbit.enabled = true;
        // Aggiorna stato UI come fa ESC
        updateStato3();
        // Nascondi ghostButton
        const ghostButton = document.getElementById('ghostButton');
        if (ghostButton) ghostButton.style.display = 'none';
        // Nascondi infoDivBottomLeft e infoDivTopLeft
        const infoDivDown = document.getElementById('infoDivBottomLeft');
        if (infoDivDown) infoDivDown.textContent = '---';
        // const infoDivTop = document.getElementById('infoDivTopLeft');
        // if (infoDivTop) infoDivTop.textContent = '---';
        // Nascondi anche il triangolino nero
        const transTriangle = document.getElementById('transTriangle');
        if (transTriangle) transTriangle.style.display = 'none';
        // Reset variabile di stato per infoDiv
        // if (typeof lastHoveredObject !== 'undefined') {
        //     lastHoveredObject = null;
        // }
        // Chiama updateStato3 per resettare anche lo stato in basso a sinistra
        updateStato3();
        // Riattiva raycaster
        isRaycasterActive = true;
        updateMenu();
    });
}

// Funzione per duplicare un oggetto
function duplicateObject(original) {
    console.log('[DEBUG] duplicateObject called for:', original?.name);
    console.trace();
    // Clona l'oggetto (deep clone)
    const clone = original.clone(true);

    // Calcola la matrice globale dell'originale
    original.updateMatrixWorld(true);
    const worldMatrix = original.matrixWorld.clone();

    // Decompone la matrice globale in posizione, rotazione, scala
    const pos = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    worldMatrix.decompose(pos, quat, scale);

    // Shift sulla X di +1.5 (nello spazio globale)
    pos.x += 1.5;

    // Imposta direttamente posizione, rotazione, scala globali sul clone
    clone.position.copy(pos);
    clone.quaternion.copy(quat);
    clone.scale.copy(scale);

    // --- Assegna nome coerente ---
    let baseName = original.name || 'Duplicato';
    let match = baseName.match(/^(.*?)[\s_-]?(\d+)$/);
    if (match) {
        baseName = match[1].trim();
    }
    let maxIndex = 0;
    objToBeDetected.forEach(obj => {
        if (obj.name) {
            let m = obj.name.match(new RegExp(`^${baseName}[\\s_-]?(\\d+)$`));
            if (m) {
                let idx = parseInt(m[1], 10);
                if (idx > maxIndex) maxIndex = idx;
            }
        }
    });
    clone.name = `${baseName} ${maxIndex + 1}`;

    // Aggiungi il clone alla scena e all'array objToBeDetected
    scene.add(clone);
    objToBeDetected.push(clone);

    createMenu();

    currentSelectedObject = clone;
    sendLastHoveredObjectToMax(clone.name);
    outlinePass.selectedObjects = [clone];
    updateInfoText(clone.name);
    highlightMenuItemByObject(clone);
    
    // Invia notifica corretta in base al tipo di oggetto duplicato
    const isAltoparlante = clone.name && clone.name.startsWith('Altoparlante');
    const isOmnifonte = clone.name && clone.name.startsWith('Omnifonte');
    
    if (isAltoparlante) {
        setTimeout(() => syncMaxDictionaries('altoparlanti'), 50);
    } else if (isOmnifonte) {
        setTimeout(() => syncMaxDictionaries('omnifonti'), 50);
    } else {
        setTimeout(syncMaxDictionaries, 50);
    }
}
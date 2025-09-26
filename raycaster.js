import * as THREE from 'three';
import { renderer, objToBeDetected, currentCamera, scene, control, updateStato3 } from './setup';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { createMenu, updateMenu } from './objmenu';
import { syncMaxDictionaries } from './maxSync.js';
import { sendUpdateToMax, sendLastHoveredObjectToMax, resetLastHoveredObject } from './max.js'; // <--- aggiunto

export let raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();
export let isRaycasterActive = true;

export function setRaycasterActive(state) {
    isRaycasterActive = state;
}

export function getRaycasterActive() {
    return isRaycasterActive;
}

let outlinePass;
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

// Intervallo per limitare la frequenza degli aggiornamenti
let lastUpdateTime = 0;
const updateInterval = 50; // Aggiorna ogni 100ms

// Inizializza il composer e l'outline pass
function initPostProcessing() {
    const renderPass = new RenderPass(scene, currentCamera);

    outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, currentCamera);
    outlinePass.edgeStrength = 10; // Regola la forza del contorno
    outlinePass.edgeGlow = 0; // Nessun bagliore
    outlinePass.edgeThickness = 5; // Spessore del contorno
    outlinePass.visibleEdgeColor.set('#ffffff'); // Colore del contorno visibile
    outlinePass.hiddenEdgeColor.set('#ffffff'); // Colore del contorno nascosto

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(outlinePass);
}

// Evento per ridimensionare il renderer e il composer
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

// Variabile per tracciare l'ultimo testo mostrato
let lastHoveredObject = null; // L'ultimo oggetto su cui si è fatto hover

export let currentSelectedObject = null; // L'ultimo oggetto selezionato rimane memorizzato

if (!window.__raycasterKeydownRegistered) {
    window.__raycasterKeydownRegistered = true;

    window.addEventListener('keydown', function(event) {
        // --- DUPLICAZIONE OGGETTO: Shift+D ---
        if (
            event.shiftKey &&
            event.key.toLowerCase() === 'd' &&
            currentSelectedObject
        ) {
            console.log('[DEBUG] Shift+D detected, duplicating:', currentSelectedObject?.name);
            duplicateObject(currentSelectedObject);
            syncMaxDictionaries();
            return; // Evita che il resto del listener venga eseguito
        }

        // --- CAMERA SWITCH (deve essere prima del controllo currentSelectedObject) ---
        switch (event.key) {
            case '1':
            case '2':
            case '3':
            case '4':
                initPostProcessing();
                animate();
                scene.add(currentCamera);
                renderer.render(scene, currentCamera);
                return; // Evita che il resto del listener venga eseguito
            case 'Escape':
                // Se i transform controls sono attaccati, staccali
                if (control && control.object) {
                    control.detach();
                    
                    // Riabilita orbit controls
                    orbit.enabled = true;
                    
                    // Aggiorna stato UI
                    updateStato3();
                }
                
                // Riabilita raycaster se disabilitato
                if (!isRaycasterActive) {
                    isRaycasterActive = true;
                    updateMenu();
                }
                return; // Evita che il resto del listener venga eseguito
        }

        // --- ALTRE AZIONI ---
        // Usa lastHoveredObject se disponibile, altrimenti currentSelectedObject
        const targetForTransform = lastHoveredObject || currentSelectedObject;
        if (!targetForTransform) return; // Nessun oggetto disponibile, esci

        if (event.key === 'g' || event.key === 's' || event.key === 'r') {
            // Attacca il controllo all'ultimo oggetto hoverato o selezionato
            const targetObject = targetForTransform.parent?.isGroup ? targetForTransform.parent : targetForTransform;
            control.attach(targetObject);
            outlinePass.selectedObjects = [];
            isRaycasterActive = false;
            
            // Disabilita orbit controls durante transform
            orbit.enabled = false;
            
            // Aggiorna currentSelectedObject con l'oggetto dei transform
            currentSelectedObject = targetForTransform;
        } else if (event.key === 'x' || event.key === 'Backspace') {

            const targetObject = targetForTransform.parent?.isGroup ? targetForTransform.parent : targetForTransform;
            const index = objToBeDetected.findIndex(obj => obj.name?.trim() === targetObject.name.trim());

            if (index !== -1) {
                // console.log("Oggetto trovato, rimuovo:", objToBeDetected[index].name);
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
            } else {
                // console.error("Oggetto con nome '" + targetObject.name + "' non trovato nell'array.");
            }
            createMenu();
            currentSelectedObject = null;
            resetLastHoveredObject(); // Reset del tracking invece di inviare null
        }
    });
}

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isRaycasterActive) return;

    const now = Date.now();
    if (now - lastUpdateTime < updateInterval) return;
    lastUpdateTime = now;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects(objToBeDetected, true);

    // --- CURSORE GRAB PER OMNIFONTE/ORIFONTE IN VISTA ORTOGONALE ---
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

    if (intersects.length > 0) {
        let hovered = intersects[0].object;

        // --- INVIO A MAX/MSP DELLE INFO DELL'OGGETTO HOVERATO ---
        if (window.max && window.max.outlet) {
            const obj = hovered;
            const fullName = obj.name || '';
            const match = fullName.match(/^(.*?)[\s_-]?(\d+)$/);
            let name = fullName;
            let index = 1;
            if (match) {
                name = match[1].trim();
                index = parseInt(match[2], 10);
            }
            // Coordinate corrette per il piano orizzontale (x, z), elevazione = y
            const x = obj.position.x;
            const y = obj.position.z;
            const elevazione = obj.position.y;
            // Distanza XY dal centro
            const distanceXY = Math.sqrt(x * x + y * y);
            // Angolo da 0 a 360 gradi rispetto all'origine sul piano XZ
            let angleDeg = Math.atan2(y, x) * (180 / Math.PI) - 90;
            if (angleDeg < 0) angleDeg += 360;
            window.max.outlet(name, index, x, y, elevazione, angleDeg, distanceXY);
        }
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

// Funzione di rendering con il composer
function animate() {
    requestAnimationFrame(animate);
    composer.render();
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
        // Ottieni posizione proiettata
        let target = obj;
        // Se obj è un gruppo o Object3D senza geometria, cerca una mesh figlia per la posizione
        if (!obj.isMesh && obj.children && obj.children.length > 0) {
            // Cerca la prima mesh figlia
            const meshChild = obj.children.find(child => child.isMesh);
            if (meshChild) target = meshChild;
        }
        const pos = target.getWorldPosition(new THREE.Vector3());
        const screenPos = pos.clone().project(currentCamera);
        const sx = (screenPos.x * 0.5 + 0.5) * window.innerWidth;
        const sy = (-screenPos.y * 0.5 + 0.5) * window.innerHeight;
        if (sx >= minX && sx <= maxX && sy >= minY && sy <= maxY) {
            selectedObjects.push(obj);
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
                clearSelection();
                selectedObjects = [intersected];
                updateTempGroup();
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
                        !isCameraDragging &&
                        !isTransformActive();
    
    if (isValidClick) {
        handleTransformClick(event);
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
        
        // Disabilita outline durante transform
        outlinePass.selectedObjects = [];
        
        // Disabilita raycaster durante transform
        isRaycasterActive = false;
        
        // Disabilita orbit controls durante transform
        orbit.enabled = false;
        
        // Aggiorna currentSelectedObject e lastHoveredObject
        currentSelectedObject = intersected;
        lastHoveredObject = intersected;
        sendLastHoveredObjectToMax(intersected.name || 'Oggetto');
        updateInfoText(intersected.name || 'Oggetto');
        highlightMenuItemByObject(intersected);
        
    } else {
        // Click nel vuoto: stacca transform controls se attaccati
        if (control && control.object) {
            control.detach();
            
            // Riabilita raycaster
            isRaycasterActive = true;
            
            // Riabilita orbit controls
            orbit.enabled = true;
            
            // Aggiorna UI
            updateMenu();
            
            // Reset selezione corrente
            currentSelectedObject = null;
            // Non resettare il tracking qui - mantieni l'ultimo oggetto valido
            outlinePass.selectedObjects = [];
            
            // Aggiorna stato UI
            updateStato3();
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
    const intersects = raycaster.intersectObjects(objToBeDetected, true);
    return intersects.length > 0 ? intersects[0].object : null;
}

// Inizializza post-processing e avvia il rendering
initPostProcessing();
animate();

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
            sendUpdateToMax(); // <--- aggiunto
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
    sendUpdateToMax(); // <--- aggiunto
}
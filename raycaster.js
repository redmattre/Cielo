import * as THREE from 'three';
import { renderer, objToBeDetected, currentCamera, scene, control, updateStato3 } from './setup';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { createMenu, updateMenu } from './objmenu';

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

export let currentSelectedObject = null; // L'ultimo oggetto selezionato rimane memorizzato

window.addEventListener('keydown', function(event) {
    if (!currentSelectedObject) return; // Nessun oggetto selezionato, esci

    if (event.key === 'g' || event.key === 's' || event.key === 'r') {
        // Attacca il controllo all'ultimo oggetto selezionato
        const targetObject = currentSelectedObject.parent?.isGroup ? currentSelectedObject.parent : currentSelectedObject;
        control.attach(targetObject);
        outlinePass.selectedObjects = [];
        isRaycasterActive = false;
    } else if (event.key === 'x' || event.key === 'Backspace') {

        const targetObject = currentSelectedObject.parent?.isGroup ? currentSelectedObject.parent : currentSelectedObject;
        const index = objToBeDetected.findIndex(obj => obj.name?.trim() === targetObject.name.trim());

        if (index !== -1) {
            // console.log("Oggetto trovato, rimuovo:", objToBeDetected[index].name);
            objToBeDetected.splice(index, 1);
            disposeObject(targetObject);
            console.log(objToBeDetected[index].name);
            updateInfoTextBasso(objToBeDetected[index].name);
            
        } else {
            // console.error("Oggetto con nome '" + targetObject.name + "' non trovato nell'array.");
        }
        createMenu();
        currentSelectedObject = null; // Resetta la selezione
    }
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isRaycasterActive) return;

    const now = Date.now();
    if (now - lastUpdateTime < updateInterval) return;
    lastUpdateTime = now;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects(objToBeDetected, true);

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
            updateInfoText(group.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(group);
        } else if (hovered.name === 'Gruppo di trasformazione') {
            // Hover diretto sul gruppo
            outlinePass.selectedObjects = hovered.children;
            currentSelectedObject = hovered;
            updateInfoText(hovered.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(hovered);
        } else {
            // Oggetto singolo (mesh o non mesh)
            outlinePass.selectedObjects = [hovered];
            currentSelectedObject = hovered;
            updateInfoText(hovered.name || 'Oggetto non trattato');
            highlightMenuItemByObject(hovered);
        }

    } else {
        outlinePass.selectedObjects = [];
        highlightMenuItemByObject(null);
    }
});

// Funzione per aggiornare il div con le informazioni
const infoDivDown = document.getElementById('infoDivBottomLeft');
function updateInfoTextBasso(text) {
    console.log("sto cancellando!");
    infoDivDown.textContent = "rimosso: " + currentSelectedObject || '---';
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
        }
    });
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1': // Tasto 1: Camera prospettica
            initPostProcessing();
            animate();
            break;

        case '2': // Tasto 2: Camera ortogonale
            initPostProcessing();
            animate();
            break;
        case '3': // Tasto 2: Camera ortogonale
            initPostProcessing();
            animate();
            break;
        case '4': // Tasto 2: Camera ortogonale
            initPostProcessing();
            animate();
            break;
        case 'Escape':
            if (!isRaycasterActive) {
                isRaycasterActive = true;
                updateMenu();
            } 
            break;
    }

    // Aggiungi la nuova camera alla scena
    scene.add(currentCamera);

    // Forza il renderer a utilizzare la nuova camera
    renderer.render(scene, currentCamera);
});

// Disattiva i TransformControls quando si clicca il bottone toggleTransButton
const toggleTransButton = document.getElementById('toggleTransButton');
if (toggleTransButton) {
    toggleTransButton.addEventListener('click', () => {
        if (control) {
            control.detach();
        }
        if (typeof orbit !== 'undefined') {
            orbit.enabled = true;
        }
        // Aggiorna stato UI come fa ESC
        if (typeof updateStato3 === 'function') {
            updateStato3();
        }
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
        if (typeof updateStato3 === 'function') {
            updateStato3();
        }
        // Riattiva raycaster
        if (typeof isRaycasterActive !== 'undefined') {
            isRaycasterActive = true;
        }
        if (typeof updateMenu === 'function') {
            updateMenu();
        }
    });
}
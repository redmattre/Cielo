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

// Variabile per tracciare l'oggetto attualmente con l'outline
let outlineObject = null;

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
let lastHoveredObject = null;

export let currentSelectedObject = null; // L'ultimo oggetto selezionato rimane memorizzato

window.addEventListener('keydown', function(event) {
    if (!currentSelectedObject) return; // Nessun oggetto selezionato, esci

    if (event.key === 'g' || event.key === 's' || event.key === 'r') {
        // Attacca il controllo all'ultimo oggetto selezionato
        const targetObject = currentSelectedObject.parent?.isGroup ? currentSelectedObject.parent : currentSelectedObject;
        control.attach(targetObject);
        outlineObject = null;
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
    if (isGroupCreationBlinking) return; // Blocca l'aggiornamento outline durante il lampeggio

    const now = Date.now();
    if (now - lastUpdateTime < updateInterval) return;
    lastUpdateTime = now;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects(objToBeDetected, true);

    if (intersects.length > 0) {
        let hovered = intersects[0].object;
        // Se hover su gruppo, outline su tutti i membri
        if (hovered.parent && hovered.parent.name === 'Gruppo di trasformazione') {
            const group = hovered.parent;
            // Prendi tutti i figli mesh del gruppo
            const groupMembers = group.children.filter(child => child.isMesh || child.type === 'Group' || child.type === 'Object3D');
            outlinePass.selectedObjects = groupMembers;
            currentSelectedObject = group;
            updateInfoText(group.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(group);
        } else if (hovered.name === 'Gruppo di trasformazione') {
            // Hover diretto sul gruppo
            const groupMembers = hovered.children.filter(child => child.isMesh || child.type === 'Group' || child.type === 'Object3D');
            outlinePass.selectedObjects = groupMembers;
            currentSelectedObject = hovered;
            updateInfoText(hovered.name || 'Gruppo di trasformazione');
            highlightMenuItemByObject(hovered);
        } else {
            // Oggetto singolo
            outlinePass.selectedObjects = [hovered];
            currentSelectedObject = hovered;
            updateInfoText(hovered.name || 'Oggetto non trattato');
            highlightMenuItemByObject(hovered);
        }
    } else {
        // Non resettare currentSelectedObject quando non c'è hover
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
let multiSelectedObjects = [];
let groupCreationBlinkInterval = null;
let isGroupCreationBlinking = false;

function startGroupBlinking() {
    if (groupCreationBlinkInterval) return;
    isGroupCreationBlinking = true;
    let visible = true;
    groupCreationBlinkInterval = setInterval(() => {
        if (!isGroupCreationBlinking) return;
        if (multiSelectedObjects.length > 0) {
            outlinePass.selectedObjects = visible ? multiSelectedObjects.slice() : [];
        }
        visible = !visible;
    }, 300);
    // Messaggio in basso a sinistra
    const infoDivDown = document.getElementById('infoDivBottomLeft');
    if (infoDivDown) infoDivDown.textContent = 'Creazione gruppo, clicca enter per confermare';
    // Mostra triangolino nero
    const transTriangle = document.getElementById('transTriangle');
    if (transTriangle) transTriangle.style.display = 'block';
}

function stopGroupBlinking() {
    isGroupCreationBlinking = false;
    if (groupCreationBlinkInterval) {
        clearInterval(groupCreationBlinkInterval);
        groupCreationBlinkInterval = null;
    }
    outlinePass.selectedObjects = [];
    // Ripristina messaggio
    const infoDivDown = document.getElementById('infoDivBottomLeft');
    if (infoDivDown) infoDivDown.textContent = '---';
    // Nascondi triangolino nero
    const transTriangle = document.getElementById('transTriangle');
    if (transTriangle) transTriangle.style.display = 'none';
}

renderer.domElement.addEventListener('mousedown', (event) => {
    if (!isRaycasterActive) return;
    if (event.button !== 0) return;
    const isShift = event.shiftKey;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects(objToBeDetected, true);
    if (isShift) {
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            // Se il gruppo esiste, sgroupa e resetta tutto
            if (tempGroup) {
                tempGroup.updateMatrixWorld(true);
                multiSelectedObjects.forEach(o => {
                    o.applyMatrix4(tempGroup.matrixWorld);
                    scene.add(o);
                    objToBeDetected.push(o);
                });
                scene.remove(tempGroup);
                const idxGroup = objToBeDetected.indexOf(tempGroup);
                if (idxGroup !== -1) objToBeDetected.splice(idxGroup, 1);
                tempGroup = null;
            }
            // Se l'oggetto è già selezionato, toglilo dalla selezione (e smette di blinkare)
            const idx = multiSelectedObjects.indexOf(obj);
            if (idx !== -1) {
                multiSelectedObjects.splice(idx, 1);
            } else {
                multiSelectedObjects.push(obj);
            }
            // Avvia lampeggio se almeno un oggetto selezionato
            if (multiSelectedObjects.length > 0) {
                startGroupBlinking();
            } else {
                stopGroupBlinking();
            }
            control.detach();
        } else {
            // Shift+click su spazio vuoto: sgroupa e resetta tutto
            if (tempGroup) {
                tempGroup.updateMatrixWorld(true);
                multiSelectedObjects.forEach(o => {
                    o.applyMatrix4(tempGroup.matrixWorld);
                    scene.add(o);
                    objToBeDetected.push(o);
                });
                scene.remove(tempGroup);
                const idxGroup = objToBeDetected.indexOf(tempGroup);
                if (idxGroup !== -1) objToBeDetected.splice(idxGroup, 1);
            }
            tempGroup = null;
            multiSelectedObjects = [];
            stopGroupBlinking();
            control.detach();
        }
        return;
    }
});

// Premi Enter per creare il gruppo con tutti gli oggetti selezionati
window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && multiSelectedObjects.length >= 2 && !tempGroup) {
        stopGroupBlinking();
        tempGroup = new THREE.Group();
        tempGroup.name = 'Gruppo di trasformazione';
        scene.add(tempGroup);
        multiSelectedObjects.forEach(o => {
            const idx = objToBeDetected.indexOf(o);
            if (idx !== -1) objToBeDetected.splice(idx, 1);
            tempGroup.attach(o);
        });
        objToBeDetected.push(tempGroup);
        outlinePass.selectedObjects = multiSelectedObjects.slice();
        control.detach();
    }
});

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
            if (window.max && window.max.outlet) {
                window.max.outlet(name, index, obj.position.x, obj.position.y, obj.position.z);
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
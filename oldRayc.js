import * as THREE from 'three';
import { renderer, objToBeDetected, currentCamera, scene } from './setup';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';

export let raycaster = new THREE.Raycaster();
export let mouse = new THREE.Vector2();
export let isRaycasterActive = true;
let outlineObject = null;  // Variabile per l'oggetto dell'outline

let outlinePass;
let composer;

let lastUpdateTime = 0;
const updateInterval = 100; // Aggiorna ogni 100ms, ad esempio

function initPostProcessing() {
    const renderPass = new RenderPass(scene, currentCamera);

    outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, currentCamera);
    outlinePass.edgeStrength = 10; // Regola la forza del contorno
    outlinePass.edgeGlow = 0.5; // Nessun bagliore
    outlinePass.edgeThickness = 5; // Spessore del contorno
    outlinePass.visibleEdgeColor.set('#ffffff'); // Colore del contorno visibile
    outlinePass.hiddenEdgeColor.set('#ffffff'); // Colore del contorno nascosto

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(outlinePass);
}

// Evento per ridimensionare il renderer e il composer (solo il composer forse puoi metterla da un altra parte questa cosa)
window.addEventListener('resize', () => {
    // renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isRaycasterActive) {
        return;  // Se il raycaster è disattivato, non eseguire il raycasting
    }

    const now = Date.now();
    if (now - lastUpdateTime < updateInterval) {
        return; // Non aggiornare se il tempo tra gli aggiornamenti è troppo breve
    }
    lastUpdateTime = now;

    // Il resto del codice per raycasting e highlighting
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, currentCamera);
    const intersects = raycaster.intersectObjects(objToBeDetected, true);

    if (intersects.length > 0) {
        let firstNonDashedObject = null;

        for (let i = 0; i < intersects.length; i++) {
            const intersectedObject = intersects[i].object;
            if (!intersectedObject.isDashed) {
                firstNonDashedObject = intersectedObject;
                break;
            }
        }

        if (firstNonDashedObject) {
            updateInfoText(firstNonDashedObject.name || 'Oggetto non trattato');
            highlightObject(firstNonDashedObject);
        } else {
            const dashedObject = intersects[0].object;
            updateInfoText(dashedObject.name || 'Oggetto trattato');
            highlightObject(dashedObject);
        }
    } else {
        updateInfoText();
        removeOutline();
    }
});

// Funzione per attivare o disattivare il raycaster
export function toggleRaycaster(status) {
    isRaycasterActive = status;  // Imposta la variabile globale
}

const infoDiv = document.getElementById('infoDivTopLeft');

function updateInfoText(text) {
    infoDiv.textContent = text || '---';
}

function highlightObject(object) {
    if (outlineObject) {
        scene.remove(outlineObject);
    }

    let outlineMaterial = new THREE.MeshBasicMaterial({
        color: 'black', // Colore dell'outline (giallo)
        side: THREE.BackSide,
        depthWrite: false,
    });

    if (object instanceof THREE.Mesh) {
        // Per le Mesh, usa un BoxGeometry per l'outline
        const boundingBox = new THREE.Box3().setFromObject(object);
        const size = boundingBox.getSize(new THREE.Vector3()).multiplyScalar(1.1); // Aumenta la dimensione dell'oggetto per l'outline
        const outlineGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);

        outlineObject = new THREE.Mesh(outlineGeometry, outlineMaterial);
        outlineObject.position.copy(object.position);
        outlineObject.rotation.copy(object.rotation);
    } else if (object instanceof THREE.LineSegments) {
        // Per le linee, usa una geometria di edges per l'outline
        const outlineGeometry = new THREE.EdgesGeometry(object.geometry);
        outlineObject = new THREE.LineSegments(outlineGeometry, outlineMaterial);
        outlineObject.position.copy(object.position);
        outlineObject.rotation.copy(object.rotation);
    }

    scene.add(outlineObject);
}

function removeOutline() {
    if (outlineObject) {
        scene.remove(outlineObject);
        outlineObject = null;
    }
}
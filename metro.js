import * as THREE from 'three';
import { objToBeDetected, scene, currentCamera } from './setup.js';

// --- METRO BUTTON ---
// Funzione per aggiungere il bottone metro alla dockTasti
export function addMetroButtonToDock() {
  const dock = document.querySelector('.dockTasti');
  if (!dock) return;
  if (document.getElementById('metroButton')) return; // già presente
  const btn = document.createElement('button');
  btn.id = 'metroButton';
  btn.title = 'Visualizza distanze tra altoparlanti';
  btn.textContent = '↔︎';
  btn.addEventListener('click', toggleMetro);
  dock.appendChild(btn);
}

const metroBtn = document.getElementById('metroButton');
if (metroBtn) {
  metroBtn.addEventListener('click', toggleMetro);
  // Stato attivo/feedback visivo già gestito in toggleMetro
}

let metroActive = false;
let metroLines = [];
let metroLabels = [];
let metroNeedsUpdate = false;

// --- AGGIORNAMENTO DINAMICO ---
// Aggiorna ogni frame se metro attivo (per movimenti continui)
function metroAnimationLoop() {
    if (metroActive) {
        showSpeakerConnections();
    }
    requestAnimationFrame(metroAnimationLoop);
}
metroAnimationLoop();

function toggleMetro() {
    metroActive = !metroActive;
    document.getElementById('metroButton').classList.toggle('active', metroActive);
    if (metroActive) {
        showSpeakerConnections();
    } else {
        clearAllMetro();
    }
}

function showSpeakerConnections() {
    clearAllMetro();
    // Filtra tutti gli oggetti "Altoparlante"
    const speakers = objToBeDetected.filter(obj => obj.name && obj.name.toLowerCase().includes('altoparlante'));
    // Raggruppa per "piano" (altezza y) con tolleranza
    const planes = [];
    const tolerance = 0.5;
    speakers.forEach(speaker => {
        const y = speaker.getWorldPosition(new THREE.Vector3()).y;
        let found = false;
        for (const plane of planes) {
            if (Math.abs(plane.y - y) <= tolerance) {
                plane.speakers.push(speaker);
                found = true;
                break;
            }
        }
        if (!found) {
            planes.push({ y, speakers: [speaker] });
        }
    });
    // Per ogni piano, collega solo i più vicini tra loro
    planes.forEach(plane => {
        const group = plane.speakers;
        group.forEach((speaker, i) => {
            let minDist = Infinity;
            let closest = null;
            const p1 = speaker.getWorldPosition(new THREE.Vector3());
            group.forEach((other, j) => {
                if (i === j) return;
                const p2 = other.getWorldPosition(new THREE.Vector3());
                const dist = p1.distanceTo(p2);
                if (dist < minDist) {
                    minDist = dist;
                    closest = p2;
                }
            });
            if (closest) {
                drawMetroLine(p1, closest);
            }
        });
    });
}

function createMetroLabel(position, distance) {
    const div = document.createElement('div');
    div.className = 'metro-label';
    div.textContent = distance.toFixed(2) + ' m';
    div.style.position = 'absolute';
    div.style.pointerEvents = 'none';
    div.style.background = getComputedStyle(document.documentElement).getPropertyValue('--fondale') || '#d6d6d6';
    div.style.color = getComputedStyle(document.documentElement).getPropertyValue('--testo') || 'black';
    div.style.padding = '2px 6px';
    div.style.borderRadius = '6px';
    div.style.fontSize = '1rem';
    div.style.transform = 'translate(-50%,-50%)';
    div.style.boxShadow = '0 2px 8px rgba(34,34,34,0.2)'; // shadow scura opacità 0.2
    document.body.appendChild(div);
    // Aggiorna posizione ogni frame
    function updateLabel() {
        if (!div.parentNode) return;
        const vector = position.clone();
        vector.project(currentCamera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        if (metroActive) requestAnimationFrame(updateLabel);
    }
    updateLabel();
    return div;
}

// Usa THREE.Line2/LineGeometry/LineMaterial per linea spessa e tratteggiata
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

function drawMetroLine(p1, p2) {
    // Linea rossa, spessa, tratteggiata
    const positions = [p1.x, p1.y, p1.z, p2.x, p2.y, p2.z];
    const geometry = new LineGeometry();
    geometry.setPositions(positions);
    const material = new LineMaterial({
        color: 0xff2222,
        linewidth: 2, // in world units (es. 0.008 = ~8px su canvas 1000px)
        dashed: true,
        dashSize: 0.02,
        gapSize: 0.02,
        transparent: true
    });
    material.resolution.set(window.innerWidth, window.innerHeight);
    const line = new Line2(geometry, material);
    line.computeLineDistances();
    line.name = '__metroLine';
    scene.add(line);
    metroLines.push(line);
    // Etichetta distanza
    const dist = p1.distanceTo(p2);
    const mid = p1.clone().lerp(p2, 0.5);
    const label = createMetroLabel(mid, dist);
    metroLabels.push(label);
}

function clearAllMetro() {
    metroLines.forEach(line => scene.remove(line));
    metroLines = [];
    metroLabels.forEach(label => label.remove());
    metroLabels = [];
}

// Aggiorna la risoluzione di tutte le linee metro quando la finestra cambia
window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    metroLines.forEach(line => {
        if (line.material && line.material.resolution) {
            line.material.resolution.set(w, h);
        }
    });
});

// Hook per aggiornare il metro quando necessario
export function triggerMetroUpdate() {
    if (!metroActive) return;
    if (!metroNeedsUpdate) {
        metroNeedsUpdate = true;
        setTimeout(updateMetroIfNeeded, 0); // aggiorna al prossimo ciclo
    }
}
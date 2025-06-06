import * as THREE from 'three';
import { objToBeDetected, scene, currentCamera } from './setup.js';

// --- METRO BUTTON ---
export function addMetroButton() {
    const bottonieraSopra = document.querySelector('.bottonieraSopra');
    if (!bottonieraSopra) return;
    if (document.getElementById('metroButton')) return; // già presente
    const btn = document.createElement('button');
    btn.id = 'metroButton';
    btn.className = 'topButtons';
    btn.title = 'Visualizza distanze tra altoparlanti';
    btn.textContent = 'm';
    btn.addEventListener('click', toggleMetro);
    bottonieraSopra.appendChild(btn);
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

function drawMetroLine(p1, p2) {
    // Linea
    const material = new THREE.LineBasicMaterial({ color: 0x00bcd4 });
    const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    const line = new THREE.Line(geometry, material);
    line.name = '__metroLine';
    scene.add(line);
    metroLines.push(line);
    // Etichetta distanza
    const dist = p1.distanceTo(p2);
    const mid = p1.clone().lerp(p2, 0.5);
    const label = createMetroLabel(mid, dist);
    metroLabels.push(label);
}

function createMetroLabel(position, distance) {
    const div = document.createElement('div');
    div.className = 'metro-label';
    div.textContent = distance.toFixed(2) + ' m';
    div.style.position = 'absolute';
    div.style.pointerEvents = 'none';
    div.style.background = 'rgba(0,188,212,0.8)';
    div.style.color = 'white';
    div.style.padding = '2px 6px';
    div.style.borderRadius = '6px';
    div.style.fontSize = '1rem';
    div.style.transform = 'translate(-50%,-50%)';
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

function clearAllMetro() {
    metroLines.forEach(line => scene.remove(line));
    metroLines = [];
    metroLabels.forEach(label => label.remove());
    metroLabels = [];
}

// Hook per aggiornare il metro quando necessario
export function triggerMetroUpdate() {
    if (!metroActive) return;
    if (!metroNeedsUpdate) {
        metroNeedsUpdate = true;
        setTimeout(updateMetroIfNeeded, 0); // aggiorna al prossimo ciclo
    }
}
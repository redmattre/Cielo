import * as THREE from 'three';
import { objToBeDetected, scene, currentCamera } from './setup.js';

// --- METRO BUTTON ---
// Funzione per aggiungere il bottone metro alla dockTasti
export function addMetroButtonToDock() {
  const dock = document.querySelector('.dockTasti');
  if (!dock) return;
  if (document.getElementById('metroButton')) return; // già presente
  
  // Trova il bottone menu per inserire il metro prima di esso
  const menuButton = document.getElementById('seeItemsList');
  
  const btn = document.createElement('button');
  btn.id = 'metroButton';
  btn.title = 'Visualizza distanze tra altoparlanti';
  btn.innerHTML = `
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M150.932,218.624c10.84,3.192,23.58,4.988,37.258,4.996c18.245-0.023,34.79-3.17,47.434-8.668c6.318-2.771,11.72-6.126,15.866-10.39c4.108-4.204,7.071-9.718,7.064-15.939c0.007-6.222-2.956-11.742-7.064-15.94c-6.237-6.362-15.216-10.825-26.048-14.062c-10.833-3.192-23.572-4.995-37.251-4.995c-18.244,0.014-34.79,3.162-47.441,8.668c-6.318,2.771-11.72,6.125-15.865,10.389c-4.108,4.198-7.072,9.718-7.065,15.94c-0.007,6.221,2.956,11.734,7.065,15.939C131.12,210.917,140.106,215.387,150.932,218.624z M135.754,183.213c3.303-3.495,10.249-7.404,19.464-10.079c9.207-2.72,20.64-4.382,32.972-4.374c16.434-0.023,31.288,2.97,41.374,7.404c5.04,2.187,8.846,4.744,11.048,7.05c2.246,2.357,2.8,4.05,2.808,5.41c-0.008,1.352-0.562,3.052-2.808,5.409c-3.296,3.488-10.242,7.404-19.457,10.079c-9.207,2.72-20.632,4.375-32.965,4.375c-16.441,0.014-31.294-2.971-41.381-7.404c-5.04-2.188-8.846-4.744-11.054-7.05c-2.246-2.357-2.794-4.057-2.801-5.409C132.96,187.263,133.508,185.57,135.754,183.213z"/>
      <path fill="currentColor" d="M376.372,243.659v-55.037c0.008-8.114-1.929-15.888-5.224-22.922c-3.304-7.05-7.929-13.397-13.42-19.043c-16.412-16.766-40.488-28.812-69.388-37.458l-0.155-0.044c-29.041-8.564-63.262-13.397-99.996-13.405c-48.993,0.044-93.448,8.528-127.262,23.24l-0.015,0.008c-16.885,7.404-31.316,16.405-42.276,27.666C13.154,152.303,8.528,158.65,5.225,165.7C1.929,172.735-0.008,180.509,0,188.623v134.756c-0.008,8.113,1.929,15.88,5.225,22.915c3.303,7.05,7.929,13.397,13.412,19.043c16.413,16.766,40.472,28.812,69.358,37.45l0.192,0.059c29.049,8.565,63.262,13.39,100.003,13.405H512v-172.59H376.372z M37.658,165.101c11.38-11.838,31.82-22.856,58.03-30.548c26.204-7.737,58.119-12.326,92.502-12.319c45.838-0.022,87.308,8.18,116.659,21.031c14.676,6.399,26.27,13.966,33.866,21.836c7.634,7.929,11.166,15.739,11.174,23.521c-0.008,7.773-3.54,15.592-11.174,23.521c-11.38,11.83-31.819,22.848-58.03,30.541c-26.204,7.744-58.112,12.326-92.496,12.326c-45.845,0.015-87.314-8.187-116.666-21.031c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.929-11.166-15.748-11.174-23.521C26.492,180.841,30.024,173.03,37.658,165.101z M349.888,222.341v32.669h-58.23c6.746-2.202,13.256-4.552,19.249-7.168c15.954-6.983,29.145-15.348,38.684-25.176L349.888,222.341z M485.516,389.766h-45.402v-66.854h-15.134v66.854h-33.416v-36.209h-15.134v36.209h-33.423v-66.854h-15.134v66.854h-33.423v-36.209h-15.134v36.209h-33.415v-66.854h-15.134v66.854h-33.415v-36.209h-15.134v36.076c-11.491-0.177-22.657-0.857-33.423-2.10v-64.711h-15.134v62.76c-23.772-3.621-45.054-9.459-62.138-16.937c-14.676-6.399-26.27-13.966-33.866-21.836c-7.634-7.93-11.166-15.748-11.174-23.521V222.341l0.296,0.325c14.314,14.706,36.8,26.277,64.621,34.532c27.83,8.217,61.053,12.939,96.788,12.946h297.326V389.766z"/>
    </svg>
  `;
  btn.addEventListener('click', toggleMetro);
  
  // Inserisce il bottone metro prima del bottone menu
  if (menuButton) {
    dock.insertBefore(btn, menuButton);
  } else {
    dock.appendChild(btn); // fallback se il menu non c'è
  }
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
// src/GroupScaleUIDiv.js
// Draggable UI div for group coordinate scaling in ortho-top view
import * as THREE from 'three';
import { syncMaxDictionaries } from '../maxSync.js';


class GroupScaleUIDiv {
    constructor() {
        this.handle = document.createElement('div');
        this.handle.id = 'group-scale-ui-handle';
        this.handle.style.position = 'absolute';
        // La posizione iniziale verrà impostata in show()
        this.handle.style.width = '24px';
        this.handle.style.height = '24px';
        this.handle.style.background = 'transparent';
        this.handle.style.borderLeft = '3px solid #333';
        this.handle.style.borderTop = '3px solid #333';
        this.handle.style.borderRight = 'none';
        this.handle.style.borderBottom = 'none';
        // this.handle.style.borderRadius = '0 0 0 8px';
        this.handle.style.zIndex = '1000';
        this.handle.style.display = 'none';
        this.handle.style.cursor = 'pointer';
        this.handle.style.userSelect = 'none';
        this.handle.title = 'Trascina per scalare XY';
        document.body.appendChild(this.handle);

        this.isActive = false;
        this.group = null;
        this.startX = 0;
        this.startY = 0;
        this.startScaleX = 1;
        this.startScaleY = 1;
        this.onDrag = this.onDrag.bind(this);
        this.onUp = this.onUp.bind(this);
        this.handle.addEventListener('mousedown', (e) => this.onDown(e));
    }

    show(group) {
        this.group = group;
        this.isActive = true;
        // Calcola posizione iniziale in pixel da vh/vw
        const vh = window.innerHeight / 100;
        const vw = window.innerWidth / 100;
        this.handle.style.left = (vw * 30) + 'px';
        this.handle.style.top = (vh * 30) + 'px';
        this.handle.style.display = 'block';
        this.startScaleX = 1;
        this.startScaleY = 1;
        // Save original positions for all children
        if (group) {
            group.children.forEach(child => {
                if (!child.userData._originalPos) {
                    child.userData._originalPos = child.position.clone();
                }
            });
        }
    }

    hide() {
        // Only hide if not dragging
        if (this.isActive && this.isDragging) {
            console.log('[GroupScaleUIDiv] hide() chiamato ma sto trascinando, IGNORO');
            return;
        }
        // console.log('[GroupScaleUIDiv] hide() chiamato, handle viene nascosto');
        this.isActive = false;
        this.group = null;
        this.handle.style.display = 'none';
    }

    onDown(e) {
        if (!this.isActive) return;
        e.preventDefault();
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        // Prendi la posizione attuale in pixel
        this.handleStartLeft = parseFloat(this.handle.style.left);
        this.handleStartTop = parseFloat(this.handle.style.top);
        window.addEventListener('mousemove', this.onDrag);
        window.addEventListener('mouseup', this.onUp);
    }

    onDrag(e) {
        if (!this.isActive || !this.group) return;
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        // Shift: lock assi, usa delta massimo
        let deltaX = dx;
        let deltaY = dy;
        if (e.shiftKey) {
            const maxDelta = Math.abs(dx) > Math.abs(dy) ? dx : dy;
            deltaX = maxDelta;
            deltaY = maxDelta;
        }
        // Sposta il cursore/handle
        this.handle.style.left = (this.handleStartLeft + deltaX) + 'px';
        this.handle.style.top = (this.handleStartTop + deltaY) + 'px';
        // Scale X by horizontal drag, Y by vertical drag
        // Inverti la direzione: verso destra/ribasso riduce la scala
        let scaleX = Math.max(0.1, Math.min(5, this.startScaleX - deltaX * 0.01));
        let scaleY = Math.max(0.1, Math.min(5, this.startScaleY - deltaY * 0.01));
        this.applyScale(scaleX, scaleY);
    }

    onUp(e) {
        window.removeEventListener('mousemove', this.onDrag);
        window.removeEventListener('mouseup', this.onUp);
        this.isDragging = false;
        if (!this.isActive) return;
        // Update startScale for next drag
        // Use last applied scale
        this.startScaleX = this.lastScaleX || 1;
        this.startScaleY = this.lastScaleY || 1;
        // Rendi la modifica permanente: aggiorna _originalPos con la nuova posizione
        if (this.group) {
            this.group.children.forEach(child => {
                if (child.userData._originalPos) {
                    child.userData._originalPos.copy(child.position);
                }
            });
            // Se il gruppo contiene solo altoparlanti, invia update a Max
            const allSpeakers = this.group.children.length > 0 && this.group.children.every(child => child.name && child.name.toLowerCase().includes('altoparlante'));
            if (allSpeakers && window.max && window.max.outlet) {
                // Aggiorna dizionario e invia update finale
                syncMaxDictionaries('update-altoparlanti');
            }
        }
    }

    applyScale(scaleX, scaleY) {
        this.lastScaleX = scaleX;
        this.lastScaleY = scaleY;
        if (!this.group) return;
        this.group.children.forEach(child => {
            const orig = child.userData._originalPos;
            if (orig) {
                child.position.x = orig.x * scaleX;
                child.position.y = orig.y * scaleY; // Scala anche Y (elevazione)
                child.position.z = orig.z * scaleY;
            }
        });

        // Aggiorna matrici world per posizioni globali consistenti
        this.group.updateMatrixWorld(true);

        const children = this.group.children;
        if (!children.length) return;

        const allOmni = children.every(c => c.name && (c.name.toLowerCase().includes('omnifonte') || c.name.toLowerCase().includes('orifonte')));
        const allSpeakers = children.every(c => c.name && c.name.toLowerCase().includes('altoparlante'));

        // Solo omnifonti inviano outlet realtime durante scaling
        if (allOmni && window.max && window.max.outlet) {
            children.forEach(child => {
                const worldPos = new THREE.Vector3();
                child.getWorldPosition(worldPos);
                let index = 1;
                const match = child.name.match(/^(.*?)[\s_-]?(\d+)$/);
                if (match) index = parseInt(match[2], 10);
                const x = worldPos.x;
                const z = worldPos.z;
                const y = worldPos.y;
                const distanceXY = Math.sqrt(x * x + z * z);
                let angleDeg = Math.atan2(z, x) * (180 / Math.PI) - 90;
                if (angleDeg < 0) angleDeg += 360;
                window.max.outlet('Omnifonte', index, x, z, y, angleDeg, distanceXY);
            });
        }

        // Aggiornamento dizionari continuo per riflettere le posizioni dei figli (anche altoparlanti)
        syncMaxDictionaries();
    }

    // Chiamare questa funzione quando gli oggetti vengono riaggiunti alla scena
    static resetChildrenPositions(group) {
        if (!group) return;
        group.children.forEach(child => {
            if (child.userData._originalPos) {
                child.position.copy(child.userData._originalPos);
            }
        });
    }
}

const groupScaleUIDiv = new GroupScaleUIDiv();
export default groupScaleUIDiv;

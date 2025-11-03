// Sistema di menu centrale per aggiunta elementi 3D con configurazioni avanzate
// Permette di configurare quantità, disposizione e parametri geometrici

document.addEventListener('DOMContentLoaded', () => {
    const addElementButton = document.getElementById('addElementMenu');
    const addElementMenu = document.getElementById('addElementCenterMenu');
    const closeButton = document.getElementById('closeAddElementMenu');
    const menuItems = document.querySelectorAll('.add-menu-item');
    const executeButton = document.getElementById('addElementExecute');
    
    // Controlli di configurazione
    const quantityInput = document.getElementById('elementQuantity');
    const quantitySection = quantityInput.parentElement; // La sezione che contiene quantità
    const arrangementSection = document.getElementById('arrangementSection');
    const configContextual = document.getElementById('configContextual');
    const arrangementSelect = document.getElementById('arrangementType');
    const squareConfig = document.getElementById('squareConfig');
    const circleConfig = document.getElementById('circleConfig');
    const lineConfig = document.getElementById('lineConfig');
    const squareSideX = document.getElementById('squareSideX');
    const squareSideZ = document.getElementById('squareSideZ');
    const circleRadius = document.getElementById('circleRadius');
    const circleAngle = document.getElementById('circleAngle');
    const lineOrientation = document.getElementById('lineOrientation');
    const lineLength = document.getElementById('lineLength');
    
    // Stato corrente
    let selectedElementType = null;
    
    // Riferimenti ai bottoni originali (nascosti)
    const originalButtons = {
        halo: document.getElementById('addHalo'),
        cone: document.getElementById('addCone'), 
        zone: document.getElementById('addZone'),
        arrow: document.getElementById('addArrow'),
        sphere: document.getElementById('addSphere')
    };

    // Funzione per aprire il menu
    function openAddMenu() {
        addElementMenu.classList.add('show');
        
        // Reset selezione
        resetSelection();
        
        // Aggiungi backdrop per chiudere cliccando fuori
        const backdrop = document.createElement('div');
        backdrop.id = 'addMenuBackdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 9999;
            backdrop-filter: blur(2px);
        `;
        
        backdrop.addEventListener('click', closeAddMenu);
        document.body.appendChild(backdrop);
        
        console.log('Add element menu opened');
    }

    // Funzione per chiudere il menu
    function closeAddMenu() {
        addElementMenu.classList.remove('show');
        
        // Rimuovi backdrop
        const backdrop = document.getElementById('addMenuBackdrop');
        if (backdrop) {
            backdrop.remove();
        }
        
        // Reset selezione
        resetSelection();
        
        console.log('Add element menu closed');
    }

    // Reset della selezione
    function resetSelection() {
        selectedElementType = null;
        menuItems.forEach(item => item.classList.remove('selected'));
        executeButton.disabled = true;
    }

    // Gestione dell'UI contestuale in base al tipo di elemento
    function updateContextualUI() {
        if (!selectedElementType) return;
        
        // Elementi con menu completo: sphere (Omnifonte) e cone (Altoparlante)
        const hasFullMenu = selectedElementType === 'sphere' || selectedElementType === 'cone';
        
        // Elemento speciale che non ha bisogno di configurazioni
        const isSpecialAction = selectedElementType === 'plastico';
        
        if (hasFullMenu) {
            // Mostra menu completo
            quantitySection.style.display = 'flex';
            arrangementSection.style.display = 'flex';
            configContextual.style.display = 'flex';
            updateArrangementConfig();
        } else if (isSpecialAction) {
            // Nascondi tutto per azioni speciali (plastico)
            quantitySection.style.display = 'none';
            arrangementSection.style.display = 'none';
            configContextual.style.display = 'none';
        } else {
            // Menu semplificato per arrow (Orifonte), halo (Aureola), zone (Zona)
            quantitySection.style.display = 'flex';
            arrangementSection.style.display = 'none';
            configContextual.style.display = 'none';
        }
    }

    // Gestione del cambio di disposizione
    function updateArrangementConfig() {
        const arrangement = arrangementSelect.value;
        // Nascondi tutti i config
        squareConfig.style.display = 'none';
        circleConfig.style.display = 'none';
        lineConfig.style.display = 'none';
        
        // Mostra quello selezionato
        if (arrangement === 'square') {
            squareConfig.style.display = 'flex';
        } else if (arrangement === 'circle') {
            circleConfig.style.display = 'flex';
        } else if (arrangement === 'line') {
            lineConfig.style.display = 'flex';
        }
    }

    // Calcola posizioni per disposizione quadrata
    function calculateSquarePositions(quantity, sideX, sideZ) {
        const positions = [];
        
        if (quantity === 1) {
            positions.push({ x: 0, y: 0, z: 1.2 });
        } else if (quantity === 2) {
            positions.push({ x: -sideX/2, y: 0, z: 1.2 });
            positions.push({ x: sideX/2, y: 0, z: 1.2 });
        } else if (quantity === 4) {
            positions.push({ x: -sideX/2, y: -sideZ/2, z: 1.2 });
            positions.push({ x: sideX/2, y: -sideZ/2, z: 1.2 });
            positions.push({ x: sideX/2, y: sideZ/2, z: 1.2 });
            positions.push({ x: -sideX/2, y: sideZ/2, z: 1.2 });
        } else {
            // Distribuzione lungo il perimetro
            const perimeter = 2 * (sideX + sideZ);
            const stepLength = perimeter / quantity;
            
            for (let i = 0; i < quantity; i++) {
                const distance = i * stepLength;
                let x, y;
                
                if (distance <= sideX) {
                    // Lato inferiore
                    x = -sideX/2 + distance;
                    y = -sideZ/2;
                } else if (distance <= sideX + sideZ) {
                    // Lato destro
                    x = sideX/2;
                    y = -sideZ/2 + (distance - sideX);
                } else if (distance <= 2*sideX + sideZ) {
                    // Lato superiore
                    x = sideX/2 - (distance - sideX - sideZ);
                    y = sideZ/2;
                } else {
                    // Lato sinistro
                    x = -sideX/2;
                    y = sideZ/2 - (distance - 2*sideX - sideZ);
                }
                
                positions.push({ x, y, z: 1.2 });
            }
        }
        
        return positions;
    }

    // Calcola posizioni per disposizione circolare
    function calculateCirclePositions(quantity, radius, totalAngle) {
        const positions = [];
        
        if (quantity === 1) {
            positions.push({ x: 0, y: 0, z: 1.2 });
        } else {
            // Per cerchi completi (360°) divide per quantity
            // Per archi parziali divide per quantity-1 per includere entrambi gli estremi
            const divisor = totalAngle >= 360 ? quantity : Math.max(1, quantity - 1);
            const angleStep = (totalAngle * Math.PI / 180) / divisor;
            const startAngle = -(totalAngle * Math.PI / 180) / 2;
            
            for (let i = 0; i < quantity; i++) {
                const angle = startAngle + (i * angleStep);
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                positions.push({ x, y, z: 1.2 });
            }
        }
        
        return positions;
    }

    // Calcola posizioni per disposizione lineare
    function calculateLinePositions(quantity, length, orientation) {
        const positions = [];
        
        if (quantity === 1) {
            positions.push({ x: 0, y: 0, z: 1.2 });
        } else {
            const step = length / (quantity - 1);
            const startOffset = -length / 2;
            
            for (let i = 0; i < quantity; i++) {
                const offset = startOffset + (i * step);
                
                if (orientation === 'horizontal') {
                    // Disposizione lungo l'asse X (orizzontale nel piano X/Z)
                    positions.push({ x: offset, y: 0, z: 1.2 });
                } else if (orientation === 'vertical') {
                    // Disposizione lungo l'asse Z (verticale nel piano X/Z)
                    positions.push({ x: 0, y: offset, z: 1.2 });
                } else if (orientation === 'perpendicular') {
                    // Disposizione lungo l'asse Y (perpendicolare, in altezza)
                    positions.push({ x: 0, y: 0, z: 1.2 + offset });
                }
            }
        }
        
        return positions;
    }

    // Calcola posizioni semplici per elementi con menu ridotto (linea orizzontale, distanza 0.5m)
    function calculateSimplePositions(quantity) {
        const positions = [];
        const spacing = 0.5; // Distanza fissa di 0.5m tra elementi
        
        if (quantity === 1) {
            positions.push({ x: 0, y: 0, z: 1.2 });
        } else {
            const totalLength = (quantity - 1) * spacing;
            const startOffset = -totalLength / 2;
            
            for (let i = 0; i < quantity; i++) {
                const x = startOffset + (i * spacing);
                positions.push({ x, y: 0, z: 1.2 });
            }
        }
        
        return positions;
    }

    // Esegue l'aggiunta degli elementi
    function executeAddElements() {
        if (!selectedElementType) return;
        
        // Caso speciale per plastico: esegui subito l'azione
        if (selectedElementType === 'plastico') {
            const plasticoBtn = document.getElementById('loadPlastico');
            if (plasticoBtn) {
                plasticoBtn.click(); // Simula click sul bottone esistente
                closeAddMenu(); // Chiudi il menu dopo l'azione
            }
            return;
        }
        
        const quantity = parseInt(quantityInput.value);
        let positions = [];
        
        // Verifica se l'elemento ha menu completo o semplificato
        const hasFullMenu = selectedElementType === 'sphere' || selectedElementType === 'cone';
        
        if (hasFullMenu) {
            // Menu completo: usa le configurazioni selezionate
            const arrangement = arrangementSelect.value;
            
            if (arrangement === 'square') {
                const sideX = parseFloat(squareSideX.value);
                const sideZ = parseFloat(squareSideZ.value);
                positions = calculateSquarePositions(quantity, sideX, sideZ);
            } else if (arrangement === 'circle') {
                const radius = parseFloat(circleRadius.value);
                const angle = parseFloat(circleAngle.value);
                positions = calculateCirclePositions(quantity, radius, angle);
            } else if (arrangement === 'line') {
                const length = parseFloat(lineLength.value);
                const orientation = lineOrientation.value;
                positions = calculateLinePositions(quantity, length, orientation);
            }
        } else {
            // Menu semplificato: usa sempre linea orizzontale con spaziatura fissa
            positions = calculateSimplePositions(quantity);
        }
        
        // Aggiunge gli elementi alle posizioni calcolate
        positions.forEach(pos => {
            if (selectedElementType === 'sphere') {
                addSphereAtPosition(pos.x, pos.y, pos.z);
            } else if (selectedElementType === 'cone') {
                addSpeakerAtPosition(pos.x, pos.y, pos.z);
            } else if (selectedElementType === 'arrow') {
                addArrowAtPosition(pos.x, pos.y, pos.z);
            } else if (selectedElementType === 'halo') {
                addHaloAtPosition(pos.x, pos.y, pos.z);
            } else if (selectedElementType === 'zone') {
                addZoneAtPosition(pos.x, pos.y, pos.z);
            }
        });
        
        let arrangeDesc;
        if (hasFullMenu) {
            const arrangement = arrangementSelect.value;
            arrangeDesc = arrangement === 'line' 
                ? `${arrangement} (${lineOrientation ? lineOrientation.value : 'horizontal'})` 
                : arrangement;
        } else {
            arrangeDesc = 'simple line (0.5m spacing)';
        }
        console.log(`Added ${quantity} ${selectedElementType} elements in ${arrangeDesc} arrangement`);
        
        // Chiudi il menu
        closeAddMenu();
    }

    // Event listeners
    if (addElementButton) {
        addElementButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openAddMenu();
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeAddMenu();
        });
    }

    if (executeButton) {
        executeButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            executeAddElements();
        });
    }

    if (arrangementSelect) {
        arrangementSelect.addEventListener('change', updateArrangementConfig);
    }

    // Gestione selezione elementi
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Rimuovi selezione precedente
            menuItems.forEach(i => i.classList.remove('selected'));
            
            // Aggiungi selezione corrente
            item.classList.add('selected');
            selectedElementType = item.dataset.element;
            executeButton.disabled = false;
            
            // Aggiorna l'UI contestuale
            updateContextualUI();
            
            console.log(`Selected element type: ${selectedElementType}`);
        });
        
        // Aggiungi hover effect con descrizione
        item.addEventListener('mouseenter', () => {
            const label = item.querySelector('.add-menu-label').textContent;
            const elementType = item.dataset.element;
            if (elementType === 'plastico') {
                item.title = `Carica modello 3D architettura`;
            } else {
                item.title = `Seleziona ${label}`;
            }
        });
    });

    // Chiudi con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && addElementMenu.classList.contains('show')) {
            closeAddMenu();
        }
    });

    // Inizializza configurazione
    updateArrangementConfig();

    // Esporta funzioni per uso globale se necessario
    window.addElementMenuSystem = {
        open: openAddMenu,
        close: closeAddMenu
    };

    console.log('Advanced Add Element Menu System initialized');
});
import { scene, objToBeDetected } from './setup.js';

// --- Configurazione sottomenu per tipo di oggetto ---
const submenuConfigs = {
    omnifonte: {
        title: 'Omnifonte Settings',
        controls: [
            { type: 'slider', label: 'Volume', min: 0, max: 1, step: 0.1, value: 0.8 },
            { type: 'slider', label: 'Distance', min: 0, max: 10, step: 0.1, value: 5.0 },
            { type: 'toggle', label: 'Active', value: true },
            { type: 'numbox', label: 'Channel', value: 1, min: 1, max: 16 },
            { type: 'toggle', label: 'Reverb', value: false }
        ]
    },
    orifonte: {
        title: 'Orifonte Settings', 
        controls: [
            { type: 'slider', label: 'Gain', min: -60, max: 12, step: 1, value: 0 },
            { type: 'slider', label: 'Spread', min: 0, max: 180, step: 5, value: 30 },
            { type: 'toggle', label: 'Enabled', value: true },
            { type: 'numbox', label: 'Input', value: 1, min: 1, max: 8 }
        ]
    },
    altoparlante: {
        title: 'Speaker Settings',
        controls: [
            { type: 'slider', label: 'Level', min: 0, max: 1, step: 0.05, value: 1.0 },
            { type: 'slider', label: 'Delay', min: 0, max: 100, step: 1, value: 0 },
            { type: 'toggle', label: 'Mute', value: false },
            { type: 'numbox', label: 'Output', value: 1, min: 1, max: 32 },
            { type: 'slider', label: 'EQ High', min: -12, max: 12, step: 0.5, value: 0 }
        ]
    },
    aureola: {
        title: 'Aureola Settings',
        controls: [
            { type: 'toggle', label: 'Visible', value: true },
            { type: 'slider', label: 'Opacity', min: 0, max: 1, step: 0.1, value: 0.5 },
            { type: 'numbox', label: 'Segments', value: 32, min: 8, max: 64 }
        ]
    },
    zona: {
        title: 'Zone Settings',
        controls: [
            { type: 'toggle', label: 'Active', value: true },
            { type: 'slider', label: 'Size', min: 0.1, max: 5, step: 0.1, value: 1.0 },
            { type: 'numbox', label: 'Priority', value: 1, min: 1, max: 10 }
        ]
    },
    povcursor: {
        title: 'POV Cursor Settings', 
        controls: [
            { type: 'toggle', label: 'Show', value: true },
            { type: 'slider', label: 'Height', min: 0.5, max: 3, step: 0.1, value: 1.2 },
            { type: 'slider', label: 'Speed', min: 0.1, max: 2, step: 0.1, value: 1.0 }
        ]
    }
};

// Funzione per determinare il tipo di oggetto dal nome
function getObjectType(objectName) {
    const name = objectName.toLowerCase();
    if (name.includes('omnifonte')) return 'omnifonte';
    if (name.includes('orifonte')) return 'orifonte'; 
    if (name.includes('altoparlante')) return 'altoparlante';
    if (name.includes('aureola') || name.includes('cloud')) return 'aureola';
    if (name.includes('zona')) return 'zona';
    if (name.includes('pov cursor')) return 'povcursor';
    return 'default';
}

// Funzioni per creare i controlli del sottomenu
function createSlider(config, object) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.marginBottom = '0.5rem';
    container.style.padding = '0.3rem';
    
    const label = document.createElement('label');
    label.textContent = config.label;
    label.style.width = '60px';
    label.style.fontSize = '0.8rem';
    label.style.marginRight = '0.5rem';
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = config.min;
    slider.max = config.max;
    slider.step = config.step;
    slider.value = config.value;
    slider.style.flex = '1';
    slider.style.height = '20px';
    
    const valueDisplay = document.createElement('span');
    valueDisplay.textContent = config.value;
    valueDisplay.style.width = '40px';
    valueDisplay.style.fontSize = '0.8rem';
    valueDisplay.style.textAlign = 'right';
    valueDisplay.style.marginLeft = '0.5rem';
    
    slider.addEventListener('input', (e) => {
        valueDisplay.textContent = parseFloat(e.target.value).toFixed(2);
        // TODO: Qui collegheremo alla logica dell'oggetto
        console.log(`${object.name} ${config.label}: ${e.target.value}`);
    });
    
    container.appendChild(label);
    container.appendChild(slider);
    container.appendChild(valueDisplay);
    return container;
}

function createToggle(config, object) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.marginBottom = '0.5rem';
    container.style.padding = '0.3rem';
    
    const label = document.createElement('label');
    label.textContent = config.label;
    label.style.fontSize = '0.8rem';
    label.style.marginRight = '0.5rem';
    label.style.flex = '1';
    
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.checked = config.value;
    toggle.style.transform = 'scale(1.2)';
    
    toggle.addEventListener('change', (e) => {
        console.log(`${object.name} ${config.label}: ${e.target.checked}`);
        // TODO: Qui collegheremo alla logica dell'oggetto
    });
    
    container.appendChild(label);
    container.appendChild(toggle);
    return container;
}

function createNumbox(config, object) {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.marginBottom = '0.5rem';
    container.style.padding = '0.3rem';
    
    const label = document.createElement('label');
    label.textContent = config.label;
    label.style.width = '60px';
    label.style.fontSize = '0.8rem';
    label.style.marginRight = '0.5rem';
    
    const numbox = document.createElement('input');
    numbox.type = 'number';
    numbox.value = config.value;
    numbox.min = config.min || '';
    numbox.max = config.max || '';
    numbox.style.width = '60px';
    numbox.style.padding = '0.2rem';
    numbox.style.border = '1px solid var(--dettaglio)';
    numbox.style.borderRadius = '3px';
    numbox.style.background = 'var(--fondale)';
    numbox.style.color = 'var(--testo)';
    
    numbox.addEventListener('change', (e) => {
        console.log(`${object.name} ${config.label}: ${e.target.value}`);
        // TODO: Qui collegheremo alla logica dell'oggetto
    });
    
    container.appendChild(label);
    container.appendChild(numbox);
    return container;
}

function createSubmenu(object) {
    const objectType = getObjectType(object.name);
    const config = submenuConfigs[objectType];
    
    if (!config) return null;
    
    const submenu = document.createElement('div');
    submenu.className = 'submenu';
    submenu.style.display = 'none';
    submenu.style.background = 'var(--fondale)';
    submenu.style.border = '1px solid var(--dettaglio)';
    submenu.style.borderTop = 'none';
    submenu.style.borderRadius = '0 0 5px 5px';
    submenu.style.padding = '0.5rem';
    submenu.style.marginBottom = '0.5rem';
    submenu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    
    // Titolo del sottomenu
    const title = document.createElement('div');
    title.textContent = config.title;
    title.style.fontWeight = 'bold';
    title.style.fontSize = '0.9rem';
    title.style.marginBottom = '0.5rem';
    title.style.borderBottom = '1px solid var(--dettaglio)';
    title.style.paddingBottom = '0.3rem';
    submenu.appendChild(title);
    
    // Controlli
    config.controls.forEach(controlConfig => {
        let control;
        switch (controlConfig.type) {
            case 'slider':
                control = createSlider(controlConfig, object);
                break;
            case 'toggle':
                control = createToggle(controlConfig, object);
                break;
            case 'numbox':
                control = createNumbox(controlConfig, object);
                break;
        }
        if (control) submenu.appendChild(control);
    });
    
    return submenu;
}

export function createMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    // Pulisci la mappa precedente
    if (window.menuObjectMap) {
        window.menuObjectMap.clear();
    }

    // --- Configurazione categorie ---
    const categories = [
        { key: 'fonti', label: 'F' },
        { key: 'halo', label: 'H' },
        { key: 'altoparlanti', label: 'A' },
        { key: 'zone', label: 'Z' },
        { key: 'povcursor', label: 'P' }
    ];

    let selectedCategory = localStorage.getItem('cielo_menu_category');
    
    // Se non esiste o non è valida, usa la prima categoria
    if (!selectedCategory || !categories.find(c => c.key === selectedCategory)) {
        selectedCategory = categories[0].key;
        localStorage.setItem('cielo_menu_category', selectedCategory);
    }

    // --- Creazione barra categorie ---
    const bar = document.createElement('div');
    bar.className = 'menuCatBar'; // Aggiungiamo la classe CSS
    bar.style.display = 'flex';
    bar.style.gap = '0.3rem';
    bar.style.marginBottom = '1rem';
    bar.style.justifyContent = 'flex-start';
    bar.style.alignItems = 'flex-end';
    bar.style.height = '1.7rem';
    bar.style.position = 'relative';

    const btns = [];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat.label;
        btn.style.padding = '0 0.5rem';
        btn.style.height = '1.4rem';
        btn.style.minWidth = '1.4rem';
        btn.style.fontSize = '0.95rem';
        btn.style.fontWeight = 'bold';
        btn.style.background = 'none';
        btn.style.border = 'none';
        btn.style.borderRadius = '0';
        btn.style.color = selectedCategory === cat.key ? 'var(--dettaglio)' : 'var(--testo)';
        btn.style.opacity = selectedCategory === cat.key ? '0.85' : '0.45';
        btn.style.position = 'relative';
        btn.style.cursor = 'pointer';
        btn.style.transition = 'color 0.2s, opacity 0.2s';
        btn.classList.toggle('menuCatActive', selectedCategory === cat.key);
        btn.classList.add('menuCatBtn');

        btn.addEventListener('click', () => {
            // Anima lo slider prima di cambiare categoria
            const newCategory = cat.key;
            if (newCategory !== selectedCategory) {
                // Trova il bottone cliccato per l'animazione
                const clickedBtnIndex = categories.findIndex(c => c.key === newCategory);
                if (btns[clickedBtnIndex]) {
                    const clickedBtn = btns[clickedBtnIndex];
                    const newLeft = clickedBtn.offsetLeft + clickedBtn.offsetWidth * 0.1;
                    const newWidth = clickedBtn.offsetWidth * 0.8;
                    
                    // Anima lo slider
                    const currentIndicator = bar.querySelector('.menuCatSlider');
                    if (currentIndicator) {
                        currentIndicator.style.left = newLeft + 'px';
                        currentIndicator.style.width = newWidth + 'px';
                    }
                }
                
                // Attendi l'animazione prima di ricreare il menu
                setTimeout(() => {
                    localStorage.setItem('cielo_menu_category', newCategory);
                    createMenu(); // Ricrea tutto il menu
                }, 150); // Metà dell'animazione (0.28s)
            }
        });

        bar.appendChild(btn);
        btns.push(btn);
    });

    // --- Sliding Indicator (versione sistemata) ---
    const indicator = document.createElement('div');
    indicator.className = 'menuCatSlider';
    indicator.style.position = 'absolute';
    indicator.style.height = '0.13rem';
    indicator.style.background = 'var(--dettaglio)';
    indicator.style.borderRadius = '2px';
    indicator.style.bottom = '-0.25rem';
    indicator.style.zIndex = '2';
    indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';

    bar.appendChild(indicator);
    menuList.appendChild(bar);

    // Posiziona l'indicatore DOPO che la barra è nel DOM
    requestAnimationFrame(() => {
        let idx = categories.findIndex(c => c.key === selectedCategory);
        // Se non trova la categoria, usa il primo elemento
        if (idx === -1) {
            idx = 0;
            selectedCategory = categories[0].key;
            localStorage.setItem('cielo_menu_category', selectedCategory);
        }
        
        // Aggiorna gli stili dei bottoni per riflettere la selezione corretta
        btns.forEach((button, buttonIdx) => {
            const isActive = buttonIdx === idx;
            button.style.color = isActive ? 'var(--dettaglio)' : 'var(--testo)';
            button.style.opacity = isActive ? '0.85' : '0.45';
            button.classList.toggle('menuCatActive', isActive);
        });
        
        if (btns[idx]) {
            const btn = btns[idx];
            const newLeft = btn.offsetLeft + btn.offsetWidth * 0.1;
            const newWidth = btn.offsetWidth * 0.8;
            
            // Imposta la posizione iniziale senza transizione per evitare animazioni indesiderate
            indicator.style.transition = 'none';
            indicator.style.left = newLeft + 'px';
            indicator.style.width = newWidth + 'px';
            
            // Riattiva la transizione per future animazioni
            setTimeout(() => {
                indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';
            }, 50);
        }
    });

    // --- Filtra oggetti in base alla categoria selezionata ---
    let filterFn;
    if (selectedCategory === 'fonti') {
        filterFn = obj => obj.name && (/Omnifonte|Orifonte/i).test(obj.name);
    } else if (selectedCategory === 'halo') {
        filterFn = obj => obj.name && (/Aureola|Cloud/i).test(obj.name);
    } else if (selectedCategory === 'altoparlanti') {
        filterFn = obj => obj.name && (/Altoparlante/i).test(obj.name);
    } else if (selectedCategory === 'zone') {
        filterFn = obj => obj.name && (/Zona|Zone/i).test(obj.name);
    } else if (selectedCategory === 'povcursor') {
        filterFn = obj => obj.name && (/POV Cursor/i).test(obj.name);
    } else {
        filterFn = () => true;
    }

    const filteredObjects = objToBeDetected.filter(filterFn);

    // --- Contenuto espandibile: lista oggetti con sottomenu ---
    // Creiamo una mappa globale per la sincronizzazione con raycaster
    window.menuObjectMap = new Map();
    
    filteredObjects.forEach((object) => {
        // Container principale per elemento + sottomenu
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';
        itemContainer.style.marginBottom = '0.5rem';

        // Elemento principale (header)
        const itemList = document.createElement('div');
        itemList.className = 'itemList';
        itemList.style.height = '2rem';
        itemList.style.display = 'flex';
        itemList.style.alignItems = 'center';
        itemList.style.padding = '0';
        itemList.style.background = 'var(--fondale)';
        itemList.style.border = '1px solid var(--dettaglio)';
        itemList.style.borderRadius = '5px';
        itemList.style.cursor = 'pointer';
        itemList.style.transition = 'border-color 0.2s, box-shadow 0.2s, border-radius 0.2s';

        // Contenitore per nome oggetto
        const nameContainer = document.createElement('div');
        nameContainer.style.flex = '1';
        nameContainer.style.overflow = 'hidden';
        nameContainer.style.textOverflow = 'ellipsis';
        nameContainer.style.whiteSpace = 'nowrap';
        nameContainer.style.padding = '0.5rem';
        nameContainer.textContent = object.name || 'Unnamed';

        // Indicatore espansione (freccia)
        const expandIcon = document.createElement('div');
        expandIcon.textContent = '▶';
        expandIcon.style.padding = '0.5rem';
        expandIcon.style.fontSize = '0.8rem';
        expandIcon.style.transition = 'transform 0.2s';
        expandIcon.style.userSelect = 'none';

        itemList.appendChild(nameContainer);
        itemList.appendChild(expandIcon);

        // Crea il sottomenu
        const submenu = createSubmenu(object);
        let isExpanded = false;

        // Click per espansione (separato dal hover)
        itemList.addEventListener('click', (e) => {
            e.stopPropagation();
            isExpanded = !isExpanded;
            
            if (submenu) {
                if (isExpanded) {
                    submenu.style.display = 'block';
                    expandIcon.style.transform = 'rotate(90deg)';
                    itemList.style.borderRadius = '5px 5px 0 0';
                } else {
                    submenu.style.display = 'none';
                    expandIcon.style.transform = 'rotate(0deg)';
                    itemList.style.borderRadius = '5px';
                }
            }
        });

        // Assembla il container
        itemContainer.appendChild(itemList);
        if (submenu) {
            itemContainer.appendChild(submenu);
        }
        menuList.appendChild(itemContainer);

        // Memorizza la mappatura oggetto -> elemento menu per il raycaster
        window.menuObjectMap.set(object, itemList);

        // --- Interazioni con raycaster (mantenute, solo hover non click) ---
        itemList.addEventListener('mouseenter', () => {
            itemList.classList.add('itemList-hover');
            
            // Attiva outline sull'oggetto corrispondente
            if (window.setMenuOutline) {
                window.setMenuOutline(object, true);
            }
        });

        itemList.addEventListener('mouseleave', () => {
            itemList.classList.remove('itemList-hover');
            
            // Disattiva outline sull'oggetto corrispondente
            if (window.setMenuOutline) {
                window.setMenuOutline(object, false);
            }
        });
    });
}

// Funzione di aggiornamento semplificata (non più necessaria con il nuovo design)
export function updateMenu() {
    // Nel nuovo design non abbiamo campi da aggiornare,
    // ma manteniamo la funzione per compatibilità
    console.log('updateMenu called - no action needed in simplified menu');
}

// Funzione per ottenere il nome dell'oggetto selezionato (mantenuta per compatibilità)
export function getSelectedObjectName(itemIndex) {
    return objToBeDetected[itemIndex]?.name || null;
}
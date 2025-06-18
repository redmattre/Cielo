import { scene, objToBeDetected } from './setup.js';

export function createMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    // --- Barra di selezione categorie ---
    const categories = [
        { key: 'fonti', label: 'F' },
        { key: 'halo', label: 'H' },
        { key: 'altoparlanti', label: 'A' },
        { key: 'zone', label: 'Z' }
    ];
    let selectedCategory = localStorage.getItem('cielo_menu_category') || 'fonti';
    const bar = document.createElement('div');
    bar.style.display = 'flex';
    bar.style.gap = '0.3rem';
    bar.style.marginBottom = '1rem';
    bar.style.justifyContent = 'flex-start';
    bar.style.alignItems = 'flex-end';
    bar.style.height = '1.7rem';
    bar.style.position = 'relative';
    // Array per i bottoni per calcolare posizione
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
            localStorage.setItem('cielo_menu_category', cat.key);
            createMenu();
        });
        bar.appendChild(btn);
        btns.push(btn);
    });
    // Indicatore sliding: crea una sola volta e riusa sempre
    let indicator = document.getElementById('menuCatSliderGlobal');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'menuCatSliderGlobal';
        indicator.className = 'menuCatSlider';
        indicator.style.position = 'absolute';
        indicator.style.height = '0.13rem';
        indicator.style.background = 'var(--dettaglio)';
        indicator.style.borderRadius = '2px';
        indicator.style.bottom = '-0.25rem';
        indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';
        indicator.style.zIndex = '2';
        // Store previous position for animation
        indicator.dataset.prevLeft = '0';
        indicator.dataset.prevWidth = '0';
    }
    bar.appendChild(indicator);
    menuList.appendChild(bar);
    // Aggiorna posizione indicatore SEMPRE dopo che la barra è nel DOM
    requestAnimationFrame(() => {
        const idx = categories.findIndex(c => c.key === selectedCategory);
        if (btns[idx]) {
            const btn = btns[idx];
            const newLeft = (btn.offsetLeft + btn.offsetWidth * 0.1);
            const newWidth = (btn.offsetWidth * 0.8);
            // Se è la prima volta o la posizione è cambiata, imposta la posizione precedente senza transizione
            if (indicator.dataset.prevLeft !== undefined && indicator.dataset.prevWidth !== undefined) {
                // Se la posizione è cambiata, imposta prima la posizione precedente senza transizione
                if (indicator.style.left !== newLeft + 'px' || indicator.style.width !== newWidth + 'px') {
                    indicator.style.transition = 'none';
                    indicator.style.left = indicator.dataset.prevLeft + 'px';
                    indicator.style.width = indicator.dataset.prevWidth + 'px';
                    // Forza il reflow
                    void indicator.offsetWidth;
                    // Poi attiva la transizione e vai alla nuova posizione
                    indicator.style.transition = 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1)';
                }
            }
            indicator.style.left = newLeft + 'px';
            indicator.style.width = newWidth + 'px';
            indicator.dataset.prevLeft = newLeft;
            indicator.dataset.prevWidth = newWidth;
        } else {
            indicator.style.left = '0px';
            indicator.style.width = '0px';
            indicator.dataset.prevLeft = 0;
            indicator.dataset.prevWidth = 0;
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
    } else {
        filterFn = () => true;
    }
    const filteredObjects = objToBeDetected.filter(filterFn);

    filteredObjects.forEach((object) => {
        const parent = object.parent && object.parent !== scene ? object.parent : object;

        const itemList = document.createElement('div');
        itemList.className = 'itemList';
        itemList.style.height = '1.2rem';

        // Titolo con layout flessibile
        const itemTitle = document.createElement('div');
        itemTitle.className = 'itemListTitle';
        itemTitle.style.display = 'flex';
        itemTitle.style.alignItems = 'center';
        itemTitle.style.justifyContent = 'space-between';

        // Contenitore per "⏿ - [NomeOggetto]"
        const titleLeft = document.createElement('div');
        const toggleVisibility = document.createElement('span');
        toggleVisibility.textContent = object.visible ? '⏿' : '⊗';
        toggleVisibility.style.cursor = 'pointer';
        toggleVisibility.style.userSelect = 'none';
        toggleVisibility.style.marginRight = '0.5rem';
        toggleVisibility.addEventListener('click', () => {
            object.visible = !object.visible;
            toggleVisibility.textContent = object.visible ? '⏿' : '⊗';
        });
        titleLeft.appendChild(toggleVisibility);
        titleLeft.append(` - ${object.name}`);

        // Glifo "▤" per il toggle del menu collassabile
        const toggleGlyph = document.createElement('div');
        toggleGlyph.textContent = '▤';
        toggleGlyph.style.userSelect = 'none';
        toggleGlyph.style.cursor = 'pointer';

        // Contenitore degli elementi collassabili
        const collapsibleContainer = document.createElement('div');
        collapsibleContainer.style.display = 'none'; // Inizialmente nascosto
        // collapsibleContainer.style.backgroundColor = 'red';

        // Funzione per togglare la visibilità del contenitore collassabile
        toggleGlyph.addEventListener('click', () => {
            collapsibleContainer.style.display =
                collapsibleContainer.style.display === 'none' ? 'block' : 'none';
            itemList.style.height = itemList.style.height === '1.2rem' ? 'auto' : '1.2rem';
        });

        // Aggiungi i contenitori sinistro e destro al titolo
        itemTitle.appendChild(titleLeft);
        itemTitle.appendChild(toggleGlyph);

        // Separator
        collapsibleContainer.appendChild(document.createElement('hr'));

        // Posizione (usa il parent)
        const position = createEditableField('Position', parent.position, (value) => {
            parent.position.set(value.x, value.y, value.z);
        });
        collapsibleContainer.appendChild(position);

        // Rotazione (usa il parent)
        const rotation = createEditableField('Rotation', parent.rotation, (value) => {
            parent.rotation.set(value.x, value.y, value.z);
        });
        collapsibleContainer.appendChild(rotation);

        // Scala (usa il parent)
        const scale = createEditableField('Scale', parent.scale, (value) => {
            parent.scale.set(value.x, value.y, value.z);
        });
        collapsibleContainer.appendChild(scale);

        // Aggiungi il titolo e il contenitore collassabile al menu
        itemList.appendChild(itemTitle);
        itemList.appendChild(collapsibleContainer);

        menuList.appendChild(itemList);

        // --- HOVER EFFETTO BORDO E OUTLINE ---
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

// Helper per creare campi editabili
function createEditableField(label, vector, onUpdate) {
    const container = document.createElement('div');
    container.className = `itemList${label}`;
    container.textContent = `${label.charAt(0)} `;

    ['x', 'y', 'z'].forEach((axis) => {
        const input = document.createElement('input');
        input.type = 'number';
        input.value = vector[axis].toFixed(2);
        input.step = '0.1';
        input.style.width = '3rem';
        input.addEventListener('change', (e) => {
            vector[axis] = parseFloat(e.target.value);
            onUpdate(vector);
        });
        container.appendChild(input);
    });

    return container;
}

// Funzione per ottenere il nome dell'oggetto selezionato dal menu
export function getSelectedObjectName(itemIndex) {
    return objToBeDetected[itemIndex]?.name || null;
}

export function updateMenu() {
    const menuList = document.getElementById('menuList');
    const items = menuList.querySelectorAll('.itemList');

    items.forEach((item, index) => {
        const object = objToBeDetected[index];
        if (!object) return;

        // Risali al parent, oppure usa l'oggetto stesso se non ha un parent valido
        const parent = object.parent && object.parent !== scene ? object.parent : object;

        // Trova gli input della posizione, rotazione e scala
        const positionInputs = item.querySelectorAll('.itemListPosition input');
        const rotationInputs = item.querySelectorAll('.itemListRotation input');
        const scaleInputs = item.querySelectorAll('.itemListScale input');

        // Aggiorna i valori di posizione
        ['x', 'y', 'z'].forEach((axis, i) => {
            positionInputs[i].value = parent.position[axis].toFixed(2);
        });

        // Aggiorna i valori di rotazione
        ['x', 'y', 'z'].forEach((axis, i) => {
            rotationInputs[i].value = parent.rotation[axis].toFixed(2);
        });

        // Aggiorna i valori di scala
        ['x', 'y', 'z'].forEach((axis, i) => {
            scaleInputs[i].value = parent.scale[axis].toFixed(2);
        });
    });
}
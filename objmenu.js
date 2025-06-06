import { scene, objToBeDetected } from './setup.js';

export function createMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = ''; // Resetta il menu

    objToBeDetected.forEach((object) => {
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
            itemList.style.height = itemList.style.height === '1.2rem' ? 'auto' : '1.2rem'
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
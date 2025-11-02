// Sistema di menu centrale per aggiunta elementi 3D
// Sostituisce i bottoni individuali con un menu centralizzato

document.addEventListener('DOMContentLoaded', () => {
    const addElementButton = document.getElementById('addElementMenu');
    const addElementMenu = document.getElementById('addElementCenterMenu');
    const closeButton = document.getElementById('closeAddElementMenu');
    const menuItems = document.querySelectorAll('.add-menu-item');
    
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
        
        console.log('Add element menu closed');
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

    // Gestione click sui bottoni del menu
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const elementType = item.dataset.element;
            const originalButton = originalButtons[elementType];
            
            if (originalButton) {
                console.log(`Adding ${elementType} element`);
                
                // Simula il click sul bottone originale per mantenere la funzionalità
                originalButton.click();
                
                // Chiudi il menu dopo la selezione
                closeAddMenu();
            } else {
                console.warn(`No original button found for element type: ${elementType}`);
            }
        });
        
        // Aggiungi hover effect con descrizione
        item.addEventListener('mouseenter', () => {
            const label = item.querySelector('.add-menu-label').textContent;
            item.title = `Aggiungi ${label}`;
        });
    });

    // Chiudi con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && addElementMenu.classList.contains('show')) {
            closeAddMenu();
        }
    });

    // Esporta funzioni per uso globale se necessario
    window.addElementMenuSystem = {
        open: openAddMenu,
        close: closeAddMenu
    };

    console.log('Add Element Menu System initialized');
});
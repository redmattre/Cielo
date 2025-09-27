import * as THREE from 'three';
import { dashedMaterial, dashedMaterialB, dashedMaterialC, dashedMaterialD, goochMaterialAlpha, solidMaterial } from "./materials";
import { currentSelectedObject, setRaycasterActive } from "./raycaster";
import { currentCamera, changeTheme, control, orbit, orbitOrtho, onWindowResize, ssuper, scene, renderer, changeGrid, render, updateStato, transfo, changeTransfo, updateStato1 } from "./setup";
import { changeNatMatTransparency, toggleMaterial, toggleModelVisibility, toggleTransparency } from './loadersFIX';

let scaleMoveSnap = 0.05;
let rotationSnapDegrees = 15;
let snapIsActive = true;

// SWITCHES
document.querySelectorAll('.switch input').forEach((checkbox) => {
	checkbox.addEventListener('change', (event) => {
		const isChecked = event.target.checked;
		const switchId = event.target.getAttribute('data-id');
		toggleSwitch(switchId, isChecked);
	});
});

let architectureTransparency = 0.7;

function toggleSwitch(id, state) {
	switch (id) {
		case 'lock':
            // Non interferire se i transform controls sono attivi
            if (window.setupGlobals?.control?.object) {
                console.log('Lock toggle ignored: transform controls are active');
                return;
            }
            setRaycasterActive(!state); // Update the value
			break;

        case 'transparencyA':
            toggleTransparency('architettura', state);
            isTransparent = state;
            if (state) {
                goochMaterialAlpha.uniforms.opacity.value = architectureTransparency;
                // architectureTransparency = 0.5;
                // goochMaterialAlpha.transparent = true;

            } else {
                goochMaterialAlpha.uniforms.opacity.value = 1.;
                // architectureTransparency = 1.;
                // goochMaterialAlpha.transparent = false;
            }
            
            break;
        case 'serioso':
            if (state) {
                goochMaterialAlpha.uniforms.coolColor.value = new THREE.Color(0x0077ff);
                goochMaterialAlpha.uniforms.warmColor.value = new THREE.Color(0xffaa00);
            } else {
                goochMaterialAlpha.uniforms.coolColor.value = new THREE.Color(0x000080);
                goochMaterialAlpha.uniforms.warmColor.value = new THREE.Color(0xF5F5DC);
            }

            if (state) {
                toggleMaterial('architettura', goochMaterialAlpha);
            } else {
                toggleMaterial('architettura');
            }
            break;
        case 'wireframeVisibility':
            break;
        case 'theme':
            changeTheme(state);
            break;
        case 'grid':
            ssuper.visible = state;
            break;
        case 'gridSnapState':
            if (state) {
                control.setTranslationSnap(scaleMoveSnap);
	            control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
	            control.setScaleSnap(scaleMoveSnap);
                snapIsActive = true;
            } else {
                control.setTranslationSnap(null);
                control.setRotationSnap(THREE.MathUtils.degToRad(null));
                control.setScaleSnap(null);
                snapIsActive = false;
            }
            break;
        case 'zoneVisibility':
            if (state) {
                dashedMaterial.visible = true;
                dashedMaterialB.visible = true;
                dashedMaterialC.visible = true;
                dashedMaterialD.visible = true;
            } else {
                dashedMaterial.visible = false;
                dashedMaterialB.visible = false;
                dashedMaterialC.visible = false;
                dashedMaterialD.visible = false;
            }
            break;
        case 'archVisibility':
            if (state) {
                goochMaterialAlpha.uniforms.opacity.value = isTransparent ? architectureTransparency : 1;
                solidMaterial.visible = true;
            } else {
                goochMaterialAlpha.uniforms.opacity.value = 0;
                solidMaterial.visible = false;
            }
            
            // Handle both old architecture model and new ConditionalLines models
            toggleModelVisibility('architettura', state);
            toggleModelVisibility('architettura-background', state);
            toggleModelVisibility('architettura-edges', state);
            toggleModelVisibility('architettura-conditional', state);
            break;
		default:
			console.log('Switch non riconosciuto');
	}
}

// SLIDERS

document.querySelectorAll('.multitoggle input').forEach((range) => {
	range.addEventListener('change', (event) => {
		const valore = parseInt(event.target.value); // Converte in numero
		const sliderId = event.target.getAttribute('data-id');
		toggleSlider(sliderId, valore);
	});
});

function toggleSlider(id, val) {
    switch (id) {
        case 'gridsize':
            switch (val) {
                case 1:
                    changeGrid(5, 8);
                    break;
                case 2:
                    changeGrid(10, 16);
                    break;
                case 3:
                    changeGrid(20, 32);
                    break;
                case 4:
                    changeGrid(40, 64);
                    break;
                default:
                    console.log("Valore non riconosciuto.");
                    return;
            }
            break;
        case 'transArchVal':
            switch (val) {
                case 1:
                    architectureTransparency = 0.;
                    changeNatMatTransparency(0.1);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 2:
                    architectureTransparency = 0.2;
                    changeNatMatTransparency(0.3);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.2;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 3:
                    architectureTransparency = 0.5;
                    changeNatMatTransparency(0.5);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.5;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                case 4:
                    architectureTransparency = 0.7;
                    changeNatMatTransparency(0.7);
                    if (isTransparent) {
                        goochMaterialAlpha.uniforms.opacity.value = 0.7;
                        toggleTransparency('architettura', true);
                    }
                    
                    break;
                default:
                    console.log("Valore non riconosciuto.");
                    return;
            }
            break;
        case 'snapDefinition':
            switch(val) {
                case 1:
                    scaleMoveSnap = 0.0125;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
                case 2:
                    scaleMoveSnap = 0.05;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
                case 3:
                    scaleMoveSnap = 0.1;
                    rotationSnapDegrees = 15;
                    if (snapIsActive) {
                        control.setTranslationSnap(scaleMoveSnap);
                        control.setRotationSnap(THREE.MathUtils.degToRad(rotationSnapDegrees));
                        control.setScaleSnap(scaleMoveSnap);
                    };
                    break;
            }

        default:
            console.log("ID non riconosciuto.");
    }
}

// BUTTONS

let counter = 1; // Definito al di fuori per mantenere lo stato tra i clic
let isTransparent = false;
let isVisible = false;

const menuList = document.getElementById("menuList");

document.getElementById('seeItemsList').addEventListener('click', (event) => {
    // Recupera lo stato del pulsante dal suo attributo data
    const isActive = event.target.getAttribute('data-active') === 'true';

    if (isActive) {
        // Disattiva
        menuList.style.opacity = 0;
        menuList.style.width = "0vw";
        menuList.style.color = "var(--fondale)";
        menuList.style.pointerEvents = "none";
        event.target.setAttribute('data-active', 'false');
    } else {
        // Attiva
        menuList.style.opacity = 1;
        menuList.style.width = "23vw";
        menuList.style.color = "var(--testo)";
        menuList.style.pointerEvents = "all";
        event.target.setAttribute('data-active', 'true');
    }
});

let moveButton = document.getElementById('moveButton');
let rotateButton = document.getElementById('rotateButton');
let scaleButton = document.getElementById('scaleButton');
let toggleTransButton = document.getElementById('toggleTransButton');

moveButton.addEventListener('click', () => {
    control.setMode('translate');
    updateStato('Spostamento (g)');
});

rotateButton.addEventListener('click', () => {
    control.setMode('rotate');
	updateStato('Rotazione (r)');
});

scaleButton.addEventListener('click', () => {
    control.setMode('scale');
	updateStato('Scala (s)');
});

toggleTransButton.addEventListener('click', () => {
    changeTransfo(!transfo);
    control.setSpace(control.space === 'local' ? 'world' : 'local');
    updateStato1();
});

// Bottone tilde per aprire il menu laterale
const openSideMenu = document.getElementById('openSideMenu');
const blackPanel = document.getElementById('black-panel');

openSideMenu.addEventListener('click', () => {
  if (blackPanel.style.opacity === '1') {
    blackPanel.style.opacity = 0;
    blackPanel.style.pointerEvents = 'none';
    blackPanel.style.width = '0vw';
    blackPanel.style.color = 'var(--fondale)';
  } else {
    blackPanel.style.opacity = 1;
    blackPanel.style.pointerEvents = 'all';
    blackPanel.style.width = '35vw';
    blackPanel.style.color = 'var(--testo)';
  }
});

// Evidenziatore mobile per tasto attivo nella dock
const dockTasti = document.querySelector('.dockTasti');
const dockHighlight = document.getElementById('dockTastiHighlight');
const moveBtn = document.getElementById('moveButton');
const rotateBtn = document.getElementById('rotateButton');
const scaleBtn = document.getElementById('scaleButton');
const toggleTransBtn = document.getElementById('toggleTransButton');

function showDockHighlight(targetBtn) {
  if (!targetBtn) return;
  const top = targetBtn.offsetTop;
  dockHighlight.style.top = top + 'px';
  dockHighlight.classList.remove('hide');
}

function hideDockHighlight() {
  dockHighlight.classList.add('hide');
}

// Gestione click UI
moveBtn.addEventListener('click', () => {
  showDockHighlight(moveBtn);
});
rotateBtn.addEventListener('click', () => {
  showDockHighlight(rotateBtn);
});
scaleBtn.addEventListener('click', () => {
  showDockHighlight(scaleBtn);
});
toggleTransBtn.addEventListener('click', () => {
  hideDockHighlight();
});

// Gestione shortcut tastiera
window.addEventListener('keydown', (event) => {
  if (event.key === 'g') {
    showDockHighlight(moveBtn);
  } else if (event.key === 'r') {
    showDockHighlight(rotateBtn);
  } else if (event.key === 's') {
    showDockHighlight(scaleBtn);
  } else if (event.key === 'Escape') {
    hideDockHighlight();
  }
});

// Nascondi highlight all'avvio
hideDockHighlight();

//OPTIMIZATION


// canvas.addEventListener('mouseup', function () {
//     setRaycasterActive(true);
// });
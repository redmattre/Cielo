import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { standardMat, phongMat, dashedLineMat, dashedMaterial, solidMaterial, goochMaterial, goochMaterialArrow } from './materials.js';
import { loadObj } from './loaders.js';
import { updateMenu } from './objmenu.js';
import groupScaleUIDiv from './src/GroupScaleUIDiv.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GridHelperAA } from './InfiniteGridHelper.js';

export let scene, ssuper, renderer, control, orbit, orbitOrtho;
export let objToBeDetected = [];
export let cameraPersp, cameraOrtho, currentCamera, camera;
export let composer, fxaaPass;
let rendererBackgoundColor = 0xd6d6d6; //inizia bianco
// let rendererBackgoundColor = 0x000000; //inizia nero
let ghostButton = null;

const visualizzazione = document.getElementById("visualizzazione");
const stato = document.getElementById("infoDivBottomLeft");
export let transfo = false;
let ignoreNextEscape = false; // Flag per ignorare Escape dopo attach

// Funzione helper per ottenere ghostButton in modo sicuro
function getGhostButton() {
    if (!ghostButton) {
        ghostButton = document.getElementById('ghostButton');
    }
    return ghostButton;
}

export function changeGrid(size, divisions) {
    scene.remove(ssuper);
    ssuper = new GridHelperAA(size, divisions, new THREE.Color(0x888888), new THREE.Color(0x444444), 0.85);
    scene.add(ssuper);
}

export function init() {
    // Scene setup
    ssuper = new GridHelperAA(10, 16, new THREE.Color(0x888888), new THREE.Color(0x444444), 0.85);
    scene = new THREE.Scene();
    scene.add(ssuper);

    // Camere
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 8;
    cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.3, 200);
    cameraOrtho = new THREE.OrthographicCamera(
        -frustumSize * aspect,
        frustumSize * aspect,
        frustumSize,
        -frustumSize,
        0.3,
        200
    );
    currentCamera = cameraPersp; // Default camera
    currentCamera.position.set(12, 3, 12);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xe7e7e7, 4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.6);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.6);
    directionalLight2.position.set(-5, 10, -7.5);
    directionalLight2.castShadow = true;
    scene.add(directionalLight2);

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // cameraPersp.add(pointLight);
    scene.add(currentCamera);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.setClearColor(rendererBackgoundColor);
    document.body.appendChild(renderer.domElement);

    // --- POSTPROCESSING FXAA ---
    composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, currentCamera);
    composer.addPass(renderPass);
    fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
    composer.addPass(fxaaPass);

    // Controlli scena prospettiva
    orbit = new OrbitControls(cameraPersp, renderer.domElement);
    orbit.update();

    // Controlli scena ortogonale
    orbitOrtho = new OrbitControls(cameraOrtho, renderer.domElement);
    orbitOrtho.enableRotate = false;
    orbitOrtho.enablePan = true;
    orbitOrtho.enableZoom = true;
    orbitOrtho.update();

    initTransformControls();

    // Listener consolidato per tutti i tasti
    window.addEventListener('keydown', function(event) {
        // Importa le funzioni necessarie per evitare circular imports
        const getRaycasterFunctions = () => {
            return {
                currentSelectedObject: window.raycasterGlobals?.currentSelectedObject || null,
                lastHoveredObject: window.raycasterGlobals?.lastHoveredObject || null,
                isRaycasterActive: window.raycasterGlobals?.isRaycasterActive || false,
                setRaycasterActive: window.raycasterGlobals?.setRaycasterActive || (() => {}),
                duplicateObject: window.raycasterGlobals?.duplicateObject || (() => {}),
                deleteSelectedObject: window.raycasterGlobals?.deleteSelectedObject || (() => {}),
                updateMenu: window.raycasterGlobals?.updateMenu || (() => {})
            };
        };

        switch (event.key) {
            // === CAMERA SWITCHING ===
            case '1': // Camera prospettica
                groupScaleUIDiv.hide();
                currentCamera = cameraPersp;
                orbit.enabled = true;
                orbitOrtho.enabled = false;

                orbit.object = currentCamera;
                orbit.update();
                control.camera = currentCamera;
                
                if (window.updatePostProcessingCamera) {
                    window.updatePostProcessingCamera(currentCamera);
                }

                visualizzazione.textContent = "Prospettiva";
                renderer.render(scene, currentCamera);
                break;

            case '2': // Camera ortogonale - Pianta
                groupScaleUIDiv.hide();
                currentCamera = cameraOrtho;
                orbit.enabled = false;
                orbitOrtho.enabled = true;

                orbitOrtho.object = currentCamera;
                orbitOrtho.update();
                currentCamera.position.set(0, 8, 0);
                currentCamera.lookAt(0, 0, 0);
                orbitOrtho.target.set(0, 0, 0);
                control.camera = currentCamera;
                
                if (window.updatePostProcessingCamera) {
                    window.updatePostProcessingCamera(currentCamera);
                }

                visualizzazione.textContent = "Pianta";
                renderer.render(scene, currentCamera);
                break;

            case '3': // Camera ortogonale - Fronte
                groupScaleUIDiv.hide();
                currentCamera = cameraOrtho;
                orbit.enabled = false;
                orbitOrtho.enabled = true;

                orbitOrtho.object = currentCamera;
                orbitOrtho.update();
                currentCamera.position.set(0, 0, 8);
                currentCamera.lookAt(0, 0, 0);
                orbitOrtho.target.set(0, 0, 0);
                control.camera = currentCamera;
                
                if (window.updatePostProcessingCamera) {
                    window.updatePostProcessingCamera(currentCamera);
                }

                visualizzazione.textContent = "Fronte";
                renderer.render(scene, currentCamera);
                break;

            case '4': // Camera ortogonale - Lato
                groupScaleUIDiv.hide();
                currentCamera = cameraOrtho;
                orbit.enabled = false;
                orbitOrtho.enabled = true;

                orbitOrtho.object = currentCamera;
                orbitOrtho.update();
                currentCamera.position.set(8, 0, 0);
                currentCamera.lookAt(0, 0, 0);
                orbitOrtho.target.set(0, 0, 0);
                control.camera = currentCamera;
                
                if (window.updatePostProcessingCamera) {
                    window.updatePostProcessingCamera(currentCamera);
                }

                visualizzazione.textContent = "Lato";
                renderer.render(scene, currentCamera);
                break;

            // === TRANSFORM CONTROLS ===
            case 'q':
                transfo = !transfo;
                control.setSpace(control.space === 'local' ? 'world' : 'local');
                updateStato1();
                break;

            case 'g':
                // Gestione intelligente: setup o raycaster mode
                const functions_g = getRaycasterFunctions();
                const targetForTransform_g = functions_g.lastHoveredObject || functions_g.currentSelectedObject;
                
                if (targetForTransform_g) {
                    // Modalità raycaster: attacca a oggetto selezionato + imposta modalità translate
                    const targetObject = targetForTransform_g.parent?.isGroup ? targetForTransform_g.parent : targetForTransform_g;
                    

                    
                    control.setMode('translate'); // IMPORTANTE: Imposta modalità prima di attach
                    control.attach(targetObject);
                    // Usa funzione dedicata per transform controls
                    if (window.raycasterGlobals?.setRaycasterActiveForTransformControls) {
                        window.raycasterGlobals.setRaycasterActiveForTransformControls(false);
                    }
                    orbit.enabled = false;
                    
                    // Ignora il prossimo Escape per evitare conflitti
                    ignoreNextEscape = true;
                    setTimeout(() => { ignoreNextEscape = false; }, 100);
                    
                    // Aggiorna outline se disponibile
                    if (window.raycasterGlobals?.outlinePass) {
                        window.raycasterGlobals.outlinePass.selectedObjects = [];
                    }
                } else {
                    // Modalità setup: imposta modalità translate senza oggetto
                    control.setMode('translate');
                    const ghost = getGhostButton();
                    if (ghost) {
                        ghost.style.display = 'block';
                        ghost.style.right = '21.5rem';
                    }
                }
                updateStato('Spostamento');
                break;

            case 'r':
                const functions_r = getRaycasterFunctions();
                const targetForTransform_r = functions_r.lastHoveredObject || functions_r.currentSelectedObject;
                
                if (targetForTransform_r) {
                    // Modalità raycaster: attacca a oggetto selezionato + imposta modalità rotate
                    const targetObject = targetForTransform_r.parent?.isGroup ? targetForTransform_r.parent : targetForTransform_r;
                    control.setMode('rotate'); // IMPORTANTE: Imposta modalità prima di attach
                    control.attach(targetObject);
                    // Usa funzione dedicata per transform controls
                    if (window.raycasterGlobals?.setRaycasterActiveForTransformControls) {
                        window.raycasterGlobals.setRaycasterActiveForTransformControls(false);
                    }
                    orbit.enabled = false;
                    
                    // Ignora il prossimo Escape per evitare conflitti
                    ignoreNextEscape = true;
                    setTimeout(() => { ignoreNextEscape = false; }, 100);
                    
                    if (window.raycasterGlobals?.outlinePass) {
                        window.raycasterGlobals.outlinePass.selectedObjects = [];
                    }
                } else {
                    control.setMode('rotate');
                    const ghost = getGhostButton();
                    if (ghost) {
                        ghost.style.display = 'block';
                        ghost.style.right = '16.5rem';
                    }
                }
                updateStato('Rotazione');
                break;

            case 's':
                const functions_s = getRaycasterFunctions();
                const hovered = functions_s.lastHoveredObject;
                let isGroup = false;
                if (hovered && hovered.name === 'Gruppo di trasformazione') isGroup = true;
                // Mostra il handle solo se il gruppo è selezionato e la camera è ortogonale-top
                if (isGroup && currentCamera && currentCamera.isOrthographicCamera && currentCamera.position.y > Math.abs(currentCamera.position.x) && currentCamera.position.y > Math.abs(currentCamera.position.z)) {
                    if (control && control.object) control.detach();
                    orbit.enabled = true;
                    groupScaleUIDiv.show(hovered);
                    updateStato('Scala Gruppo XY');
                } else {
                    control.setMode('scale');
                    const ghost = getGhostButton();
                    if (ghost) {
                        ghost.style.display = 'block';
                        ghost.style.right = '11.5rem';
                    }
                    updateStato('Scala');
                }
                break;

            case 'Escape':
                // Ignora Escape se appena attaccato i transform controls
                if (ignoreNextEscape) {
                    console.log('Escape ignored: ignoreNextEscape flag active');
                    ignoreNextEscape = false;
                    return;
                }
                
                // Comportamento unificato per Escape
                if (control && control.object) {
                    control.detach();
                }
                
                orbit.enabled = true;
                updateStato3();
                const ghost = getGhostButton();
                if (ghost) {
                    ghost.style.display = 'none';
                }
                
                // SEMPRE riabilita raycaster e resetta stato completamente
                const functions_esc = getRaycasterFunctions();
                
                // Pulisci override transform controls
                if (window.raycasterGlobals?.clearTransformControlsOverride) {
                    window.raycasterGlobals.clearTransformControlsOverride();
                }
                
                functions_esc.setRaycasterActive(true);
                
                // RESET COMPLETO: pulisci oggetti selezionati per evitare interferenze
                if (window.raycasterGlobals?.outlinePass) {
                    window.raycasterGlobals.outlinePass.selectedObjects = [];
                }
                
                // Resetta gli oggetti selezionati/hoverati per ripartire da zero
                functions_esc.currentSelectedObject = null;
                functions_esc.lastHoveredObject = null;
                
                functions_esc.updateMenu();
                groupScaleUIDiv.hide();
                break;

            // === DUPLICAZIONE OGGETTO ===
            default:
                if (event.shiftKey && event.key.toLowerCase() === 'd') {
                    const functions_d = getRaycasterFunctions();
                    if (functions_d.currentSelectedObject && functions_d.duplicateObject) {
                        functions_d.duplicateObject(functions_d.currentSelectedObject);
                    }
                }
                break;

            // === ELIMINAZIONE OGGETTO ===  
            case 'x':
            case 'Backspace':
                const functions_del = getRaycasterFunctions();
                if (functions_del.deleteSelectedObject) {
                    functions_del.deleteSelectedObject();
                }
                break;
        }
    });

	const canvas = renderer.domElement;

	canvas.addEventListener('dblclick', function () {
		const currentZoom = currentCamera.zoom;

		if (currentCamera === cameraPersp) {
			currentCamera.position.set(12, 3, 12); // Posizione di default
			currentCamera.lookAt(0, 0, 0);
		} else if (currentCamera === cameraOrtho) {
			
			//nient
		}

		currentCamera.zoom = currentZoom;
		currentCamera.updateProjectionMatrix();

		orbit.target.set(0, 0, 0); // Reimposta il target al centro
		orbit.update();            // Aggiorna i controlli Orbit
	});

    window.addEventListener('resize', onWindowResize);

    // --- CICLO VISUALIZZAZIONI CON CLICK SUL DIV ---
    const views = [
        { key: '1', label: 'Prospettiva' },
        { key: '2', label: 'Pianta' },
        { key: '3', label: 'Fronte' },
        { key: '4', label: 'Lato' }
    ];
    let currentViewIndex = 0;
    visualizzazione.addEventListener('click', () => {
        currentViewIndex = (currentViewIndex + 1) % views.length;
        // Simula la pressione del tasto corrispondente
        const event = new KeyboardEvent('keydown', { key: views[currentViewIndex].key });
        window.dispatchEvent(event);
    });
    
    // Esporta globalmente per controlli UI
    window.setupGlobals = {
        control: control
    };
}

let miao;
let tipo;
const transTriangle = document.getElementById("transTriangle");

export function changeTransfo(state) {
	transfo = state;
}

export function updateStato(type) {
	tipo = type;
	if (transfo) {
		miao = "locale";
	} else {
		miao = "globale";
	}
	stato.textContent = type + " " + miao;
	transTriangle.style.display = "block";
}

export function updateStato1() {
	if (transfo) {
		miao = "locale";
	} else {
		miao = "globale";
	}
	stato.textContent = tipo + " " + miao;
}

export function updateStato3() {
	stato.textContent = "---";
	transTriangle.style.display = "none";
}

export function changeTheme(state) {
    var root = document.documentElement;

    if (state) {
        rendererBackgoundColor = 0x000;
        renderer.setClearColor(rendererBackgoundColor);
        root.style.setProperty('--fondale', 'var(--fondaleNero)');
        root.style.setProperty('--testo', 'var(--fondaleBianco)');
        root.style.setProperty('--dettaglio', 'var(--grigino)');
		// dashedMaterial.color.set('yellow');
		// solidMaterial.color.set(0xd6d6d6);
		goochMaterialArrow.uniforms.coolColor.value = new THREE.Color(0xd6d6d6);
		goochMaterialArrow.uniforms.warmColor.value = new THREE.Color(0xe8e8e8);
    } else {
        rendererBackgoundColor = 0xd6d6d6;
        renderer.setClearColor(rendererBackgoundColor);
        root.style.setProperty('--fondale', 'var(--fondaleBianco)');
        root.style.setProperty('--testo', 'var(--fondaleNero)');
        root.style.setProperty('--dettaglio', 'var(--grigio)');
		// dashedMaterial.color.set(0x343434);
		// dashedMaterial.color.set('yellow');
		// solidMaterial.color.set("black");
		goochMaterialArrow.uniforms.coolColor.value = new THREE.Color(0x303030);
		goochMaterialArrow.uniforms.warmColor.value = new THREE.Color(0x000000);
    }
    
        // Update ConditionalLines colors when theme changes
    if (window.conditionalLinesManager && window.currentPlasticoControl) {
        // Use dynamic import to avoid circular dependency
        import('./addgeometries.js').then(module => {
            const control = window.currentPlasticoControl;
            if (control) {
                // Get the helper function from addgeometries
                const materialColor = module.getCSSColorAsHex('--fondale');
                const lineColor = module.getCSSColorAsHex('--testo');
                control.setMaterialColor(materialColor);
                control.setLineColor(lineColor);
            }
        });
    }
}

export function render() {
    // Usa sempre il composer del raycaster se disponibile (include OutlinePass)
    if (window.raycasterComposer) {
        window.raycasterComposer.render();
    }
    // Altrimenti usa il composer principale (solo FXAA)
    else if (composer) {
        composer.render();
    }
    // Fallback: render diretto
    else {
        renderer.render(scene, currentCamera);
    }
	requestAnimationFrame(render);
}




// 	const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
//     const edges = new THREE.EdgesGeometry(geometry); // Crea una geometria di bordi
//     const line = new THREE.LineSegments(edges, dashedLineMat);
//     line.computeLineDistances(); // Necessario per il materiale LineDashedMaterial
//     line.name = `debug-dashed-${scene.children.length}`;
// 	line.isDashed = true;
//     scene.add(line);
//     objToBeDetected.push(line);
// }


//     const line = new LineSegments2(lineGeometry, solidMaterial); // Applica il materiale dashed

//     scene.add(line); // Aggiungi alla scena
// 	line.name = "architettura";
// 	line.isDashed = true;
// 	objToBeDetected.push(line);
// }



function initTransformControls() {
    control = new TransformControls( cameraPersp, renderer.domElement );

    control.setTranslationSnap(0.05);
    control.setRotationSnap(THREE.MathUtils.degToRad(15));
    control.setScaleSnap(0.05);

    control.addEventListener( 'dragging-changed', function ( event ) {
        orbit.enabled = ! event.value;
    } );

    // Personalizza i colori dei gizmo degli assi (pastello RGB)
    function setGizmoColors() {
        const axisColors = {
            X: 0xfc5861, // rosso pastello
            Y: 0x82e346, // verde pastello
            Z: 0x46a2e3  // blu pastello
        };
        function colorize(object3D) {
            if (object3D.isMesh && object3D.material && object3D.name) {
                if (object3D.name.includes('X')) object3D.material.color.setHex(axisColors.X);
                if (object3D.name.includes('Y')) object3D.material.color.setHex(axisColors.Y);
                if (object3D.name.includes('Z')) object3D.material.color.setHex(axisColors.Z);
            }
            if (object3D.children && object3D.children.length) {
                object3D.children.forEach(child => colorize(child));
            }
        }
        if (Array.isArray(control.children) && control.children.length > 0) {
            control.children.forEach(child => colorize(child));
        } else if (control._gizmo) {
            colorize(control._gizmo);
        }
    }
    setGizmoColors();
    control.addEventListener('objectChange', setGizmoColors); // Aggiorna i colori ogni volta che cambia oggetto

    const helper = control.getHelper();
    
    // Marca il helper e tutti i suoi figli come transform controls per escluderli dal raycasting
    function markAsTransformControl(obj) {
        obj.isTransformControls = true;
        if (obj.children) {
            obj.children.forEach(child => markAsTransformControl(child));
        }
    }
    
    markAsTransformControl(helper);
    markAsTransformControl(control);
    
    scene.add(helper);
}

export function onWindowResize() {
	const aspect = window.innerWidth / window.innerHeight;

	// === CAMERA UPDATES ===
	cameraPersp.aspect = aspect;
	cameraPersp.updateProjectionMatrix();

	cameraOrtho.left = cameraOrtho.bottom * aspect;
	cameraOrtho.right = cameraOrtho.top * aspect;
	cameraOrtho.updateProjectionMatrix();

	// === RENDERER UPDATES ===
	renderer.setSize(window.innerWidth, window.innerHeight);

	// === POST-PROCESSING UPDATES ===
	// Update main composer (FXAA)
	if (composer) {
		composer.setSize(window.innerWidth, window.innerHeight);
	}

	// Update FXAA uniforms
	if (fxaaPass) {
		const pixelRatio = renderer.getPixelRatio();
		fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
		fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);
	}

	// Update raycaster composer (outline + FXAA)
	if (window.resizeRaycasterComposer) {
		window.resizeRaycasterComposer();
	}

	// === CONDITIONAL LINES UPDATES ===
	// Ottimizzazione: updateResolutions solo quando serve (resize, devicePixelRatio change)
	updateConditionalLinesResolutions();
}

// Tracking per evitare chiamate inutili
let lastWindowSize = { width: 0, height: 0 };
let lastPixelRatio = 0;

// Funzione ottimizzata per conditional lines updates
export function updateConditionalLinesResolutions(force = false) {
	if (!window.conditionalLinesManager || typeof window.conditionalLinesManager.updateResolutions !== 'function') {
		return;
	}

	// Verifica se è davvero necessario aggiornare
	const currentSize = { width: window.innerWidth, height: window.innerHeight };
	const currentPixelRatio = window.devicePixelRatio || 1;

	const sizeChanged = currentSize.width !== lastWindowSize.width || currentSize.height !== lastWindowSize.height;
	const pixelRatioChanged = currentPixelRatio !== lastPixelRatio;

	if (force || sizeChanged || pixelRatioChanged) {
		window.conditionalLinesManager.updateResolutions();
		
		// Aggiorna tracking
		lastWindowSize = { ...currentSize };
		lastPixelRatio = currentPixelRatio;
	}
}

// Funzione globale per forzare update (usabile da altri moduli)
window.forceConditionalLinesUpdate = () => updateConditionalLinesResolutions(true);
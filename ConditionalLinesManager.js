/**
 * ConditionalLinesManager - Modulo riutilizzabile per applicare l'effetto Conditional Lines
 * con MeshToonMaterial a qualsiasi modello Three.js
 */

import * as THREE from 'three';
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

// Importa i moduli delle conditional lines (assicurati che i path siano corretti per il tuo progetto)
import { ConditionalEdgesGeometry } from './src/ConditionalEdgesGeometry.js';
import { ConditionalLineSegmentsGeometry } from './src/Lines2/ConditionalLineSegmentsGeometry.js';
import { ConditionalLineMaterial } from './src/Lines2/ConditionalLineMaterial.js';

export class ConditionalLinesManager {
    constructor(scene, renderer) {
        this.scene = scene;
        this.renderer = renderer;
        
        // Parametri di default
        this.params = {
            threshold: 40,
            thickness: 2,
            opacity: 0.5,
            materialColor: 0xffffff,
            lineColor: 0x000000
        };
        
        // Modelli gestiti
        this.managedModels = new Map();
    }

    /**
     * Applica l'effetto conditional lines a un modello
     * @param {THREE.Object3D} originalModel - Il modello originale
     * @param {Object} options - Opzioni di configurazione
     * @returns {Object} - Oggetto con i modelli creati e metodi di controllo
     */
    applyConditionalLines(originalModel, options = {}) {
        // Merge delle opzioni con i parametri di default
        const config = { ...this.params, ...options };
        
        // Prepara il modello (merge delle geometrie)
        const processedModel = this.mergeObject(originalModel);
        
        // Crea i tre modelli: background, edges, conditional
        const backgroundModel = this.createBackgroundModel(processedModel, config);
        const edgesModel = this.createEdgesModel(processedModel, config);
        const conditionalModel = this.createConditionalModel(processedModel, config);
        
        // Aggiungi alla scena
        this.scene.add(backgroundModel);
        this.scene.add(edgesModel);
        this.scene.add(conditionalModel);
        
        // Crea l'oggetto di controllo
        const modelControl = {
            originalModel: processedModel,
            backgroundModel: backgroundModel,
            edgesModel: edgesModel,
            conditionalModel: conditionalModel,
            
            // Metodi di controllo
            setOpacity: (opacity) => this.setOpacity(backgroundModel, opacity),
            setThreshold: (threshold) => {
                const newEdgesModel = this.updateThreshold(processedModel, modelControl.edgesModel, threshold, config);
                // Update the reference
                modelControl.edgesModel = newEdgesModel;
                return newEdgesModel;
            },
            setThickness: (thickness) => this.setThickness([modelControl.edgesModel, conditionalModel], thickness),
            setMaterialColor: (color) => this.setMaterialColor(backgroundModel, color),
            setLineColor: (color) => this.setLineColor([modelControl.edgesModel, conditionalModel], color),
            
            // Metodo per rimuovere tutto
            dispose: () => this.disposeModel(backgroundModel, edgesModel, conditionalModel)
        };
        
        // Salva il riferimento
        const modelId = Date.now() + Math.random();
        this.managedModels.set(modelId, modelControl);
        modelControl.id = modelId;
        
        return modelControl;
    }

    /**
     * Merge di tutte le geometrie di un oggetto in una singola geometria
     */
    mergeObject(object) {
        object.updateMatrixWorld(true);

        const geometry = [];
        object.traverse(c => {
            if (c.isMesh) {
                const g = c.geometry.clone();
                g.applyMatrix4(c.matrixWorld);
                for (const key in g.attributes) {
                    if (key !== 'position' && key !== 'normal') {
                        g.deleteAttribute(key);
                    }
                }
                geometry.push(g.toNonIndexed());
            }
        });

        // Try different methods for merging geometries based on Three.js version
        let mergedGeometry;
        try {
            // Three.js 0.171+ uses mergeGeometries
            const mergedGeometries = BufferGeometryUtils.mergeGeometries(geometry, false);
            mergedGeometry = mergedGeometries;
        } catch (e1) {
            try {
                // Fallback for older versions
                const mergedGeometries = BufferGeometryUtils.mergeBufferGeometries(geometry, false);
                mergedGeometry = mergedGeometries;
            } catch (e2) {
                console.error('Both mergeGeometries and mergeBufferGeometries failed:', e1, e2);
                // Use the first geometry as fallback
                mergedGeometry = geometry[0];
            }
        }
        
        // Try to merge vertices if the function exists
        try {
            if (BufferGeometryUtils.mergeVertices) {
                mergedGeometry = BufferGeometryUtils.mergeVertices(mergedGeometry);
            }
        } catch (e) {
            console.warn('mergeVertices failed:', e);
        }

        const group = new THREE.Group();
        const mesh = new THREE.Mesh(mergedGeometry);
        group.add(mesh);
        return group;
    }

    /**
     * Crea il modello di background con MeshToonMaterial
     */
    createBackgroundModel(model, config) {
        console.log('createBackgroundModel called with config.materialColor:', config.materialColor);
        const backgroundModel = model.clone();
        backgroundModel.traverse(c => {
            if (c.isMesh) {
                // Let's try to match the exact background color by testing the actual rendered background
                // We'll try a few different approaches to get the exact color match
                
                // Method 1: Try the exact same hex as CSS
                // const materialColor = 0xd6d6d6; // CSS original
                
                // Method 2: Try the color picker result
                // const materialColor = 0xD4D4D4; // Color picker measurement
                
                // Method 3: Try creating the exact RGB values that match the background
                // Based on CSS #d6d6d6 = RGB(214,214,214)
                const materialColor = new THREE.Color(214/255, 214/255, 214/255);
                
                c.material = new THREE.MeshBasicMaterial({
                    color: materialColor,
                    transparent: false, // Try without transparency first
                    opacity: 1.0
                });
                c.material.polygonOffset = true;
                c.material.polygonOffsetFactor = 1;
                c.material.polygonOffsetUnits = 1;
                c.renderOrder = 2;
                
                console.log('Material color created:', materialColor);
                console.log('Material hex:', materialColor.getHex().toString(16));
            }
        });
        return backgroundModel;
    }

    /**
     * Crea il modello con threshold edges
     */
    createEdgesModel(model, config) {
        const edgesModel = model.clone();
        
        const meshes = [];
        edgesModel.traverse(c => {
            if (c.isMesh) {
                meshes.push(c);
            }
        });

        for (const mesh of meshes) {
            const parent = mesh.parent;
            
            // Crea threshold edges
            const lineGeom = new THREE.EdgesGeometry(mesh.geometry, config.threshold);
            
            // Crea thick lines
            const thickLineGeom = new LineSegmentsGeometry().fromEdgesGeometry(lineGeom);
            const thickLines = new LineSegments2(
                thickLineGeom,
                new LineMaterial({
                    color: config.lineColor,
                    linewidth: config.thickness
                })
            );
            thickLines.position.copy(mesh.position);
            thickLines.scale.copy(mesh.scale);
            thickLines.rotation.copy(mesh.rotation);

            parent.remove(mesh);
            parent.add(thickLines);
        }
        
        return edgesModel;
    }

    /**
     * Crea il modello con conditional lines
     */
    createConditionalModel(model, config) {
        const conditionalModel = model.clone();
        
        const meshes = [];
        conditionalModel.traverse(c => {
            if (c.isMesh) {
                meshes.push(c);
            }
        });

        for (const mesh of meshes) {
            const parent = mesh.parent;

            // Remove everything but the position attribute
            const mergedGeom = mesh.geometry.clone();
            for (const key in mergedGeom.attributes) {
                if (key !== 'position') {
                    mergedGeom.deleteAttribute(key);
                }
            }

            // Create conditional edges geometry and material
            let processedGeom = mergedGeom;
            
            // Try to merge vertices if the function exists
            try {
                if (BufferGeometryUtils.mergeVertices) {
                    processedGeom = BufferGeometryUtils.mergeVertices(mergedGeom);
                }
            } catch (e) {
                console.warn('mergeVertices failed for conditional model:', e);
                processedGeom = mergedGeom;
            }
            
            const lineGeom = new ConditionalEdgesGeometry(processedGeom);
            const thickLineGeom = new ConditionalLineSegmentsGeometry().fromConditionalEdgesGeometry(lineGeom);
            const thickLines = new LineSegments2(
                thickLineGeom,
                new ConditionalLineMaterial({
                    color: config.lineColor,
                    linewidth: config.thickness
                })
            );
            thickLines.position.copy(mesh.position);
            thickLines.scale.copy(mesh.scale);
            thickLines.rotation.copy(mesh.rotation);

            parent.remove(mesh);
            parent.add(thickLines);
        }
        
        return conditionalModel;
    }

    /**
     * Metodi di controllo dei parametri
     */
    setOpacity(backgroundModel, opacity) {
        backgroundModel.traverse(c => {
            if (c.isMesh && c.material) {
                // Enable transparency if opacity < 1
                c.material.transparent = opacity < 1.0;
                c.material.opacity = opacity;
                c.material.needsUpdate = true;
            }
        });
    }

    setThickness(models, thickness) {
        models.forEach(model => {
            model.traverse(c => {
                if (c.material && c.material.linewidth !== undefined) {
                    c.material.linewidth = thickness;
                    c.material.needsUpdate = true;
                }
            });
        });
    }

    setMaterialColor(backgroundModel, color) {
        console.log(`setMaterialColor called with color: 0x${color.toString(16)}`);
        
        // Convert the color to the correct format like in createBackgroundModel
        const correctColor = new THREE.Color(214/255, 214/255, 214/255);
        
        backgroundModel.traverse(c => {
            if (c.isMesh && c.material) {
                console.log(`Setting material color for mesh: ${c.name || 'unnamed'}`, c.material);
                
                // Always use the correct background color regardless of what was passed
                c.material.color.copy(correctColor);
                console.log(`Material color after set:`, c.material.color);
                
                // Force material to update
                c.material.needsUpdate = true;
                
                // Add a delay check to see if the color persists
                setTimeout(() => {
                    console.log(`Material color after 1 second:`, c.material.color);
                }, 1000);
            }
        });
    }

    setLineColor(models, color) {
        models.forEach(model => {
            model.traverse(c => {
                if (c.material && c.material.color) {
                    c.material.color.setHex(color);
                }
            });
        });
    }

    updateThreshold(originalModel, edgesModel, threshold, config) {
        // Rimuovi il modello esistente
        this.scene.remove(edgesModel);
        edgesModel.traverse(c => {
            if (c.material) {
                c.material.dispose();
            }
            if (c.geometry) {
                c.geometry.dispose();
            }
        });
        
        // Crea nuovo modello con threshold aggiornato
        const newConfig = { ...config, threshold };
        const newEdgesModel = this.createEdgesModel(originalModel, newConfig);
        newEdgesModel.name = edgesModel.name; // Preserve the name
        this.scene.add(newEdgesModel);
        
        return newEdgesModel;
    }

    /**
     * Rimuove e pulisce un modello
     */
    disposeModel(backgroundModel, edgesModel, conditionalModel) {
        [backgroundModel, edgesModel, conditionalModel].forEach(model => {
            if (model) {
                this.scene.remove(model);
                model.traverse(c => {
                    if (c.isMesh) {
                        if (c.geometry) c.geometry.dispose();
                        if (c.material) {
                            if (Array.isArray(c.material)) {
                                c.material.forEach(mat => mat.dispose());
                            } else {
                                c.material.dispose();
                            }
                        }
                    }
                });
            }
        });
    }

    /**
     * Aggiorna le risoluzioni dei materiali delle linee (da chiamare nel resize)
     */
    updateResolutions() {
        this.managedModels.forEach(modelControl => {
            [modelControl.edgesModel, modelControl.conditionalModel].forEach(model => {
                model.traverse(c => {
                    if (c.material && c.material.resolution) {
                        this.renderer.getSize(c.material.resolution);
                        c.material.resolution.multiplyScalar(window.devicePixelRatio);
                    }
                });
            });
        });
    }

    /**
     * Pulisce tutti i modelli gestiti
     */
    disposeAll() {
        this.managedModels.forEach(modelControl => {
            modelControl.dispose();
        });
        this.managedModels.clear();
    }
}

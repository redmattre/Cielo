import * as THREE from 'three';
import { init, render, scene, control } from './setup.js';
import { standardMat, phongMat, normalMat, dashedMaterial, solidMaterial, goochMaterial, goochMaterialSp, goochMaterialAlpha, goochMaterialArrow } from './materials.js';
import { loadObj, loadObjWithDashedEdges } from './loaders.js';
import { loadGltfModel, loadObjWithMaterials, toggleTransparency } from './loadersFIX.js';
import { addMetroButton } from './metro.js';


init();
render();

addMetroButton();

loadGltfModel('./modelli/galleriaGLTF/GenericGallery.glb');
// loadGltfModel('./modelli/galleriaGLTF/ChiesaSuffragio.glb');

// debugGeo();
// debugGeo1();
// debugGeo2();
// LineaContinuaObj();
// loadObjWithDashedEdges('provaarch1.obj', solidMaterial);
// loadObjWithDashedEdges('parkinglot.obj', solidMaterial);
// loadObjWithDashedEdges('galleria_sketchup.obj', solidMaterial);
// loadObjWithMaterials('./', 'galleria_sketchup.obj', 'galleria_sketchup.mtl');
// loadObj('arrow.obj', 'Freccia', goochMaterialArrow, 0.025, 0., 0., 0.5)
// loadObjWithDashedEdges('provaarch1.obj', solidMaterial);
// loadObj('speaker3dec.obj', goochMaterialSp, 0.025, 0., -0.5, 0.5)
// loadObj('speaker3dec.obj', goochMaterialSp, 0.025, 0., 0, 0.5)
// loadObj('speaker3dec.obj', goochMaterialSp, 0.025, 0., 0.5, 0.5)
// loadObj('speaker3dec.obj', goochMaterialSp, 0.025, 0., 1., 0.5)
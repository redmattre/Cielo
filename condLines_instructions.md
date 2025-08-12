# Conditional Lines - Simple

Una versione semplificata dell'effetto Conditional Lines per utilizzi rapidi e integrazione in altri progetti.

## Caratteristiche

- **Materiale MeshToonMaterial** per un effetto cartoon stilizzato
- **Threshold Edges** sempre attivi
- **Conditional Lines** sempre attive
- **Thick Lines** sempre utilizzate
- **Sfondo bianco**
- **Modulo riutilizzabile** per integrazione in altri progetti

## Utilizzo Base (Demo)

1. Apri `index.html` in un browser
2. Carica un modello trascinandolo nella finestra o usando il pulsante "Scegli File"
3. Regola i parametri con gli slider
4. Usa i controlli mouse per navigare la scena (OrbitControls)

## Integrazione in Altri Progetti

### 1. Copia i File Necessari

Copia nella tua directory di progetto:
```
src/
├── ConditionalEdgesGeometry.js
├── ConditionalEdgesShader.js
├── OutsideEdgesGeometry.js
└── Lines2/
    ├── ConditionalLineSegmentsGeometry.js
    └── ConditionalLineMaterial.js
ConditionalLinesManager.js
```

### 2. Utilizzo del ConditionalLinesManager

```javascript
import { ConditionalLinesManager } from './ConditionalLinesManager.js';

// Nel tuo setup Three.js
const conditionalLinesManager = new ConditionalLinesManager(scene, renderer);

// Applica l'effetto a un modello
const modelControl = conditionalLinesManager.applyConditionalLines(yourModel, {
    threshold: 40,      // Soglia per threshold edges (0-120)
    thickness: 2,       // Spessore linee (0.5-10)
    opacity: 0.5,       // Opacità materiale (0.1-1.0)
    materialColor: 0xffffff,  // Colore materiale (hex)
    lineColor: 0x000000       // Colore linee (hex)
});

// Controllo dinamico
modelControl.setOpacity(0.7);
modelControl.setThickness(3);
modelControl.setMaterialColor(0xff6b6b);
modelControl.setLineColor(0x2d3436);
modelControl.setThreshold(60);

// Pulizia quando non serve più
modelControl.dispose();
```

### 3. Setup Necessario per il Toon Shading

Assicurati di avere illuminazione nella scena:

```javascript
// Luce ambientale
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

// Luce direzionale
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
```

### 4. Gestione Resize

Nel tuo resize handler:

```javascript
function onWindowResize() {
    // ... il tuo codice di resize ...
    
    // Aggiorna le risoluzioni delle linee
    conditionalLinesManager.updateResolutions();
}
```

### 5. Loop di Animazione

Nel tuo animate loop:

```javascript
function animate() {
    requestAnimationFrame(animate);
    
    // Aggiorna le risoluzioni ogni frame per linee perfette
    conditionalLinesManager.updateResolutions();
    
    renderer.render(scene, camera);
}
```

## Metodi Disponibili

### ConditionalLinesManager

- `applyConditionalLines(model, options)` - Applica l'effetto
- `updateResolutions()` - Aggiorna risoluzioni linee (resize/animate)
- `disposeAll()` - Pulisce tutti i modelli gestiti

### ModelControl (restituito da applyConditionalLines)

- `setOpacity(value)` - Cambia opacità materiale
- `setThickness(value)` - Cambia spessore linee
- `setMaterialColor(hex)` - Cambia colore materiale
- `setLineColor(hex)` - Cambia colore linee
- `setThreshold(value)` - Cambia soglia threshold edges
- `dispose()` - Rimuove e pulisce il modello

## Controlli Disponibili (Demo)

- **Threshold** (0-120): Controlla la soglia per il rilevamento degli edge
- **Line Thickness** (0.5-10): Spessore delle linee 
- **Material Opacity** (0.1-1.0): Opacità del materiale
- **Caricamento file**: GLTF, GLB, OBJ via drag & drop o selezione

## Dipendenze

- Three.js 0.130.1 (caricato via CDN)
- Tutti i moduli necessari per le Conditional Lines sono inclusi nella cartella `src/`

## Note Tecniche

- I modelli vengono processati e uniti in una geometria singola
- Il materiale è sempre MeshToonMaterial per effetto cartoon
- Le linee sono sempre renderizzate in nero (personalizzabile)
- Supporta controllo dinamico di tutti i parametri
- Ottimizzato per performance con gestione automatica della memoria

# 🧪 Guida Test - Sistema Stato Unificato

## ✅ Problemi Risolti
1. ✅ Export mancante `updateMenuForObject` da objmenu_new.js
2. ✅ Errore `renderer.domElement` undefined (event listeners inizializzati troppo presto)

## 🚀 Come Avviare

```bash
cd /Users/pierpaoloovarini/Desktop/Temporaneo/Dottorato2025/cielo_dev/Cielo
npm run dev
```

Apri browser a `http://localhost:5173`

### 🔍 Abilitare Paste in Chrome Console

Se Chrome blocca il paste nella console, **digita manualmente** questo comando e premi Enter:
```
allow pasting
```
Dopo averlo digitato, potrai incollare i comandi di test.

### 🐛 Debug Undo/Redo

Se undo/redo non funzionano, apri la console e controlla i log quando:
1. **Muovi un oggetto**: dovresti vedere `[UNDO] Creando TransformCommand` e `[UNDO] Comando eseguito. Stack size: 1`
2. **Premi Ctrl+Z**: dovresti vedere `[UNDO] Tasto premuto. Stack: X canUndo: true`

Se vedi `Stack: 0` significa che i comandi non vengono salvati. Verifica che:
- Hai **rilasciato il mouse** dopo aver trascinato (mouseUp)
- I TransformControls sono attivi (icona rossa nella toolbar)

---

## 📋 Test 1: Menu State Persistence (userData.menuState)

### Obiettivo
Verificare che i parametri del menu vengano salvati in `userData.menuState`

### Procedura
1. Crea un **Altoparlante** (Add → Altoparlante)
2. Selezionalo e apri il **menu di sinistra**
3. Modifica alcuni parametri:
   - Muovi uno **slider** (es: gain, delay)
   - Attiva/disattiva un **toggle** (es: "Guarda origine")
   - Cambia un **numbox** (es: delay ms)
   - Seleziona opzione in **multitoggle** (se presente)

### Verifica
Apri **Console Browser** (F12) e digita:
```javascript
// Trova l'altoparlante
const speaker = objToBeDetected.find(o => o.name.includes('Altoparlante'));
console.log('menuState:', speaker.userData.menuState);
```

**Risultato Atteso:**
```javascript
{
  gain: 0.75,
  delay: 150,
  autoRotateToCenter: true,
  // ... altri parametri modificati
}
```

---

## 📋 Test 2: Preset System (Save/Load con Tags e MenuState)

### Obiettivo
Verificare che presets salvino e carichino tags, menuState e config globali

### Procedura - Salvataggio

1. Crea **2-3 Altoparlanti** con posizioni diverse
2. Per ogni altoparlante:
   - Modifica parametri menu (gain, delay, etc.)
   - Assegna **tags** (click destro → Tags, o menu sinistra)
3. Configura **OSC** (menu destra, es: 192.168.0.255:5000)
4. Attiva **Plastico** (menu destra, checkbox)
5. Click **"Save Speakers Preset"** nel menu destra
6. Salva come `test_preset.json`

### Procedura - Caricamento

1. Click **"Reset Scene"** (elimina tutto)
2. Verifica OSC tornato a default
3. Click **"Load Speakers Preset"**
4. Seleziona `test_preset.json`

### Verifica

**Console Browser:**
```javascript
// Verifica tags e menuState caricati
objToBeDetected.forEach(obj => {
  if (obj.name.includes('Altoparlante')) {
    console.log(obj.name, {
      tags: obj.userData.tags,
      menuState: obj.userData.menuState
    });
  }
});

// Verifica config OSC ripristinate
const oscHost = document.getElementById('oscHost').value;
const oscPort = document.getElementById('oscPort').value;
console.log('OSC Config:', { host: oscHost, port: oscPort });

// Verifica Plastico
const plastico = document.getElementById('plasticoToggle').checked;
console.log('Plastico:', plastico);
```

**Risultato Atteso:**
- Tags colorati visualizzati
- Parametri menu ripristinati (controlla sliders nel menu)
- Config OSC = 192.168.0.255:5000
- Plastico attivo

### Verifica File JSON

Apri `test_preset.json` in editor di testo:
```json
{
  "metadata": {
    "name": "Speakers Preset",
    "created": "2026-01-05T...",
    "version": "2.0"
  },
  "settings": {
    "osc": {
      "host": "192.168.0.255",
      "port": 5000
    },
    "plastico": {
      "visible": true,
      "threshold": 0.5
    }
  },
  "speakers": {
    "Altoparlante_1": {
      "position": { "x": 1.5, "y": 0, "z": 2.0 },
      "rotation": { "x": 0, "y": 0, "z": 0 },
      "scale": { "x": 1, "y": 1, "z": 1 },
      "tags": [0, 2, 5],
      "menuState": {
        "gain": 0.8,
        "delay": 100,
        "autoRotateToCenter": false
      }
    }
  }
}
```

---

## 📋 Test 3: Multi-Client Sync (menuState via WebSocket)

### Obiettivo
Verificare sincronizzazione parametri menu tra client Master e Slave

### Setup

1. Apri **2 finestre browser** (o 2 tab)
   - Finestra A: `http://localhost:5173`
   - Finestra B: `http://localhost:5173`

2. **Finestra A** (Master):
   - Attiva **Multi-Client** (toggle menu destra)
   - Verifica badge **"MASTER"** (verde)

3. **Finestra B** (Slave):
   - Attiva **Multi-Client**
   - Verifica badge **"SLAVE"** (blu)

### Procedura Test

**Su Finestra A (Master):**
1. Crea **Altoparlante**
2. Modifica parametri menu:
   - Muovi slider **gain**
   - Attiva toggle **"Guarda origine"**
   - Cambia **delay** numbox

**Su Finestra B (Slave):**
- L'altoparlante appare automaticamente ✅
- Click sull'altoparlante e apri menu sinistra
- **Verifica parametri sincronizzati**:
  - Slider gain nella stessa posizione
  - Toggle attivo
  - Numbox con stesso valore

### Verifica Console

**Finestra A (Master):**
```javascript
// Dopo modifica parametro, nella console dovrebbe apparire:
// "Inviando menuState via multi-client..."
```

**Finestra B (Slave):**
```javascript
// Controlla che menuState sia arrivato
const speaker = objToBeDetected.find(o => o.name.includes('Altoparlante'));
console.log('menuState ricevuto:', speaker.userData.menuState);
```

---

## 📋 Test 4: Undo/Redo System

### Obiettivo
Verificare undo/redo per trasformazioni 3D e parametri menu

### Test 4A: Undo Trasformazioni 3D

1. Crea **Altoparlante**
2. Spostalo con **TransformControls** (click e trascina)
3. Premi **Ctrl+Z** (o Cmd+Z su Mac)
   - ✅ Altoparlante torna alla posizione precedente
4. Premi **Ctrl+Shift+Z** (o Ctrl+Y)
   - ✅ Altoparlante torna alla nuova posizione (redo)

### Test 4B: Undo Parametri Menu (Slider)

1. Seleziona altoparlante, apri menu
2. **Click e tieni premuto** su slider gain
3. **Muovi slider** (es: da 0.5 a 0.9)
4. **Rilascia mouse** (mouseup)
5. Premi **Ctrl+Z**
   - ✅ Slider torna a 0.5
   - ✅ Menu UI aggiornato visivamente

### Test 4C: Undo Parametri Menu (Toggle/Numbox)

1. **Toggle**: Click su checkbox
2. Premi **Ctrl+Z**
   - ✅ Checkbox torna allo stato precedente
3. **Numbox**: Cambia valore e premi Enter
4. Premi **Ctrl+Z**
   - ✅ Numbox torna al valore precedente

### Verifica Console

```javascript
// Controlla stack undo
console.log('Can undo:', undoManager.canUndo());
console.log('Can redo:', undoManager.canRedo());
console.log('Undo stack size:', undoManager.undoStack.length);
```

### Keyboard Shortcuts

- **Undo**: `Ctrl+Z` (Windows/Linux) o `Cmd+Z` (Mac)
- **Redo**: `Ctrl+Shift+Z` o `Ctrl+Y` (Windows/Linux) / `Cmd+Shift+Z` o `Cmd+Y` (Mac)

---

## 📋 Test 5: Integrazione Completa (Scenario Reale)

### Scenario
Simulare sessione di lavoro completa con preset, multi-client e undo

### Procedura

1. **Setup Iniziale** (Finestra A - Master):
   - Crea 3 altoparlanti
   - Assegna tags diversi (rosso, blu, verde)
   - Modifica gain, delay per ognuno
   - Configura OSC: 192.168.0.255:5000
   - **Salva preset**: `scenario_completo.json`

2. **Collaborazione** (Finestra B - Slave):
   - Attiva multi-client
   - Su Master: sposta un altoparlante
   - Su Master: cambia gain slider
   - **Verifica su Slave**: posizione e gain sincronizzati ✅

3. **Correzioni con Undo** (Finestra A):
   - Sposta altoparlante in posizione sbagliata
   - Ctrl+Z per annullare
   - Cambia delay, poi Ctrl+Z per annullare

4. **Reset e Reload** (Finestra A):
   - Click "Reset Scene"
   - Load preset `scenario_completo.json`
   - **Verifica**: tutto ripristinato (tags, menuState, OSC config)

---

## 🐛 Troubleshooting

### Console Errors

**❌ "Cannot read properties of undefined (reading 'domElement')"**
- ✅ **RISOLTO**: Event listeners ora inizializzati dopo renderer pronto

**❌ "does not provide an export named 'updateMenuForObject'"**
- ✅ **RISOLTO**: Funzione ora esportata da objmenu_new.js

### Altri Problemi

**Menu parametri non salvati in preset:**
- Console: `obj.userData.menuState` dovrebbe esistere
- Verifica slider/toggle modificati prima di salvare

**Multi-client non sincronizza menuState:**
- Console Network (F12 → Network → WS): cerca messaggi WebSocket con `menuState`
- Verifica badge MASTER/SLAVE attivi

**Undo non funziona:**
- Console: `console.log(undoManager.undoStack)`
- Dovrebbe mostrare comandi dopo trasformazioni/modifiche menu

---

## 📊 Checklist Completa

### Phase 1-4: Menu State ✅
- [ ] Slider salva in userData.menuState
- [ ] Toggle salva in userData.menuState
- [ ] Numbox salva in userData.menuState
- [ ] Multitoggle salva in userData.menuState
- [ ] Valori persistenti dopo ricarica menu

### Phase 5-7: Presets ✅
- [ ] Save include tags
- [ ] Save include menuState
- [ ] Save include config globali (OSC, Plastico)
- [ ] Load ripristina tags
- [ ] Load ripristina menuState
- [ ] Load ripristina config globali
- [ ] Formato JSON v2.0 con metadata

### Phase 8: Multi-Client ✅
- [ ] Master invia menuState via WebSocket
- [ ] Slave riceve e applica menuState
- [ ] Slave aggiorna UI menu automaticamente
- [ ] Sincronizzazione real-time parametri

### Phase 9-10: Undo/Redo ✅
- [ ] Ctrl+Z annulla trasformazioni 3D
- [ ] Ctrl+Z annulla modifiche slider (dopo mouseup)
- [ ] Ctrl+Z annulla toggle
- [ ] Ctrl+Z annulla numbox
- [ ] Ctrl+Z annulla multitoggle
- [ ] Ctrl+Shift+Z / Ctrl+Y ripristina (redo)
- [ ] Stack limitato a 50 operazioni

---

## 🎯 Risultati Attesi

✅ **Stato Unificato**: `object.userData.menuState` contiene tutti i parametri menu
✅ **Persistenza**: Preset salvano/caricano tags + menuState + config globali
✅ **Sincronizzazione**: Multi-client invia menuState in tempo reale
✅ **Reversibilità**: Undo/Redo per trasformazioni e parametri menu

---

## 📝 Note Sviluppatore

### Architettura

```javascript
// userData structure per ogni oggetto
object.userData = {
  id: "unique_id",
  tags: [0, 2, 5],
  menuState: {
    gain: 0.8,
    delay: 100,
    autoRotateToCenter: true,
    // ... tutti i parametri del menu
  }
}

// Preset JSON format v2.0
{
  metadata: { name, created, version },
  settings: { osc, plastico },
  speakers: {
    "Altoparlante_1": {
      position, rotation, scale,
      tags: [0, 2, 5],
      menuState: { gain, delay, ... }
    }
  }
}

// Multi-Client WebSocket message
{
  type: 'transform',
  objectId: 'abc123',
  position: {...},
  rotation: {...},
  scale: {...},
  tags: [0, 2, 5],
  menuState: { gain, delay, ... }
}

// Undo/Redo Command Pattern
const command = new TransformCommand(object, oldState, newState);
undoManager.execute(command); // Ctrl+Z ready
```

### File Modificati

- `objmenu_new.js`: Salva/legge userData.menuState, export updateMenuForObject
- `presetSaver.js`: Include tags + menuState + settings
- `presetLoader.js`: Ripristina tags + menuState + settings
- `multiClientManager.js`: sendTransform include menuState
- `raycaster.js`: Event listeners in initRaycasterEventListeners(), undo commands in mouseDown/mouseUp
- `undoRedo.js`: Command Pattern con TransformCommand, UndoManager
- `UI.js`: applyTransformToObject applica menuState
- `main.js`: Import undoRedo.js

Buon testing! 🚀

# Documentazione Messaggi OSC - Cielo

Questa applicazione invia messaggi OSC (Open Sound Control) via UDP sulla porta **8000** (configurabile).

## Configurazione

- **Host di default**: `127.0.0.1` (localhost)
- **Porta di default**: `8000`
- **Protocollo**: UDP
- **Formato**: OSC standard (no metadata)

Puoi modificare host e porta dal menu laterale destro nella sezione "OSC Output".

---

## Tipi di Oggetti

L'applicazione gestisce 5 tipi di oggetti:

- `omnifonte` - Sorgente omnidirezionale (sfera)
- `orifonte` - Sorgente direzionale 
- `altoparlante` - Speaker/Altoparlante
- `aureola` - Oggetto aureola
- `zona` - Area/Zona

---

## Formato dei Messaggi

### 1. Creazione Oggetto

Inviato quando viene creato un nuovo oggetto nella scena.

**Address Pattern:**
```
/cielo/{tipo}/{indice}/added
```

**Argomenti:**
```
{nome} {id} {x} {y} {z}
```

**Esempio:**
```
/cielo/omnifonte/1/added "Omnifonte 1" "obj_abc123" 0.5 1.2 -3.4
```

**Descrizione:**
- `{tipo}`: tipo di oggetto (omnifonte, orifonte, altoparlante, aureola, zona)
- `{indice}`: numero progressivo dell'oggetto (1, 2, 3...)
- `{nome}`: nome completo dell'oggetto (stringa)
- `{id}`: ID univoco dell'oggetto (stringa)
- `{x} {y} {z}`: posizione iniziale nello spazio 3D (float)

---

### 2. Tags Oggetto

Inviato alla creazione dell'oggetto e ogni volta che i tag vengono modificati.

**Address Pattern:**
```
/cielo/{tipo}/{indice}/tags
```

**Argomenti:**
```
{tag1} {tag2} {tag3} ...
```

**Esempio:**
```
/cielo/omnifonte/1/tags 0 1 12
```

**Descrizione:**
- Lista variabile di numeri interi da 0 a 16
- Tag `0` è sempre presente (default)
- Tags permettono di raggruppare e filtrare oggetti per routing in Max/Pure Data
- Un oggetto può avere più tag attivi contemporaneamente

**UI:**
- 16 chip colorati (1-16) nel menu contestuale di trasformazione (bottom-left)
- Layout: 2 righe × 4 colonne, 2 pagine (1-8, 9-16)
- Navigazione: click su pallini laterali o swipe/scroll verticale
- Tag 0 sempre attivo (nascosto dall'UI)
- Palette: colori tecnici ispirati a banco da disegno (rosso carminio, blu cobalto, verde smeraldo, ecc.)
- Opacità 1.0 = attivo, 0.3 = inattivo

---

### 3. Posizione Oggetto

Inviato ogni volta che l'oggetto viene spostato.

**Address Pattern:**
```
/cielo/{tipo}/{indice}/position
```

**Argomenti:**
```
{x} {y} {z}
```

**Esempio:**
```
/cielo/omnifonte/1/position 1.5 2.3 -0.8
```

**Descrizione:**
- `{x} {y} {z}`: coordinate della posizione nello spazio 3D (float)
- Coordinate in metri
- Sistema di riferimento: Y verso l'alto, X destra, Z verso l'osservatore

---

### 4. Rotazione Oggetto

Inviato ogni volta che l'oggetto viene ruotato.

**Address Pattern:**
```
/cielo/{tipo}/{indice}/rotation
```

**Argomenti:**
```
{rx} {ry} {rz}
```

**Esempio:**
```
/cielo/orifonte/2/rotation 0.0 1.57 0.0
```

**Descrizione:**
- `{rx} {ry} {rz}`: rotazione Euler in radianti (float)
- **NOTA**: Gli `omnifonte` NON inviano messaggi di rotazione (sono omnidirezionali)
- Solo `orifonte`, `altoparlante`, `aureola` e `zona` inviano rotazioni

---

### 5. Eliminazione Oggetto

Inviato quando un oggetto viene cancellato dalla scena.

**Address Pattern:**
```
/cielo/deleted
```

**Argomenti:**
```
{tipo} {indice} {nome} {id}
```

**Esempio:**
```
/cielo/deleted omnifonte 1 "Omnifonte 1" "obj_abc123"
```

**Descrizione:**
- `{tipo}`: tipo di oggetto eliminato
- `{indice}`: numero progressivo dell'oggetto
- `{nome}`: nome completo dell'oggetto (stringa)
- `{id}`: ID univoco dell'oggetto (stringa)

---

## Esempi di Flusso Completo

### Scenario 1: Creazione e Movimento Omnifonte

```
1. /cielo/omnifonte/1/added "Omnifonte 1" "obj_001" 0.0 0.0 0.0
2. /cielo/omnifonte/1/tags 0
3. /cielo/omnifonte/1/position 1.5 2.0 -1.0
4. /cielo/omnifonte/1/position 2.0 2.5 -1.5
```

### Scenario 2: Creazione Orifonte con Tags e Rotazione

```
1. /cielo/orifonte/1/added "Orifonte 1" "obj_002" 0.0 1.5 0.0
2. /cielo/orifonte/1/tags 0
3. /cielo/orifonte/1/tags 0 1 5      (utente attiva tag 1 e 5)
4. /cielo/orifonte/1/position 0.5 1.5 0.0
5. /cielo/orifonte/1/rotation 0.0 1.57 0.0
```

### Scenario 3: Eliminazione Oggetto

```
1. /cielo/deleted altoparlante 3 "Altoparlante 3" "obj_003"
```

---

## Routing in Max/MSP

Esempio di patch Max per ricevere messaggi:

```
[udpreceive 8000]
|
[route /cielo]
|
[route omnifonte orifonte altoparlante aureola zona deleted]
|        |
|        [route 1 2 3 ...]  <- per indice oggetto
|        |
|        [route added tags position rotation]
```

## Routing in Pure Data

Esempio di patch PD:

```
[oscparse]
|
[route /cielo]
|
[route omnifonte orifonte altoparlante aureola zona deleted]
|
[route 1 2 3 ...]
|
[route added tags position rotation]
```

---

## Note Tecniche

### Multi-Client
- Se il sistema multi-client è attivo, solo il **Master** invia messaggi OSC
- Gli **Slave** non inviano messaggi OSC (a meno che "Force OSC Output" sia attivo)
- Cambiare i tag richiede automaticamente il ruolo Master

### Throttling
- I messaggi OSC NON sono throttled (frequenza massima)
- Ogni movimento genera immediatamente un messaggio
- Attenzione al carico di rete con molti oggetti in movimento simultaneo

### Coordinate System
- **X**: Sinistra (-) → Destra (+)
- **Y**: Basso (-) → Alto (+)  
- **Z**: Lontano (-) → Vicino (+)

### Rotazioni
- Formato: Euler angles in radianti
- Range: -π a +π per ogni asse
- Ordine di rotazione: XYZ

---

## Troubleshooting

### Non ricevo messaggi

1. Verifica che OSC Output sia **attivo** (toggle nel menu destro)
2. Controlla host e porta (default: 127.0.0.1:8000)
3. Verifica che il firewall permetta UDP sulla porta configurata
4. Se usi multi-client, assicurati di essere **Master**

### Messaggi duplicati

- Se "Force OSC Output" è attivo su uno Slave, riceverai messaggi duplicati
- Disattiva "Force OSC Output" sugli Slave

### Tags non aggiornati

- I tags sono inviati solo quando cambiano
- Se non vedi il messaggio, prova a toggle il tag due volte (off/on)

---

## Changelog

### Versione Corrente
- Messaggi tags separati con address pattern `/cielo/{type}/{index}/tags`
- Tags come lista piatta di argomenti (non array annidato)
- 17 tags disponibili (0-16) con UI chips quadrati colorati
- Centratura verticale chips nel context menu
- Scrollbar nascosta nel container tags

### Versioni Precedenti
- Tags includevano spread operator negli altri messaggi
- Tags nell'address pattern (deprecato)

---

## Contatti

Per segnalazioni bug o richieste di feature, contatta lo sviluppatore.

# Documentazione Messaggi OSC - Cielo

Questa applicazione supporta comunicazione OSC bidirezionale via UDP.

## Porte OSC

### Porta OUTPUT (Cielo → Esterno)
- **Porta di default**: `5000` (configurabile dall'interfaccia)
- **Host di default**: `192.168.0.255` (broadcast, configurabile)
- **Protocollo**: UDP
- **Formato**: OSC standard (no metadata)

Puoi modificare host e porta dal menu laterale destro nella sezione "OSC Output".

### Porta INPUT (Esterno → Cielo)
- **Porta fissa**: `7777`
- **Host**: `0.0.0.0` (ascolta su tutte le interfacce di rete)
- **Protocollo**: UDP OSC
- **Formato**: OSC standard con metadata

---

## 📥 COMANDI OSC IN INGRESSO (Controllo Remoto)

### 1. Richiesta Dump Stato Applicazione

Richiede un dump completo dello stato corrente dell'applicazione.

**Address:**
```
/cielo/dump
```

**Argomenti:** Nessuno

**Risposta:** L'applicazione invierà una serie di messaggi OSC in output contenenti lo stato completo di tutti gli oggetti.

**Esempio (Max/MSP):**
```
udpsend 7777 localhost
send /cielo/dump
```

---

### 2. Spostamento Oggetti

Sposta un oggetto 3D a una nuova posizione nello spazio.

**Address Pattern:**
```
/cielo/{tipo}/position
```

**Argomenti:**
```
{indice} {x} {y} {z}
```

**Tipi supportati:**
- `omnifonte` - Sorgente omnidirezionale
- `altoparlante` - Speaker/Altoparlante
- `orifonte` - Sorgente direzionale
- `aureola` - Oggetto aureola
- `zona` - Area/Zona

**Coordinate:**
- `x` - Coordinata X (sinistra/destra)
- `y` - Coordinata Y (avanti/indietro nel piano orizzontale)
- `z` - Coordinata Z (elevazione verticale)

**Esempi:**
```
# Sposta Omnifonte #1 alla posizione (0.45, 1.0, 1.2)
/cielo/omnifonte/position 1 0.45 1.0 1.2

# Sposta Altoparlante #3 alla posizione (-2.0, 0.5, 2.5)
/cielo/altoparlante/position 3 -2.0 0.5 2.5

# Sposta Orifonte #2 alla posizione (1.5, -1.0, 0.8)
/cielo/orifonte/position 2 1.5 -1.0 0.8
```

**Note:**
- L'indice deve corrispondere a un oggetto esistente nella scena (es. "Omnifonte #1", "Altoparlante #2")
- Gli oggetti nella scena hanno il formato: `{Tipo} #{Numero}` (es. "Omnifonte #1")
- L'indice nel messaggio OSC è solo il numero (senza il #)
- Le coordinate sono in metri
- Il movimento viene automaticamente sincronizzato con tutti i client connessi
- Max/MSP riceverà la conferma del movimento tramite i messaggi di position output

---

## 📤 MESSAGGI OSC IN USCITA (Output)

## Configurazione Output

- **Host di default**: `192.168.0.255` (broadcast)
- **Porta di default**: `5000`
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

## 🎯 Esempi Pratici di Utilizzo

### Esempio 1: Controllo da Max/MSP

```maxpat
# Patch Max per inviare comandi a Cielo

# Oggetto udpsend per porta INPUT (7777)
[udpsend 7777 localhost]

# Muovi Omnifonte 1
[prepend /cielo/omnifonte/position]
|
[pak 1 0.45 1.0 1.2]
|
[udpsend]

# Richiedi dump
[bang]
|
[/cielo/dump(
|
[udpsend]
```

### Esempio 2: Controllo da Pure Data

```pd
# Invia posizione Altoparlante 2
[send /cielo/altoparlante/position 2 -1.5 0.8 2.0(
|
[netsend -u -b]  # UDP broadcast su porta 7777
```

### Esempio 3: Controllo da Python (python-osc)

```python
from pythonosc import udp_client

# Crea client OSC per porta INPUT
client = udp_client.SimpleUDPClient("127.0.0.1", 7777)

# Muovi Omnifonte 1
client.send_message("/cielo/omnifonte/position", [1, 0.45, 1.0, 1.2])

# Muovi Altoparlante 3
client.send_message("/cielo/altoparlante/position", [3, -2.0, 0.5, 2.5])

# Richiedi dump
client.send_message("/cielo/dump", [])
```

### Esempio 4: Animazione Continua (Python)

```python
import time
import math
from pythonosc import udp_client

client = udp_client.SimpleUDPClient("127.0.0.1", 7777)

# Anima Omnifonte 1 in cerchio
radius = 2.0
height = 1.2
for i in range(360):
    angle = math.radians(i)
    x = radius * math.cos(angle)
    y = radius * math.sin(angle)
    z = height
    
    client.send_message("/cielo/omnifonte/position", [1, x, y, z])
    time.sleep(0.05)  # 20 fps
```

### Esempio 5: Sequenza di Movimenti (Max/MSP)

```maxpat
# Metro per sequenza temporizzata
[metro 500]  # Ogni 500ms
|
[counter 0 4]
|
[select 0 1 2 3 4]
|    |    |    |    |
|    |    |    |    [/cielo/omnifonte/position 1 0 0 1.2(
|    |    |    [/cielo/omnifonte/position 1 1 0 1.2(
|    |    [/cielo/omnifonte/position 1 1 1 1.2(
|    [/cielo/omnifonte/position 1 0 1 1.2(
[/cielo/omnifonte/position 1 0 0 1.2(
|
[udpsend 7777 localhost]
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

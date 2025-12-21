# Cielo - Distribuzione Produzione

## Contenuto della cartella

- `dist/` - File della build dell'applicazione web
- `server.js` - Server WebSocket per OSC e Multi-Client
- `node_modules/` - Dipendenze Node.js (installate automaticamente)
- `package.json` - Configurazione dipendenze
- `start-cielo.sh` - Script di avvio automatico
- `README-PROD.md` - Questo file

## Requisiti

- **Node.js** (v16 o superiore) - [Scarica qui](https://nodejs.org/)
- **Python 3** - Già presente su macOS/Linux
- **Google Chrome** - Per l'interfaccia web

## Avvio Rapido

### macOS/Linux

Doppio click su `start-cielo.sh` oppure da terminale:

```bash
./start-cielo.sh
```

Lo script:
1. ✅ Installa automaticamente le dipendenze (prima volta)
2. 🚀 Avvia il server WebSocket (OSC + Multi-Client)
3. 🌐 Avvia il server HTTP per l'interfaccia web
4. 🌍 Apre automaticamente Chrome su http://localhost:8000

Per fermare tutto: **Ctrl+C** nel terminale

### Avvio Manuale

Se preferisci avviare i componenti separatamente:

**Terminal 1 - Server WebSocket:**
```bash
node server.js
```

**Terminal 2 - Server HTTP:**
```bash
python3 -m http.server 8000 --directory dist
```

Poi apri Chrome su: http://localhost:8000

## Connessioni di Rete

### Locale
- Interfaccia web: `http://localhost:8000`
- WebSocket OSC: `ws://localhost:8081/osc`
- WebSocket Multi-Client: `ws://localhost:8080/ws`

### Da Altri Dispositivi

Sostituisci `localhost` con l'indirizzo IP della macchina:

1. Trova il tuo IP: `ifconfig` (macOS/Linux) o `ipconfig` (Windows)
2. Usa l'IP nei collegamenti, es: `http://192.168.1.100:8000`

I server sono configurati su `0.0.0.0` quindi accettano connessioni da qualsiasi dispositivo sulla rete.

## Porte Utilizzate

- **8000** - Server HTTP (interfaccia web)
- **8080** - WebSocket Multi-Client
- **8081** - WebSocket OSC
- **8000** (UDP) - OSC Output (default, configurabile nell'app)

## Configurazione OSC

L'applicazione invia messaggi OSC via UDP. Configurazione di default:
- Host: `127.0.0.1` (localhost)
- Porta: `8000`

Puoi modificare questi valori dall'interfaccia web nel menu impostazioni.

## Risoluzione Problemi

### "command not found: node"
Node.js non è installato. Installalo da https://nodejs.org/

### "Address already in use"
Una porta è già occupata. Chiudi altre istanze o cambia porta nello script.

### WebSocket non si connette
Verifica che `server.js` sia in esecuzione e che le porte 8080/8081 siano libere.

### Chrome non si apre automaticamente
Apri manualmente Chrome e vai su http://localhost:8000

## Sviluppo

Per tornare in modalità sviluppo:
```bash
npm run dev
```

Per ricompilare:
```bash
npm run build
```

## Supporto

Per problemi o domande, contattare il team di sviluppo.

# Cielo - Distribuzione Produzione

## Novità v2.0

### Sistema Gestione Progetti
- **Save/Load Project**: salvataggio completo dello stato (settings + speakers + sources)
- **Save Project As**: creazione nuovi progetti senza sovrascrivere
- Struttura organizzata in cartelle (NomeProgetto/NomeProgetto_settings.json, ecc.)
- Persistenza progetto attivo tra sessioni

### Undo/Redo Avanzato
- Supporto completo per trasformazioni, parametri menu e tags
- Sync undo/redo tra client master e slave
- Stack undo/redo indipendente per ogni client

### Multi-Client Sync
- Sincronizzazione automatica di slider, toggle e numbox tra client
- Richiesta automatica ruolo master quando si modifica un parametro
- Sync completo di menuState tra master e slave

### Preset System v2.0
- Salvataggio tags e stati menu per ogni oggetto
- Compatibilità backward con preset legacy
- Strumento di conversione per vecchi preset

### UX Improvements
- Numerazione dinamica altoparlanti dopo caricamento preset
- Tasto delete/backspace disabilitato durante scrittura in input
- Stili CSS personalizzabili per campi OSC IP/Port

## Contenuto

- `dist/` - Applicazione web
- `server.js` - Server WebSocket (OSC + Multi-Client)
- `start-cielo.sh` - Script avvio automatico

## Requisiti

- Node.js v16+ - [nodejs.org](https://nodejs.org/)
- Python 3 (già presente su macOS/Linux)
- Google Chrome

## Avvio

**macOS/Linux:**
```bash
./start-cielo.sh
```

Lo script installa dipendenze, avvia i server e apre Chrome su http://localhost:8000

Per fermare: **Ctrl+C**

**Avvio Manuale:**
```bash
# Terminal 1
node server.js

# Terminal 2
python3 -m http.server 8000 --directory dist
```

## Porte

- **8000** - HTTP (interfaccia web)
- **8080** - WebSocket Multi-Client
- **8081** - WebSocket OSC
- **5000** - OSC Output UDP (configurabile)
- **9998** - Nuvola device discovery

## Configurazione OSC

Default: broadcast `192.168.0.255:5000`

Modificabile da menu impostazioni nell'app. Il broadcast address cambia in base alla tua rete (es: `192.168.1.255` per rete `192.168.1.x`).

## Multi-Client

Apri Cielo su più browser/dispositivi. Il primo diventa master, gli altri slave. Usa `http://TUO_IP:8000` per connessioni remote.

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

#!/bin/bash

# Script per creare la cartella di distribuzione di Cielo

echo "==================================="
echo "   Creazione Distribuzione Cielo"
echo "==================================="
echo ""

# Nome cartella distribuzione
DIST_FOLDER="Cielo-Distribution"

# Rimuovi cartella distribuzione precedente se esiste
if [ -d "$DIST_FOLDER" ]; then
    echo "🗑️  Rimozione distribuzione precedente..."
    rm -rf "$DIST_FOLDER"
fi

# Crea cartella distribuzione
echo "📁 Creazione cartella $DIST_FOLDER..."
mkdir -p "$DIST_FOLDER"

# Verifica che dist esista
if [ ! -d "dist" ]; then
    echo "❌ Errore: cartella dist non trovata"
    echo "Esegui 'npm run build' prima di questo script"
    exit 1
fi

# Copia contenuto di dist (file build)
echo "📦 Copia file build da dist/..."
cp -r dist/* "$DIST_FOLDER/"

# Copia file necessari
echo "📦 Copia server.js..."
cp server.js "$DIST_FOLDER/"

echo "📦 Copia package.json..."
cp package.json "$DIST_FOLDER/"

echo "📦 Copia README-PROD.md..."
cp README-PROD.md "$DIST_FOLDER/" 2>/dev/null || echo "⚠️  README-PROD.md non trovato (opzionale)"

# Crea start script specifico per distribuzione
echo "📦 Creazione start-cielo.sh per distribuzione..."
cat > "$DIST_FOLDER/start-cielo.sh" << 'EOF'
#!/bin/bash

# Script di avvio per Cielo in produzione
# Avvia server WebSocket, server HTTP e apre Chrome

echo "==================================="
echo "   Avvio Cielo"
echo "==================================="
echo ""

# Trova la directory dello script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Verifica che node sia installato
if ! command -v node &> /dev/null; then
    echo "❌ Errore: Node.js non è installato"
    echo "Installalo da: https://nodejs.org/"
    exit 1
fi

# Verifica che il file server.js esista
if [ ! -f "server.js" ]; then
    echo "❌ Errore: server.js non trovato"
    exit 1
fi

# Verifica che index.html esista
if [ ! -f "index.html" ]; then
    echo "❌ Errore: index.html non trovato"
    exit 1
fi

# Verifica che node_modules esista
if [ ! -d "node_modules" ]; then
    echo "📦 Installazione dipendenze..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Errore durante l'installazione delle dipendenze"
        exit 1
    fi
fi

echo "🚀 Avvio server WebSocket (OSC + Multi-Client)..."
node server.js &
SERVER_PID=$!

# Aspetta che il server sia pronto
sleep 2

echo "🌐 Avvio server HTTP sulla porta 8000..."
python3 -m http.server 8000 &
HTTP_PID=$!

# Aspetta che il server HTTP sia pronto
sleep 2

echo "🌍 Apertura Chrome..."
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open -a "Google Chrome" http://localhost:8000
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    google-chrome http://localhost:8000 &
else
    echo "⚠️  Sistema operativo non riconosciuto"
    echo "Apri manualmente: http://localhost:8000"
fi

echo ""
echo "==================================="
echo "✅ Cielo avviato con successo!"
echo "==================================="
echo ""
echo "🔗 Interfaccia web: http://localhost:8000"
echo "🔌 WebSocket OSC: ws://localhost:8081/osc"
echo "🔌 WebSocket Multi-Client: ws://localhost:8080/ws"
echo ""
echo "Per connessioni da altri dispositivi usa l'IP della macchina invece di localhost"
echo ""
echo "⚠️  Premi Ctrl+C per terminare tutti i server"
echo ""

# Funzione per cleanup quando si termina lo script
cleanup() {
    echo ""
    echo "🛑 Chiusura server..."
    kill $SERVER_PID 2>/dev/null
    kill $HTTP_PID 2>/dev/null
    echo "✅ Server chiusi"
    exit 0
}

# Cattura Ctrl+C e altri segnali di terminazione
trap cleanup SIGINT SIGTERM

# Mantieni lo script in esecuzione
wait
EOF

# Rendi eseguibile lo script di avvio
chmod +x "$DIST_FOLDER/start-cielo.sh"

echo ""
echo "==================================="
echo "✅ Distribuzione creata con successo!"
echo "==================================="
echo ""
echo "Cartella: $DIST_FOLDER/"
echo ""
echo "Per distribuire, comprimi la cartella e condividila."
echo "L'utente finale deve solo eseguire: ./start-cielo.sh"
echo ""

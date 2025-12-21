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
    echo "Assicurati di copiare server.js nella stessa cartella di questo script"
    exit 1
fi

# Verifica che la cartella dist esista
if [ ! -d "dist" ]; then
    echo "❌ Errore: cartella dist non trovata"
    echo "Esegui 'npm run build' prima di usare questo script"
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
python3 -m http.server 8000 --directory dist &
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

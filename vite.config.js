import { defineConfig } from "vite";
import { websocketPlugin } from "./plugins/websocket-plugin.js";
import { oscPlugin } from "./plugins/osc-plugin.js";

export default defineConfig({
    base: "/Cielo/",
    server: {
        host: '0.0.0.0', // Accetta connessioni da qualsiasi IP
        port: 5173,
    },
    plugins: [
        websocketPlugin({
            port: 8080,
            path: '/ws',
            host: '0.0.0.0' // WebSocket accetta connessioni da qualsiasi IP
        }),
        oscPlugin({
            wsPort: 8081,
            wsPath: '/osc',
            defaultOscHost: '127.0.0.1',
            defaultOscPort: 8000
        })
    ]
});

/*
l'unico modo che ho trovato per ora è fare due build cambiando manualmente
questo file. 
e lo chiami "/Cielo/" funziona su GitHub Pages
Se non lo chiami e lasci vuoto funziona in locale.
*/ 
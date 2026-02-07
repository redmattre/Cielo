/**
 * Message Broker
 * Layer di astrazione per comunicazione con sistemi esterni (OSC, Max, Multi-Client)
 */

import oscManager from './oscManager.js';
import { extractChannelNumber } from './nameUtils.js';
import { getObjectTypeFromObject } from './addgeometries.js';

class MessageBroker {
    constructor() {
        this.oscForceOutput = false; // Force OSC anche se slave
    }

    /**
     * Abilita/disabilita force OSC output
     */
    setOSCForceOutput(enabled) {
        this.oscForceOutput = enabled;
        console.log(`OSC Force Output: ${enabled ? 'ATTIVO' : 'DISATTIVO'}`);
    }

    /**
     * Verifica se può inviare messaggi (controlla ruolo multi-client)
     */
    canSendMessages() {
        // Se multi-client è disabilitato, può sempre inviare
        if (!window.multiClientManager || !window.multiClientManager.isEnabled) {
            return true;
        }

        // Se è master, può inviare
        if (window.multiClientManager.isMaster) {
            return true;
        }

        // Se force output è attivo, può inviare anche da slave
        if (this.oscForceOutput) {
            return true;
        }

        // Altrimenti (slave senza force), non invia
        return false;
    }

    /**
     * Estrae l'indice numerico dal nome dell'oggetto
     * Supporta sia formato #5 che vecchio formato "spazio 5"
     * Es: "Altoparlante #3" → 3, "Voce soprano #5" → 5
     */
    extractIndex(name) {
        return extractChannelNumber(name) || 0;
    }

    /**
     * Estrae il tipo base dal nome completo o dall'oggetto Three.js
     * @param {string|Object} nameOrObject - Nome dell'oggetto o oggetto Three.js
     * @returns {string} Tipo dell'oggetto (altoparlante, omnifonte, ecc.)
     * 
     * Es: "Altoparlante #3" → "altoparlante"
     *     "Voce soprano #5" (con geometry ConeGeometry) → "omnifonte"
     *     oggetto Three.js con SphereGeometry → "omnifonte"
     */
    extractType(nameOrObject) {
        // Se è un oggetto Three.js, usa la funzione getObjectTypeFromObject
        if (nameOrObject && typeof nameOrObject === 'object' && nameOrObject.type) {
            const type = getObjectTypeFromObject(nameOrObject);
            
            // Mappa i tipi al formato OSC
            const typeMap = {
                'altoparlante': 'altoparlante',
                'omnifonte': 'omnifonte',
                'orifonte': 'orifonte',
                'aureola': 'aureola',
                'zona': 'zona'
            };
            
            return typeMap[type] || 'unknown';
        }
        
        // Altrimenti è una stringa, fa parsing del nome (fallback per compatibilità)
        const name = nameOrObject;
        if (name.includes('Altoparlante')) return 'altoparlante';
        if (name.includes('Omnifonte')) return 'omnifonte';
        if (name.includes('Orifonte')) return 'orifonte';
        if (name.startsWith('Aureola')) return 'aureola';
        if (name.startsWith('Zona')) return 'zona';
        return 'unknown';
    }

    /**
     * Notifica creazione nuovo oggetto
     */
    sendObjectCreated(data) {
        const {
            id,
            name,
            type,
            position = { x: 0, y: 0, z: 0 },
            rotation = { x: 0, y: 0, z: 0 },
            scale = { x: 1, y: 1, z: 1 },
            tags = [0] // Tag di default
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        const index = this.extractIndex(name);
        const objectType = type || this.extractType(name);

        // OSC: Messaggio di creazione + messaggio tags separato
        if (oscManager.isEnabled) {
            // Messaggio added con nID e posizione (senza nome/id)
            // NOTA: Added mantiene l'ordine x, y, z di Three.js ma Y è invertita
            oscManager.sendOSC(`/cielo/${objectType}/added`, [
                index,
                position.x,
                -position.y,
                position.z
            ]);
            
            // Messaggio tags separato con nID come primo argomento
            oscManager.sendOSC(`/cielo/${objectType}/tags`, [index, ...tags]);
            
            // Invia conteggi aggiornati
            this.sendObjectCounts();
        }

        // Max/MSP: Mantiene comportamento esistente
        if (window.max && window.max.outlet) {
            window.max.outlet('added', objectType, index, name, id,
                position.x, position.y, position.z,
                rotation.x, rotation.y, rotation.z);
        }
    }

    /**
     * Invia i parametri del menu di un oggetto appena creato
     * Da chiamare DOPO createMenu() per assicurarsi che menuState esista
     */
    sendObjectMenuState(name) {
        if (!this.canSendMessages() || !oscManager.isEnabled) {
            return;
        }

        const sceneObject = window.scene?.children.find(obj => obj.name === name);
        if (!sceneObject) {
            console.warn(`[MessageBroker] sendObjectMenuState: oggetto ${name} non trovato nella scena`);
            return;
        }

        const objectType = this.extractType(sceneObject); // Usa l'oggetto invece del nome
        const index = this.extractIndex(name);

        // Inizializza menuState se necessario
        this.initializeMenuStateIfNeeded(sceneObject);

        if (sceneObject.userData?.menuState) {
            console.log(`[MessageBroker] Invio menuState per ${name}:`, sceneObject.userData.menuState);
            
            // Controlla se c'è almeno un solo attivo per questo tipo di oggetto
            const soloActive = this.hasSoloActive(objectType);
            
            Object.entries(sceneObject.userData.menuState).forEach(([paramName, value]) => {
                // Salta il parametro 'solo' se non c'è nessun solo attivo
                if (paramName === 'solo' && !soloActive) {
                    console.log(`[MessageBroker] Salto 'solo' per ${name} - nessun solo attivo`);
                    return;
                }
                
                // Converti boolean in 0/1
                const numValue = typeof value === 'boolean' ? (value ? 1 : 0) : value;
                
                oscManager.sendOSC(`/cielo/${objectType}/${paramName}`, [
                    index,
                    numValue
                ]);
            });
        } else {
            console.warn(`[MessageBroker] menuState non trovato per ${name}`);
        }
    }

    /**
     * Notifica trasformazione oggetto (movimento, rotazione, scala)
     */
    sendObjectTransform(data) {
        const {
            id,
            name,
            type,
            position = { x: 0, y: 0, z: 0 },
            rotation = { x: 0, y: 0, z: 0 },
            scale = { x: 1, y: 1, z: 1 },
            tags = [0] // Tag di default
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        const index = this.extractIndex(name);
        
        // Se type non è specificato, cerca l'oggetto nella scena per determinarlo dalla geometria
        let objectType = type;
        if (!objectType && window.scene) {
            const sceneObject = window.scene.children.find(obj => obj.name === name);
            if (sceneObject) {
                objectType = this.extractType(sceneObject);
            } else {
                objectType = this.extractType(name); // Fallback al parsing del nome
            }
        } else if (!objectType) {
            objectType = this.extractType(name);
        }

        // OSC: Messaggi gerarchici separati per position e rotation
        if (oscManager.isEnabled) {
            // Position con nID come primo argomento
            // NOTA: Three.js usa Y come verticale, ma per OSC scambiamo Y e Z
            // e invertiamo Y (che diventa -Z di Three.js)
            oscManager.sendOSC(`/cielo/${objectType}/position`, [
                index,
                position.x,
                -position.z,  // Z di Three.js diventa -Y per OSC (invertita)
                position.y    // Y di Three.js diventa Z per OSC
            ]);

            // Rotation: solo per orifonti e altoparlanti, NON per omnifonti
            if (objectType !== 'omnifonte') {
                oscManager.sendOSC(`/cielo/${objectType}/rotation`, [
                    index,
                    rotation.x,
                    rotation.z,  // Z di Three.js diventa Y per OSC
                    rotation.y   // Y di Three.js diventa Z per OSC
                ]);
            }
        }

        // Max/MSP: Mantiene comportamento esistente tramite syncMaxDictionaries
        // (non facciamo nulla qui, maxSync.js gestisce già tutto)
    }

    /**
     * Notifica cambio tags di un oggetto
     */
    sendObjectTags(data) {
        const {
            name,
            type,
            tags = [0]
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        const index = this.extractIndex(name);
        
        // Se type non è specificato, cerca l'oggetto nella scena
        let objectType = type;
        if (!objectType && window.scene) {
            const sceneObject = window.scene.children.find(obj => obj.name === name);
            objectType = sceneObject ? this.extractType(sceneObject) : this.extractType(name);
        } else if (!objectType) {
            objectType = this.extractType(name);
        }

        // OSC: Messaggio tags separato con nID come primo argomento
        if (oscManager.isEnabled) {
            oscManager.sendOSC(`/cielo/${objectType}/tags`, [index, ...tags]);
        }
    }

    /**
     * Notifica eliminazione oggetto
     */
    sendObjectDeleted(data) {
        const {
            id,
            name,
            type
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        const index = this.extractIndex(name);
        
        // Se type non è specificato, cerca l'oggetto nella scena (prima che venga eliminato)
        let objectType = type;
        if (!objectType && window.scene) {
            const sceneObject = window.scene.children.find(obj => obj.name === name);
            objectType = sceneObject ? this.extractType(sceneObject) : this.extractType(name);
        } else if (!objectType) {
            objectType = this.extractType(name);
        }

        // OSC: Messaggio flat contestuale con nID come primo argomento
        if (oscManager.isEnabled) {
            oscManager.sendOSC('/cielo/deleted', [
                objectType,
                index
            ]);
            
            // Invia conteggi aggiornati dopo eliminazione
            this.sendObjectCounts();
        }

        // Max/MSP: Mantiene comportamento esistente
        if (window.max && window.max.outlet) {
            window.max.outlet('deleted', objectType, index, name, id);
        }
    }

    /**
     * Notifica cambio selezione oggetto
     */
    sendObjectSelected(data) {
        const {
            id,
            name,
            type
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        const index = this.extractIndex(name);
        
        // Se type non è specificato, cerca l'oggetto nella scena
        let objectType = type;
        if (!objectType && window.scene) {
            const sceneObject = window.scene.children.find(obj => obj.name === name);
            objectType = sceneObject ? this.extractType(sceneObject) : this.extractType(name);
        } else if (!objectType) {
            objectType = this.extractType(name);
        }

        // OSC
        if (oscManager.isEnabled) {
            oscManager.sendOSC('/cielo/selected', [
                objectType,
                index,
                name,
                id
            ]);
        }

        // Max mantiene il suo comportamento in max.js (sendLastHoveredObjectToMax)
    }

    /**
     * Invia parametro personalizzato dal menu
     * @param {Object} data - { type, index, paramName, value }
     */
    sendCustomParameter(data) {
        const {
            type,
            index,
            paramName,
            value
        } = data;

        if (!this.canSendMessages()) {
            return;
        }

        // OSC: /cielo/{type}/{paramName} con nID come primo argomento
        if (oscManager.isEnabled) {
            oscManager.sendOSC(`/cielo/${type}/${paramName}`, [index, value]);
        }

        // Max: outlet con pattern simile
        if (window.max && window.max.outlet) {
            window.max.outlet(type, index, paramName, value);
        }
    }

    /**
     * Controlla se c'è almeno un oggetto con solo attivo per il tipo specificato
     */
    hasSoloActive(objectType) {
        if (!window.scene) return false;

        return window.scene.children.some(obj => {
            const type = this.extractType(obj);
            if (type !== objectType) return false;
            
            return obj.userData?.menuState?.solo === true;
        });
    }

    /**
     * Invia conteggio oggetti (omnifonti e altoparlanti)
     */
    sendObjectCounts() {
        if (!window.scene) return;

        let omnifontiCount = 0;
        let altoparlanteiCount = 0;

        window.scene.children.forEach(obj => {
            const objectType = this.extractType(obj);
            if (objectType === 'omnifonte') omnifontiCount++;
            if (objectType === 'altoparlante') altoparlanteiCount++;
        });

        // Invia conteggi via OSC
        if (oscManager.isEnabled) {
            oscManager.sendOSC('/cielo/nomnifonti', [omnifontiCount]);
            oscManager.sendOSC('/cielo/naltoparlanti', [altoparlanteiCount]);
        }

        console.log(`[COUNTS] Inviato: ${omnifontiCount} omnifonti, ${altoparlanteiCount} altoparlanti`);
    }

    /**
     * Inizializza menuState con valori di default dal config se non esiste
     */
    initializeMenuStateIfNeeded(object) {
        const objectType = this.extractType(object);
        
        // Se il menuState esiste già, non fare nulla
        if (object.userData?.menuState && Object.keys(object.userData.menuState).length > 0) {
            return;
        }
        
        // Carica config per questo tipo di oggetto
        const configMap = {
            'omnifonte': '/config/omnifonte.json',
            'altoparlante': '/config/altoparlante.json',
            'orifonte': '/config/orifonte.json'
        };
        
        const configPath = configMap[objectType];
        if (!configPath) return;
        
        // Inizializza menuState vuoto
        if (!object.userData) object.userData = {};
        if (!object.userData.menuState) object.userData.menuState = {};
        
        // Carica config e popola defaults (sincrono perché usiamo i config già caricati)
        if (window.submenuConfigs && window.submenuConfigs[objectType]) {
            const config = window.submenuConfigs[objectType];
            config.controls.forEach(controlConfig => {
                if (controlConfig.oscName && controlConfig.defaultValue !== undefined) {
                    object.userData.menuState[controlConfig.oscName] = controlConfig.defaultValue;
                }
            });
        }
    }

    /**
     * Invia dump completo di tutti gli oggetti (omnifonti e altoparlanti)
     * Chiamato quando si riceve comando /cielo/dump via OSC
     */
    sendDump() {
        console.log('\n=====================================');
        console.log('[DUMP] 🚀 INIZIO DUMP COMPLETO');
        console.log('=====================================\n');
        
        if (!window.scene) {
            console.warn('[DUMP] ⚠️ Scene non disponibile');
            return;
        }

        let omnifontiCount = 0;
        let altoparlanteiCount = 0;
        let messaggiInviati = 0;

        // 1. INVIA CONTEGGI ALL'INIZIO
        window.scene.children.forEach(obj => {
            const objectType = this.extractType(obj);
            if (objectType === 'omnifonte') omnifontiCount++;
            if (objectType === 'altoparlante') altoparlanteiCount++;
        });

        if (oscManager.isEnabled) {
            console.log(`[DUMP] 📊 Invio conteggi: ${omnifontiCount} omnifonti, ${altoparlanteiCount} altoparlanti`);
            oscManager.sendOSC('/cielo/nomnifonti', [omnifontiCount]);
            oscManager.sendOSC('/cielo/naltoparlanti', [altoparlanteiCount]);
            messaggiInviati += 2;
        }

        // Reset contatori per la seconda iterazione
        omnifontiCount = 0;
        altoparlanteiCount = 0;

        // Controlla se ci sono solo attivi per ciascun tipo
        const omnifontiHasSolo = this.hasSoloActive('omnifonte');
        const altoparlanteiHasSolo = this.hasSoloActive('altoparlante');
        
        console.log(`[DUMP] 🔍 Solo attivo - Omnifonti: ${omnifontiHasSolo}, Altoparlanti: ${altoparlanteiHasSolo}`);

        // 2. ITERA E INVIA TUTTI I DATI

        // Itera su tutti gli oggetti della scena
        window.scene.children.forEach(obj => {
            const objectType = this.extractType(obj);
            
            // Solo omnifonti e altoparlanti
            if (objectType !== 'omnifonte' && objectType !== 'altoparlante') {
                return;
            }

            const index = this.extractIndex(obj.name);
            
            // Inizializza menuState se non esiste
            this.initializeMenuStateIfNeeded(obj);
            
            // Conta per statistiche
            if (objectType === 'omnifonte') omnifontiCount++;
            if (objectType === 'altoparlante') altoparlanteiCount++;

            console.log(`[DUMP] 📦 Elaborando ${obj.name} (index: ${index})`);

            // 1. POSIZIONE (in coordinate Max: y invertito)
            if (obj.position && oscManager.isEnabled) {
                console.log(`  → Position: [${obj.position.x.toFixed(2)}, ${(-obj.position.z).toFixed(2)}, ${obj.position.y.toFixed(2)}]`);
                // Usa lo stesso formato di sendObjectTransform: x, -z, y
                oscManager.sendOSC(`/cielo/${objectType}/position`, [
                    index,
                    obj.position.x,
                    -obj.position.z,  // Z di Three.js diventa -Y per OSC (invertita)
                    obj.position.y    // Y di Three.js diventa Z per OSC
                ]);
                messaggiInviati++;
            }

            // 2. TAGS (formato: nID tag1. tag2. tag3. ...)
            if (obj.userData?.tags && oscManager.isEnabled) {
                const activeTags = obj.userData.tags
                    .map((active, idx) => active ? `${idx}.` : null)
                    .filter(t => t !== null);
                
                console.log(`  → Tags: [${activeTags.join(' ')}]`);
                oscManager.sendOSC(`/cielo/${objectType}/tags`, [
                    index,
                    ...activeTags
                ]);
                messaggiInviati++;
            }

            // 3. MENU STATE (tutti i parametri del menu)
            if (obj.userData?.menuState && oscManager.isEnabled) {
                console.log(`  → MenuState:`, obj.userData.menuState);
                
                // Determina se saltare 'solo' per questo tipo di oggetto
                const skipSolo = (objectType === 'omnifonte' && !omnifontiHasSolo) || 
                                 (objectType === 'altoparlante' && !altoparlanteiHasSolo);
                
                Object.entries(obj.userData.menuState).forEach(([paramName, value]) => {
                    // Salta il parametro 'solo' se non c'è nessun solo attivo per questo tipo
                    if (paramName === 'solo' && skipSolo) {
                        console.log(`    ⊘ Salto 'solo' - nessun solo attivo per ${objectType}`);
                        return;
                    }
                    
                    // Converti boolean in 0/1
                    const numValue = typeof value === 'boolean' ? (value ? 1 : 0) : value;
                    
                    oscManager.sendOSC(`/cielo/${objectType}/${paramName}`, [
                        index,
                        numValue
                    ]);
                    messaggiInviati++;
                });
            }
        });

        console.log('\n=====================================');
        console.log(`[DUMP] ✅ COMPLETATO!`);
        console.log(`[DUMP] 📊 Omnifonti: ${omnifontiCount}`);
        console.log(`[DUMP] 📊 Altoparlanti: ${altoparlanteiCount}`);
        console.log(`[DUMP] 📊 Messaggi OSC inviati: ${messaggiInviati}`);
        console.log('=====================================\n');
    }
}

// Crea istanza globale
window.messageBroker = new MessageBroker();

export default window.messageBroker;

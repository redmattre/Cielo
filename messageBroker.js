/**
 * Message Broker
 * Layer di astrazione per comunicazione con sistemi esterni (OSC, Max, Multi-Client)
 */

import oscManager from './oscManager.js';

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
     * Es: "Altoparlante 3" → 3
     */
    extractIndex(name) {
        const match = name.match(/\d+$/);
        return match ? parseInt(match[0]) : 0;
    }

    /**
     * Estrae il tipo base dal nome completo
     * Es: "Altoparlante 3" → "altoparlante"
     */
    extractType(name) {
        if (name.startsWith('Altoparlante')) return 'altoparlante';
        if (name.startsWith('Omnifonte')) return 'omnifonte';
        if (name.startsWith('Orifonte')) return 'orifonte';
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
            // Messaggio added con posizione
            oscManager.sendOSC(`/cielo/${objectType}/${index}/added`, [
                name,
                id,
                position.x,
                position.y,
                position.z
            ]);
            
            // Messaggio tags separato
            oscManager.sendOSC(`/cielo/${objectType}/${index}/tags`, tags);
        }

        // Max/MSP: Mantiene comportamento esistente
        if (window.max && window.max.outlet) {
            window.max.outlet('added', objectType, index, name, id,
                position.x, position.y, position.z,
                rotation.x, rotation.y, rotation.z);
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
        const objectType = type || this.extractType(name);

        // OSC: Messaggi gerarchici separati per position e rotation
        if (oscManager.isEnabled) {
            // Position
            oscManager.sendOSC(`/cielo/${objectType}/${index}/position`, [
                position.x,
                position.y,
                position.z
            ]);

            // Rotation: solo per orifonti e altoparlanti, NON per omnifonti
            if (objectType !== 'omnifonte') {
                oscManager.sendOSC(`/cielo/${objectType}/${index}/rotation`, [
                    rotation.x,
                    rotation.y,
                    rotation.z
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
        const objectType = type || this.extractType(name);

        // OSC: Messaggio tags separato
        if (oscManager.isEnabled) {
            oscManager.sendOSC(`/cielo/${objectType}/${index}/tags`, tags);
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
        const objectType = type || this.extractType(name);

        // OSC: Messaggio flat contestuale
        if (oscManager.isEnabled) {
            oscManager.sendOSC('/cielo/deleted', [
                objectType,
                index,
                name,
                id
            ]);
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
        const objectType = type || this.extractType(name);

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
}

// Crea istanza globale
window.messageBroker = new MessageBroker();

export default window.messageBroker;

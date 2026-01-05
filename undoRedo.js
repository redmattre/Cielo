import * as THREE from 'three';

/**
 * Sistema Undo/Redo basato sul Command Pattern
 * Salva azioni reversibili invece di snapshots completi
 */

// Command base class
class Command {
    execute() {
        throw new Error('execute() must be implemented');
    }
    
    undo() {
        throw new Error('undo() must be implemented');
    }
    
    redo() {
        this.execute();
    }
}

// Command per trasformazioni (posizione, rotazione, scala, tags, menuState)
export class TransformCommand extends Command {
    constructor(object, oldState, newState) {
        super();
        this.objectId = object.userData?.id;
        this.objectName = object.name;
        this.oldState = oldState;
        this.newState = newState;
    }
    
    execute() {
        const object = this.findObject();
        if (!object) return;
        
        this.applyState(object, this.newState);
    }
    
    undo() {
        console.log('[UNDO] Chiamato undo per:', this.objectName);
        const object = this.findObject();
        if (!object) {
            console.error('[UNDO] Impossibile trovare oggetto per undo');
            return;
        }
        
        console.log('[UNDO] Applicando stato:', {
            oldPos: this.oldState.position,
            currentPos: { x: object.position.x, y: object.position.y, z: object.position.z }
        });
        this.applyState(object, this.oldState, this.newState);
        console.log('[UNDO] Stato applicato. Nuova posizione:', { x: object.position.x, y: object.position.y, z: object.position.z });
    }
    
    redo() {
        const object = this.findObject();
        if (!object) return;
        
        this.applyState(object, this.newState, this.oldState);
    }
    
    findObject() {
        if (!window.scene) {
            console.error('[UNDO] window.scene non definito!');
            return null;
        }
        
        let found = null;
        window.scene.traverse(child => {
            if (child.userData?.id === this.objectId) {
                found = child;
            }
        });
        
        if (!found) {
            console.warn('[UNDO] Oggetto non trovato:', this.objectId, this.objectName);
        } else {
            console.log('[UNDO] Oggetto trovato:', found.name);
        }
        
        return found;
    }
    
    applyState(object, state, previousState = null) {
        // Applica posizione
        if (state.position) {
            object.position.set(state.position.x, state.position.y, state.position.z);
        }
        
        // Applica rotazione
        if (state.rotation) {
            object.rotation.set(state.rotation.x, state.rotation.y, state.rotation.z);
        }
        
        // Applica scala
        if (state.scale) {
            object.scale.set(state.scale.x, state.scale.y, state.scale.z);
        }
        
        // Applica tags
        if (state.tags) {
            object.userData.tags = [...state.tags];
        }
        
        // Applica menuState
        if (state.menuState) {
            object.userData.menuState = { ...state.menuState };
        }
        
        // Aggiorna visivamente
        object.updateMatrixWorld(true);
        
        // Aggiorna UI menu se disponibile
        if (window.updateMenuForObject) {
            window.updateMenuForObject(object);
        }
        if (window.updateSubmenuTags) {
            window.updateSubmenuTags(object);
        }
        
        // Determina cosa è cambiato per inviare i messaggi OSC appropriati
        const positionChanged = previousState && state.position && (
            state.position.x !== previousState.position.x ||
            state.position.y !== previousState.position.y ||
            state.position.z !== previousState.position.z
        );
        
        const rotationChanged = previousState && state.rotation && (
            state.rotation.x !== previousState.rotation.x ||
            state.rotation.y !== previousState.rotation.y ||
            state.rotation.z !== previousState.rotation.z
        );
        
        const scaleChanged = previousState && state.scale && (
            state.scale.x !== previousState.scale.x ||
            state.scale.y !== previousState.scale.y ||
            state.scale.z !== previousState.scale.z
        );
        
        const tagsChanged = previousState && state.tags && 
            JSON.stringify(state.tags) !== JSON.stringify(previousState.tags);
        
        // Invia messaggi OSC
        if (window.messageBroker) {
            const objectType = this.getObjectType(object.name);
            const match = object.name.match(/(\d+)$/);
            const index = match ? parseInt(match[1], 10) : 1;
            
            // Invia transform solo se posizione/rotazione/scala sono cambiate
            if (!previousState || positionChanged || rotationChanged || scaleChanged) {
                window.messageBroker.sendObjectTransform({
                    id: object.userData?.id,
                    name: object.name,
                    type: objectType,
                    position: state.position,
                    rotation: state.rotation,
                    scale: state.scale,
                    tags: state.tags
                });
            }
            
            // Invia tags solo se sono cambiati
            if (tagsChanged) {
                window.messageBroker.sendObjectTags({
                    name: object.name,
                    type: objectType,
                    tags: state.tags
                });
            }
            
            // Invia parametri menu che sono cambiati
            if (previousState && state.menuState && previousState.menuState) {
                for (const paramName in state.menuState) {
                    if (state.menuState[paramName] !== previousState.menuState[paramName]) {
                        console.log(`[UNDO] Parametro ${paramName} cambiato:`, previousState.menuState[paramName], '->', state.menuState[paramName]);
                        window.messageBroker.sendCustomParameter({
                            type: objectType,
                            index: index,
                            paramName: paramName,
                            value: state.menuState[paramName]
                        });
                    }
                }
            }
        }
        
        // Multi-client sync
        if (window.multiClientManager) {
            console.log('[UNDO] MultiClient check:', {
                exists: !!window.multiClientManager,
                isMaster: window.multiClientManager.isMaster,
                syncEnabled: window.multiClientManager.syncEnabled,
                isEnabled: window.multiClientManager.isEnabled
            });
            
            if (window.multiClientManager.isMaster && window.multiClientManager.syncEnabled) {
                console.log('[UNDO] Inviando transform a slave via multiClient');
                window.multiClientManager.sendTransform(
                    this.objectId,
                    state.position,
                    state.rotation,
                    state.scale,
                    state.tags,
                    state.menuState
                );
            } else {
                console.log('[UNDO] NON inviando a slave - isMaster:', window.multiClientManager.isMaster, 'syncEnabled:', window.multiClientManager.syncEnabled);
            }
        } else {
            console.log('[UNDO] multiClientManager non disponibile');
        }
    }
    
    getObjectType(name) {
        if (name.startsWith('Altoparlante')) return 'altoparlante';
        if (name.startsWith('Omnifonte')) return 'omnifonte';
        if (name.startsWith('Orifonte')) return 'orifonte';
        if (name.startsWith('Zona')) return 'zona';
        return 'unknown';
    }
}

// Command per creazione oggetto
export class CreateObjectCommand extends Command {
    constructor(objectData) {
        super();
        this.objectData = objectData;
    }
    
    execute() {
        // Ricrea l'oggetto (implementazione dipende da addgeometries.js)
        console.log('CreateObjectCommand.execute() - da implementare');
    }
    
    undo() {
        // Rimuovi l'oggetto
        const object = this.findObject();
        if (object) {
            if (object.parent) object.parent.remove(object);
            
            // Rimuovi da objToBeDetected
            if (window.objToBeDetected) {
                const index = window.objToBeDetected.indexOf(object);
                if (index > -1) {
                    window.objToBeDetected.splice(index, 1);
                }
            }
        }
    }
    
    findObject() {
        if (!window.scene || !this.objectData.id) return null;
        
        let found = null;
        window.scene.traverse(child => {
            if (child.userData?.id === this.objectData.id) {
                found = child;
            }
        });
        return found;
    }
}

// Command per cancellazione oggetto
export class DeleteObjectCommand extends Command {
    constructor(object) {
        super();
        this.objectData = {
            id: object.userData?.id,
            name: object.name,
            type: this.getObjectType(object.name),
            position: { x: object.position.x, y: object.position.y, z: object.position.z },
            rotation: { x: object.rotation.x, y: object.rotation.y, z: object.rotation.z },
            scale: { x: object.scale.x, y: object.scale.y, z: object.scale.z },
            tags: object.userData?.tags ? [...object.userData.tags] : [],
            menuState: object.userData?.menuState ? { ...object.userData.menuState } : {}
        };
    }
    
    execute() {
        // Elimina l'oggetto
        const object = this.findObject();
        if (object) {
            if (object.parent) object.parent.remove(object);
            
            if (window.objToBeDetected) {
                const index = window.objToBeDetected.indexOf(object);
                if (index > -1) {
                    window.objToBeDetected.splice(index, 1);
                }
            }
        }
    }
    
    undo() {
        // Ricrea l'oggetto
        console.log('DeleteObjectCommand.undo() - da implementare');
    }
    
    findObject() {
        if (!window.scene || !this.objectData.id) return null;
        
        let found = null;
        window.scene.traverse(child => {
            if (child.userData?.id === this.objectData.id) {
                found = child;
            }
        });
        return found;
    }
    
    getObjectType(name) {
        if (name.startsWith('Altoparlante')) return 'altoparlante';
        if (name.startsWith('Omnifonte')) return 'omnifonte';
        if (name.startsWith('Orifonte')) return 'orifonte';
        if (name.startsWith('Zona')) return 'zona';
        return 'unknown';
    }
}

// Undo Manager
export class UndoManager {
    constructor(maxHistorySize = 50) {
        this.undoStack = [];
        this.redoStack = [];
        this.maxHistorySize = maxHistorySize;
    }
    
    execute(command) {
        // Non chiamare command.execute() perché lo stato è già applicato
        // (il comando viene creato DOPO che l'utente ha già mosso l'oggetto)
        this.undoStack.push(command);
        this.redoStack = []; // Clear redo stack quando esegui nuova azione
        
        // Limita dimensione stack
        if (this.undoStack.length > this.maxHistorySize) {
            this.undoStack.shift();
        }
    }
    
    undo() {
        if (this.undoStack.length === 0) {
            console.log('Nulla da annullare');
            return;
        }
        
        const command = this.undoStack.pop();
        command.undo();
        this.redoStack.push(command);
    }
    
    redo() {
        if (this.redoStack.length === 0) {
            console.log('Nulla da ripristinare');
            return;
        }
        
        const command = this.redoStack.pop();
        command.redo();
        this.undoStack.push(command);
    }
    
    clear() {
        this.undoStack = [];
        this.redoStack = [];
    }
    
    canUndo() {
        return this.undoStack.length > 0;
    }
    
    canRedo() {
        return this.redoStack.length > 0;
    }
}

// Istanza globale
export const undoManager = new UndoManager();

// Keyboard shortcuts
if (typeof window !== 'undefined') {
    window.addEventListener('keydown', (e) => {
        // Ctrl+Z o Cmd+Z per undo
        if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            console.log('[UNDO] Tasto premuto. Stack:', undoManager.undoStack.length, 'canUndo:', undoManager.canUndo());
            undoManager.undo();
        }
        
        // Ctrl+Shift+Z o Cmd+Shift+Z per redo
        if ((e.ctrlKey || e.metaKey) && e.key === 'z' && e.shiftKey) {
            e.preventDefault();
            console.log('[REDO] Tasto premuto. Stack:', undoManager.redoStack.length, 'canRedo:', undoManager.canRedo());
            undoManager.redo();
        }
        
        // Ctrl+Y o Cmd+Y per redo (alternativa)
        if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
            e.preventDefault();
            console.log('[REDO] Tasto Y premuto. Stack:', undoManager.redoStack.length, 'canRedo:', undoManager.canRedo());
            undoManager.redo();
        }
    });
    
    // Esponi globalmente per uso in altri moduli (es: objmenu_new.js)
    window.undoManager = undoManager;
    window.TransformCommand = TransformCommand;
}

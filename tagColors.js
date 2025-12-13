/**
 * Palette colori tecnica per i tag (0-16)
 * Ispirata a banco da disegno tecnico / architetto
 * 17 colori TUTTI distintivi e facilmente riconoscibili
 */

export const TAG_COLORS = [
    '#808080', // 0 - Grigio grafite (sempre attivo)
    '#E74C3C', // 1 - Rosso carminio (matita rossa)
    '#3498DB', // 2 - Blu cobalto (china blu)
    '#2ECC71', // 3 - Verde smeraldo (matita verde)
    '#F39C12', // 4 - Arancione ambra (pennarello arancio)
    '#9B59B6', // 5 - Viola ametista (matita viola)
    '#1ABC9C', // 6 - Turchese (acqua)
    '#E67E22', // 7 - Arancio bruciato (terra)
    '#F1C40F', // 8 - Giallo oro (matita gialla)
    '#E91E63', // 9 - Magenta (pennarello fucsia)
    '#C0392B', // 10 - Rosso mattone
    '#16A085', // 11 - Verde petrolio
    '#8E44AD', // 12 - Porpora (inchiostro viola)
    '#D35400', // 13 - Arancio terracotta
    '#27AE60', // 14 - Verde bosco
    '#34495E', // 15 - Blu ardesia
    '#00BCD4'  // 16 - Ciano (matita celeste)
];

/**
 * Ottiene il colore di un tag specifico
 */
export function getTagColor(tagNumber) {
    if (tagNumber < 0 || tagNumber > 16) return TAG_COLORS[0];
    return TAG_COLORS[tagNumber];
}

/**
 * Verifica se un oggetto ha un tag specifico
 */
export function hasTag(object, tagNumber) {
    return object?.userData?.tags?.includes(tagNumber) || false;
}

/**
 * Aggiunge un tag ad un oggetto (se non già presente)
 */
export function addTag(object, tagNumber) {
    if (!object || !object.userData) return false;
    if (!object.userData.tags) object.userData.tags = [0];
    if (!object.userData.tags.includes(tagNumber)) {
        object.userData.tags.push(tagNumber);
        object.userData.tags.sort((a, b) => a - b);
        return true;
    }
    return false;
}

/**
 * Rimuove un tag da un oggetto (non può rimuovere il tag 0)
 */
export function removeTag(object, tagNumber) {
    if (!object || !object.userData || tagNumber === 0) return false;
    if (!object.userData.tags) object.userData.tags = [0];
    const index = object.userData.tags.indexOf(tagNumber);
    if (index > -1) {
        object.userData.tags.splice(index, 1);
        return true;
    }
    return false;
}

/**
 * Toggle tag (aggiunge se assente, rimuove se presente)
 * Tag 0 non può essere rimosso
 */
export function toggleTag(object, tagNumber) {
    if (tagNumber === 0) return false; // Tag 0 sempre attivo
    if (hasTag(object, tagNumber)) {
        return removeTag(object, tagNumber);
    } else {
        return addTag(object, tagNumber);
    }
}

/**
 * Inizializza i tag su un oggetto (se non già presenti)
 */
export function initializeTags(object) {
    if (!object || !object.userData) return;
    if (!object.userData.tags) {
        object.userData.tags = [0];
    }
}

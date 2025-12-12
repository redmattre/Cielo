/**
 * Palette colori pastello per i tag (0-16)
 * Colori sobri e distinguibili per UI
 */

export const TAG_COLORS = [
    '#B0B0B0', // 0 - Grigio neutro (sempre attivo)
    '#FFB3BA', // 1 - Rosa pastello
    '#FFDFBA', // 2 - Pesca
    '#FFFFBA', // 3 - Giallo tenue
    '#BAFFC9', // 4 - Verde menta
    '#BAE1FF', // 5 - Azzurro
    '#D4BAFF', // 6 - Lavanda
    '#FFB3E6', // 7 - Rosa chiaro
    '#C9E4CA', // 8 - Verde salvia
    '#F4C2C2', // 9 - Rosa salmone
    '#FFE5B4', // 10 - Albicocca
    '#B4D7EB', // 11 - Celeste
    '#D4A5A5', // 12 - Malva
    '#A5D4D4', // 13 - Turchese pastello
    '#E5C8E5', // 14 - Lilla
    '#C8E5C8', // 15 - Verde chiaro
    '#E5D4C8'  // 16 - Beige rosato
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

/**
 * Utility functions for object naming with channel numbers
 * Separato per evitare dipendenze circolari
 */

/**
 * Estrae il numero di canale dal nome di un oggetto
 * Supporta sia il nuovo formato (#5) che il vecchio (spazio 5) per retrocompatibilità
 * Es: "Voce soprano #5" -> 5, "Omnifonte #12" -> 12, "Altoparlante 3" -> 3
 * @param {string} name - Nome dell'oggetto
 * @returns {number|null} - Numero di canale o null se non trovato
 */
export function extractChannelNumber(name) {
  if (!name) return null;
  
  // Prova prima il nuovo formato con #
  const hashMatch = name.match(/#(\d+)/);
  if (hashMatch) {
    return parseInt(hashMatch[1], 10);
  }
  
  // Fallback: vecchio formato con spazio (per retrocompatibilità con preset esistenti)
  const spaceMatch = name.match(/(\d+)$/);
  if (spaceMatch) {
    return parseInt(spaceMatch[1], 10);
  }
  
  return null;
}

/**
 * Genera un nome con formato "Tipo #numero"
 * @param {string} typeLabel - Etichetta del tipo (es. "Omnifonte", "Altoparlante")
 * @param {number} channelNumber - Numero di canale
 * @returns {string} - Nome formattato
 */
export function generateObjectName(typeLabel, channelNumber) {
  return `${typeLabel} #${channelNumber}`;
}

// 300 puntos pasadas las 2000 ops/s (Borrar comentarios al hacer submit)
function fixLetter(letter) {
    return letter
        .trim()
        .replace(/,\s{0,1}/g, ', ') // Separate commas from words adding a space after the comma
        .replace(/\s+/g, ' ') // Remove extra spaces
        .replace(/\s{1}([,.\?\!])/g, '$1') // Remove spaces before punctuation
        .replace(/([a-z])$/gi, '$1.') // Add a period at the end of the sentence
        .replace(/\?+/g, '?') // Remove extra question marks
        .replace(/santa claus/gi, 'Santa Claus') // Capitalize Santa Claus
        .replace(/[\?\!.]+\s[a-z]|^[a-z]/gi, c => c.toUpperCase()) // Capitalize the first letter of the sentence and after a punctuation
}

module.exports = fixLetter
function processarCadena (phrase, callback) {
    const phraseUpperCase = phrase.toUpperCase();
    callback(phraseUpperCase);
}

const lowerCasePhrase = ("hola, esto (no) es una frase en minúsculas, un saludo kordial ermano")
processarCadena (lowerCasePhrase, (phraseUpperCase) => console.log("Tu frase en mayúsculas: " + phraseUpperCase));
function processarElements (array, callback) {
    for (const element of frikisEspañolesFavoritos) {
        callback(element);
    }
}

const frikisEspañolesFavoritos = ["Batu", "John Cobra", "El Lion", "Michel de Motril", "Toñeca el nací", "Ramón de pitis", "El chucky de cieza"]

processarElements (frikisEspañolesFavoritos, (friki) => {console.log("Puto amo: " +  friki)});
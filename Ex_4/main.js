function processarElements (array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index]);
    }
}

const frikisEspañolesFavoritos = ["Batu", "John Cobra", "El Lion", "Michel de Motril", "Toñeca el nací", "Ramón de pitis", "El chucky de cieza"]

processarElements (frikisEspañolesFavoritos, (friki) => {console.log("Puto amo: " +  friki)});
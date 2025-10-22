function esperarISaludar (name, callback) {
    setTimeout(() => {
        callback(name);
    }, 2000);
}

esperarISaludar("El Pepe", (name) => {console.log ('Hola ' + name)});
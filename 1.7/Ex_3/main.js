const helloWorld = new Promise((resolve, reject) => {
    setTimeout(() => {
        let input = 'Hola';
        if (input == 'Hola') {
            resolve('Hola, món');
        } else {
            reject('Prova de nou!');
        }
    }, 2000);
});

helloWorld.then((message) => {
    console.log(message);
})
   .catch((error) => {
    console.error(error);
});
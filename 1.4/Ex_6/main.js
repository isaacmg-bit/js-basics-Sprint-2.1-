// const contenidoMano = {billetes: "5 euros", monedas: "1 de 2 euros, 3 de 1 euro"};
// const contenidoCartera = {tarjetero: "DNI, Carné de conducir", bolsilloInterior: "Foto de mi madre"};

// const introducirCambioEnCartera = {...contenidoMano, ...contenidoCartera}

// console.log(introducirCambioEnCartera);

const contenidoMano = {billetes: "5 euros", monedas: "1 de 2 euros, 3 de 1 euro"};
const contenidoCartera = {tarjetero: "DNI, Carné de conducir", bolsilloInterior: "Foto de mi madre", billetes: "ninguno"};

const introducirCambioEnCartera = {...contenidoCartera, ...contenidoMano }

console.log(contenidoCartera);
console.log(introducirCambioEnCartera);
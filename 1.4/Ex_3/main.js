const objecte1 = {
    propiedad1: 1,
    propiedad2: 2,
    propiedad3: 3,
};

const objecte2 = {...objecte1};

console.log(objecte2);

objecte2.propiedad1 = "elpepe";

console.log(objecte2);
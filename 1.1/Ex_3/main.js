class names {
    constructor(name, surname) {
        this.firstName = name;
        this.lastName = surname;
    }
}

const greet = (person) => console.log(`Hola, ${person.firstName} ${person.lastName}`);

const person = new names("Isaac", "Malagon")

greet(person);
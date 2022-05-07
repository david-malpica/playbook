console.log("--- Tipos de objetos ---")

// Ejemplo 1: Objeto vacio 
const emptyObject = {} 
console.log("Ejemplo 1, Objeto vacio: ", emptyObject);

// Ejemplo 2: Objeto con propiedades
const myCar = {
    fabricante: "Ford",
    modelo: "GT40",
    debut: 1964,
    victoria: "24 Le Mans"
}
console.log("Ejemplo 2, Objeto con propiedades", myCar);

// Ejemplo 3: Objeto con diferentes propiedades
const myObject = {
    name: "Pamela",
    age: 27,
    nicknames: [
        'Pam',
        'Pame',
        'guerita'
    ],
    address: {
        zip_code : 50000,
        street: "Sor Juana Inez 00",
        city: "Toluca de Lerdo"
    }
}
console.log("Ejemplo 3, Objeto con diferentes propiedades", myObject.name);
console.log(myObject["address"])

// Ejemplo 4: Objeto con métodos
const pokemon = {
    name: "Pikachu",
    sayHello: function() {
        console.log(`${this.name} te saluda!!`)
    }
}
console.log("Ejemplo 4, Objeto con metodos", pokemon.sayHello());

// Ejemplo 5: Objeto con métodos y parámetros
const myPokemon = {
    name: 'Pikachu',
    sayHello: function(yourPoke){
        console.log(`${this.name} saluda a tu ${yourPoke}`)
    }
}
console.log("Ejemplo 5,Objeto con métodos y parámetros")
myPokemon.sayHello("Groudon")
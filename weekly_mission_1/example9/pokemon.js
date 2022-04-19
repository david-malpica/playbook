class Pokemon {
    constructor(name) { 
        this.name = name
    }
    //Metodo sayHello()
    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    //Metodo sayMessage
    sayMessage (message) {
        console.log(`Mi pokemon ${this.name} dice: ${message} `)
    }
}
// Exportacion del modulo
 module.exports = Pokemon
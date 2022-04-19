export default class Pokemon {
    constructor(name) { 
        this.name = name
    }
    //Metodo sayHello()
    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
}
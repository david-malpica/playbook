// Ejemplo 1: Crear una clase vacia
class People {}
console.log("Ejemplo 1: clase vacia " + People)

// Ejemplo 2: Crear un objeto a partir de una clase
class Tree {}
const myTree = new Tree()
console.log("Ejemplo 2: crear un objeto a partir de una clase")
console.log(myTree)

// Ejemplo 3: Instanciar un objeto con atributos
class Pokemon {
    constructor(name,number,type){
        this.name = name
        this.number = number
        this.type = type
    }
}
const addPokemon = new Pokemon("Pikachu", 25, ['normal', 'electrico'])
console.log("Ejemplo 3 instanciar un objeto con atributos")
console.log(addPokemon)

// Ejemplo 4: metodos con los objetos
class Book {
    constructor(title,author,pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
    getInfo(){ // Esta función ejecutará cualquier objeto instanciado a esta clase
        return `El libro ${this.title} del autor ${this.author}, tiene ${this.pages} paginas`
    }
}
console.log("Ejempo 4: métodos en los objetos")
const myBook = new Book("Clean Code","Robert C. Martin",431)
console.log(myBook.getInfo())

// Ejemplo 5: Atributos con valores por default
class Blog {
    constructor(title,author,content){
        this.title = title
        this.author = author
        this.content = content
        this.dateCreated = new Date()
    }
    getInfo(){
        return `El nuevo tema es: ${this.title}, escrito por: ${this.author}, se tratara de:
        ${this.content}, creado el: ${this.dateCreated}`
    }
}
console.log("Ejemplo 5: atributos con valores por defecto")
const entry = new Blog("React JS","Explorer 1","ES6, React")
console.log(entry.getInfo())

// Ejemplo 6: Getters para acceder a los atributos de un objeto
class Pokemon2 {
    constructor(name,number){
        this.name = name
        this.number = number
        this.generation = 0
    }
    get number_generation(){
        return this.generation
    }
}
console.log("Ejemplo 6: acceder a los atributos del objeto mediante getters")
const poke = new Pokemon2("Lucario",448)
console.log(poke.number_generation)

// Ejemplo 7: Setters para modificar a los atributos de un objeto
class Stream {
    constructor(name,stage){
        this.name = name
        this.stage = stage
        this.subs = 0
        this.views = 0
    }

    get getSubs(){
        return this.subs
    }
    get getViews(){
        return this.views
    }

    set setSubs(subs){
        this.subs = subs
    }
    set setViews(views){
        this.views = views
    }
}
console.log("Ejemplo 7: setters para modificar los atributos de un objeto")
const streamer = new Stream("Explorer 1","Stream")
console.log(streamer.getSubs)
console.log(streamer.getViews)
// Actualizar los datos:
streamer.setSubs = 20
streamer.setViews = 300
console.log(streamer.getSubs)
console.log(streamer.getViews)

// Ejemplo 8: static para escribir metodos sin instanciar algún objeto
// No se puede instanciar un objeto, por la palabra reservada "static"
class Tools {
    static getCommonTools(){
        return ["martillo","llave ajustable","desarmadores","pinzas"]
    }
}
console.log("Ejemplo 8: Metodo static")
// Se puede llamar el metodo static directamente de la clase
console.log(Tools.getCommonTools())

// Ejemplo 9: Herencia, nos permite relacionar clases entre si y reutilizar sus componentes
class Explorer {
    constructor(name,mission){
        this.name = name
        this.mission = mission
    }
}
console.log("Ejemplo 9: herencia de clases")
const david = new Explorer("David Malpica","Backend")
console.log(david)
// Se utiliza la palabra reservada extends para indicar la herencia de clases
class MissionCommander extends Explorer{
    constructor(mc,stack){
        this.mc = mc
        this.stack = stack
    }
}
const dev = new MissionCommander("Carlo",["NodeJS","Redis"])
console.log(dev)

// Ejemplo 10: Overriding methods

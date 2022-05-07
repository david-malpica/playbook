// Operador forEach

// Ejemplo 1: forEach para imprimir elementos de una lista
const numbers = [1,34,56,78,7,85,99]
console.log("Ejemplo 1: elementos de una lista");
numbers.forEach(num => console.log(num));

// Ejemplo 2: forEach para sumar todos los elementos de una lista
let sum = 0
const numbers2 = [2,3,5,9,6,4]
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: suma de elementos de una lista")
console.log(sum)

// Ejemplo 3: forEach para transformar texto de una lista
const pokemon = ['pichu', 'rayquaza', 'lucario', 'articuno']
console.log("Ejemplo 3: transformar texto de una lista")
pokemon.forEach((element) => console.log(element.toUpperCase()))



// Operador map

// Ejemplo 4: recorrer una lista y crear una nueva lista
const nums = [2,67,85,66,23,12]
// Otra forma de escribir la funcion:
// const numSquare = nums.map(function(num){return num * num})
const numSquare = nums.map((num) => {return num * num})
console.log("Ejemplo 4: recorrer una lista y crear una nueva lista")
console.log(numSquare)

// Ejemplo 5: Convertir los elementos de una lista
const names = ['David', 'LÉNA', 'Rosy', 'Cesar']
const namesToLowerCase = names.map((name) => name.toLowerCase())
console.log("Ejemplo 5: elementos de una lista a minusculas")
console.log(namesToLowerCase)

// Ejemplo 6: Convertir los elementos en mayuscula
const countries = ['mexico','Dinamarca','polonia','Francia']
const countryToUpperCase = country.map((country) => country.toUpperCase())
console.log(countrieToUpperCase.slice(0,3))
console.log("Ejemplo 6: primeras tres letras de una lista a mayusculas")



// Operador filter

// Ejemplo 7: filtrar una lista de elementos
const countries2 = ['Suiza','Escocia','Suecia','Francia','Luxemburgo','Estonia']
console.log(countries2)
const countriesFilter = countries2.filter((country) => country.includes('ia'))
console.log("Ejemplo 7: filtrar elementos de una lista")
console.log(countriesFilter)

// Ejemplo 8: filtar una lista por condiciones
const scores = [
    {name: 'Biologia', score: 73},
    {name: 'Psicologia', score: 70},
    {name: 'Filosofia', score: 85},
    {name: 'Matematicas', score: 90},
    {name: 'Ingles', score: 81}
]
const scoreFilter = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: filtrando elementos por condiciones")
console.log(scoreFilter)



// Operador reduce
// Ejemplo 9: Uso del reduce
const numbers3 = [1,3,5,8,12]
const result = numbers3.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: uso de 'reduce' para sumar los elemetos de una lista")
console.log(result)



// Operador every, valida los elementos de una lista devolviendo un valor booleano
// Ejemplo 10: Uso de every
const names1 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const allStr = names1.every((name) => typeof name === 'string')
console.log("Ejemplo 10: validar elementos de una lista")
console.log("Todos los elementos son string: " + allStr)



// Operador find
// Ejemplo 11: encontrar el primer elemento de una lista con el valor indicado
const ages = [18,22,34,44,26,17,39]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: primer edad menor a 20: " + age)

// Ejemplo 12: uso de find en una lista de objetos
const scores2 = [
    {name: "L", score:99},
    {name: "R", score:90},
    {name: "J", score:88},
    {name: "E", score:75}
]
const scoreLess = scores2.find((user) => user.score > 80)
console.log("Ejemplo 12: puntaje menor a 80 " + scoreLess.name)


// Operador findIndex
// Ejemplo 13: este metodo regresa el primer elemento que cumpla con la condicion señalada
const names2 = ["Explorer 1", 'Explorer 2', 'Explorer']
const nameResult = names2.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: primer elemento con mas de 7 letras: "+nameResult)

// Operador some
// Ejemplo 14: valida los elemntos de una lista mediante un booleano, si cumple con 
// la condicion señalada
const bools = [true, true, 'Explorer', 25, false]
const areTrue = bools.some((bool) => bool === Number)
console.log("Ejemplo 14: algun elemento es un numero: "+areTrue)

// Operador sort
// Ejemplo 15: ordenar elementos de una lista
const products = ['Leche','Aceite','Cafe','Azucar','Carne']
console.log("Ejemplo 15: ordenar una lista")
console.log(products.sort())

// Ejemplo 16: ordenar una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending
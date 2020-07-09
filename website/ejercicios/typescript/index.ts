console.log('Hello TypeScript')

function add(a: number, b: number){
    return a + b
}

const sum = add(2, 3)

// Tipos

// Boolean 
let muted: boolean = true
muted = false

// Numeros
let numerador: number = 42
let denominador: number = 6

let resultado = numerador / denominador

// String
let nombre: string = 'David'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['David', 'Monica', 'Pedro']
//people.push(00)


let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push('Omar')
peopleAndNumbers.push('Elvira')

// Enum
enum Color{
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}


// Object
let someObject: object = {type: 'Wildcard'}

//Funciones
function addSome(a: number, b: number): number{
    return a + b
}

const suma = add(4, 6)

// regresar una funcion
function createAdder(a: number): (number) => number{
    return (b: number) => {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName: string = 'Gómez'): string{
    return `${firstName} ${lastName}`
}

const david = fullName('David')
console.log(david)

// Interfaces
interface Rectangulo{
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    //color: Color.Rojo
}

function area(r: Rectangulo): number{
    return r.alto * r.ancho
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function (){
    return this.color ? `Un rectangulo ${this.color}` : `Un Rectangulo`
}

console.log(rect.toString())


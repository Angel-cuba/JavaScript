const numbersList = [-12,5,4,7,43,556,7,44,5];

console.log(numbersList)

const addNumbers = (a,b,c) => {
     console.log(a+b+c)

}

let numbertoadd = [1,2,3]
addNumbers(...numbertoadd)

//copiar arrays
// let array1 = [1,2,3,4]
// let array2 = [array1]
// console.log(...array2)

let array1 = [1,2,3,4,5]
let array2 = [6,7,8]


let arrayConcat = [...array1, ...array2]
console.log(arrayConcat)

//Enviar numero de params indef(params REST)

const restParams = (...numbers) => {
     console.log(numbers)
}
restParams(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)


//libreria Math
console.log(Math.max(...numbersList))
console.log(Math.min(...numbersList))


//Eliminar elementos duplicados
console.log(new Set(numbersList))

const form = document.getElementById('form')
const input = document.getElementById('input')

input.addEventListener('keyup', (e) =>{
     // e.preventDefault();
    console.log(e); 
})

addEventListener('click', (e) =>{
     console.log(e)
})
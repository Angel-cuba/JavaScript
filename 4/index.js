const numbers = [-23,43,65,776,8,84,98];

// console.log(...numbers);

const addNumbers = ( a,b,c) =>{
          console.log(a+b+c);
}

let numbersAdd = [3,4,5]

addNumbers(...numbersAdd)

//sumar un array dentro de otro array
let users =['HTML', 'CSS', 'JS', 'NODE', 'JSON', 'NaN']

let newUsers = ['Angel', 'Jul', 'September']

users.push(...newUsers)
console.log(users)

//copiar un array    
let array = [2,34,5]
let array1 = [...array]
console.log(array1)

array2 = [21,4.7,8]

// let arrayConcat = array1.concat(array2)
let arrayConcat = [...array1, ...array2]
console.log(arrayConcat)

//
const restParams = (...numbers)=> {
          console.log(numbers)
}
restParams()
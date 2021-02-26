// console.log('hola')
 const example = document.getElementById('example')

// let num = parseInt(prompt('Enter un número: '))

// for(let i = 1; i <= num; i++){
//           if(i%2 == 0){
//                     example.textContent = `${i} es par`
//                     console.log(`${i} - es par`)
//           }
//           else{
//               example.textContent = `${i} es impar`
//                     console.log(`${i} - es impar`)
//                     }

// }

let word = 'Hola Angel'

console.log(Array.from(word));
console.log(word.split(''));


//sort()
const letters = [ 'f', 'a', 'h', 'i', 'd']
const numbers = [ 12, 32, 3,455,65,34]

console.log(letters)
console.log(letters.sort())
console.log(numbers)
console.log(numbers.sort((a,b)=>a-b)) // TODO: De menor a mayor
console.log(numbers.sort((a,b)=>b-a)) // TODO: De mayor a menor


//forEach
const numbersList = [43,5,65,76,34,546,5]

numbersList.forEach(number => console.log(number))
numbersList.forEach((number, index) => console.log(
    `${number} esta en la posicion ${index}`
))
console.log(numbersList.sort((a,b)=>a-b))

// some ----- every
const words = ['HTML', 'CSS', 'JS', 'NODE']

console.log(words.some(word => word.length>=4))



//-----
const MynumbersList = [43,5,65,76,34,546,5]

// const number2 = MynumbersList.map(number => number*2)

// console.log(number2)

const p = MynumbersList.filter(number => number > 50)

console.log(p)

//reduce
console.log(p.reduce((a,b) => a+b))


////////////////////////////////////////////////////////////////
const users = [
    {
         name: '1',
        online: true
    },
    {
         name: '2',
        online: true
    },
    {
         name: '3',
        online: true
    },
    {
         name: '4',
        online: true
    },
    {
         name: '5',
        online: false
    },
    {
         name: '6',
        online: true
    }
]

const useronline = users.reduce((acc, user) =>{
    if(user.online) acc ++
    return acc
}, []);

console.log(`Hay ${useronline} users online`)
example.textContent = `Hay ${useronline} users online`
 const number = document.getElementById('number')
// const result = document.getElementById('result')


let a = prompt('Enter primer numero:')
let b = prompt('Enter segundo:')
let c = prompt('Enter tercero:')

// number.innerHTML = `Los numeros son ${a}, ${b}, ${c}`
// number.textContent = `Los numeros son ${a}, ${b}, ${c}`

let result = a+b+c;

// if (result % 2 == 0) console.log(`${result} es par`);
// else console.log(`${result} es impar`)

(result % 2 == 0) ? (
          console.log(`${result} es par`),
           number.textContent = `Los numeros son ${a}, ${b}, ${c}, y el numero es ${result}`
           )
           :
            console.log(`${result} es impar`)
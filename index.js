const number = document.getElementById('number')
const result = document.getElementById('result')

let a = prompt('Enter primer numero:')
let b = prompt('Enter segundo:')
let c = prompt('Enter tercero:')

number.innerHTML = `Los numeros son ${a}, ${b}, ${c}`
number.textContent = `Los numeros son ${a}, ${b}, ${c}`
 const number = document.getElementById('number')
 const results = document.getElementById('result')
const btn = document.getElementById('btn')
const menu = document.getElementById('menu')
const h = document.getElementById('h1')
const all = document.querySelector('.all')

let a = parseInt(prompt('Enter primer numero:'))
 let b = parseInt(prompt('Enter segundo:'))
 let c = parseInt(prompt('Enter tercero:'))

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

btn.addEventListener('click', function(e) {
     menu.classList.toggle('menu1'),
//     menu.classList.remove('.menu1')
     h.classList.toggle('h1')
      all.classList.toggle('all1')   
console.log('click')
})
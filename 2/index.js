const example = document.getElementById('example')
const figura = document.getElementById('figura')
const btn = document.getElementById('btn')


let nombre = prompt('Enter name:')
let edad = parseInt(prompt('Enter edad:'))

example.textContent = `Tu nombre es ${nombre} y tu edad  ${edad}, el próximo tendrás ${edad+1}`
//-------------------------------------------------


btn.addEventListener('click',()=>{
          let figure = prompt('Enter figure name triangle, rectangle or circle: ')

          let base;
          let height;
          let radius;

switch (figure){
          case 'triangle':
                    base = prompt('Enter la base del triangulo: ')
                    height = prompt('Enter la altura del triangulo')
                    figura.textContent = `El area del triangulo es ${(base*height)/2}`;
                    break;
          case 'rectangle':
                    base = prompt('Enter la base del rectangulo: ')
                    height = prompt('Enter la altura del rectangulo: ')
                    figura.textContent = `El area del del rectangulo es ${(base*height)}`  ;
                    break;
          case 'circle':
                    radius = prompt('Enter el radio: ')
                    figura.textContent = `El area del círculo es ${Math.PI * Math.pow(radius,2)}`;   
                    break;
}
})
console.log('hola')
const example = document.getElementById('example')

let num = parseInt(prompt('Enter un número: '))

for(let i = 1; i <= num; i++){
          if(i%2 == 0){
                    example.textContent = `${i} es par`
                    console.log(`${i} - es par`)
          }
          else{
              example.textContent = `${i} es impar`
                    console.log(`${i} - es impar`)
                    }

}
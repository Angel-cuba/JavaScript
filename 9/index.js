const btn = document.getElementById('btn')
const btn1 = document.getElementById('btn1')
const b1 = document.getElementById('b1')







btn.addEventListener('click', (e) => {
     console.log(e)
})

console.log(btn)

const yo = {
     name: 'Angel',
     edad: 36,
     email: 'angel@gmail.com'
}

console.log(yo)
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.hostname)
console.log(location.pathname)
console.log(location.hash)

//location.reload() 
//location.href = 'http://google.com'

//Como usar el objeto DAY
const date = new Date()

console.log(date)

btn.addEventListener('click', () => {
//  setTimeout(saluda, 2000)
 const timeout = setTimeout(() => {
      console.log('chao')
  }, 3000)
})
    const saluda =(user) => {
       console.log(`hola ${user}`)    
   
    }


     saluda(yo.name)

btn1.addEventListener('click', (e) =>{
     b1.textContent= 'Hello new element'
})
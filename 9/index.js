const btn = document.getElementById('btn')


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
    const saluda =() => {
      console.log('hola')    
     }

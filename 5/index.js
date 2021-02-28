const H1_title = document.getElementById('h1')
//const paragraph = [...document.querySelectorAll('.paragraph')]
const paragraph = document.querySelectorAll('.paragraph')
const button = document.getElementById('button')
const papapan = document.getElementById('paragraph')

console.log(paragraph)


H1_title.textContent = 'Example del textcontent'

// paragraph.map((p) => {
//      p.style.backgroundColor = 'green'
// })
button.addEventListener("click", () => {
 console.log('click')
//  paragraph.map( (p) => {
//      p.style.color = 'red'
// })
// paragraph.style.backgroundColor = 'red'
papapan.classList.toggle('h1Style')
H1_title.classList.toggle('h1Style')

})



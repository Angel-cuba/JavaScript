const title = document.getElementById('title');
const input = document.getElementById('name');
const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');


console.log(title)
console.log(input)

console.log(input.getAttribute('type'))
// name.setAttribute('type', 'date')

console.log(input)

button.addEventListener('click',(e)=>{
     title.classList.toggle('title')
//     console.log(e.target)
     if (title.classList.contains('title')) {
     console.log('tiene la clase')
     // title.style.backgroundColor= 'red'
     title.textContent= `        
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae, nostrum veniam quae sapiente quam minus sit. Nulla, dolorem sapiente impedit tempora ullam, molestias optio harum fuga, cupiditate omnis aut.
     `
}else{
     console.log('no tiene la clase');
     title.textContent = `Atributos desde JavaScript`
}
})

button1.addEventListener('click', (e)=>{
     console.log(e.target)
})


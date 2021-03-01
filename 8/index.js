const parent = document.getElementById('parent')

console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.firstElementChild)
console.log(parent.nextSibling)
console.log(parent.parentElement.nextElementSibling)



//------------------------------------
const list = document.getElementById('list')
const newElement = document.createElement('li')

newElement.textContent = 'Im new element'

//método: insertBefore(nombre-del-elemento, id.children)
// list.insertBefore(newElement, list.children[2])

//insertAdjacentElement

//list.insertAdjacentElement('beforebegin', newElement)
// list.children[1].insertAdjacentElement('beforebegin', newElement)
//list.insertAdjacentElement('beforeend', newElement)
// list.children[1].insertAdjacentElement('afterend', newElement)


// list.children[1].insertAdjacentHTML('afterend', '<li>Holaaaaa</li>')

// list.replaceChild(newElement,list.children[0])

// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)

list.children[1].replaceWith(newElement)


//Clonar elementos
console.log('click',list.cloneNode(true))

list.after(list.cloneNode(true)) //clonar elementos o lista nueva

//list.remove()
//list.removeChild(list.children[0])

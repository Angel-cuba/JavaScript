const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')


title.innerHTML = 'Example <span>Hola desde el ejemplo</span>'

// daysList.appendChild(itemList)

//Maneras de insertar texto en el DOM
const fragment= document.createDocumentFragment()

for(const day of days){
    
    const itemList = document.createElement('li')

itemList.textContent = day
fragment.appendChild(itemList)
    
          // console.log(day)
          // daysList.innerHTML += `<li>${day}</li>`
}
daysList.appendChild(fragment)


for(const day of days){
     const Lista = document.createElement('option')
 
 Lista.setAttribute('value', day.toLowerCase())
 Lista.textContent = day
 fragment.appendChild(Lista)


}
daysSelect.appendChild(fragment)
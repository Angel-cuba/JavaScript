const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

let xhr
// testing

if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
     else xhr = new ActiveXObject("Microsoft.XMLHTTP");


     xhr.open("GET",'https://jsonplaceholder.typicode.com/users')
     
     xhr.addEventListener('load', (data) => {
        console.log(JSON.parse(data.target.response))
        const midata = JSON.parse(data.target.response)
        console.log(midata)

        const list = document.getElementById('list')
      for(const user of midata){
const listItem = document.createElement('li')
listItem.textContent = `${user.id} - ${user.name}`

list.appendChild(listItem)
      }
     })
     
     
     xhr.send();
})
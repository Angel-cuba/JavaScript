const form = document.getElementById('form');
const button = document.getElementById('submitbutton')

const fname = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

// Validar el form
const ValidarForm = {
     fname : false,
     email : false,
     gender : false,
     terms : false
}

form.addEventListener('submit', (e) => {
     e.preventDefault();
})
fname.addEventListener('keyup', (e) => {
     console.log(e.target)
})
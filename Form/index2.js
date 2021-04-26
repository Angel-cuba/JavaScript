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
     validateForm();
})

fname.addEventListener('change', (e) => {
     console.log(e.target)
     if(e.target.value.trim().length > 0) ValidarForm.fname = true
})
email.addEventListener('change', (e) => {
     if(e.target.value.trim().length > 0) ValidarForm.email = true
})

gender.addEventListener('change', (e) => {
     if(e.target.checked == true) ValidarForm.gender = true
})

terms.addEventListener('change', (e) => {
              
     ValidarForm.terms = e.target.checked
     e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disable', true) 
   
})

validateForm = () => {
     const formValues = Object.values(ValidarForm)
     // console.log(Object.values(ValidarForm))
     const valid = formValues.findIndex(value => value ==false)
     if(valid == -1) form.submit()
     else alert('Invalid form')

}
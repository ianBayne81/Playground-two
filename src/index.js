
import { render, addNew } from './functions'

//render the array
render()

//eventhandler for add new member / submit form element
document.querySelector("#form-element").addEventListener("submit", function (e) {
  e.preventDefault()
  let nameOne = document.querySelector("#input-one").value 
  let nameTwo = document.querySelector("#input-two").value 
  let day = document.querySelector("#input-three").value
  let month = document.querySelector("#input-four").value
  let year = document.querySelector("#input-five").value
  let mobileNumber = document.querySelector("#input-six").value
  let email = document.querySelector("#input-seven").value
  let address = document.querySelector("#input-eight").value

  let allInputs = document.querySelectorAll(".inputElField")
  let dobInputs = document.querySelectorAll(".dobElField")

  if (nameOne.length < 2 || nameTwo.length < 2 || day =="" || month =="" || year.length < 4) {
    alert("Enter first name, last name and dob correctly")
  } else  {
    addNew(nameOne, nameTwo, day, month, year, mobileNumber, email, address)
    render()
    alert("Contact saved")
  }
  allInputs.forEach(singleInput => singleInput.value = '')
  dobInputs.forEach(singleInput => singleInput.value = '')

})


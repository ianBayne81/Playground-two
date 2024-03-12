
import { render, addNew } from './functions'

//render the array
render()

//eventhandler for add new member / submit form element
document.querySelector("#form-element").addEventListener("submit", function (e) {
  e.preventDefault()
  let nameOne = document.querySelector("#input-one").value 
  let nameTwo = document.querySelector("#input-two").value 
  let mobileNumber = document.querySelector("#input-three").value
  let email = document.querySelector("#input-four").value
  let dob = document.querySelector("#input-five").value
  let address = document.querySelector("#input-six").value

  let allInputs = document.querySelectorAll(".inputElField")

  if (nameOne.length < 2 || nameTwo.length < 2 || mobileNumber.length < 10 ) {
    alert("At lease enter first name, last name and mobile number")
  } else  {
    addNew(nameOne, nameTwo, mobileNumber, email, dob, address)
    render()
    alert("Contact saved")
  }
  allInputs.forEach(singleInput => singleInput.value = '')

})


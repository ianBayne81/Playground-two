
import { render, addNew, deleteAll } from './functions'

//render the array
render()

//eventhandler for add new member / submit form element
document.querySelector("#form-element").addEventListener("submit", function (e) {
  e.preventDefault()
  let nameOne = document.querySelector("#input-one").value 
  let nameTwo = document.querySelector("#input-two").value 
  let age = document.querySelector("#input-three").value
  let location = document.querySelector("#input-four").value
  let allInputs = document.querySelectorAll(".inputElField")

  if (nameOne.length < 2 || nameTwo.length < 2 || age == "" || location.length < 2 ) {
    alert("Enter all fields correctly")
  } else if (age < 18)  {
    alert("Minimum age is 18")
  } else  {
    addNew(nameOne, nameTwo, age, location)
    render()
  }
  allInputs.forEach(singleInput => singleInput.value = '')

})

// //eventhandler for the delete all members button
// document.querySelector("#delete-all").addEventListener("click", function (e) {
//   e.preventDefault()
//   deleteAll()
//   render()
// })


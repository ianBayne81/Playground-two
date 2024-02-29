
import { render, addNew, deleteAll } from './functions'

//render the array
render()

//eventhandler for add new member / submit form element
document.querySelector("#form-element").addEventListener("submit", function (e) {
  e.preventDefault()
  let nameOne = document.querySelector("#input-one").value 
  let nameTwo = document.querySelector("#input-two").value 
  
  if (nameOne.length > 1 && nameTwo.length > 1) {
    addNew(nameOne, nameTwo)
    render()
    document.querySelector("#input-one").value = ""
    document.querySelector("#input-two").value = ""
  } else  {
    alert("Enter first and last name")
  }
})

// //eventhandler for the delete all members button
// document.querySelector("#delete-all").addEventListener("click", function (e) {
//   e.preventDefault()
//   deleteAll()
//   render()
// })



import { inputDom, render, addNew, removeMember } from './functions'

//render the input Dom
inputDom()

//render the array
render()

//eventhandler for the add new member button
document.querySelector(".addButton").addEventListener("click", function (e) {
    addNew()
    render()
    console.log("You added a new member")
})

//eventhandler for the delete buttons 
const buttons = document.querySelectorAll(".deleteButtons")

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    removeMember()
    render()
    console.log('You deleted a member')
  })
})


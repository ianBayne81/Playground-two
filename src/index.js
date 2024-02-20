
import { inputDom, render, addNew, removeMember, deleteAll } from './functions'

//render the input Dom
inputDom()

//render the array
render()

//eventhandler for the add new member button
document.querySelector("#add-button").addEventListener("click", function (e) {
    e.preventDefault()
    addNew()
    render()
})

//eventhandler for the delete all members button
document.querySelector("#delete-all").addEventListener("click", function (e) {
  e.preventDefault()
  deleteAll()
  render()
})


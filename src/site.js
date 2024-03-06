import { getMembers, saveMember } from './functions'

//load newMember data from functions
const newMember = getMembers()

//variables used in site
const memberId = localStorage.getItem("getId")
const nameElement = document.querySelector("#first-name")
const surnameElement = document.querySelector("#last-name")
const ageElement = document.querySelector("#age")
const locationElement = document.querySelector("#location")

//render site page data function
const renderEditPage = (memberId) => {

  const member = newMember.find((member) => member.id === memberId)

  //create paragraph for the id and place in the heading element
  const idElement = document.querySelector("#heading-element")
  const createPara = document.createElement("p")
  createPara.setAttribute("id", "id-heading")
  createPara.textContent = member.id
  idElement.appendChild(createPara)
  
  //Place member details in the input fields
  nameElement.value = member.firstName
  surnameElement.value = member.lastName
  ageElement.value = member.age
  locationElement.value = member.location
  
}

//render edit page data
renderEditPage(memberId)

//edit member details 
const updateMember = (id, updates) => {
  let member = newMember.find((member) => member.id === id)

  if (!member) {
    return
  }

  if (typeof updates.firstName === 'string' && updates.firstName.length > 2) {
      member.firstName = updates.firstName
      
  } 

  if (typeof updates.lastName === 'string' && updates.lastName.length > 1) {
      member.lastName = updates.lastName
      
  } 

  if (typeof updates.age === 'string' && updates.age >= 18) {
      member.age = updates.age
      
  } 

  if (typeof updates.location === 'string' && updates.location.length > 2) {
      member.location = updates.location
      
  } 
  saveMember()

}
  


//remove individual member from the array

const removeMember = (id) => {
    
  let memberIndex = newMember.findIndex((member) => member.id === id)
  
  if (memberIndex > -1) {
      newMember.splice(memberIndex, 1)
  }
  saveMember()

}

//select all inputs
let allInputs = document.querySelectorAll(".input-element")

// eventlistener for the form to save and submit details
document.querySelector("#form-element").addEventListener('submit', function (e) {
    e.preventDefault()
    updateMember(memberId, {
      firstName: nameElement.value,
      lastName: surnameElement.value,
      age: ageElement.value,
      location: locationElement.value
  })
    
    alert("Contact saved")
  })

// eventlistener to remove contact button
document.querySelector("#delete-button").addEventListener('click', function (e) {
  e.preventDefault()
  removeMember(memberId)
  alert("Contact deleted")
  document.querySelector("#id-heading").innerHTML = ""
  allInputs.forEach(singleInput => singleInput.value = '')
  location.assign('/index.html')
})

//eventlistener for the return to home screen button
document.querySelector("#return-button").addEventListener('click', function (e) {
  e.preventDefault()
  localStorage.removeItem("getId")
  location.assign('/index.html')
})
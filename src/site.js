import { getMembers, saveMember } from './functions'

//load newMember data from functions
const newMember = getMembers()

//variables used in site
const memberId = localStorage.getItem("getId")
const nameOneEl = document.querySelector("#input-one")
const nameTwoEl = document.querySelector("#input-two")
const mobileNumberEl = document.querySelector("#input-three")
const emailEl = document.querySelector("#input-four")
const dobEl = document.querySelector("#input-five")
const addressEl = document.querySelector("#input-six")



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
  nameOneEl.value = member.firstName
  nameTwoEl.value = member.lastName
  mobileNumberEl.value = member.mobileNumber
  emailEl.value = member.email
  dobEl.value = member.dob
  addressEl.value = member.address
  
}

//render edit page data
renderEditPage(memberId)

//edit, save and delete member details 
const updateMember = (id, updates) => {
  let member = newMember.find((member) => member.id === id)

  if (!member) {
    return
  }

  if (updates.firstName.length < 2 || updates.lastName.length < 2 || updates.mobileNumber.length < 10) {
      alert("At lease enter first name, last name and mobile number")
  }  else {
      member.firstName = updates.firstName
      member.lastName = updates.lastName
      member.mobileNumber = updates.mobileNumber
      member.email = updates.email
      member.dob = updates.dob
      member.address = updates.address
      saveMember()
      alert("Contact saved")
  }

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
      firstName: nameOneEl.value,
      lastName: nameTwoEl.value,
      mobileNumber: mobileNumberEl.value,
      email: emailEl.value,
      dob: dobEl.value,
      address: addressEl.value
    })
    
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
import { getMembers, saveMember } from './functions'

//load newMember data from functions
const newMember = getMembers()

//variables used in site
const memberId = localStorage.getItem("getId")

let nameOne = document.querySelector("#input-one")
let nameTwo = document.querySelector("#input-two")
let day = document.querySelector("#input-three")
let month = document.querySelector("#input-four")
let year = document.querySelector("#input-five")
let mobileNumber = document.querySelector("#input-six")
let email = document.querySelector("#input-seven")
let address = document.querySelector("#input-eight")

//render site page data function
const renderEditPage = (memberId) => {

  const member = newMember.find((member) => member.id === memberId)

  //create paragraph for age and place in the heading element
  const ageElement = document.querySelector("#heading-two")
  const createPara = document.createElement("p")
  createPara.textContent = member.memberAge
  ageElement.appendChild(createPara)
  
  
  //Place member details in the input fields
  nameOne.value = member.firstName
  nameTwo.value = member.lastName
  day.value = member.day
  month.value = member.month
  year.value = member.year
  mobileNumber.value = member.mobileNumber
  email.value = member.email
  address.value = member.address
  
}

//render edit page data
renderEditPage(memberId)

//edit, save and delete member details 
const updateMember = (id, updates) => {
  let member = newMember.find((member) => member.id === id)

  if (!member) {
    return
  }

  if (updates.firstName.length < 2 || updates.lastName.length < 2 || updates.day =="" || updates.month =="" || updates.year.length < 4) {
      alert("Enter first name, last name and dob correctly")
  }  else {
      member.firstName = updates.firstName
      member.lastName = updates.lastName
      member.day = updates.day
      member.month = updates.month
      member.year = updates.year
      member.mobileNumber = updates.mobileNumber
      member.email = updates.email
      member.address = updates.address
      member.dob = `${member.year}-${member.month}-${member.day}`,
      member.memberAge = `${member.firstName} is ${Math.floor((new Date() - new Date(member.dob).getTime()) / 3.15576e+10)} years old`,
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
    document.querySelector("#heading-two").innerHTML = ""
    updateMember(memberId, {
      firstName: nameOne.value,
      lastName: nameTwo.value,
      day: day.value,
      month: month.value,
      year: year.value,
      mobileNumber: mobileNumber.value,
      email: email.value,
      address: address.value,
    })

    renderEditPage(memberId)
    
  })

// eventlistener to remove contact button
document.querySelector("#delete-button").addEventListener('click', function (e) {
  e.preventDefault()
  removeMember(memberId)
  alert("Contact deleted")
  document.querySelector("#heading-two").innerHTML = ""
  allInputs.forEach(singleInput => singleInput.value = '')
  location.assign('/index.html')
})

//eventlistener for the return to home screen button
document.querySelector("#return-button").addEventListener('click', function (e) {
  e.preventDefault()
  localStorage.removeItem("getId")
  location.assign('/index.html')
})
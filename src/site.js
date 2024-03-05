
//select all inputs
let allInputs = document.querySelectorAll(".input-element")

// eventlistener for the button to save and submit details
document.querySelector("#submit-button").addEventListener('submit', function (e) {
    e.preventDefault()
    //save details 
    alert("Contact saved")
    allInputs.forEach(singleInput => singleInput.value = '')
  })

// eventlistener to remove contact button
document.querySelector("#delete-button").addEventListener('click', function (e) {
  e.preventDefault()
  //remove contact
  alert("Contact deleted")
  allInputs.forEach(singleInput => singleInput.value = '')
})

//eventlistener for the return to home screen button
document.querySelector("#return-button").addEventListener('click', function (e) {
  e.preventDefault()
  location.assign('/index.html')
})
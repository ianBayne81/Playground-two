

// create an array of numbers
// const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// //create a seperate div on the page for each number from the array
// arrayNumbers.forEach((number) => {
    
//     const selectPage = document.querySelector("#page-container")
//     const createDivs = document.createElement('div')
//     createDivs.textContent = number
//     selectPage.appendChild(createDivs)
//     createDivs.classList.add("divs")
    
// })

//create an array of objects with individual data
const newMember = [
    {
        id: 100,
        firstName: "Ian",
        lastName: 'Bayne',
        age: 42,
        location: "Condon"
    },
    {
        id: 101,
        firstName: "Melissa",
        lastName: "Bayne",
        age: 43,
        location: "Condon"
    },
    {
        id: 102,
        firstName: "Jasmin",
        lastName: "Bayne",
        age: 19,
        location: "Condon"
    },
    {
        id: 103,
        firstName: "Tayla",
        lastName: "Sime",
        age: 18,
        location: "Condon"
    }

]

//render function to be called when the array is updated or browser refreshes
const render = function () {

    const selectPage = document.querySelector("#page-container")

    selectPage.innerHTML = ''
    
    //create add new member button
    const createAddButton = document.createElement('button')
        createAddButton.textContent = "add new member"
        createAddButton.classList.add("addButton")
        selectPage.appendChild(createAddButton)

    //create a seperate div on the page for each object within the array
    newMember.forEach((member) => {
        
        const createDivs = document.createElement('div')
        createDivs.textContent = member.firstName
        createDivs.classList.add("divs")
        selectPage.appendChild(createDivs)
        
    })

    //Create a button for each newMember div
    const selectDivs = document.querySelectorAll(".divs")

    selectDivs.forEach((selectDivs) => {
       
        const createButton = document.createElement('button')
        createButton.textContent = "Delete"
        createButton.classList.add("deleteButtons")
        selectDivs.appendChild(createButton)

    })

}

//render the array
// render()

//add new object of data to array
const addNew = () => {
    // const id = "id" + Math.random().toString(16).slice(2)
    newMember.push(
        {
            id: 104,
            firstName: "John",
            lastName: "Bayne",
            age: 72,
            location: "Albany Creek"
        }
    )
    render()
}

//remove member from the array

const removeMember = (id) => {
    const memberIndex = newMember.findIndex((member) => member.id === id)
    
    if (memberIndex > -1) {
        newMember.splice(memberIndex, 1)
    }
    render()
}

//eventhandler for the delete buttons 
const buttons = document.querySelectorAll(".deleteButtons")

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    e.preventDefault()
    removeMember(104)
    console.log("You deleted a member")
  })
})

//eventhandler for the add new member button
document.querySelector(".addButton").addEventListener('click', function (e) {
    e.preventDefault()
    addNew()
    console.log("You added a new member")
})


//Create list with itemised data from the Array
const names = newMember.map((item) => item.firstName)
console.log(names)

//Display all information from newMember array
console.log(newMember)
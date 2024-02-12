

// create an array of numbers
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//create a seperate div on the page for each number from the array
arrayNumbers.forEach((number) => {
    
    const selectPage = document.querySelector("#page-container")
    const createDivs = document.createElement('div')
    createDivs.textContent = number
    selectPage.appendChild(createDivs)
    createDivs.classList.add("divs")
    
})

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
        location: "North Shore"
    },
    {
        id: 103,
        firstName: "Tayla",
        lastName: "Sime",
        age: 18,
        location: "Condon"
    }

]

//add new object to array
const addNew = () => {
    newMember.push(
        {
            id: 104,
            firstName: "John",
            lastName: "Bayne",
            age: 72,
            location: "Albany Creek"
        }
    )
}

addNew(104)

//remove member from the array

const removeMember = (id) => {
    const memberIndex = newMember.findIndex((firstName) => firstName.id === id)
    
    if (memberIndex > -1) {
        newMember.splice(memberIndex, 1)
    }
}

//Create list with itemised data from the Array
const names = newMember.map((item) => item.firstName)
console.log(names)

// removeMember(104)

//create a seperate div on the page for each object within the array
    newMember.forEach((item) => {
    
    const selectPage = document.querySelector("#page-container")
    const createDivs = document.createElement('div')
    createDivs.textContent = item.firstName
    selectPage.appendChild(createDivs)
    createDivs.classList.add("divs")
    
})


console.log(newMember)


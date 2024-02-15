//create array
let newMember = []

// Read existing notes from local storage,
const loadMembers = () => {
    const membersJSON = localStorage.getItem("newMember")
    
    try {
        return membersJSON ? JSON.parse(membersJSON) : []
    } catch (e) {
        return []
    }   
}

// save members to localStorage
const saveMember = () => {
    localStorage.setItem("newMember", JSON.stringify(newMember))
}

//expose members from module
newMember = loadMembers()

//render input elements
const inputDom = function () {
    const selectInputEl = document.querySelector("#input-element")

    //create add new member button
    const createAddButton = document.createElement('button')
        createAddButton.textContent = "add new member"
        createAddButton.classList.add("addButton")
        selectInputEl.appendChild(createAddButton)

}

//render function to be called when the array is updated or browser refreshes
const render = function () {

    const selectArrayEl = document.querySelector("#array-element")

    selectArrayEl.innerHTML = ''
    
    //create a seperate div on the page for each object within the array
    newMember.forEach((member) => {
        
        const createDivs = document.createElement('div')
        createDivs.textContent = member.id
        createDivs.classList.add("divs")
        selectArrayEl.appendChild(createDivs)
        const id = "id" + Math.random().toString(16).slice(2)
        createDivs.setAttribute('id', id)
        
    })

    //Create a button for each newMember div
    const selectDivs = document.querySelectorAll(".divs")

    selectDivs.forEach((selectDivs) => {
       
        const createButton = document.createElement('button')
        createButton.textContent = "Delete"
        createButton.classList.add("deleteButtons")
        selectDivs.appendChild(createButton)

    })

    console.log("the page rendered")
}

//add new object of data to array
const addNew = () => {
    const id = "id" + Math.random().toString(16).slice(2)
    
    newMember.push(
        {
            id: id,
            firstName: "",
            lastName: "",
            age: 0,
            location: ""
        }
    )
   saveMember()
}

//remove member from the array

const removeMember = (id) => {
    
    const memberIndex = newMember.findIndex((member) => member.id === id)
    
    if (memberIndex > -1) {
        newMember.splice(memberIndex, 1)
    }
    saveMember()
}

//Create list in the console with itemised data from the Array
const names = newMember.map((item) => item.firstName)
console.log(names)

//Display all information from newMember array in the console
console.log(newMember)

export { inputDom, render, addNew, removeMember }
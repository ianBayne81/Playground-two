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
    createAddButton.classList.add("inputElButton")
    const add = "add-button"
    createAddButton.setAttribute('id', add)
    createAddButton.setAttribute('type', 'button')
    selectInputEl.appendChild(createAddButton)

    //create input field for the members first name
    const createInputOne = document.createElement('input')
    createInputOne.placeholder = "enter first name"
    createInputOne.classList.add("inputElField")
    const inputOne = "input-one"
    createInputOne.setAttribute('id', inputOne)
    createInputOne.setAttribute('type', 'input')
    selectInputEl.appendChild(createInputOne)


    //create delete all members button
    const createDeleteAllButton = document.createElement('button')
    createDeleteAllButton.textContent = "Delete all"
    createDeleteAllButton.classList.add("inputElButton")
    const deleteAll = "delete-all"
    createDeleteAllButton.setAttribute('id', deleteAll)
    createDeleteAllButton.setAttribute('type', 'button')
    selectInputEl.appendChild(createDeleteAllButton)

}

//add new object of data to array
const addNew = () => {
    const id = "id" + Math.random().toString(16).slice(2)
    
    newMember.unshift(
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

//remove individual member from the array

const removeMember = (id) => {
    
    const memberIndex = newMember.findIndex((member) => member.id === id)
    
    if (memberIndex > -1) {
        newMember.splice(memberIndex, 1)
    }
    saveMember()
}

//delete all members from the array 

const deleteAll = () => {
    newMember.splice(0, newMember.length)
    saveMember()
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
        let id = member.id
        createDivs.setAttribute('id', id)
        
    })

    // //Create a delete button for each newMember div
    const selectDivs = document.querySelectorAll(".divs")

    selectDivs.forEach((selectDivs) => {
       
        const createButton = document.createElement('button')
        createButton.setAttribute('type', 'button')
        createButton.textContent = "Delete"
        createButton.classList.add("deleteButtons")
        selectDivs.appendChild(createButton)

        //create eventlistener for each delete button
        const buttons = document.querySelectorAll(".deleteButtons")

        buttons.forEach(function(button) {
            button.addEventListener("click", function (e) {
            e.preventDefault()
            let getId = e.target.parentNode.id
            removeMember(getId)
            render()
            })
        })

    })

}

//Create list in the console with itemised data from the Array
const names = newMember.map((item) => item.firstName)
console.log(names)

//Display all information from newMember array in the console
console.log(newMember)

export { inputDom, render, addNew, deleteAll }
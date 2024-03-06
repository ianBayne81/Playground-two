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

//function to expose array from module / used on other page
const getMembers = () => newMember


//add new object of data to array
const addNew = (nameOne, nameTwo, age, location) => {
    const id = "id" + Math.random().toString(16).slice(2)
    
    newMember.unshift(
        {
            id: id,
            firstName: nameOne,
            lastName: nameTwo,
            age: age,
            location: location
        }
    )
   saveMember()

}

// //remove individual member from the array

// const removeMember = (id) => {
    
//     const memberIndex = newMember.findIndex((member) => member.id === id)
    
//     if (memberIndex > -1) {
//         newMember.splice(memberIndex, 1)
//     }
//     saveMember()

// }

//load data from local storage
newMember = loadMembers()

//render function to be called when the array is updated or browser refreshes
const render = function () {

    const selectArrayEl = document.querySelector("#array-element")

    selectArrayEl.innerHTML = ''
    
    //create a seperate div on the page for each object within the array
    newMember.forEach((member) => {
        
        const createDivs = document.createElement('div')
        createDivs.textContent = `${member.firstName} ${member.lastName}`
        createDivs.classList.add("divs")
        selectArrayEl.appendChild(createDivs)
        let id = member.id
        createDivs.setAttribute('id', id)
        
    })

    // //Create a view button for each newMember div
    const selectDivs = document.querySelectorAll(".divs")

    selectDivs.forEach((selectDivs) => {
       
        const createButton = document.createElement('button')
        createButton.setAttribute('type', 'button')
        createButton.textContent = "View"
        createButton.classList.add("viewButtons")
        selectDivs.appendChild(createButton)

        //create eventlistener for each view button
        const buttons = document.querySelectorAll(".viewButtons")

        buttons.forEach(function(button) {
            button.addEventListener("click", function (e) {
            e.preventDefault()
            let getId = e.target.parentNode.id 
            localStorage.setItem("getId", getId)
            location.assign('/site.html')
            })
        })

    })

}


//Create list in the console with itemised data from the Array
const names = newMember.map((item) => item.firstName)
console.log(names)

//Display all information from newMember array in the console
console.log(newMember)

export { getMembers, render, addNew, saveMember }
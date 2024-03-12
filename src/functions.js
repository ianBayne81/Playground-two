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

//function to expose array from module / used on site page
const getMembers = () => newMember


//add new object of data to array
const addNew = (nameOne, nameTwo, mobileNumber, email, dob, address) => {
    const id = "id" + Math.random().toString(16).slice(2)
    
    newMember.unshift({
            id: id,
            firstName: nameOne,
            lastName: nameTwo,
            mobileNumber: mobileNumber,
            email: email,
            dob: dob,
            address: address
    })
   saveMember()

}

//load data from local storage
newMember = loadMembers()

//render function to be called when the array is updated or browser refreshes
const render = function () {

    //clear array element so the new data can be displayed
    const selectArrayEl = document.querySelector("#array-element")
    selectArrayEl.innerHTML = ''

    ///Sort the array alphabetically by last name and then first name
    newMember.sort(function (a, b,) {
        if (a.lastName+a.firstName > b.lastName+b.firstName) {
            return 1
        }

        if (a.lastName+a.firstName < b.lastName+b.firstName) {
            return -1
        }

        if (a.lastName+a.firstName === b.lastName+b.firstName) {
            return 0
        }
        
    })
    
    //create a seperate div on the page for each member within the array
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
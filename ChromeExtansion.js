let myLeads = []

const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value)
    inputEL.value = ""
    return renderLeads()
})

function renderLeads(){

    let listItem = ""

    for (let i = 0; i < myLeads.length; i ++ ){
        listItem += 
        `<li>
            <a target='_blank' href = '${myLeads[i]}'> 
            ${myLeads[i]}</a>
        </li>`
        console.log(listItem)
    }

    ulEl.innerHTML = listItem
}

/*
const recepit = "James"
const sender = "Valio"

const email = `Hey  ${recepit} ! nqkvi typotii. Cheers ${sender}`

console.log(email)
*/
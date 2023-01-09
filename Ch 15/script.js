


window.addEventListener("load", () => {
    if( !localStorage.getItem("tapas") ) localStorage.setItem("tapas", JSON.stringify([]))
    else {
        let parent = document.querySelector(".items")
        let loading = parent.querySelector(".loading")
        if( !loading.classList.contains("hide") ) loading.classList.add("hide")
        JSON.parse(localStorage.getItem("tapas")).forEach(item => createItem(item.checked, item.text))
    }
})


document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    let value = e.target.children[0].value
    e.target.children[0].value = ""
    createItem( false, value, "new" )
    e.target.children[0].focus()
})



function createItem(checked, data, status) {
    let found = false
    JSON.parse(localStorage.getItem("tapas")).forEach(item => {
        if( item.text === data && status === "new" ) found = true
    })
    if( found || data === "" ) return

    let newItem = document.createElement("label")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = checked
    let text = document.createElement("span")
    text.innerText = data
    newItem.append( checkbox, text )

    let parent = document.querySelector(".items")
    let loading = parent.querySelector(".loading")
    if( !loading.classList.contains("hide") ) loading.classList.add("hide")

    if( status === "new" ) {
        let allTapas = JSON.parse(localStorage.getItem("tapas"))
        allTapas.push( {checked: false, text: data} )
        localStorage.setItem("tapas", JSON.stringify(allTapas))
    }

    parent.append( newItem )
}



document.querySelector(".items").addEventListener("click", e => {
    if( e.target.tagName == "SPAN" ) {
        let allTapas = JSON.parse(localStorage.getItem("tapas"))
        let newTapas = allTapas.map(item => {
            if( item.text === e.target.innerText ) {
                item.checked = !item.checked
            }
            return item
        })
        localStorage.setItem("tapas", JSON.stringify(newTapas))
    }
})














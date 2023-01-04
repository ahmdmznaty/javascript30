



let word = ""

window.addEventListener("keyup", e => {
    createKey( e.key )
    word += e.key
    if( word.includes("webket") ) {
        createKey("Welcome In Our Secret World 👽", 1500)
        word = ""
    }
})



function createKey( key, time ) {
    let card = document.createElement("div")
    card.innerText = key
    card.classList.add("card")
    document.querySelector(".active").append( card )
    if( key === "Welcome In Our Secret World 👽" ) {
        card.style.width = "500px"
        card.style.zIndex = "10"
    }
    setTimeout(() => {card.style.transform = "translate(-50%, -50%) scale(1)"}, 30)
    setTimeout(() => card.remove(), time || 600)
}



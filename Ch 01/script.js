


window.addEventListener("keypress", (event) => {
    let toneLetter = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    let clickedKey = event.code.replace("Key", "").toLowerCase()
    if( toneLetter.includes( clickedKey ) ) {
        let buttons = Array.from( document.querySelectorAll(".buttons button") )
        let activeButton = buttons.filter(button => {
            if( button.children[0].innerText.toLowerCase() === clickedKey ) return button
        })[0]
        activeButton.classList.add("active")
        setTimeout(() => { activeButton.classList.remove("active") }, 50)
        let toneElement = document.createElement("audio")
        toneElement.src = `sounds/${activeButton.children[1].innerText}.wav`
        toneElement.play()
    }
})











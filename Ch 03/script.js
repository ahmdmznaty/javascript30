




function changeSpacing() {
    let value = document.querySelector(".spacing input").value
    let root = document.querySelector(":root")
    root.style.setProperty("--spacing", `${value}px`)
}


function changeBlur() {
    let value = document.querySelector(".blur input").value
    let root = document.querySelector(":root")
    root.style.setProperty("--blur", `blur(${value}px)`)
}


function changeBg() {
    let value = document.querySelector(".bgcolor input").value
    let root = document.querySelector(":root")
    root.style.setProperty("--bgcolor", value)
}


















let settings = { size: "", color: "", random: 200, randomStyle: "up" }




document.querySelectorAll("input[type=radio][name=color]").forEach(radio => {
    radio.parentElement.style.backgroundColor = radio.value
})
document.querySelector("input[type=color]").parentElement.style.backgroundImage = "conic-gradient(#0f0, #ff0, #f00, #f0f, #00f, #0ff)"
document.querySelectorAll("input[type=radio][name=size]").forEach(radio => {
    radio.parentElement.style.width = radio.value === "big" ? "40px" : (radio.value === "small" ? "20px" : "30px")
    radio.parentElement.style.height = radio.value === "big" ? "40px" : (radio.value === "small" ? "20px" : "30px")
})

checkInput(document.querySelector("input[name=color]"))
checkInput(document.querySelector("input[name=size]"))





function checkInput(input) {
    if( input.type === "color" ) {
        document.querySelectorAll("input[name=color]").forEach(radio => {
            radio.checked = false
            radio.parentElement.id = ""
        })
        input.parentElement.id = "activeColor"
        updateValues(input.name, input.value)
    }
    else {
        document.querySelectorAll(`input[name=${input.name}]`).forEach(radio => {
            radio.parentElement.id = ""
        })
        input.parentElement.id = `active${input.name[0].toUpperCase()}${input.name.slice(1)}`
        updateValues(input.name, input.value)
    }
}

function updateValues( name, value ) {
    if( name === "color" ) {
        settings.color = value
    }
    else if( name === "size" ) {
        settings.size = value
    }
}




let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext('2d')
canvas.width  = canvas.offsetWidth
canvas.height = canvas.offsetHeight
ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width, canvas.height)
let oldCords




canvas.addEventListener("pointerdown", dothing)
function dothing( e ) {
	canvas.addEventListener("pointermove", movingActive)
	canvas.addEventListener("pointerup", (e) => {	
        ctx.closePath()
        oldCords = undefined
		canvas.removeEventListener("pointermove", movingActive)
	})
	function movingActive( e ) {
        let radius
        if( settings.size === "big" ) radius = 15
        else if( settings.size === "medium" ) radius = 8
        else if( settings.size === "small" ) radius = 4
        else if( settings.size === "pressure" ) radius = e.pressure * 20
        else if( settings.size === "random" ) {
            if( settings.random == 200 ) settings.randomStyle = "down"
            else if( settings.random == 20 ) settings.randomStyle = "up"

            if( settings.randomStyle === "up" ) radius = (settings.random++)/10
            else radius = (settings.random--)/10
            console.log( settings )
        }
        ctx.beginPath()
        if(oldCords) ctx.moveTo( oldCords[0], oldCords[1] )
        else ctx.moveTo( e.layerX + 2, e.layerY + 15 )
        ctx.lineWidth = radius
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.strokeStyle = settings.color
        ctx.lineTo( e.layerX + 2, e.layerY + 15 )
        ctx.stroke()
        oldCords = [e.layerX + 2, e.layerY + 15]
    }
}





function saveCanvas() {
    let output = canvas.toDataURL()
    let link = document.createElement("a")
    link.href = output
    link.setAttribute("download", "myImage")
    link.click()
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}











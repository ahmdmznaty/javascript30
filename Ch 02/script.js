


let pointers = document.querySelector(".pointers")
let hoursPointer = pointers.children[0]
let minutesPointer = pointers.children[1]
let secondsPointer = pointers.children[2]


let date = new Date()
let secondsRotate = (6 * date.getSeconds())
let minutesRotate = (6 * date.getMinutes() + secondsRotate / 60)
let hoursRotate =   (30 * date.getHours() + (minutesRotate / 12) )
hoursPointer.style.transform = `rotate(${ hoursRotate }deg)`
minutesPointer.style.transform = `rotate(${ minutesRotate }deg)`
secondsPointer.style.transform = `rotate(${ secondsRotate }deg)`


setInterval(analogClock, 1000)
function analogClock() {
    secondsRotate += 6
    secondsPointer.style.transform = "rotate(" + secondsRotate + "deg)"
    minutesRotate += 6 / 60
    minutesPointer.style.transform = "rotate(" + minutesRotate + "deg)"
    hoursRotate += 6 / 60 / 12
    hoursPointer.style.transform = "rotate(" + hoursRotate + "deg)"
}






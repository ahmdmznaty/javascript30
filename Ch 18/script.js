

let lis = [...document.querySelectorAll("li")]
lis.forEach(li => { li.innerHTML += "\n" + li.getAttribute("data-time") })


document.querySelector(".collection span").innerHTML = lis.map(li => li.getAttribute("data-time")).reduce((old, current) => {
    let currentArray = current.split(":")
    let currentHours = currentArray.length == 3 ? currentArray[0] : ""
    let currentMinutes = currentArray.length == 3 ? currentArray[1] : (currentArray.length == 2 ? currentArray[0] : "")
    let currentSeconds = currentArray.length == 3 ? currentArray[2] : (currentArray.length == 2 ? currentArray[1] : currentArray[0])

    let oldArray = old.split(":")
    let oldHours = oldArray.length == 3 ? oldArray[0] : ""
    let oldMinutes = oldArray.length == 3 ? oldArray[1] : (oldArray.length == 2 ? oldArray[0] : "")
    let oldSeconds = oldArray.length == 3 ? oldArray[2] : (oldArray.length == 2 ? oldArray[1] : oldArray[0])

    let newHours = +oldHours + +currentHours
    let newMinutes = +oldMinutes + +currentMinutes
    let newSeconds = +oldSeconds + +currentSeconds

    if( newSeconds > 59 ) {
        newMinutes += Math.floor(+newSeconds / 60)
        newSeconds = +newSeconds % 60
    }
    if( newMinutes > 59 ) {
        newHours += Math.floor(+newMinutes / 60)
        newMinutes = +newMinutes % 60
    }

    let total = (newHours ? newHours + ":" : "") + (newMinutes ? newMinutes + ":" : "00:") + newSeconds
    return total
}, "0")






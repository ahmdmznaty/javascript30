

function getVideo( input ) {
    let fr = new FileReader()
    fr.onload = () => player( fr.result )
    fr.readAsDataURL( input.files[0] )
}


function player( url ) {
    let parent = document.querySelector(".player")
    parent.innerHTML = ""
    let video = document.createElement("video")
    let controls = addControls()
    video.id = "video"
    video.src = url
    video.addEventListener("click", playing)
    video.addEventListener("loadedmetadata", () => {
        parent.append(video, controls)
        parent.style.outline = "5px solid #4444"
        parent.style.width = video.offsetWidth + "px"
        parent.style.height = video.offsetHeight + "px"
        window.addEventListener("keyup", e => {
            if( ["Enter", "Space", "KeyK"].includes(e.code) ) playing()
            if( e.code === "ArrowRight" ) forwarding()
            if( e.code === "ArrowLeft" ) backwarding()
            if( e.code === "ArrowUp" ) {
                let volumeInput = document.querySelector(".volume input")
                volumeInput.value = +volumeInput.value + +volumeInput.step
                voluming()
            }
            if( e.code === "ArrowDown" ) {
                let volumeInput = document.querySelector(".volume input")
                volumeInput.value = +volumeInput.value - +volumeInput.step
                voluming()
            }
            if( e.code === "KeyM" ) muting()
            if( e.code === "Period" && e.shiftKey ) {
                let speedInput = document.querySelector(".speed input")
                speedInput.value = +speedInput.value + +speedInput.step
                speeding()
            }
            if( e.code === "Comma" && e.shiftKey ) {
                let speedInput = document.querySelector(".speed input")
                speedInput.value = +speedInput.value - +speedInput.step
                speeding()
            }
            if( e.code === "KeyF" ) fullscreening()
            if( e.code === "Escape" && document.fullscreenElement ) document.exitFullscreen()
        })
        setInterval(setting, 10)
    }, true)
}

function addControls() {
    let controls = document.createElement("div")
    controls.classList.add("controls")
    controls.append( Progress(), PlayBu(), Volume(), Timing(), Speed(), Moving(), Fullscreen() )
    return controls
}

function Progress() {
    let progress = document.createElement("div")
    progress.classList.add("progress")

    let input = document.createElement("input")
    input.type = "range"
    input.value = 0
    input.step = "0.001"
    input.addEventListener("input", progressing)

    let value = document.createElement("div")
    value.classList.add("value")

    progress.append( input, value )
    return progress
}

function PlayBu() {
    let play = document.createElement("ion-icon")
    play.classList.add("play")
    play.name = "play"
    play.addEventListener("click", playing)
    return play
}

function Volume() {
    let volume = document.createElement("div")
    volume.classList.add("volume")

    let icon = document.createElement("ion-icon")
    icon.name = "volume-high"
    icon.classList.add("volumeIcon")
    icon.addEventListener("click", muting)

    let input = document.createElement("input")
    input.type = "range"
    input.value = 100
    input.step = 10
    input.addEventListener("input", voluming)

    volume.append( icon, input )
    return volume
}

function Timing() {
    let timing = document.createElement("div")
    timing.classList.add("timing")
    timing.innerText = "00:00 / 00:00"
    return timing
}

function Speed() {
    let speed = document.createElement("div")
    speed.classList.add("speed")

    let title = document.createElement("span")
    title.innerText = "1×"

    let range = document.createElement("input")
    range.type = "range"
    range.value = 20
    range.min = 5
    range.step = 5
    range.addEventListener("input", speeding)

    speed.append( title, range )
    return speed
}

function Moving() {
    let moving = document.createElement("div")
    moving.classList.add("moving")

    let forward = document.createElement("ion-icon")
    forward.name = "play-forward"
    forward.addEventListener("click", forwarding)
    
    let backward = document.createElement("ion-icon")
    backward.name = "play-back"
    backward.addEventListener("click", backwarding)

    moving.append( backward, forward )
    return moving
}

function Fullscreen() {
    let fullscreen = document.createElement("ion-icon")
    fullscreen.classList.add("fullscreen")
    fullscreen.name = "expand"
    fullscreen.addEventListener("click", fullscreening)
    return fullscreen
}



function progressing() {
    let video = document.querySelector("#video")
    let progress = document.querySelector(".progress")
    video.currentTime = progress.children[0].value * video.duration / 100
}
function playing() {
    let video = document.querySelector("#video")
    let playBu = document.querySelector(".play")
    video[ video.paused ? "play" : "pause" ]()
    playBu.name = video.paused ? "play" : "pause"

    let popup = document.createElement("div")
    popup.classList.add("popup")
    let popupIcon = document.createElement("ion-icon")
    popupIcon.name = video.paused ? "play" : "pause"
    popup.append( popupIcon )
    document.querySelector(".player").append(popup)
    setTimeout(() => {
        popup.style.transform = "scale(1)"
    }, 50)
    setTimeout(() => popup.remove(), 500)
}
function forwarding() {
    let video = document.querySelector("#video")
    video.currentTime += 5

    let popup = document.createElement("div")
    popup.classList.add("popup")
    popup.innerText = "+5"
    document.querySelector(".player").append(popup)
    popup.style.right = "60px"
    popup.style.left = "auto"
    setTimeout(() => {
        popup.style.transform = "scale(1)"
    }, 50)
    setTimeout(() => popup.remove(), 500)
}
function backwarding() {
    let video = document.querySelector("#video")
    video.currentTime -= 5

    let popup = document.createElement("div")
    popup.classList.add("popup")
    popup.innerText = "-5"
    document.querySelector(".player").append(popup)
    popup.style.left = "60px"
    setTimeout(() => {
        popup.style.transform = "scale(1)"
    }, 50)
    setTimeout(() => popup.remove(), 500)
}
function voluming() {
    let video = document.querySelector("#video")
    let volume = document.querySelector(".volume")
    video.volume = volume.children[1].value / 100

    let popup = document.createElement("div")
    popup.classList.add("popup")
    let popupIcon = document.createElement("ion-icon")

    if( volume.children[1].value > 0 && volume.children[1].value <= 30 ) {
        volume.children[0].name = "volume-low"
        popupIcon.name = "volume-low"
    }
    else if( volume.children[1].value > 30 && volume.children[1].value <= 70 ) {
        volume.children[0].name = "volume-medium"
        popupIcon.name = "volume-medium"
    }
    else if( volume.children[1].value > 70 ) {
        volume.children[0].name = "volume-high"
        popupIcon.name = "volume-high"
    }
    else {
        volume.children[0].name = "volume-off"
        popupIcon.name = "volume-off"
    }

    popup.append( popupIcon )
    document.querySelector(".player").append(popup)
    setTimeout(() => {
        popup.style.transform = "scale(1)"
    }, 50)
    setTimeout(() => popup.remove(), 500)
}
function muting() {
    let volumeInput = document.querySelector(".volume input")
    if( volumeInput.value == 0 ) {
        volumeInput.value = sessionStorage.getItem("volume") || 0
        sessionStorage.removeItem("volume")
    }
    else {
        sessionStorage.setItem("volume", volumeInput.value)
        volumeInput.value = 0
    }
    voluming()
}
function speeding() {
    let video = document.querySelector("#video")
    let speed = document.querySelector(".speed")
    video.playbackRate = speed.children[1].value / 20
    speed.children[0].innerText = speed.children[1].value / 20 + "×"

    let popup = document.createElement("div")
    popup.classList.add("popup")
    popup.innerText = speed.children[1].value / 20 + "×"
    popup.style.fontSize = "30px"
    document.querySelector(".player").append(popup)
    setTimeout(() => {
        popup.style.transform = "scale(1)"
    }, 50)
    setTimeout(() => popup.remove(), 500)
}
function fullscreening() {
    if( document.fullscreenElement ) document.exitFullscreen()
    else document.querySelector(".player").requestFullscreen()
}

function setting() {
    let progress = document.querySelector(".progress")
    let timing = document.querySelector(".timing")
    progress.children[0].value = (video.currentTime / video.duration * 100)
    progress.children[1].style.width = (video.currentTime / video.duration * 100) + "%"
    timing.innerText = `${timeDecorator(video.currentTime)} / ${timeDecorator(video.duration)}`
    document.querySelectorAll("input").forEach(input => input.blur())
}

function timeDecorator( text ) {
    let sec_num = parseInt(text, 10)
    let hours   = Math.floor(sec_num / 3600)
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    let seconds = sec_num - (hours * 3600) - (minutes * 60)
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    let result = ""
    if( hours == "00" ) result = minutes + ':' + seconds
    else result = hours + ':' + minutes + ':' + seconds
    return result
}
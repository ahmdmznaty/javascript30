

document.body.addEventListener("mousemove", e => {
    let vertical_step = document.body.clientWidth / 40
    let horizontal_step = document.body.clientHeight / 40

    let vertical_shadow = Math.round( e.pageX / vertical_step ) - 20
    let horizontal_shadow = Math.round( e.pageY / horizontal_step ) - 20

    if( document.body.clientWidth > 500 ) {
        document.querySelector("h1").style.textShadow = `${ vertical_shadow }px ${ horizontal_shadow }px 0 rgba(0, 0, 0, 0.4)`
    }
})


let acl = new Accelerometer({ frequency: 20 })
acl.addEventListener("reading", e => {
    let vertical_shadow = Math.round( acl.x ) * 2
    let horizontal_shadow = Math.round( acl.y ) * 2

    if( document.body.clientWidth < 500 ) {
        document.querySelector("h1").style.textShadow = `${ vertical_shadow }px ${ horizontal_shadow }px 0 rgba(0, 0, 0, 0.4)`
    }
})
acl.start()






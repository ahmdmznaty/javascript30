


document.querySelectorAll(".panel").forEach(panel => {
    panel.addEventListener("click", e => {
        e.target.classList.toggle("active")
    })
})





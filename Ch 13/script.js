



let newObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList[ entry.isIntersecting ? "add" : "remove" ]("active")
    })
}, {threshold: 0.8})


document.querySelectorAll(".parent img").forEach(img => {
    newObs.observe( img )
})






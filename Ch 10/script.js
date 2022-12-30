


let last = null

let inputs = [...document.querySelectorAll("input[type=checkbox]")]

inputs.forEach(input => {
    input.addEventListener("click", e => {
        if( last && e.shiftKey ) {
            let end = e.target
            inputs.forEach(newInput => {
                if(
                    (inputs.indexOf(newInput) > inputs.indexOf(last) && inputs.indexOf(newInput) < inputs.indexOf(end)) ||
                    (inputs.indexOf(newInput) < inputs.indexOf(last) && inputs.indexOf(newInput) > inputs.indexOf(end))
                ) {
                    newInput.checked = true
                }
            })
        }
        else {
            if(e.target.checked) last = e.target
            else last = null
        }
    })
})














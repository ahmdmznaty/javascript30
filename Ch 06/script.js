

let data = []
let dataURL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
fetch(dataURL).then(response => response.json()).then(result => {
    data.push( ...result )
})



document.querySelector("input").addEventListener("keyup", e => {
    let search = e.target.value
    let results = []
    if( search.length > 0 ) {
        data.forEach(city => {
            return city.city.toLowerCase().includes( search.toLowerCase() ) ? results.push(city) : null
        })
        let liElements = results.map(result => createLi(`${result.city}, ${result.state}`, result.population, search))
        document.querySelector("ul").innerHTML = ""
        document.querySelector("ul").append( ...liElements )
    }
    else {
        document.querySelector("ul").innerHTML = ""
        document.querySelector("ul").append( createLi("Filter For A City"), createLi("Or A State") )
    }
})

function createLi( text, number, mark ) {
    let li = document.createElement("li")

    let regex
    if( mark ) {
        regex = new RegExp(mark, "ig")
        let markedArray = [...text.matchAll(regex, `<mark>${mark}</mark>`)]
        markedArray.forEach(marked => {
            text = text.replaceAll(marked, `<mark>${marked}</mark>`)
        })
    }

    let title = document.createElement("span")
    title.innerHTML = text
    title.classList.add("title")

    let population = document.createElement("span")
    population.innerHTML = number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || ""
    population.classList.add("population")

    li.append( title )
    li.append( population )

    return li
}








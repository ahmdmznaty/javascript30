
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

let sorted = bands.sort((a, b) => {
    let cuttedA = a.replace("A ", "").replace("An ", "").replace("The ", "")
    let cuttedB = b.replace("A ", "").replace("An ", "").replace("The ", "")
    return cuttedA > cuttedB ? 1 : -1
}).map(item => {
    let span = document.createElement("span")
    span.innerHTML = item
    return span
})

document.querySelector(".items").append(...sorted)






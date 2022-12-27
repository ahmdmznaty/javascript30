
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
]
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
]

console.log("%cAll Data Used In This Challenge:", "font-size: 25px; padding: 10px; font-weight: bold; border: 2px solid red; border-radius: 4px; color: white; background: blue;")
console.log("%cAn Array Of People Data:", "font-size: 18px; text-decoration: underline; color: yellow;")
console.table( people )
console.log("%cAn Array Of Comments:", "font-size: 18px; text-decoration: underline; color: yellow;")
console.table( comments )

// ─── First One ─────────────────────────────────────────────────
console.log(
    "%cIs at least one person 19 or older?",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let checkOne = people.some(person => (new Date().getFullYear() - person.year >= 19))
console.log( `%c${checkOne}`, "font-size: 55px" )

// ─── Second One ─────────────────────────────────────────────────
console.log(
    "%cIs everyone 19 or older?",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let checkAll = people.every(person => (new Date().getFullYear() - person.year >= 19))
console.log( `%c${checkAll}`, "font-size: 55px" )

// ─── Third One ─────────────────────────────────────────────────
console.log(
    "%cFind the comment with the ID of 823423:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let highlightedComment = comments.find(comment => (comment.id == 823423))
console.table( highlightedComment )

// ─── Fourth One ─────────────────────────────────────────────────
console.log(
    "%cDelete the comment with the ID of 823423:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let commentIndex = comments.findIndex(comment => (comment.id == 823423))
comments.splice( commentIndex, 1 )
console.log(
    `%cThe comment 823423 is deleted, and the new comments array looks like that now:`,
    "font-size: 14px; color: pink;"
)
console.table( comments )



















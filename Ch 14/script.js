// ─── Start With Strings, Numbers, And Booleans ─────────────────────────────────
/**
 * String, Numbers, and Booleans can be copied by just assigning them to other variables
 */
let name1 = "ahmed"
let name2 = name1
console.log( name1, name2 )  // generates 'ahmed' and 'ahmed'
name1 = "mohamed"
console.log( name1, name2 )  // generates 'mohamed' and 'ahmed'
/* this is because every variable has a seperate box of data */

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
// You might think we can just do something like this:
let copy1 = players
console.log( copy1 )   // ['Wes', 'Sarah', 'Ryan', 'Poppy']

// however what happens when we update that array?
players.pop()

// now here is the problem!
console.log( copy1 )     // ['Wes', 'Sarah', 'Ryan']

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
let copy2 = players.slice()
console.log( copy2 )

// or create a new array and concat the old one in
let copy3 = [].concat(players)
console.log( copy3 )

// or use the new ES6 Spread
let copy4 = [...players]
console.log( copy4 )

// now when we update it, the original one isn't changed
players.push("Poppy")
console.log( players )
console.log( copy2 )
console.log( copy3 )
console.log( copy4 )

// The same thing goes for objects, let's say we have a person object
const person = {
    name: 'Wes Bos',
    age: 80
}

// and think we make a copy:
let objCopy1 = person
console.log( objCopy1 )
person.age = 60
console.log( objCopy1 )

// how do we take a copy instead?
let objCopy2 = {...person}
console.log( objCopy2 )

let objCopy3 = Object.assign( {}, person )
console.log( objCopy3 )

person.age = 80

console.log( objCopy2 )
console.log( objCopy3 )


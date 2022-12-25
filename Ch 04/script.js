
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log("%cAll Data Used In This Challenge:", "font-size: 25px; padding: 10px; font-weight: bold; border: 2px solid red; border-radius: 4px; color: white; background: blue;")
console.log("%cAn Array Of Invertors Data:", "font-size: 18px; text-decoration: underline; color: yellow;")
console.table( inventors )
console.log("%cAn Array Of People Data:", "font-size: 18px; text-decoration: underline; color: yellow;")
console.table( people )
console.log("%cAn Array Of Transportation Data:", "font-size: 18px; text-decoration: underline; color: yellow;")
console.table( data )

// ─── First One ─────────────────────────────────────────────────
console.log(
    "%cFilter the list of inventors for those who were born in the 1500's:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let filtered = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) ? true : false )
console.table( filtered )

// ─── Second One ─────────────────────────────────────────────────
console.log(
    "%cGive us an array of the inventors first and last names:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let names = inventors.map(inventor => inventor.first + " " + inventor.last)
console.table( names )

// ─── Third One ─────────────────────────────────────────────────
console.log(
    "%cSort the inventors by birthdate, oldest to youngest:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let sortedByBirth = inventors.sort((a, b) => a.year - b.year)
console.table( sortedByBirth )

// ─── Fourth One ─────────────────────────────────────────────────
console.log(
    "%cHow many years did all the inventors live all together?:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let lived = inventors.reduce((a, b) => {
    return a + (b.passed - b.year)
}, 0)
console.log( `%c${lived}`, "font-size: 55px" )

// ─── Fifth One ─────────────────────────────────────────────────
console.log(
    "%cSort the inventors by years lived:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let sortedByAge = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year)
})
console.table( sortedByAge )

// ─── Sixth One ─────────────────────────────────────────────────
// create a list of Boulevards in Paris that contain 'de' anywhere in the name
/**
 * A really strange one:
     * Just open this link: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
     * Inspect the page Elements in "Dev Tools"
     * Get the parent of the links that appears in front of you
     * Take its class or id and go to console
     * Then apply some code to get all links "<a>" inside of it
     * Then map over those links and filter them based on the text inside of them
         * If the text contains "de" then it will be remains
         * But if not it will be filtered out
     * All of that in the Developer Tools :(
 */
/*
* The code to apply in the DevTools there:
* Array.from(document.querySelectorAll(".mw-category a")).map(a => a.textContent).filter(text => text.includes("de"))
*/

// ─── Seventh One ─────────────────────────────────────────────────
console.log(
    "%cSort the people alphabetically by last name",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let sorderByLast = people.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
console.table( sorderByLast )


// ─── Eighth One ─────────────────────────────────────────────────
console.log(
    "%cSum up the instances of each of data above:",
    "font-size: 20px; background: black; padding: 5px; border: 1px solid blue; color: yellow;"
)
let countInstance = data.reduce(
    (counting, text) => {
        counting[ text ] += 1
        return counting
    },
    {car: 0, truck: 0, bike: 0, walk: 0, van: 0}
)
console.log( countInstance )

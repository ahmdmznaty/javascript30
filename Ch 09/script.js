

// ─── Regular Logging ─────────────────────────────────────────────────────────
console.log("This is a normal message using console log")

// ─── Interpolated Logging ────────────────────────────────────────────────────
console.log("Adding strange text { %s } here", "•&ª")
let x = "template"
console.log(`The above one looks like the { ${x} } string in javascript`)

// ─── Style Your Console ──────────────────────────────────────────────────────
console.log("%cJust add \%c before some text to style it like css", "color: red; font-size: 20px;")
console.log(
    "%cYou can have different styles too,%c %clike this message",
    "font-size: 18px; color: violet; text-decoration: underline",
    "",
    "font-size: 10px; color: yellow; text-decoration: overline"
)

// ─── Warning ─────────────────────────────────────────────────────────────────
console.warn("Not a normal message, it's a warning about something")

// ─── Error ───────────────────────────────────────────────────────────────────
console.error("Not a normal one too, it's an error")

// Info
console.info("Put information like messages in the info method :)")

// ─── Testing ─────────────────────────────────────────────────────────────────
console.assert(1 < 1, "This error appeared because the condition passed to the assert is false")

// ─── Clear The Console ───────────────────────────────────────────────────────
// console.clear()

// ─── Viewing Dom Elements ────────────────────────────────────────────────────
// or any other objects appear in any way but the regular way
console.log(document.body)
console.dir(document.body)

// ─── Group Output ────────────────────────────────────────────────────────────
console.groupCollapsed("Collapsed Group:")
    console.log("Welcome 1")
    console.log("Welcome 2")
console.groupEnd("Collapsed Group:")

console.group("Uncollapsed Group:")
    console.log("Welcome 1")
    console.log("Welcome 2")
console.groupEnd("Uncollapsed Group:")

// ─── Count Execusion ─────────────────────────────────────────────────────────
console.count("A")
console.count("B")
console.count("A")
console.count("B")
console.count("A")
console.count("A")
console.count("B")
console.count("A")

// ─── Array To Table ──────────────────────────────────────────────────────────
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
console.table(dogs)

// ─── Calculate The Time Of Something ─────────────────────────────────────────
console.time("Getting data from the server")
fetch("https://opentdb.com/api.php?amount=10")
.then(res => res.json())
.then(data => {
    console.timeEnd("Getting data from the server")
})













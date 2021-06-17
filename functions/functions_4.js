// function scope
let subject = "aulas"
 
function createThink(subject) {
    subject = "Dougras"
    return subject
}

console.log (createThink(subject))
console.log (subject)
console.log (createThink())
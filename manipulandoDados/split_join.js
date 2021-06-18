/*Manipulando Strings e Arrays
Separe um texto que contem espaços, em um novo array onde
cada texto é uma posição do array. Depois disso, transforme
o array em um texto e onde eram espaços coloque _ */
let phrase = "O rato roeu a roupa do Rei de Roma!"
let myArray = phrase.split(" ") //O split receberá como argumento o que eu quero separar
//nessa frase, e eu quero separar os espaços. O Split devolverá em Array!!Cuidado com o limite
//O split vai pegar o que você quer e vai tirar, separar como array e devolver array.
//Se fosse: let myArray = phrase.split("o"), devolveria: O Rat, r, eu, a r, upa d, rei de r, ma!
//Cuidado que ele diferencia "Maiúsculo" de "Minúsculo"
console.log (myArray)
let phraseWithUnderscore = myArray.join("_")
//.join("") - método - aplicado em um array ele vai juntar, com o argumento que vc passar, automaticamente,
//o array, com o tipo de separador que você escolher. E transformou o Array (split) em string novamente
console.log (phraseWithUnderscore)
console.log (phraseWithUnderscore.toLowerCase())
console.log (phraseWithUnderscore.toUpperCase())



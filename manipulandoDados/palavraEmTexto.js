//Saber se tem palavras em texto

let phrase = "Quando a luz dos olhos meus, E a luz dos olhos teus, Resolvem se encontrar"

//console.log(phrase.includes("argumento")) o argumento é o que você quer verificar ou não
//vale ressaltar que ele é Sensitive case, ele diferencia entre maiúsculo e minúsculo
//logo, se eu escrever Olho é diferente de olho
console.log(phrase.includes("olhos"))
var str = "Quando a luz dos olhos meus, E a luz dos olhos teus, Resolvem se encontrar"
var res = str.match(/olhos/g);
console.log(res.length);
//conta a quantodade de palavras específicas

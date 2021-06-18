//Transforei número quebrados com 2 casas decimais e trocarei ponto por vírgula.
let number = 2612.1919158742354785411235
let arredondar = Math.round(number)
console.log(arredondar.toFixed(2).replace(".",","))
//toFixed(numeroDeCasas) é uma função atrelada ao objeto number
//Quando uma função é atrelada a um objeto, chamamos, também, de método
//o .replace tem na argumentação "<oqTrocar>,<peloOqTrocar>"
//o Retorno é uma string e por isso, consigo atrelar mais funcionalidades
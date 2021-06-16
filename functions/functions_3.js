// function expression
// function anonymous

//(parâmetros)/(parameters)
/*const soma = function (number1,number2){
    let total = (number1 + number2);
    return total

};

let number1 = 10
let number2 = 16 

console.log (`O numero 1 é ${number1}`);
console.log (`O número 2 é ${number2}`);
console.log (`A soma é ${soma(number1, number2)}`)*/

//toda função deve ter a palavra chave "return" para não aparecer undefined
//em alguns resultados 

// a função é tipp um liquidificador, o exemplo abaixo explicará melhor:
function fazerSuco (fruta1, fruta2) {
    return "suco de: " + (fruta1 + fruta2)
};

const bebida = fazerSuco("banana", "maça");

console.log (bebida)


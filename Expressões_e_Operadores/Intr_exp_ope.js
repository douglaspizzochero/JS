// Expressões e Operadores
/*
- Expressions - Qualquer linha de código que resolve alguma coisa no JS ex: "let number;"
Toda expressão no JS pode ou não terminar com JS, mas em outras linguagens é obrigatória
Ex de problema que pode dar a falta de ";" 
let number = 1
(function () {
    console.log("alo")
}()
- Operators
    Binary
    Unary
    Ternary
*/
//Operators
//  Binary são dois valores que ele precisa para que o operador esteja entre eles.
let number = 1;

console.log (number + 1);
// Unary é o que só tem um elemento e eu coloco um operador na frente dele pra incrementar ou decrementar ele 

//console.log (++number);
console.log (--number);

//Ternary ocorre em único caso: 
console.log(true ? "alo" : "nada");
// true, então ele vai fazer alguma coisa, senão "nada"
/* Operator precedence
    Precedência de operadores

*grouping    ()
*negação e incremento ! ++ --
*multiplicação e divisão * /
*adição e subtração + -
*relacional < <= > >=c
*igualdade == != === !==
* AND &&
* OR || 
* condicional ?:
* assignment (atribuição) = += -= *= %=
*/

console.log (2 + 5*10)
console.log ((2 + 5 )*10)
console.log (3 > 2 > 1) // dará falso, pois "true (3>2)" não é maior que 1
// teria que ser 3 > 2, apenas
console.log ( 3 > 2 && 2 > 1) // ele transformará:
// 3 > 2 em true e 2 > 1 em true, aí sim ele vai comparar true e true




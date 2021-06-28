//Operadores de comparação
//Irá comparar valores e tornar um Boolean
//como resposta à comparação

let one = 1
let two = 2

// == igual a

console.log (two == 1)
console.log (one == "1")

//! = diferente de 
console.log(one!=two)
console.log(one != 1)
console.log(one != "1")

//  Operadores estritamente igual a - compara os valores e o tipo de elemento ( === -> = = =)
//  Operadores estritamente dferente de (!== -> ! = =)

//Operadores de comparação maior e menor (igual)
let um = 1
let dois = 2

// > Maior que

console.log (um>dois)

// > = Maior igual a

console.log(um >=1)
console.log(dois >=1)

//< Menor que
console.log (um<dois)

// < = Menor igual a 
console.log (um<=dois)
console.log(um<=1)
console.log(um<=0)

//Operadores de atribuição (Assignment)
let x

// assignment
x=1
console.log(x)

//addition assignment
// x = x + 2
x += 2
console.log(x)

//subtraction assignment
//x = x - 1 
x-=1
console.log(x)

//multiplication assignment
//x = x*2
x *=2
console.log(x)

//division assignment
//x = x/2

x /= 2
console.log(x)

//remainder, exponetiation 

x%=2

console.log(x)
x **= 2


//OPERADORES LÓGICOS OU LOGICAL OPERATORS

//-2 Valores booleanos, quando verificados, resultará em verdadeiro ou falso.

//let pao = true
//let queijo = false

//AND &&, os dois valores têm que ser verdadeiros
//par a resposta ser verdadeira

//console.log (pao && queijo)

// OR || se um for verdadeiro a resposta já será verdadeira

//console.log (pao || queijo)

// NOT ! - Negar - ele inverte por estar sendo negado

//console.log(!pao)

//OPERADOR CONDICIONAL (TERNÁRIO)
/*Dependendo da condição nós receberemos valores diferentes
-> Condição então valor 1 se não valor 2
-> condition ? value 1 : value 2 */

//Exemplos

//Café da manhã show
let pao = true 
let queijo = false

const niceBreakfast = pao && queijo ? 'Café Show' : 'Café bolado :('

console.log (niceBreakfast)
// Nesse exemplo de niceBreakfast é interessante mudar as condicionais :)

// Maior de 18 
let age = 18
const canDrive = age >= 18 ? 'Vai, FILHÃO!' : 'Qual foi, menor?'

console.log (canDrive)

//Operador de String (String operator)

// comparison (comparação)
console.log ('a'=='a') // teremos true como resposta

//concatenation (concatenação)
//Retorna a união de duas Strings
let beta = 'beta'
console.log ('peixe ' + beta) // ou podemos fazer: console.log ('peixe ' += beta)
console.log ('Es' + 'ter S2')

//poderiamos fazer, também: 
let alpha = 'alpha'
alpha += 'bet' //ele atualizará o alpha
console.log (alpha + 345)
// e retornará alphabet 345


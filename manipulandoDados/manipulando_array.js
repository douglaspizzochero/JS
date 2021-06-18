//Manipulando Array 
//Criar Array com Construtor
let myArray = ['a', 'b', 'c']
console.log (myArray)
let my_array = new Array ('a', 'b', 'c') // cada argumento, com o construtor, virará um elemento do meu Array
//Posso, por exemplo, criar um array com posições vaziais. Chama o construtor quando, basicamente, observa-se as posições
//vazias ou cada elemento se torna argumento.
//
console.log (my_array)
let MyArray = new Array (10)
//Array com 10 posições vazias. Só mostrará o total de posições com o lenght
console.log (MyArray)

//Contar elementos de um Array

console.log (["a", {type: "array"}, function () { return "it's me"}].length)

//Acessar um elemento específico:
console.log (["a", {type: "array"}, function () { return "it's me"}][2])

//Se eu quiser rodar a função, farei:
console.log (["a", {type: "array"}, function () { return "it's me"}][2]())

//A propriedade type:
console.log (["a", {type: "array"}, function () { return "it's me"}][1].type)

// Transformar cadeia de caracteres em elemento array

let word = "manipulação"
console.log(Array.from(word))

//Exemplo com Array

let exArray = ["E","S","T","E","R"]

//Adicionar um item no fim

exArray.push("S2")

console.log(exArray)

//Adicionar um intem no começo

exArray.unshift("S2")

console.log(exArray)

//Remover do fim

exArray.pop()

console.log (exArray)

//Remover do começo

exArray.shift()

console.log (exArray)

//Pegar alguns elementos do Array
//.sclice (significa cortar), o primeiro argumento se refere a qual é a posição de início que eu quero que ele retire
//e o segundo argumento é pra falar até onde eu quero que ele vá

console.log (exArray.slice(1,4))

//Remover um ou mais itens em qualquer posição do Array
//Recebe como 1º argumento o index que você quer retirar, e o 2º argumento quantos elementos quero tirar

exArray.splice(0,2)

console.log (exArray)

//Encontrar a posição de um elemento no Array

let ex1Array = ["E", "S", "T", "E", "R"]
let index = ex1Array.indexOf ("S")
// Para remover: 
ex1Array.splice (index,1)
console.log (index)
console.log (ex1Array)
console.log ("(C2H5)2O")
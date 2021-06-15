// Array

const animals = [
    "Lion",
    "Monkey",
    "Cat",
    {
        name:'Dog',
        age: 7
    }

]

//Como acessar informações no Array?
//console.log(<nome_da_const>[posição])
//começa sempre a contar a partir do "0", logo
//Lion está na posição 0, Monkey 1, Cat 2

console.log(animals[0])
//Caso não tenha nada na posição, aparecerá "undefined"

//Para saber a quantidade de elementos fazremos:
console.log(animals.length)

//Posso acessar o objeto, dentro do array, da seguinte forma
console.log(animals[3].age)

//para imprimir no console.log o que temos ali basta escrevermos:
console.log(animals)
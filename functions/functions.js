/*functions construtoras 

Function() constructor
expressão new
criar um novo objeto
this keyword

*/

//1ª Aplicação
//function Person () {} //função escrita
//const Douglas  = new Person () //Douglas é pessoa e essa função retornará um 
//Quando usa a expressão "new" seguida da função essa função "new Person ()"
// Se torna uma função construtora e vai retornar para a constante, um objeto, logo
//irá criar um novo objeto
//console.log (Douglas) // ele mostrará um objeto do tipo person que tá sem propriedade, a não ser o que ta lidando na cadeia de protótipo

function Person(name) { //o Maiúsculo, no nome, é uma boa prática pra esse tipo de função construtora
    this.name = name // o "This", aqui dentro, sempre irá reverenciar o "Douglas" lá fora (abaixo) e o "Douglas" sempre irá reverenciar o "this" lá dentro.
                    // this.name irá receber "name", quem é o name? o parâmetro da função. Olhar o comentário abaixo
    this.walk = function() {
        return this.name + " está andando."
    }  
} 
                    // Ao criar abaixo uma "new person" eu vou passar Douglas como argumento que terá uma propriedade chamada "name" dando a ideia da função construtora
const Douglas  = new Person("Douglas")
const Ester = new Person ("Ester")
console.log (Douglas.walk())
console.log (Ester.walk())
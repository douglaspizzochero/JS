//Manipulando Strings e Números
//Transforme letras maiúculas em minúsculas. Faça o contrário também.
let word = "Eu amo a Ester <3"
console.log(word.toUpperCase())
// acima para deixar tudo maiúsculo
console.log(word.toLowerCase())
//Tenho um objeto do tipo string que chama um método, esse método tá retornando uma string
//por isso consigo chamar outros métodos, como abaixo, criando uma cadeia de métodos/propriedades de objeto
console.log(word.toUpperCase().toLowerCase())
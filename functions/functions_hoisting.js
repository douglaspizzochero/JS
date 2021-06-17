// function hoisting
sayMyName ()

function sayMyName () {
    console.log ("Douglas")
};
/*Olha que legal, eu chamei a função antes de criá-la
e o JS fez, por baixo dos panos, o seguinte procedimento 

function sayMyName () {
    console.log ("Douglas")
}
sayMyName ()

e dará como resposta "Douglas" e não undefined

Se fosse 

sayMyName ()

const sayMyName = function sayMyName () {
    console.log ("Douglas")
}
 dará erro, pois ele não consegue acessar o sayMyName antes da inicialização,
 justamente por estar usando a palavra chave "const"

 e se usar o "var"?

 sayMyName ()

    var sayMyName = function sayMyName () {
    console.log ("Douglas")
}
retornará que "sayMyName" não é uma função, pois acontece o seguinte procedimento de hoisting:

var sayMyName
sayMyName ()
sayMyName = function {
    console.log ("Douglas")
}

E ele perceberá que o "sayMyName" não é uma função e sim undefined

Se você fizer uma função em forma de expressão, ela não sofrerá hoisting/elevação:

sayMyName ()

const sayMyName = function() {
    console.log ("Douglas")
}

ou

var const sayMyName = function sayMyName() {
    console.log ("Douglas")
}

e ainda retornará que não é uma função

*/


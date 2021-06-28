/* 
    Type conversion (typecasting) vc Type coersion

    Type Conversion (capacidade nossa de causar a conversão(typecasting) - Quando eu altero, explicitamente, um dado de um tipo para outro
    x
    Type coersion(coersitivamente/forçar a troca) - É o JS, implicitamente, fazendo a troca, de maneira forçosa, podendo usar a Type conversion
*/

console.log (Number('9')+17)

/*
    FALSY
    É quando um valor é considerado false em contextos onde
    um booleano é obrigatório (condicionais e loops)

    false 
    0
    -0
    ""
    null
    undefined
    NaN
*/

//Exemplo - Ternário (3 dados)

console.log (true ? 'verdadeiro' : 'falso')

console.log (0 ? 'verdadeiro' : 'falso') // Aqui o 0 é, conforme acima dito, falso obrigatoriamente.
// note que eu não o comparei com nada como: (0 == false ? 'verdadeiro' : 'falso')

/* TRUTHY
    Quando um valor é considerado true em contextos onde um 
    booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log (true ? 'verdadeiro' : 'falso') //true
console.log (3.23 ? 'verdadeiro' : 'falso')
// Use os exemplos acima para analisar

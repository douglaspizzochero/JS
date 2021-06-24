/* 
    new

   * left-hand-side expression
   * criar um novo objeto
*/
let nome = new String ('Douglas')
nome.Surname = 'Pizzochero'
let age = new Number (24)
console.log(nome, age)
console.log(nome.Surname, age)

let date = new Date ('2019-12-26')
console.log(date)
// E para vermos as propriedades faremos:
console.log(date.__proto__)
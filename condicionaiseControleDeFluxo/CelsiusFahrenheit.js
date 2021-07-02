/*
    ### Celsius em fahrenheit
        Crie uma função que receba uma string em celsius ou fahrenheit
        e faça a transformação de uma unidade para outra

        C = (F-32) * 5/9

        F = C * 9/5 +32

*/
//transformDegree ('50F')
function transformDegree(degree) {
    const celciusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

   //fluxo de erro
if (!celciusExist && !fahrenheitExist) {
    throw new Error ('Grau não identificado')    
    }
//fluxo ideal, F->C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit-32) * 5/9
    let degreeSign = 'C'

//fluxo alternativo
    if (celciusExist) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celcius) => celcius * 9/5 + 32
        degreeSign = 'F'


    }
    
    return formula (updatedDegree) + degreeSign

}
try {
    console.log(transformDegree ('10C'))
    console.log(transformDegree ('50F'))
    transformDegree ('50Z')

} catch (error) {
    console.log (error.message)
}

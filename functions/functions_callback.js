// callback function

function sayMyName (name) {
    console.log ("antes do callback");
    name()
    console.log ("depois de executar o callback")
}
    sayMyName ( 
        () => {
        console.log ("callback que fala né?")
    }
    )
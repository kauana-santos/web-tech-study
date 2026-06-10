const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

console.log("funciona");

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    //validação
    if(inputNotaValue == ""){
        message.style.display="block";
        return false;
    }

    //logica
    if (inputNotaValue >= 6){
        resultado.innerHTML="Aprovado!"
        
    } else{
        resultado.innerHTML="Reprovado!"
    }

    inputNota.value = "";
}
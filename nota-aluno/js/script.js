const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

console.log("funciona");

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value;

    //validação
    if(inputNotaValue == ""){
        alert("Prencha o campo da nota")
        return false;
    }

    //logica
    if (inputNotaValue >= 6){
        alert("Aprovado")
    } else{
        alert("Reprovado")
    }
}
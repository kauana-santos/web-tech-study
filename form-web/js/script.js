const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

button.addEventListener("click", (event) =>{
    event.preventDefault();
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;
    
    console.log(inputValue);

    lista.innerHTML += templateHTML;
    
    nome.value = "";
})
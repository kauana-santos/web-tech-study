const btn = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");


btn.addEventListener("click", (event) => {
    popup.classList.add("d-block")
})


popup.addEventListener("click", (event) => {
    const classOfClickElement = event.target.classList[0];
    const classNameListArray =["popup-close", "popup-link", "popup-wrapper"]
    console.log(classNameListArray.includes(classOfClickElement))

    if(classNameListArray.includes(classOfClickElement) == true)
        popup.classList.remove("d-block")
})


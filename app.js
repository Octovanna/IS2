const btnAffirmation = document.querySelector("button");
const displayResult = document.querySelector("#result");

btnAffirmation.addEventListener("click", () => {    
    displayResult.innerHTML ="";
    const message = "I am awesome!!!";
    
    for(let i = 0; i < 10; i++) {
        let newLi = document.createElement("li")
        newLi.innerHTML = `${i + 1}. ${message}`;
        displayResult.appendChild(newLi);

    }
});
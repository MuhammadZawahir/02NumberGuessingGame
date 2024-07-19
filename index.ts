const userGuess = document.getElementById("userGuess") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLOutputElement;

function game():void{
    let randomNumber = Math.ceil(Math.random() * 10);
    if(parseFloat(userGuess.value) == randomNumber){
        result.textContent = "Correct Guess";
    }
    else{
        result.textContent = "Wrong Guess, the number was " + randomNumber + " ";
    }
}

submitButton.addEventListener("click", game);
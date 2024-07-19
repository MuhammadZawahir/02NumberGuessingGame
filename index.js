var userGuess = document.getElementById("userGuess");
var submitButton = document.getElementById("submit");
var result = document.getElementById("result");
function game() {
    var randomNumber = Math.ceil(Math.random() * 10);
    if (parseFloat(userGuess.value) == randomNumber) {
        result.textContent = "Correct Guess";
    }
    else {
        result.textContent = "Wrong Guess, the number was " + randomNumber + " ";
    }
}
submitButton.addEventListener("click", game);

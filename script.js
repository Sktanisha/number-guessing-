let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let playerOneNumber = null;
let player = "playerOne";
let chances = 5;

// Initial setup
input.value = "";
input.type = "password";
h1.textContent = "Player One";

// Function to highlight input error
function setInputError(isError) {
    if (isError) {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "";
    }
}

// Button click logic
button.addEventListener("click", function () {
    setInputError(false);

    if (player === "playerOne") {
        let number = parseInt(input.value, 10);
        if (number > 0 && number < 10) {
            playerOneNumber = number;
            input.value = "";
            input.type = "number";
            input.placeholder = "Guess the number (1-9)";
            h1.textContent = `Player Two (Chances left: ${chances})`;
            player = "playerTwo";
        } else {
            setInputError(true);
        }

    } else if (player === "playerTwo") { 
        let guess = parseInt(input.value, 10);
        if (guess > 0 && guess < 10) {
            if (guess === playerOneNumber) {
                h1.textContent = "🎉 Player Two Wins!";
                button.disabled = true;
                input.disabled = true;
            } else {
                chances--;
                if (chances === 0) {
                    h1.textContent = "😢 Out of Chances! Player One Wins!";
                    button.disabled = true;
                    input.disabled = true;
                } else {
                    h1.textContent = `Wrong! Try Again (Chances left: ${chances})`;
                    input.value = "";
                }
            }
        } else {
            setInputError(true);
        }
    }
});

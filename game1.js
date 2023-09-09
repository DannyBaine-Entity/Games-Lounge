// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");

// Initialize variables
let attempts = 0;
let gameOver = false;

// Function to check the user's guess
function checkGuess() {
    if (gameOver) return;

    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (userGuess === randomNumber) {
            message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
            gameOver = true;
        } else if (userGuess < randomNumber) {
            message.textContent = "Too low! Try again.";
        } else {
            message.textContent = "Too high! Try again.";
        }
    }

    // Clear the input field
    guessInput.value = "";
}

// Event listener for the "Submit Guess" button
guessSubmit.addEventListener("click", checkGuess);

// Event listener for the input field to allow pressing Enter
guessInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

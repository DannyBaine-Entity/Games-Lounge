// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeCheckbox = document.getElementById("dark-mode-checkbox");

    if (darkModeCheckbox.checked) {
        // Enable dark mode
        body.classList.add("dark-mode");
    } else {
        // Disable dark mode
        body.classList.remove("dark-mode");
    }
}

function playerChoice(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerSelection, computerSelection);

    displayResult(result, playerSelection, computerSelection);
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, playerChoice, computerChoice) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
}

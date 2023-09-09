// Hangman Game

// Set the initial number of moves
let remainingMoves = 8;

// Function to update the remaining moves in the HTML
function updateRemainingMoves() {
    const movesElement = document.getElementById('moves');
    movesElement.textContent = `You have ${remainingMoves} moves`;
}

// Array of words
const words = ['HELLO', 'WORLD', 'JAVASCRIPT', 'DEVELOPER', 'COMPUTER'];

// Randomly select a word
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array.from(selectedWord).fill('_');
let lettersGuessed = [];

// DOM elements
const hangmanWord = document.querySelector('.hangman-word');
const hangmanButtons = document.querySelector('.hangman-buttons');
const hangmanMessage = document.querySelector('.hangman-message');

// Updating the displayed word with underscores
function updateDisplay() {
    hangmanWord.textContent = guessedWord.join(' ');
}

// Checking if the guessed letter is in the word
function checkLetter(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        updateDisplay();
        if (!guessedWord.includes('_')) {
            // All letters guessed correctly
            hangmanMessage.textContent = 'Congratulations! You win!';
            disableButtons();
        }
    } else {
        remainingMoves--; // Decrease remaining moves
        lettersGuessed.push(letter);
        updateDisplay();
        updateHangmanImage();
        updateRemainingMoves(); // Update the moves in the HTML
        if (remainingMoves === 0) {
            // Out of moves
            hangmanMessage.textContent = `Sorry, you lose. The word was "${selectedWord}".`;
            disableButtons();
        }
    }
}

// Disabling letter buttons after game over
function disableButtons() {
    const letterButtons = document.querySelectorAll('.letter-button');
    letterButtons.forEach(button => {
        button.disabled = true;
    });
}

// Updating hangman image (you can add your own images for different stages)
function updateHangmanImage() {
    // Adding code to update the hangman image based on remainingMoves
    // You can implement this functionality here
}

// Initializing the game
updateDisplay();

// Adding letter buttons dynamically
for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const button = document.createElement('button');
    button.textContent = letter;
    button.className = 'letter-button';
    button.addEventListener('click', () => {
        if (!lettersGuessed.includes(letter)) {
            checkLetter(letter);
            lettersGuessed.push(letter);
            button.disabled = true;
        }
    });
    hangmanButtons.appendChild(button);
}

// Initial update of remaining moves
updateRemainingMoves();

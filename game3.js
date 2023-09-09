const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

let score = 0;
let lastHole;
let gameActive = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);

    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (gameActive) {
            peep();
        }
    }, time);
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameActive = true;
    peep();
    setTimeout(() => {
        gameActive = false;
        alert('Game Over! Your score: ' + score);
    }, 15000); // Game lasts for 15 seconds
}

startButton.addEventListener('click', startGame);

function whack(e) {
    if (!e.isTrusted) return; // Prevent cheating by programmatically clicking
    if (!gameActive) return; // Game is not active

    if (this.classList.contains('up')) {
        score++;
        this.classList.remove('up');
        scoreDisplay.textContent = score;
    }
}

holes.forEach(hole => hole.addEventListener('click', whack));

let secretNumber;
let attempts;

function startNewGame() {
    secretNumber = generateRandomNumber(1, 100);
    attempts = 0;
    updateResult("");
    updateAttempts("");
}

function submitGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        updateResult("Invalid guess. Please enter a number between 1 and 100.");
        return;
    }

    attempts++;
    if (userGuess === secretNumber) {
        updateResult(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else if (userGuess < secretNumber) {
        updateResult("Too low! Try again.");
    } else {
        updateResult("Too high! Try again.");
    }

    updateAttempts(`Attempts: ${attempts}`);
    this.restartGame();
}

function restartGame() {
    startNewGame();
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateResult(message) {
    document.getElementById('result').innerText = message;
}

function updateAttempts(message) {
    document.getElementById('attempts').innerText = message;
}

// Start a new game when the page loads
startNewGame();

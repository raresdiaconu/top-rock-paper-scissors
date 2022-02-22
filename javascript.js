let playerScore = 0;
let computerScore = 0;
let gamesCount = 0;
const selection = document.querySelectorAll('.icon');
const roundWinner = document.querySelector('.announce-winner');
const score = document.querySelector('.keep-score')
const restartButton = document.querySelector('.restart-game')

selection.forEach(choice => choice.addEventListener('click', startGame));
function startGame(e) {
    const sel = document.querySelector(`i[id = '${e.target.id}']`)
    sel.classList.add('icon-active');
    playRound(e.target.id);
    keepScore();
    activateRestartButton();
    if (gamesCount === 5) {
        announceGameWinner();
        selection.forEach(choice => choice.removeEventListener('click', startGame));
    };
}

function computerPlay() {
    const computerMoves = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerMoves.length);
    return computerMoves[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    switch (true) {
        case (playerSelection === 'rock' && computerSelection === 'rock'):
        case (playerSelection === 'paper' && computerSelection === 'paper'):
        case (playerSelection === 'scissors' && computerSelection === 'scissors'):
            roundWinner.textContent = 'It\'s a tie!';
            gamesCount++;
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            roundWinner.textContent = 'Good pick! You won!';
            playerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
        case (playerSelection === 'rock' && computerSelection === 'paper'):
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            roundWinner.textContent = 'Shucks! The computer won.';
            computerScore++;
            gamesCount++;
            break;
    }
}

function keepScore() {
    score.textContent = `You ${playerScore} - ${computerScore} Computer`;
}

function announceGameWinner() {
    roundWinner.classList.add('announce-game-winner');
    if (playerScore > computerScore) {
        roundWinner.textContent = 'Congrats! You beat the computer!';
    } else if (playerScore < computerScore) {
        roundWinner.textContent = 'You lost. Play another round?';
    } else {
        roundWinner.textContent = 'It\'s a tie. Play another round?';
    }
}

function activateRestartButton() {
    if (gamesCount > 0) {
        restartButton.classList.add('restart-game-whileplaying');
    }
}

restartButton.addEventListener('click', restartGame);
function restartGame() {
    if (gamesCount > 0) restartButton.classList.add('restart-game-click');
    resetGame();
    selection.forEach(choice => choice.addEventListener('click', startGame));
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gamesCount = 0;
    roundWinner.textContent = 'Make a selection to start the game:';
    score.textContent = 'You\'re playing Best Of Five.';
    restartButton.classList.remove('restart-game-whileplaying');
    roundWinner.classList.remove('announce-game-winner');
}

//Removes the styling of the buttons after they have been clicked.
selection.forEach(choice => choice.addEventListener('transitionend', removeTransition));
restartButton.addEventListener('transitionend', removeTransition);
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('icon-active');
    this.classList.remove('restart-game-click');
}

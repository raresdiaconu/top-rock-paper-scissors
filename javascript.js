let playerScore = 0;
let computerScore = 0;
let gamesCount = 0;
const selection = document.querySelectorAll('.icon');
const roundWinner = document.querySelector('.announce-winner');
const score = document.querySelector('.keep-score');
const restartButton = document.querySelector('.restart-game');
const announceRoundSelections = document.querySelector('.round-score')

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
            displayIcon("rock");
            displayIcon("rock");
            roundWinner.textContent = 'It\'s a tie!';
            gamesCount++;
            break;
        case (playerSelection === 'paper' && computerSelection === 'paper'):
            displayIcon("paper");
            displayIcon("paper");
            roundWinner.textContent = 'It\'s a tie!';
            gamesCount++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'scissors'):
            displayIcon("scissors");
            displayIcon("scissors");
            roundWinner.textContent = 'It\'s a tie!';
            gamesCount++;
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
            displayIcon("scissors");
            displayIcon("rock", "winner");
            roundWinner.textContent = 'Rocks are cooler than scissors. You won!';
            playerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            displayIcon("rock");
            displayIcon("paper", "winner");
            roundWinner.textContent = 'Ahh...the mighty paper! Always beats rock. You won!';
            playerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            displayIcon("paper");
            displayIcon("scissors", "winner");
            roundWinner.textContent = 'You go! Cut that paper!';
            playerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            displayIcon("rock", "winner");
            displayIcon("scissors");
            roundWinner.textContent = 'Ouch, that hurt! The computer won.';
            computerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            displayIcon("paper", "winner");
            displayIcon("rock");
            roundWinner.textContent = 'Shucks! The computer won.';
            computerScore++;
            gamesCount++;
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            displayIcon("scissors", "winner");
            displayIcon("paper");
            roundWinner.textContent = 'Dang! The computer won.';
            computerScore++;
            gamesCount++;
            break;
    }
}

function keepScore() {
    score.textContent = `You ${playerScore} - ${computerScore} Computer`;
}

function announceGameWinner() {
    if (playerScore > computerScore) {
        roundWinner.textContent = 'Wohoo! You beat the computer!';
        roundWinner.classList.add('announce-game-winner-player');
    } else if (playerScore < computerScore) {
        roundWinner.textContent = 'You lost. Play another round?';
        roundWinner.classList.add('announce-game-winner-computer');
    } else {
        roundWinner.textContent = 'It\'s a tie. Play another round?';
    }
}

function displayIcon(selection, winner) {
    const icon = document.createElement('div');
    if (selection === "rock") {
        icon.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    } else if (selection === "paper") {
        icon.innerHTML = '<i class="fa-solid fa-hand-dots"></i>';
    } else if (selection === "scissors") {
        icon.innerHTML = '<i class="fa-solid fa-hand-peace"></i>';
    }

    if (winner === "winner") {
        icon.classList.add("keep-score-icon-winner");
    } else {
        icon.classList.add("keep-score-icon");
    }
    announceRoundSelections.insertBefore(icon, announceRoundSelections.firstChild);
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
    roundWinner.classList.remove('announce-game-winner-player');
    roundWinner.classList.remove('announce-game-winner-computer');
    announceRoundSelections.innerHTML = '';
}

//Removes the styling of the buttons after they have been clicked.
selection.forEach(choice => choice.addEventListener('transitionend', removeTransition));
restartButton.addEventListener('transitionend', removeTransition);
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('icon-active');
    this.classList.remove('restart-game-click');
}

let playerScore = 0;
let computerScore = 0;
let gamesCount = 0;
const selection = document.querySelectorAll('.icon');
const roundWinner = document.querySelector('.announce-winner');
const score = document.querySelector(".keep-score")

function computerPlay() {
    const computerMoves = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * computerMoves.length);
    return computerMoves[randomIndex];
}

selection.forEach(choice => choice.addEventListener('click', startGame));
function startGame(e) {
    const sel = document.querySelector(`i[id = "${e.target.id}"]`)
    sel.classList.add("icon-active");
    playRound(e.target.id);
    keepScore();
    if (gamesCount === 5) {
        game();
        selection.forEach(choice => choice.removeEventListener('click', startGame));
    };
}

//Removes the styling of the selection after the button has been clicked.
selection.forEach(choice => choice.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("icon-active");
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "Rock"):
        case (playerSelection === "paper" && computerSelection === "Paper"):
        case (playerSelection === "scissors" && computerSelection === "Scissors"):
            roundWinner.textContent = "It's a tie!";
            gamesCount++;
            break;
        case (playerSelection === "rock" && computerSelection === "Scissors"):
        case (playerSelection === "paper" && computerSelection === "Rock"):
        case (playerSelection === "scissors" && computerSelection === "Paper"):
            roundWinner.textContent = "Good pick! You won!";
            playerScore++;
            gamesCount++;
            break;
        case (playerSelection === "scissors" && computerSelection === "Rock"):
        case (playerSelection === "rock" && computerSelection === "Paper"):
        case (playerSelection === "paper" && computerSelection === "Scissors"):
            roundWinner.textContent = "Shucks! The computer won.";
            computerScore++;
            gamesCount++;
            break;
    }
}

function keepScore() {
    score.textContent = `You ${playerScore} - ${computerScore} Computer`;
}

function game() {
    if (playerScore > computerScore) {
        roundWinner.textContent = "Congrats! You beat the computer!";
    } else if (playerScore < computerScore) {
        roundWinner.textContent = "You lost. Play another round?";
    } else {
        roundWinner.textContent = "It's a tie. Play another round?";
    }
}
// Create a function with the name computerPlay that randomly returns "Rock", "Paper" or "Scissors";

function computerPlay() {
    const computerMoves = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * computerMoves.length);
    return computerMoves[randomIndex];
}

// Create a variable with the name playerSelection.
// Create a variable with the name computerSelection.

let playerSelection;
let computerSelection;

// Create a function with the name of playRound that asks the user for input.
// It should then compare it to the pick made by the computer at random.
// It should then returns the winner along with a message.

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper, Scissors");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    console.log(`Human: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);

    switch (true) {
        case (playerSelection === "rock" && computerSelection === "Rock"):
        case (playerSelection === "paper" && computerSelection === "Paper"):
        case (playerSelection === "scissors" && computerSelection === "Scissors"):
            return "It's a tie!";
            break;
        case (playerSelection === "rock" && computerSelection === "Scissors"):
            return "Rock beats scissors! You won!";
            break;
        case (playerSelection === "paper" && computerSelection === "Rock"):
            return "Paper beats rock! You won!";
            break;
        case (playerSelection === "scissors" && computerSelection === "Paper"):
            return "Scissors beat paper! You won!";
            break;
        case (playerSelection === "scissors" && computerSelection === "Rock"):
            return "Rock beats scissors! Computer won.";
            break;
        case (playerSelection === "rock" && computerSelection === "Paper"):
            return "Paper beats rock! Computer won.";
            break;
        case (playerSelection === "paper" && computerSelection === "Scissors"):
            return "Scissors beat paper! Computer won."
            break;
        default:
            return "Unknown value. Please write Rock, Paper or Scissors.";
    }
}

// Create a function game() that plays the game 5 times.
// The function should keep track of the score.
// The function should announce the winner after 5 rounds have been played.

let computerScore = 0;
let humanScore = 0;

function keepScore() {
    let gameResult = playRound(playerSelection, computerSelection);
    console.log(gameResult);
    if (gameResult === "Rock beats scissors! You won!" || gameResult === "Paper beats rock! You won!" || gameResult === "Scissors beat paper! You won!") {
        humanScore++;
    } else if (gameResult === "Rock beats scissors! Computer won." || gameResult === "Paper beats rock! Computer won." || gameResult === "Scissors beat paper! Computer won.") {
        computerScore++;
    } else if (gameResult === "Unknown value. Please write Rock, Paper or Scissors.") {
        keepScore();
    }
    return `${humanScore} - ${computerScore}`;
}

function game() {
    console.log(keepScore());
    console.log(keepScore());
    console.log(keepScore());
    console.log(keepScore());
    console.log(keepScore());
    if (humanScore > computerScore) {
        return "You have won!"
    } else if (computerScore > humanScore){
        return "You have lost."
    } else {
        return "It's a tie!"
    }
}

console.log(game());
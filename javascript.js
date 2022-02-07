// Create a function with the name computerPlay that randomly returns "Rock", "Paper" or "Scissors";

function computerPlay() {
    const computerMoves = ["Rock", "Paper", "Scissors"];
    let randomPick = Math.floor(Math.random() * computerMoves.length);
    return computerMoves[randomPick];
}

console.log(computerPlay());
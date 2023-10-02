// Create a FUNCTION called getComputerChoice that will randomly return either 'Rock', 'Paper', of 'Scissors'.
// Use console.log() to check if function works

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Create a FUNCTION that plays a single round of Rock Paper Scissors that takes TWO PARAMETERS: playerSelection and computerSelection
// Return the STRING that declares the winner of the rounds. For example, 'You Lose! Paper beats Rock'
// Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK, etc.)

let playerSelection = prompt("Ready Player One: Please choose either rock, paper or scissors, and type into the box below.").toLowerCase();
let computerSelection = getComputerChoice();

console.log(`Your choice is ${playerSelection}, the computer's choice is ${computerSelection}.`);

function playRound(playerSelection, computerSelection){
if (playerSelection === computerSelection){
    return 'The result is a tie!';
} else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'rock')
    ){
    return 'You win!';
} else {
    return 'You lose!';
}
} 

console.log(playRound(playerSelection, computerSelection));

// Write FUNCTION called game()
// Nest the previous function inside of game() to play a 5 round 


// Create a FUNCTION called getComputerChoice that will randomly return either 'Rock', 'Paper', of 'Scissors'.

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Create a FUNCTION that plays a single round of Rock Paper Scissors that takes TWO PARAMETERS: playerSelection and computerSelection
// Return the STRING that declares the winner of the rounds. For example, 'You Lose! Paper beats Rock'

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

// Write FUNCTION called game() that will play a round 5 times

function game() {
    for (let i = 0; i < 5; i++) {
        
        // Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK, etc.)  
        let playerSelection = prompt("Ready Player One: Please choose either rock, paper or scissors, and type into the box below.").toLowerCase(); 
        
        let computerSelection = getComputerChoice();

        // Print results of player choice and computer choice to verify logic works
        console.log(`Your choice is ${playerSelection}, the computer's choice is ${computerSelection}.`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
// If ... else ...
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

// Test switch 

function playRound(playerSelection, computerSelection){
    switch (playerSelection + computerSelection){
        case 'rockscissor':
        case 'scissorpaper':
        case 'paperrock':
            return 'You win!'
            break
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':  
            return 'You lose!'
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':  
            return 'You draw!'
            break
    }
}

// Event listeners for player buttons original

const btnRockPlayer = document.querySelector('.btn-rock--player');
const btnPaperPlayer = document.querySelector('.btn-paper--player');
const btnScissorsPlayer = document.querySelector('.btn-scissors--player');

btnRockPlayer.addEventListener('click', () => {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    isGameOver(playerScore, computerScore);
})
btnPaperPlayer.addEventListener('click', () => {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
btnScissorsPlayer.addEventListener('click', () => {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

console.log(`Your choice is ${playerSelection}, the computer's choice is ${computerSelection}.`);


// Write FUNCTION called game() that will play a round 5 times

// function game() {
//     for (let i = 0; i < 5; i++) {
        
//         // Make your function's playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK, etc.)  
//         let playerSelection = prompt("Ready Player One: Please choose either rock, paper or scissors, and type into the box below.").toLowerCase(); 
        
//         let computerSelection = getComputerChoice();

//         // Print results of player choice and computer choice to verify logic works
//         console.log(`Your choice is ${playerSelection}, the computer's choice is ${computerSelection}.`);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();
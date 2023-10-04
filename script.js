// Global variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const displayPlayerScore = document.querySelector('.player-score');
const displayComputerScore = document.querySelector('.computer-score');
const displayRoundResults = document.querySelector('.round-results');
const displayFinalResults = document.querySelector('.final-results');
const endGame = document.querySelector('.end-game');

// Generate random number por computer choice
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Event listeners for player buttons
const playerButtons = document.querySelectorAll('button');
    playerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection = button.className;
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            isEndGame();
    })
})

function roundResults() {
    if (roundWinner === 'tie') {
        displayRoundResults.textContent = 'This round was a DRAW!'
    } else if (roundWinner === 'player') {
        displayRoundResults.textContent = 'You win this round!'
    } else {
        displayRoundResults.textContent = 'You lose this round!' 
    } 
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundWinner = 'tie';
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ){
        playerScore++;
        roundWinner = 'player';
        displayPlayerScore.textContent = playerScore;
    } else {
        computerScore++;
        roundWinner = 'computer';
        displayComputerScore.textContent = computerScore;
    }
    roundResults();
} 

function resetGame() {
    // Disable player buttons
    document.querySelector(".Rock").disabled = true;
    document.querySelector(".Paper").disabled = true;
    document.querySelector(".Scissors").disabled = true;

    // Create replay button
    const replayGameButton = document.createElement("button");
    replayGameButton.textContent = "Play Again!";
    endGame.appendChild(replayGameButton);

    // Reload page when replay button clicked
    replayGameButton.addEventListener('click', () => {
        location.reload();
    })
}

function isEndGame() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            displayFinalResults.textContent = 'You WON!';
            resetGame();
        } 
        else if (computerScore > playerScore) {
            displayFinalResults.textContent = 'You LOST!';
            resetGame();
        }
    } 
}
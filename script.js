// Global variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

// Name Player Buttons
const playerRock = document.querySelector('#player-rock');
const playerPaper = document.querySelector('#player-paper');
const playerScissors = document.querySelector('#player-scissors');

// Name Computer Buttons
const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');

// Name Replay Button
const replayGameButton = document.querySelector('.btn-replay');

// Name scores and results 
const displayPlayerScore = document.querySelector('.score-player');
const displayComputerScore = document.querySelector('.score-computer');
const displayRoundResults = document.querySelector('.round-results');
const displayFinalResults = document.querySelector('.results-final');
const endGame = document.querySelector('.end-game');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const endGameModal = document.querySelector('#end-game-modal');
const overlay = document.querySelector('.overlay');

// Game play logic

function playRound(playerSelection, computerSelection){
    updateChoices(playerSelection, computerSelection);
    if (playerSelection === computerSelection){
        roundWinner = 'tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerScore++;
        roundWinner = 'player';
        displayPlayerScore.textContent = playerScore;
    } else {
        computerScore++;
        roundWinner = 'computer';
        displayComputerScore.textContent = computerScore;
    }
    computerColor(computerSelection); // Adds animation for Computer's "Button"
    roundResults();
} 

// Generate random number for computer choice
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function roundResults() {
    isEndGame(); 
    if (roundWinner === 'tie') {
        displayRoundResults.textContent = 'This round was a DRAW!'
    } else if (roundWinner === 'player') {
        displayRoundResults.textContent = 'You win this round!'
    } else {
        displayRoundResults.textContent = 'You lose this round!' 
    }
}

function isEndGame() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            openEndgameModal()
            displayFinalResults.textContent = 'You Win!';
            resetGame();
        } 
        else if (computerScore > playerScore) {
            openEndgameModal()
            displayFinalResults.textContent = 'You Lose!';
            resetGame();
        }
    }
}

function resetGame() {
      // Reveal replay button after game ends
    document.querySelector('.btn-replay').style.visibility = 'visible'

    // Reload page when replay button clicked
    replayGameButton.addEventListener('click', () => {
        location.reload();
    })
}

function openEndgameModal() {
    endGameModal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }

// UI elements

// Event listeners for player buttons
playerRock.addEventListener('click', () => {
    playerSelection = playerRock.dataset.button;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})
playerPaper.addEventListener('click', () => {
    playerSelection = playerPaper.dataset.button;
    computerSelection = getComputerChoice();  
    playRound(playerSelection, computerSelection);
})
playerScissors.addEventListener('click', () => {
    playerSelection = playerScissors.dataset.button;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

// Player Buttons Event Listener for :hover state
playerRock.addEventListener('mouseover', playerHover);
playerPaper.addEventListener('mouseover', playerHover);
playerScissors.addEventListener('mouseover', playerHover);

// Player Buttons Event Listener to remove :hover state
playerRock.addEventListener('mouseleave', removeHover);
playerPaper.addEventListener('mouseleave', removeHover);
playerScissors.addEventListener('mouseleave', removeHover);

// Animate selection of computer's icon
function computerColor(computerSelection) {
    if (computerSelection === 'rock') {
            removeColor();
            computerRock.classList.add('computer-pick');
    }
    if (computerSelection === 'paper') {
            removeColor();
            computerPaper.classList.add('computer-pick');
    }
    if (computerSelection === 'scissors') {
            removeColor();
            computerScissors.classList.add('computer-pick');
    }
}

// Remove animation from computer's icon
function removeColor() {
    computerRock.classList.remove('computer-pick');
    computerPaper.classList.remove('computer-pick');
    computerScissors.classList.remove('computer-pick');
}

// Add :hover state to Player Buttons
function playerHover() {
    if (playerScore <= 4 && computerScore <= 4) {
            this.classList.add('player-hover');
    }
}

// Remove :hover state from Buttons
function removeHover() {
    this.classList.remove('player-hover');
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        document.getElementById('player-choice').src = "/images/icon-rock.png"; // Replace existing img with new img
        break
      case 'paper':
        document.getElementById('player-choice').src = "/images/icon-paper.png";
        break
      case 'scissors':
        document.getElementById('player-choice').src = "/images/icon-scissors.png";
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        document.getElementById('computer-choice').src = "/images/icon-rock.png";
        break
      case 'papers':
        document.getElementById('computer-choice').src = "/images/icon-paper.png";
        break
      case 'scissors':
        document.getElementById('computer-choice').src = "/images/icon-scissors.png";
        break
    }
  }
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
    switch (playerSelection, computerSelection){
        case 'rock, scissor':
        case 'scissor, paper':
        case 'paper, rock':
            return 'You win!'
            break
        case 'rock, paper':
        case 'paper, scissor':
        case 'scissor, rock':  
            return 'You lose!'
            break
        case 'rock, rock':
        case 'paper, paper':
        case 'scissor, scissor':  
            return 'You draw!'
            break
    }
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
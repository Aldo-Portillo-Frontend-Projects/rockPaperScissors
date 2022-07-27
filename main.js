let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let arr = ['rock', 'paper', 'scissors']
  
    return arr[Math.floor(Math.random() * 3)]
  }

  //console.log(getComputerChoice());

  let playRound = (playerSelection, computerSelection ) => {

    if (playerSelection === computerSelection){
        return 'There is a Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            return 'You Lose! Paper beats Rock';
            
        } else {
            playerScore++;
            return 'You Win! Rock beats scissors';
             
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            return 'You Lose! Scissors beats paper';
            
        } else {
            playerScore++;
            return 'You Win! Paper beats rock';
            
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            return 'You Lose! Rock beats scissors';
            
        } else {
            playerScore++;
            return 'You Win! Scissors beats paper'
            
        }
    } else {
        return 'invalid input';
    }
  }

//Event listeners


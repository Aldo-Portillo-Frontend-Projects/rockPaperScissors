let getComputerChoice = () => {
    let arr = ['rock', 'paper', 'scissors']
  
    return arr[Math.floor(Math.random() * 3)]
  }

  //console.log(getComputerChoice());

  let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return 'There is a Tie!';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats scissors';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats paper';
        } else {
            return 'You Win! Paper beats rock';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats scissors';
        } else {
            return 'You Win! Scissors beats paper'
        }
    } else {
        return 'invalid input';
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
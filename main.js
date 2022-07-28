let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let arr = ['rock', 'paper', 'scissors']
  
    return arr[Math.floor(Math.random() * 3)]
  }

  //console.log(getComputerChoice());
  const result = document.querySelector('.result');
  const explanation = document.querySelector('.exp') 

  let playRound = (playerSelection, computerSelection ) => {

    if (playerSelection === computerSelection){
        result.textContent = 'Nobody wins this round';
        explanation.textContent = 'There is a Tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerScore++;
            result.textContent = 'You Lose :(';
            explanation.textContent = 'Paper beats Rock';
            
        } else {
            playerScore++;
            result.textContent = 'You Win!';
            explanation.textContent = 'Rock beats scissors';
             
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            computerScore++;
            result.textContent = 'You Lose :(';
            explanation.textContent = 'Scissors beats paper';
            
        } else {
            playerScore++;
            result.textContent = 'You Win!';
            explanation.textContent = 'Paper beats rock';
            
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++;
            result.textContent = 'You Lose :(';
            explanation.textContent = 'Rock beats scissors';
            
        } else {
            playerScore++;
            result.textContent = 'You Win!';
            explanation.textContent = 'Scissors beats paper'
            
        }
    } else {
        explanation.textContent = 'invalid input';
    }
  }

//Event listeners

const buttons = document.querySelectorAll('button')
const playerPoints = document.querySelector('.player-score');
const computerPoints = document.querySelector('.computer-score')
const playerImg = document.querySelector('.player-image');
const computerImg = document.querySelector('.computer-image');

const textToImg = (text) => {
    if (text === 'rock'){
        return '✊';
    } else if (text === 'paper'){
        return '🤚';
    } else if (text === 'scissors'){
        return '✌';
    }
}
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound(button.id, computerChoice);
    playerImg.textContent = textToImg(button.id);
    computerImg.textContent = textToImg(computerChoice);
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
    console.log(computerScore)

    if (playerScore === 5) {
        window.alert('You win');
    } else if (computerScore === 5) {
        window.alert('You Lose')
    }

  });

});

let gameRestart = () => {

}



/* for reset set scores to 0 */

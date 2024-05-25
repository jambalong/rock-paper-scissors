function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice == 1) {
    return 'rock';
  } else if (computerChoice == 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let humanChoice = prompt('What is your move? (rock, paper, scissors)');
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(computerChoice);

  if (humanChoice == computerChoice) {
    console.log('This round is a draw!');
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    console.log('You lose! Paper beats Rock');
    computerScore++
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    console.log('You win! Rock beats Scissors');
    humanScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    console.log('You lose! Scissors beats Paper');
    computerScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    console.log('You win! Paper beats Rock');
    humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    console.log('You lose! Rock beats Scissors');
    computerScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    console.log('You win! Scissors beats Paper');
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

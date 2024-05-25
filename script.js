function getComputerChoice() {
  // Get a random number from 1 to 3 for computerChoice
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
  // Get a humanChoice by prompt()
  let humanChoice = prompt('What is your move? (rock, paper, scissors)');
  return humanChoice;
}

// Initialize humanScore and computerScore to 0
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Make humanChoice parameter case-insensitive
  humanChoice = humanChoice.toLowerCase();

  // Outputs the round winner and increments score
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

// Initialize humanSelection and computerSelection to empty string
let humanSelection = '';
let computerSelection = '';

function playGame() {

  // Loop 5 rounds by calling playRound 5 times
  for (let round = 0; round < 5; round++ ) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
}

playGame();

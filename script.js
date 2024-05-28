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
    result.textContent = 'This round is a draw!';
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    result.textContent = 'You lose! Paper beats Rock'
    computerScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
    result.textContent = 'You win! Rock beats Scissors'
    humanScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    result.textContent = 'You lose! Scissors beats Paper'
    computerScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    result.textContent = 'You win! Paper beats Rock'
    humanScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    result.textContent = 'You lose! Rock beats Scissors'
    computerScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    result.textContent = 'You win! Scissors beats Paper';
    humanScore++;
    scores.textContent = `Human ${humanScore} : ${computerScore} Computer`;
  }

  if (humanScore == 5) {
    scores.textContent = 'Congratulations! Human wins.';
  } else if (computerScore == 5) {
    scores.textContent = 'Better luck next time! Computer wins.'
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

// Add buttons for moves and event listener to call playRound()
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

let result = document.querySelector(".result");
let scores = document.querySelector(".scores")

btnRock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
})
btnPaper.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
})
btnScissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
})

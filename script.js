"use strict";

let playerScore = 0;
let computerScore = 0;
let winner = "";
let gameEnd = false;

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // console.log(randomChoice);
  let computerChoice = "";
  switch (randomChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  // console.log(computerChoice);
  return computerChoice;
};

const displayResults = (
  playerChoice = "",
  computerChoice = "",
  result = ""
) => {
  const playerChoiceDisplay = document.querySelector(".player-choice");
  const computerChoiceDisplay = document.querySelector(".computer-choice");
  const playerScoreDisplay = document.querySelector(".player-score");
  const computerScoreDisplay = document.querySelector(".computer-score");
  const resultDisplay = document.querySelector(".result");
  const winnerDisplay = document.querySelector(".winner");

  playerChoiceDisplay.textContent = playerChoice;
  computerChoiceDisplay.textContent = computerChoice;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = result;
  winnerDisplay.textContent = winner;
};

const playRound = (event) => {
  if (gameEnd == true) {
    return;
  }
  let result = "";

  const rock = "rock";
  const scissors = "scissors";
  const paper = "paper";

  let playerChoice = event.target.textContent;
  playerChoice = playerChoice.trim().toLowerCase();
  const computerChoice = getComputerChoice();

  if (playerChoice == computerChoice) {
    result = `Draw, let's go another round`;
    // return playRound(event, getPlayerChoice(), getComputerChoice());
  } else if (playerChoice == rock && computerChoice == paper) {
    result = `You lose! ${paper} beats ${rock}`;
    computerScore++;
  } else if (playerChoice == rock && computerChoice == scissors) {
    result = `You Win! ${rock} beats ${scissors}`;
    playerScore++;
  } else if (playerChoice == paper && computerChoice == scissors) {
    result = `You Lose! ${scissors} beats ${paper}`;
    computerScore++;
  } else if (playerChoice == paper && computerChoice == rock) {
    result = `You Win! ${paper} beats ${rock}`;
    playerScore++;
  } else if (playerChoice == scissors && computerChoice == rock) {
    result = `You Lose! ${rock} beats ${scissors}`;
    computerScore++;
  } else if (playerChoice == scissors && computerChoice == paper) {
    result = `You Win! ${scissors} beats ${paper}`;
    playerScore++;
  } else {
    result = `Choice out of range, pick again`;
  }

  if (playerScore == 5) {
    winner = `You win the game! Well done.`;
    gameEnd = true;
  } else if (computerScore == 5) {
    winner = `You lose the game! Good luck next time.`;
    gameEnd = true;
  }

  displayResults(playerChoice, computerChoice, result);
};

const playAgain = () => {
  gameEnd = false;
  playerScore = 0;
  computerScore = 0;
  winner = "";
  displayResults();
};

const gameButtons = document.querySelectorAll(".btn-game");
const playAgainBtn = document.querySelector(".play-again");

gameButtons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});
playAgainBtn.addEventListener("click", playAgain);
displayResults();

"use strict";

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

const playRound = (event) => {
  // let result = "";
  let playerChoice = event.target.textContent;
  playerChoice = playerChoice.trim().toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(playerChoice);
  console.log(computerChoice);
  const rock = "rock";
  const scissors = "scissors";
  const paper = "paper";
  if (playerChoice == "") {
    alert(`You didn't choose anything `);
  }
  if (playerChoice == rock && computerChoice == rock) {
    console.log(`Draw, let's go another round`);
    // return playRound(event, getPlayerChoice(), getComputerChoice());
  } else if (playerChoice == rock && computerChoice == paper) {
    return [`You lose! ${paper} beats ${rock}`, 0];
  } else if (playerChoice == rock && computerChoice == scissors) {
    return [`You Win! ${rock} beats ${scissors}`, 1];
  } else if (playerChoice == paper && computerChoice == paper) {
    console.log(`Draw, let's go another round`);
    // return playRound(event, getPlayerChoice(), getComputerChoice());
  } else if (playerChoice == paper && computerChoice == scissors) {
    return [`You Lose! ${scissors} beats ${paper}`, 0];
  } else if (playerChoice == paper && computerChoice == rock) {
    return [`You Win! ${paper} beats ${rock}`, 1];
  } else if (playerChoice == scissors && computerChoice == scissors) {
    console.log(`Draw, let's go another round`);
    // return playRound(event, getPlayerChoice(), getComputerChoice());
  } else if (playerChoice == scissors && computerChoice == rock) {
    return [`You Lose! ${rock} beats ${scissors}`, 0];
  } else if (playerChoice == scissors && computerChoice == paper) {
    return [`You Win! ${scissors} beats ${paper}`, 1];
  } else {
    console.log(`Choice out of range, pick again`);
    // return playRound(getPlayerChoice(), getComputerChoice());
  }
};

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//   const results = playRound(getPlayerChoice(), getComputerChoice());
//   console.log(results[0]);
//   if (results[1] == 0) {
//     computerScore++;
//   } else {
//     playerScore++;
//   }
//   }
//   if (playerScore > computerScore) {
//     console.log(`You win the game! Well done.`);
//   } else {
//     console.log(`You lose the game! Good luck next time.`);
//   }
//   // console.log(playerScore);
//   // console.log(computerScore);
// };
// game();

const gameButtons = document.querySelectorAll(".btn-game");
gameButtons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

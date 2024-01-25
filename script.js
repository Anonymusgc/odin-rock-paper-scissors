"use strict";

const getPlayerChoice = () => {
  let playerChoice = prompt("");
  playerChoice = playerChoice.trim().toLowerCase();
  console.log(playerChoice);

  return playerChoice;
};

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(randomChoice);
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
  console.log(computerChoice);
  return computerChoice;
};

const playRound = (playerChoice, computerChoice) => {
  // let result = "";

  if (playerChoice == "rock" && computerChoice == "rock") {
    return playRound(getPlayerChoice(), getComputerChoice());
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return;
  }
};

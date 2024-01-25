"use strict";

// const playerChoice = prompt("");

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(randomChoice);
  let computerChoice = "";
  switch (randomChoice) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  console.log(computerChoice);
  return computerChoice;
};
getComputerChoice();

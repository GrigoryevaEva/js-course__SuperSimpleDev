"use strict";

function pickComputerMove(variantsMove) {
  return variantsMove[Math.floor(Math.random() * 3)];
};

function comparisonMoves(userMove, computerMove) {
  let result = "";

  if (userMove === "rock") {
    if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    } else result = "Tie.";

  } else if (userMove === "paper") {
    if (computerMove === "scissors") {
      result = "You lose.";
    } else if (computerMove === "rock") {
      result = "You win.";
    } else result = "Tie.";

  } else if (userMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else result = "Tie.";
  };

  return result;
};

function getResultGame(userMove) {
  const variantsMove = ["rock", "paper", "scissors"];
  const computerMove = pickComputerMove(variantsMove);
  let result = comparisonMoves(userMove, computerMove);
  return console.log(
    `You picked ${userMove}. Computer picked ${computerMove}. ${result}`
  );
};
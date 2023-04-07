"use strict";

function game(userMove) {
  let variantsMove = ["rock", "paper", "scissors"];
  let computerMove = variantsMove[Math.floor(Math.random() * 3)];

  if (userMove === "rock") {
    if (computerMove === "paper") {
      console.log("You picked rock. Computer picked paper. You lose.");
    } else if (computerMove === "scissors") {
      console.log("You picked rock. Computer picked scissors. You win.");
    } else console.log("You picked rock. Computer picked rock. Tie.");
  };

  if (userMove === "paper") {
    if (computerMove === "scissors") {
      console.log("You picked rock. Computer picked scissors. You lose.");
    } else if (computerMove === "rock") {
      console.log("You picked rock. Computer picked rock. You win.");
    } else console.log("You picked rock. Computer picked paper. Tie.");
  };

  if (userMove === "scissors") {
    if (computerMove === "rock") {
      console.log("You picked rock. Computer picked rock. You lose.");
    } else if (computerMove === "paper") {
      console.log("You picked rock. Computer picked paper. You win.");
    } else console.log("You picked rock. Computer picked scissors. Tie.");
  };
};

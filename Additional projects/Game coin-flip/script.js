"use strict";

function gameCoinFlip (guess) {
  let randomNumber = Math.random();
  let resultToos = randomNumber < 0.5 ? "heads" : "tails";
  let result;
  return result = guess === resultToos ? console.log('You win!') : console.log('You lose!');
};



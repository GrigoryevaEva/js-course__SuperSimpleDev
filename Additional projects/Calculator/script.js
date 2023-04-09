'use strict'

let calculation = '';

function calc (i) {
  if (i == '0' && calculation.length == 1 && calculation[0] == '0') return;
  calculation += `${i}`;
  console.log(calculation);
};

function equal () {
  calculation = eval(calculation);
  console.log(calculation);
};

function remove () {
  calculation = "";
  console.log(calculation);
};
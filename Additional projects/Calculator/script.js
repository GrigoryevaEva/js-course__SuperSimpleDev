'use strict'

let calculation = '';

let one = () => {
  calculation += '1'
  console.log(calculation);
};
let two = () => {
  calculation += '2';
  console.log(calculation);
};
let three = () => {
  calculation += '3';
  console.log(calculation);
};
let four = () => {
  calculation += '4';
  console.log(calculation);
};
let five = () => {
  calculation += '5';
  console.log(calculation);
};
let six = () => {
  calculation += '6';
  console.log(calculation);
};
let seven = () => {
  calculation += '7';
  console.log(calculation);
};
let eight = () => {
  calculation += '8';
  console.log(calculation);
};
let nine = () => {
  calculation += '9';
  console.log(calculation);
};
let zero = () => {
  calculation += '0';
  console.log(calculation);
};

let float = () => {
  calculation += ".";
  console.log(calculation);
};

let plus = () => {
  calculation += " + ";
  console.log(calculation);
};

let minus = () => {
  calculation += " - ";
  console.log(calculation);
};

let multiplication = () => {
  calculation += " * ";
  console.log(calculation);
};

let division = () => {
  calculation += " / ";
  console.log(calculation);
};

let equal = () => {
  calculation = eval(calculation);
  console.log(calculation);
};

let clear = () => {
  calculation += '';
  console.log(calculation);
};
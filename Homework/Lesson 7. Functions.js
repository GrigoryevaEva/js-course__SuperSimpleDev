'use strict'

function greet (name) {
  if (!name) name = "there";
  console.log(`Hello ${name}`);
};

greet();

function convertTemperature (degrees, unit) {
  if (unit !== 'C' || 'F') return console.log('Use other unit');
  let result = 0;
  if (unit === 'C') {
    result = (((degrees * 9) / 5) + 32) + unit;
  } else result = (((degrees - 32) * 5) / 9) + unit;
  return result;
};

convertTemperature(25,'C');
convertTemperature(86, "F");
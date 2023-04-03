'use strict'

// Ex. 2l-2n
// Convert temperatures

function convertCelsiusToFahrenheit(num) {
    let result = 0;
    return result = ((num * 9) / 5) + 32;
};

function convertFahrenheitToCelsius(num) {
    let result = 0;
    return (result = ((num - 32) * 5) / 9);
};

convertCelsiusToFahrenheit(25);
convertFahrenheitToCelsius(86);
convertCelsiusToFahrenheit(-5);
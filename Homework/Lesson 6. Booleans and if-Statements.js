'use strict'

// 6a-c
let name = 'Eva';
let hour = 23;

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning, ${name}!`);
} else if (hour >= 13 && hour <= 17) {
  console.log(`Good afternoon, ${name}!`);
} else console.log(`Good night, ${name}!`);

// 6d-e
const isHoliday = 0;
let age = 5;

if (!isHoliday && (age <= 6 || age >= 65)) {
  console.log('Discount');
} else console.log('No discount');


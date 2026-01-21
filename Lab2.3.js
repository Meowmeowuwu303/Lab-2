'use strict';

// Функції
const average = (a, b) => (a + b) / 2;

const square = (x) => x ** 2;

const cube = (x) => x ** 3;

const calculate = () => {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const avg = average(square(i), cube(i));
    results.push(avg);
  }
  return results;
};

console.log('Average of 10 and 25:', average(10, 25));
console.log('Square of 7:', square(7));
console.log('Cube of 4:', cube(4));
console.log('Calculations:', calculate());

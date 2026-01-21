'use strict';

// Цикли
const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

const rangeOdd = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i += 2) {
    arr.push(i);
  }
  return arr;
};

console.log('All numbers:', range(20, 35));
console.log('Odd numbers:', rangeOdd(20, 35));

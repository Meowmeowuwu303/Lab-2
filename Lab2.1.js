'use strict';

// Ідентифікатори
const userName = 'Oleksiy';
const birthYear = 2005;

const createGreeting = (name) => {
  const age = 2025 - birthYear;
  return `Congratulations on your ${age}th birthday, ${name}!`;
};

console.log(createGreeting(userName));

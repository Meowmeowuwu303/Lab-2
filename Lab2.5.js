'use strict';

// Функція пошуку номерів в масиві об'єктів
const phoneBook = [
  { name: 'Aristotle', phone: '+380501234567' },
  { name: 'Socrates', phone: '+380672345678' },
  { name: 'Heraclitus', phone: '+380933456789' },
  { name: 'Pythagoras', phone: '+380634567890' },
  { name: 'Democritus', phone: '+380505678901' },
  { name: 'Parmenides', phone: '+380676789012' },
];

// Пошук у масиві
const findPhoneInArray = (name) => {
  for (const contact of phoneBook) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return null;
};

console.log('Array search (Socrates):', findPhoneInArray('Socrates'));

// Пошук у хеш-таблиці
const phoneHash = {};
for (const contact of phoneBook) {
  phoneHash[contact.name] = contact.phone;
}

const findPhoneInHash = (name) => phoneHash[name] || null;

console.log('Hash search (Pythagoras):', findPhoneInHash('Pythagoras'));

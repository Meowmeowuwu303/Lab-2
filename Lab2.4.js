'use strict';

// Об'єкти
const constantObj = { name: 'Initial value' };
let variableObj = { name: 'Another value' };

console.log('Before modification:');
console.dir({ constant: constantObj.name, variable: variableObj.name });

constantObj.name = 'Modified constant';
variableObj.name = 'Modified variable';

console.log('After property modification:');
console.dir({ constant: constantObj.name, variable: variableObj.name });

variableObj = { name: constantObj.name };

console.log('After reference change:');
console.dir({ constant: constantObj.name, variable: variableObj.name });

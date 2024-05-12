const balance = new Number(100)

console.log(balance.toString().length)
console.log(balance.toFixed(2));

const anotherNumber = 123.8567

console.log(anotherNumber.toPrecision(3));     // 124
console.log(anotherNumber.toPrecision(2));     // 1.2e+2

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// maths

console.log(Math.min(2, 5, 1, 24));            // 1
console.log(Math.random());

const min = 10
const max = 30

// random gives number from 0 to less than 1
console.log(Math.floor(Math.random() * (10 + 1)));  // 0 -> 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 10 -> 30
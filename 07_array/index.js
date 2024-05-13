const numbers = [1, 2, 3, 4]

numbers.unshift(0)

console.log(numbers);                                // [0, 1, 2, 3, 4]

numbers.shift()        

console.log(numbers);                                // [1, 2, 3, 4]

// slice vs splice

console.log(numbers.slice(1,3));                     // [2, 3] 

console.log('original', numbers);                    // [1, 2, 3, 4]

console.log(numbers.splice(1,3));                    // [2, 3, 4] 

console.log('original', numbers);                    // [1]

const multilevelNumbers = [1, 2, [3, 4, [5, 6], 7]]

console.log(multilevelNumbers.flat());               // [1, 2, 3, 4, [ 5, 6 ], 7 ]

console.log(multilevelNumbers.flat(Infinity));       // [1, 2, 3, 4, 5, 6, 7]

console.log(Array.isArray("roshan"));                // false
console.log(Array.from("roshan"));                   // [ 'r', 'o', 's', 'h', 'a', 'n' ]
console.log(Array.from({name: "roshan"}));           // []

console.log(Array.of(100, 200, 300));                // [ 100, 200, 300 ]

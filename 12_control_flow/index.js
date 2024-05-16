// falsy values

// false, 0, -0, bigint 0n, null, undefined, NaN

// truthy values

// "0", " ", 'false', [], {}, function test(){}

// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10

console.log(val1); // 5

val1 = null ?? 10

console.log(val1); // 10

val1 = undefined ?? 15

console.log(val1); // 15

// Terniary Operator

// condition ? true : false
const getScores = (...values) => {
    return values
}

console.log(getScores());        // []
console.log(getScores(1));       // [ 1 ]
console.log(getScores(1, 2, 3)); // [ 1, 2, 3 ]
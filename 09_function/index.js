const getScores = (...values) => {
    return values
}

console.log(getScores());        // []
console.log(getScores(1));       // [ 1 ]
console.log(getScores(1, 2, 3)); // [ 1, 2, 3 ]


// reason yet to be explored

addOne(4)
function addOne(num){
    return num + 1
}

addTwo(4)
const addTwo = function(num) {
    return num + 2
}

/*
addTwo(4)
^

ReferenceError: Cannot access 'addTwo' before initialization
*/
// Immediately invoked function expression

// function that runs as soon as it is defined
// avoids polluting global namespace

(function connectToDb(){
    console.log('CONNECTED TO DB');
})();    // semicolon is important here or else other line of code will throw error


(() => {
    console.log('CONNECTED TO DB 2');
})()
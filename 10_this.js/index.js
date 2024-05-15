// this refers to current context

console.log(this);  // node -> {}   browser -> Window object

const greet = function() {
    console.log(this);        // here we do get some references
}

greet()

const greetings = () => {
    console.log(this);         // {}
}

greetings()
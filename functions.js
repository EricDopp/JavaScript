console.log(add(1, 2));

function add(a, b){ //hoisting happens here when the function is called before it's declared
    return a + b;
}

//console.log(subtraction(10,5));
//function expression
//save the function as a variable
const subtraction = function(a, b) { return a - b};

function sayHi(name){
    console.log(`Hello there ${name}!`);
}

function longerGreeting(greeting, name){
    greeting(name)
}

longerGreeting(sayHi, "Jonathan");
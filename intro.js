//variables
//string, number, boolean, symbol, bigint, null, undefined

let name = "Jonathan Hop"; //single quotes also work

//dynamically typed language
name = 10;

let isPremiumMember = true;

let lionsFans = null;

//this variable starts off as undefined
let anotherVarible;

const thisDoesNotChange = "Hello";

//thisDoesNotChange = "Bob";

console.log("Hello there!"); console.log("GENERAL KENOBI!");

//honorable mention
var animal = "Tiger"; //never should've happened, var is a horrible idea

//Just in time compilation
//There is no error checking beforehand by the compiler
//Without VS code or some intellisense, you don't know there is an error
//Until you hit it

//for loops
for(let i = 0; i < 5; i++){
    console.log(`The number is ${i} and Eric will hate this but ${i}`);
}

//while loops
let j = 0;
while(j < 5){
    j++
}

//if statements
let firstNumber = 10
let secondNumber = 20;
let thirdNumber = "10"

//In Javascript, there are two ways to do equality
//value coercion is what double equals does
if(firstNumber == thirdNumber){
    console.log('First number is equal to the third number');
}

if(firstNumber === thirdNumber){
    console.log('First number triple equals third number')
}
//double equals changes things to the same type and then checks if they are equal
//always use triple equals, it's like == in C#, double equals was a mistake

if(true == "1"){
    console.log("true is equal to 1")
}
else if(true == -Infinity){

}
else{ //this syntax is the same

}

//switch statements
let dogName = "Fido";

switch(dogName){
    case "Fido":
        console.log("Ruff!");
        break;
    default:
        console.log("Bark!");
        break;
}

//methods or functions

//if the language is OOP they have to have objects

//which flavor of syntax? curly braces or indentation?
let numArray = [1, 2, 3, 4, 5, 6];

//I want numbers less than 3
// numArray = numArray.filter(x => x < 3)

// numArray = numArray.filter (x => x > 3);
// console.log(numArray);

// function lessThan3(num){
//     if(num >= 3){
//         return num;
//     }
// }

let sum = numArray.reduce((a, b) => a + b);
// let accumulator = 0;
// for(i = 0; i < numArray.length; i++){
//     accumulator += numArray[i];
// }

// console.log(sum);

let example = numArray.map(x => x * 5);

console.log(example);

// function mainFunction(callbackFunction, name){
//     callbackFunction(name) //A callback function is a function that is given to another function later
// }

let students = [{name: "John Smith", age: 20 }, 
                {name: "Superman", age: 100 }, 
                {name: "Mergatroid", age: 35}];

let ages = students.map(x => x.age)//.reduce((a, b) => a + b);

console.log(ages);
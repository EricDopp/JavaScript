//creating an object
let student = {
    name: "Bob",
    age: 27,
    favoriteSport: "Football"
}

console.log(`The students name is ${student.name}`);

student.favoriteColor = "blue";

console.log(`The students favorite color is ${student.favoriteColor}`);

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let newStudent = new Student("Jonathan", 35);

newStudent.favoriteWhatever = "blah";
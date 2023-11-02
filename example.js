//variables
//boolean, string, number, *bigint, *symbol, null, undefined
var fullName = "Jonathan";
var isTeacher = true;
var age = 39;
//type inference
var oldWay = 102;
var thisisAnything; //kinda defeats the point of typescript
thisisAnything = "I'm a string";
thisisAnything = 50;
thisisAnything = false;
//union
var thisIsTwoTypes = true;
thisIsTwoTypes = 50;
//The return type could be inferred based on the return statement or lack of one
function sum(a, b) {
    return a + b;
}
function sayHi(name) {
    console.log("Hello there! " + name);
}
sayHi("GENERAL KENOBI");
function unionFunction(incoming) {
}
var newPlayer = {
    level: 12,
    name: "Zao",
    class: "Monk"
};
var playerArray = [
    {
        level: 12,
        name: "Zao",
        class: "Monk"
    }
];
//This function is much more safe now
function playerLevelUp(player) {
    player.level += 1;
}

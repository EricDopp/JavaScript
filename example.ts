//variables
//boolean, string, number, *bigint, *symbol, null, undefined
let fullName:string = "Jonathan";

let isTeacher:boolean = true;

let age:number = 39;

//type inference
let oldWay = 102;

let thisisAnything:any; //kinda defeats the point of typescript

thisisAnything = "I'm a string";
thisisAnything = 50;
thisisAnything = false;

//union
let thisIsTwoTypes:(boolean | number) = true;
thisIsTwoTypes = 50;

//The return type could be inferred based on the return statement or lack of one
function sum(a:number, b:number) : number{
    return a + b;
}

function sayHi(name:string){
    console.log("Hello there! " + name);
}
sayHi("GENERAL KENOBI")

function unionFunction(incoming:(number | string)){

}

let newPlayer:Player = {
    level: 12,
    name: "Zao",
    class: "Monk"
}

let playerArray:Player[] = [
    {
    level: 12,
    name: "Zao",
    class: "Monk"
    }
];

//This function is much more safe now
function playerLevelUp(player:Player){
    player.level += 1;
}
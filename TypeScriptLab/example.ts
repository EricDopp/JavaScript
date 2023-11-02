//string, null, undefined, symbol, number, bigint, boolean

let firstName:string = "Bob";

let lastName = "Jones";
let age = 50;

let lionsFans:(number | null) = null;

let iHaveNoIdea:any = true;

function addTwoNumbers(a:number, b:number) : number {
    return a + b;
}

enum CardType {
    Spades,
    Clubs,
    Hearts,
    Diamonds
}

interface Bird extends Animal{
    featherColor:string,
    wingSpan:number
}

interface Animal {
    name:string,

}

let robin:Bird = { featherColor: "blue", wingSpan: 50, name: "MockingJay" };
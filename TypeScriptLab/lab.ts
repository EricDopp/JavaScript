interface Mountain {
    name: string,
    height:number
}

let mountains:Mountain[] = [{name: "Kilimanjaro", height: 19341}, 
                            {name: "Everest", height: 29029}, 
                            {name: "Denali", height: 20310}]

function findNameOfTallestMountain(mountains:Mountain[]) : string{
    let heighestMountain:string = "";
    let height: number = mountains[0].height;
    for (let i = 0; i < mountains.length; i++){
        if(mountains[i].height > height){
            height = mountains[i].height;
            heighestMountain = mountains[i].name;
        }
    }
    return heighestMountain;
}

console.log(findNameOfTallestMountain(mountains))

interface Product {
    name: string,
    price: number
}

let products:Product[] = [
    {name: "5700XT", price: 450},
    {name: "3600X", price: 189},
    {name: "570X", price: 179}]

function calcAverageProductPrice(products:Product[]) : number{
    let sum: number = products.reduce((sum, product) => sum + product.price, 0);
    // let sum: number = 0;
    // for (let i = 0; i < products.length; i++) {
    //     sum += products[i].price;
    let average: number = sum / products.length;
    return average;
}

console.log(calcAverageProductPrice(products))

interface InventoryItem {
    product: Product
    quantity: number
}

let inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

function calcInventoryValue(inventory: InventoryItem[]): number {
    let totalValue: number = 0;
    for (let i = 0; i < inventory.length; i++) {
        totalValue += inventory[i].product.price * inventory[i].quantity;
    }
    return totalValue;
}

console.log(calcInventoryValue(inventory))
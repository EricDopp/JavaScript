var mountains = [{ name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }];
function findNameOfTallestMountain(mountains) {
    var heighestMountain = "";
    var height = mountains[0].height;
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > height) {
            height = mountains[i].height;
            heighestMountain = mountains[i].name;
        }
    }
    return heighestMountain;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
    { name: "5700XT", price: 450 },
    { name: "3600X", price: 189 },
    { name: "570X", price: 179 }
];
function calcAverageProductPrice(products) {
    var sum = products.reduce(function (sum, product) { return sum + product.price; }, 0);
    // let sum: number = 0;
    // for (let i = 0; i < products.length; i++) {
    //     sum += products[i].price;
    var average = sum / products.length;
    return average;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    for (var i = 0; i < inventory.length; i++) {
        totalValue += inventory[i].product.price * inventory[i].quantity;
    }
    return totalValue;
}
console.log(calcInventoryValue(inventory));

// Write code that:
// 1. Create an array of products with: id, name, price
// 2. Loop through each product using a for loop
// 3. For each product, check if price > 1000:
//    - If yes, log: "[name] is expensive: [price]"
//    - If no, log: "[name] is affordable: [price]"
// Example output:
//   "Laptop is expensive: 49999"
//   "Mouse is affordable: 899"

let products =  [
    { id: 1, name: "Laptop", price: 19999 },
    { id: 2, name: "Keyboard", price: 1999 },
    { id: 3, name: "Mouse", price: 599 }
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price > 1000) {
        console.log(products[i].name, "is expensive", products[i].price);
    } else {
        console.log(products[i].name, "is affordable", products[i].price);
    }
}
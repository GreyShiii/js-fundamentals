// ARRAY METHODS & STRING MANIPULATION - Phase 1.4

// 1. MAP - Transform each item
const prices = [100, 200, 300];
const pricesWithTax = prices.map((price) => price * 1.1); // Add 10% tax
console.log(`Original prices: ${prices}`);
console.log(`Prices with 10% tax: ${pricesWithTax}`); // [110, 220, 330]

// 2. FILTER - Keep only items that match condition
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
];

const expensiveProducts = products.filter((product) => product.price > 10000);
console.log("\nExpensive products (>10000):", expensiveProducts);

// 3. FIND - Get first item that matches
const found = products.find((product) => product.name === "Mouse");
console.log("Found product:", found); // { name: "Mouse", price: 500 }

// 4. REDUCE - Combine all items into one value
const allPrices = [100, 200, 300, 400];
const total = allPrices.reduce((sum, price) => sum + price, 0);
console.log("\nTotal of all prices:", total); // 1000
 
// 5. STRING: INCLUDES - Check if string contains text
const productName = "Gaming Laptop";
console.log("\nDoes 'Gaming Laptop' include 'Gaming'?", productName.includes("Gaming"));
console.log("Does 'Gaming Laptop' include 'Mouse'?", productName.includes("Mouse"));

// 6. STRING: SPLIT - Break string into array
const csv = "Laptop,Mouse,Keyboard,Monitor";
const items = csv.split(",");
console.log("\nItems from CSV:", items);

// 7. STRING: JOIN - Combine array into string
const itemArray = ["Apple", "Banana", "Orange"];
const fruitList = itemArray.join(" - ");
console.log("Fruit list:", fruitList);

// 8. STRING: TOUPPER / TOLOWER
const text = "Hello World";
console.log("\nOriginal:", text);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// 9. COMBINING: Filter products and get names
const affordableProducts = products
    .filter((product) => product.price < 10000)
    .map((product) => product.name);
console.log("\nAffordable product names:", affordableProducts);

// 10. COMBINING: Filter products by price and calculate total
const discountedTotal = products
    .filter((product) => product.price > 1000)
    .map((product) => product.price * 0.9) // 10% discount
    .reduce((sum, price) => sum + price, 0);
console.log("Total after 10% discount on items > 1000:", discountedTotal);

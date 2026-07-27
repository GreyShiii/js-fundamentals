// Write code that:
// 1. Create an array of products with: name, price, category
// 2. Use filter() to get only "Electronics" products
// 3. Use map() to get just the names of those products
// 4. Log the result
// Example output: ["Laptop", "Mouse", "Keyboard"]

const products = [
    {name: "Mouse", price: 599, category: "Electronics"},
    {name: "Keyboard", price: 899, category: "Electronics"},
    {name: "Chair", price: 299, category: "Houseware"},
];

const electronicProducts = products
    .filter((product) => product.category === "Electronics")
    .map((product) => product.name);
console.log("Electronics list:", electronicProducts);


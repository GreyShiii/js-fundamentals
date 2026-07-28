// Write code that:
// 1. Create an array of product names: ["Laptop", "Mouse", "Keyboard", "Monitor"]
// 2. Use find() to search for "Mouse"
// 3. Use includes() to check if "Laptop" is in each name
// 4. Log results showing which product was found and which names include "Laptop"

const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const mouseSearch = products.find((product) => product === "Mouse"); // Finding mouse

console.log("Found product:", mouseSearch);

products.forEach((product) => {
    console.log(`Does "${product}" include "Laptop?"`, product.includes("Laptop"));
});
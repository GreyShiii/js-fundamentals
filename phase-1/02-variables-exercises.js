// Create an array with 3 ShopLara products
// Each product should have: id, name, price, category

// Then:
// 1. Add a 4th product to the array
// 2. Change the price of the 2nd product to 1999
// 3. Log the entire array

// Bonus: Log only the names of all products (hint: use a loop)

let products = [
    { id: 1, name: "Microphone", price: 299, category: "Electronics"},
    { id: 2, name: "Mouse", price: 599, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 2999, category: "Electronics" }
];

products.push({ id:4, name: "Earphones", price: 799, category: "Electronics" });    // Added 4th product
products[1].price = 1999;   // Changed the 2nd product price to 1999

console.log(products);  // Logged the entire array

products.forEach(product => {   // Logged all the names of all products (Bonus)
    console.log(product.name);
});
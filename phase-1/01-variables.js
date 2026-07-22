// VARIABLES & DATA TYPES - Phase 1.1

// 1. PRIMITIVES
const productName = "Laptop";                           // String
const price = 49999;                                    // Number
const isAvailable = true;                               // Boolean
const discount = null;                                  // null (intentionally empty)
let lastReview;                                         // undefined (declared but not assigned)

// 2. OBJECTS (product from ShopLara)
const product = {
    id: 1,
    name: "Gaming Laptop",
    price: 49999,
    category: "Electronics",
    inStock: true,
    rating: 4.5
};

// 3. ARRAYS
const products = [
    { name: "Laptop", price: 49999 },
    { name: "Mouse", price: 899 },
    { name: "Keyboard", price: 2999 }
];

// 4. ACCESSING DATA
console.log(product.name);                              // "Gaming Laptop"
console.log(product["price"]);                          // 49999
console.log(products[0].name);                          // "Laptop"

// 5. MODIFYING DATA
product.rating = 4.8;                                   // Update existing property
product.discount = 10;                                  // Add new property
products.push({ name: "Monitor", price: 12999 });       // Add to array

console.log(product);
console.log(products);




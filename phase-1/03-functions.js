// FUNCTIONS - Phase 1.3

// 1. FUNCTION DECLARATION (traditional syntax)
function add(a, b) {
    return a + b;
}

console.log(`Add 5 + 3 ${add(5, 3)}`);  // 8

// 2. FUNCTION WITH ONE PARAMETER
function greetCustomer(name) {
    return "Welcome, " + name + "!";
}

console.log(greetCustomer("Grey"));

// 3. FUNCTION WITH MULTIPLE PARAMETERS
function calculateDiscount(price, discountPercent) {
    const discountAmout = price * (discountPercent / 100);
    const finalPrice = price - discountAmout;
    return finalPrice;
}

console.log(`Original price: 1000, 20% discount: ${calculateDiscount(1000, 20)}`);  // 800

// 4. FUNCTION THAT DOESN'T RETURN ANYTHING
function logProductInfo(name, price) {
    console.log("Product: " + name);
    console.log("Price: " + price);
}

logProductInfo("Laptop", 49999);

// 5. FUNCTION WITH DEFAULT PARAMETER
function checkStock (quantity, minRequired = 10) {
    if (quantity >= minRequired) {
        return "In stock";
    } else {
        return "Low stock";
    }
}

console.log(`Quantity 15, min 10: ${checkStock(15)}`);
console.log(`Quantity 5, min 10: ${checkStock(5)}`);
console.log(`Quantity 8, min 10: ${checkStock(8)}`);

// 6. ARROW FUNCTION (modern ES6 syntax)
const multiply = (x, y) => {
    return x * y;
};

console.log(`Multiply 4 * 5: ${multiply(4, 5)}`);   // 20

// 7. ARROW FUNCTION (short form - implicit return)
const square = (num) => num * num;

console.log(`Square of 6: ${square(6)}`);   // 36

// 8. FUNCTION THAT PROCESSES AN ARRAY
function getTotalPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

const shopProducts = [
    { name: "Laptop", price: 49999 },
    { name: "Mouse", price: 899 },
    { name: "Keyboard", price: 2999 }
];

console.log(`Total price of all products: ${getTotalPrice(shopProducts)}`);

// Write a function called calculateCartTotal that:
// 1. Takes 1 parameter: array of products (each with a price property)
// 2. Loops through the array and sums up all prices
// 3. Returns the total
// 4. Create an array of 3-4 products and test it
// Example: [{ price: 100 }, { price: 200 }] → returns 300

const calculateCartTotal = (products) => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;
}

cartProducts = [
    { price: 100 },
    { price: 200 },
    { price: 300 },
    { price: 400 },
];

console.log(calculateCartTotal(cartProducts)); // 1000

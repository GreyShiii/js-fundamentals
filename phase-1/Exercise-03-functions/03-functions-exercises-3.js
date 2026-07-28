// Write an arrow function called applyDiscount that:
// 1. Takes 2 parameters: price, discountPercent
// 2. Calculates the final price after discount
// 3. Returns the final price
// 4. Test it with at least 3 different prices/discounts
// Example: applyDiscount(1000, 20) → returns 800

// Bonus: Use short-form arrow function (implicit return)

// const applyDiscount = (price, discountPercent) => {
//     const discountAmount = price * (discountPercent / 100);
//     const finalPrice = price - discountAmount;
//     return finalPrice;
// }

const applyDiscount = (price, discountPercent) => price - (price * (discountPercent / 100)); // short-form arrow function

console.log(applyDiscount(1000, 20)); // 800
console.log(applyDiscount(500, 80)); // 100
console.log(applyDiscount(100, 50)); // 50




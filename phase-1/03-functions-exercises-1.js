// Write a function called validatePrice that:
// 1. Takes 2 parameters: price, maxBudget
// 2. Returns:
//    - "You can afford it" if price < maxBudget
//    - "Exactly your budget" if price === maxBudget
//    - "Too expensive" if price > maxBudget
// 3. Call it with at least 3 different test cases

const validatePrice = (price, maxBudget) => {
    if (price < maxBudget) {
        return "You can afford it";
    } else if (price === maxBudget) {
        return "Exaclty your budget";
    } else {
        return "Too expensive"
    }
}

console.log(validatePrice(500, 550)); // you can afford it
console.log(validatePrice(500, 500)); // Exactly your budget
console.log(validatePrice(500, 430)); // Too expensive



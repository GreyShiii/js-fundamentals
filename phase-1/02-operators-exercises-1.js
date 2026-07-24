// Write code that:
// 1. Create a variable 'productPrice' with value 4500
// 2. Create a variable 'maxBudget' with value 5000
// 3. Use if/else to check:
//    - If productPrice is less than maxBudget, log "You can afford it"
//    - Else if productPrice equals maxBudget, log "Exactly your budget"
//    - Else log "Too expensive"
// 4. Test with different price values

const productPrice = 4500;
const maxBudget = 5000;

if (productPrice < maxBudget) {
    console.log("You can afford it");
} else if (productPrice === maxBudget) {
    console.log("Exactly your budget");
} else {
    console.log("Too expensive");
}
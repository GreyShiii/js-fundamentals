// OPERATIONS & CONTROL FLOW - Phase 1.2

// 1. ARITHMETIC OPERATORS
const a = 10;
const b = 3;

console.log("Addition: ", a + b);                       // 13
console.log("Subtraction: ", a - b);                    // 7
console.log("Multiplication: ", a * b);                 // 30
console.log("Division: ", a / b);                       // 3.333...
console.log("Modulus (remainder):", a % b);             // 1

// 2. COMPARISON OPERATORS
const price = 5000;
const budget = 8000;

console.log("Equal (==):", price == 5000);              // true (loose equality)
console.log("Strict Equal (===):", price === 5000);     // false (strictly equality)
console.log("Not Equal (!==)", price !== 5000);         // true 
console.log("Greater than:", budget > price);           // true
console.log("Less than:", price < budget);              // true
console.log("Greater or equal:", budget >= 8000);       // true

// 3. LOGICAL OPERATORS
const hasItem = true;
const isExpensive = false;

console.log("AND (&&):", hasItem && isExpensive);       // false (both must be true)
console.log("OR (||):", hasItem || isExpensive);        // true (at least one true)
console.log("NOT (!):", !isExpensive);                  // true (reverse the value)

// 4. IF/ELSE STATEMENTS
const userAge = 20;

if (userAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");   
}

// 5. IF/ELSE IF/ELSE (multiple conditions)
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 6. FOR LOOP (repeat code)
console.log("\nFor Loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// 7. LOOP THROUGH ARRAY
const productNames = ["Laptop", "Mouse", "Keyboard"];

console.log("\nProducts:");
for (let i = 0; i < productNames.length; i++) {
    console.log(i + 1, "-", productNames[i]);
}










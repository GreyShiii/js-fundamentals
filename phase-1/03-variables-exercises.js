// This works:
const product = { name: "Laptop" };
product.name = "Gaming Laptop";  // ✅ Mutating object is OK
console.log(product.name);

// This FAILS (uncomment to test):
// const product = { name: "Laptop" };
// product = { name: "Tablet" };  // ❌ Can't reassign

// Explain in a comment: Why does the first work but the second fails?
/* Because its trying to modify the whole object not just the value but the structure (The actual implementation of object) */
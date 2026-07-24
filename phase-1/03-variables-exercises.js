// This works:
const product = { name: "Laptop" };
product.name = "Gaming Laptop";  // ✅ Mutating object is OK
console.log(product.name);

// This FAILS (uncomment to test):
// const product = { name: "Laptop" };
// product = { name: "Tablet" };  // ❌ Can't reassign

// Explain in a comment: Why does the first work but the second fails?
/* First example: that works is you are mutating the object's value or content, not reassigning product itself.
   Second example: Its trying to make the const product into a new object. That is reassignment which is const doesn't allow it.*/
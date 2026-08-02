// Exercise 2: Using event.preventDefault() on Forms
// Create an HTML page with:
// An input field for "item name"
// An input field for "quantity" (number)
// A submit button
// A div to show messages
// When the form is submitted:
// Use preventDefault() to stop the page refresh
// Get the input values
// Validate:
// If item name is empty, show: "Error: Item name is required!"
// If quantity is 0 or less, show: "Error: Quantity must be at least 1!"
// If valid, show: "✓ Added: [name] x[quantity]" and clear the inputs
// Test: Page should NEVER refresh when you submit
// Hint: Use event.target inside the form listener to get the form itself. Access inputs with getElementById().

const productForm = document.getElementById("productForm");
const result = document.getElementById("result");

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const productName = event.target.name.value.trim();
    const productQuantity = event.target.quantity.value.trim();

    if (!productName) {
        result.textContent = `Error: Item name is required!`;
        return;
    }

    if (!productQuantity || productQuantity <= 0) {
        result.textContent = `Error: Quantity must be at least 1!`;
        return;
    }

    result.textContent = `Added: ${productName} ${productQuantity}`;
    event.target.reset();
});
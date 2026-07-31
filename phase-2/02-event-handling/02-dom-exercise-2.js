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
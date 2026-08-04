// Exercise 2: async/await with try/catch Error Handling

// Write code that:

// Create an HTML page with a button "Fetch with Error" and a div for output
// When clicked, try to fetch from: https://jsonplaceholder.typicode.com/invalid-post
// Use try/catch to:
// Try fetching the data
// Check if response.ok (if not, throw error)
// If error, catch it and display: "Error: [error message]" in red
// Test: Click button and see error message appear
// Log error to console

// Hint: Use try { ... } catch (error) { ... } pattern. Check response.ok before calling .json().
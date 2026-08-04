// Exercise 3: Multiple async Calls in Sequence

// Write code that:

// Create an HTML page with a button "Load Complete Data" and a div for output
// When clicked, create an async function that:
// Fetches a user from: https://jsonplaceholder.typicode.com/users/2
// Fetches posts for that user: https://jsonplaceholder.typicode.com/posts?userId=2&_limit=4
// Use try/catch for error handling
// Display:
// User name and email
// Number of posts
// First post title (first 40 characters)
// Test: Click button and see all data appear
// Log both user and posts to console

// Hint:

// Use async function (not arrow function in addEventListener)
// Fetch user first, then fetch posts
// Both inside the same try block
// Use .substring(0, 40) to limit title length
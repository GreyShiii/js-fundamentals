// Exercise 3: Event Delegation
// Create an HTML page with:
// A container div with 3 items inside (each item has text and a delete button)
// An "Add New Item" button
// Each item should be in its own div with a delete button
// Using event delegation:
// Add ONE listener to the container
// When a delete button is clicked, remove that item from the DOM
// Log: "Deleted: [item text]"
// Bonus: Click "Add New Item" to add a new item dynamically. The delete button should work automatically (thanks to event delegation!)
// Hint: Use event.target.classList.contains("delete-btn") to check if a delete button was clicked. Use closest() to get the item div: event.target.closest(".item").
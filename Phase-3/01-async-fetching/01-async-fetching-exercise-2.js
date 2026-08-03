// Exercise 2: Fetch with Error Handling
// Write code that:
// Create an HTML page with a button "Fetch Invalid" and a div for output
// When button is clicked, fetch from a fake/wrong URL: https://jsonplaceholder.typicode.com/invalid-endpoint
// Use .then() to check if response is OK (check response.ok)
// If not OK, throw an error: throw new Error("Failed to fetch")
// Use .catch() to handle the error and display: "Error: [error message]" in the div
// Test: Click button and see the error message appear
// Log the error to console
// Hint: Check response.ok before calling .json(). Use .catch(error => { ... }) to handle failures.

const fetchInvalid = document.getElementById("fetchInvalid");
const result = document.getElementById("result");

fetchInvalid.addEventListener("click", () => {
    result.textContent = "Loading...";
    result.className = "loading";

    fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        result.className = "";
        result.textContent = `Result: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        result.className = "error";
        result.textContent = `Error: ${error.message}`;
    });
});
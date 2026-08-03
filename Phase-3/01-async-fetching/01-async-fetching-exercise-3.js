// Exercise 3: Fetch Multiple Items & Render to DOM
// Write code that:
// Create an HTML page with a button "Load Products" and a container div
// When button is clicked:
// Show loading message: "Loading products..."
// Fetch posts from: https://jsonplaceholder.typicode.com/posts?_limit=5
// When data arrives:
// Clear the loading message
// Loop through the fetched data
// For each item, create a div with:
// The post ID
// The post title (first 50 characters)
// Add each div to the container
// Test: Click button, see loading message, then see 5 products appear
// Log how many products were rendered
// Hint: Use .forEach() to loop through data. Use document.createElement() and .appendChild() to add to DOM. Clear the container with .innerHTML = "" before adding new items.

const loadProducts = document.getElementById("loadProducts");
const result = document.getElementById("result");

loadProducts.addEventListener("click", () => {
  result.innerHTML = `<p class='loading'>Loading products...</p>`;

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = "";

      data.forEach((product) => {
        const div = document.createElement("div");
        div.className = "products";
        div.innerHTML = `
            <strong>ID:</strong> ${product.id}<br>
            <strong>Title:</strong> ${product.title.slice(0, 50)}
        `;
        result.appendChild(div);
      });
      console.log("Result:",data.length);
    })
    .catch(error => {
        result.innerHTML = `<p class='error'>Error: ${error.message}</p>`;
    })
});

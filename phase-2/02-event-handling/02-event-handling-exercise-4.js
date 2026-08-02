// Exercise 4: Keyboard Events - Live Search
// Create an HTML page with:
// A search input field
// A list of 5 product names (as divs)
// When you type in the search box:
// Use event.target.value to get what the user typed
// Convert to lowercase
// Loop through products and show only ones that include the search query
// If search box is empty, hide all products
// Log: "Searching for: [query]"
// // Hint: Add/remove a CSS class like .visible to show/hide products. Use .toLowerCase().includes() to check if a product name matches.

const inputSearch = document.getElementById("inputSearch");
const products = document.querySelectorAll(".products");

inputSearch.addEventListener("input", (event) => {
    const inputResult = event.target.value.toLowerCase();
    
    products.forEach((product) => {
        const productName = product.getAttribute("data-product").toLowerCase();

        if (productName.includes(inputResult) && inputResult !== "") {
            product.classList.add("visible");
        } else {
            product.classList.remove("visible");
        }
    });
});
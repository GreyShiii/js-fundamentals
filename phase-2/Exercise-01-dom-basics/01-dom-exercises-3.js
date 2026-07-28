// Write code that:
// 1. Create an HTML page with a list of 4 products
// 2. Add CSS class .selected { background-color: yellow; }
// 3. Use querySelectorAll to select all products
// 4. Add click listener to EACH product that:
//    - Toggles the "selected" class (use classList.toggle())
//    - Logs "Clicked: [product name]"
// 5. Test: Click products to highlight/unhighlight them

const products = document.querySelectorAll(".product");

products.forEach((product) => {
    product.addEventListener("click", () => {
        product.classList.toggle("selected");
        console.log("Clicked:", product.textContent);
    })
})
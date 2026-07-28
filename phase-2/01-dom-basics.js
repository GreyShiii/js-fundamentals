// DOM BASICS - Phase 2.1

// 1. SELECT ELEMENTS by ID
const messageElement = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");

// 2. MODIFY TEXT CONTENT
changeTextBtn.addEventListener("click", () => {
    messageElement.textContent = "Text has been changed!";
});

// 3. SELECT AND MODIFY
const productInfo = document.getElementById("productInfo");
const selectProductBtn = document.getElementById("selectProductBtn");

selectProductBtn.addEventListener("click", () => {
    productInfo.textContent = "Product: Gaming Laptop - $49999";
});

// 4. SHOW/HIDE ELEMENTS
const secretMessage = document.getElementById("secretMessage");
const toggleBtn = document.getElementById("toggleBtn");
let isVisible = false;

toggleBtn.addEventListener("click", () => {
    if (isVisible) {
        secretMessage.classList.add("hidden");
        toggleBtn.textContent = "Show Secret";
    } else {
        secretMessage.classList.remove("hidden");
        toggleBtn.textContent = "Hide Secret";
    }
    isVisible = !isVisible;
});

// 5. SELECT MULTIPLE ELEMENTS
const products = document.querySelectorAll(".product");
console.log("Found products:", products.length);

products.forEach((product) => {
    product.addEventListener("click", () => {
        console.log("Clicked:", product.textContent);
        product.style.backgroundColor = "#ffffcc";
    });
});
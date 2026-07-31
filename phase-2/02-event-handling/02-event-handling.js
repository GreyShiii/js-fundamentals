// EVENT HANDLING DEEP DIVE - Phase 2.2

// 1. EVENT.TARGET

const productButtons = document.querySelectorAll(".product-btn");
const output = document.getElementById("output");

productButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        productName = event.target.textContent;
        productId = event.target.id;
        
        output.textContent = `You clicked: ${productName} (ID: ${productId})`;
    });
});

console.log("Section 1: event.target working");

// 2. EVENT.PREVENTDEFAULT

const productForm = document.getElementById("productForm");
const formOutput = document.getElementById("formOutput");

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputName = document.getElementById("productName");
    const inputPrice=  document.getElementById("productPrice");
    const productName = inputName.value.trim();
    const productPrice = inputPrice.value.trim();

    if (!productName) {
        formOutput.textContent = "Error: Product name is required!";
        return;
    }

    if (!productPrice || productPrice <= 0) {
        formOutput.textContent = "Error: Price must be greater than 0!";
        return;
    }

    formOutput.textContent = `Added: ${productName} - ₱${productPrice}`;
    inputName.value = "";
    inputPrice.value = "";
});

// 3. EVENT DELEGATION

const cartContainer = document.getElementById("cartContainer");
const addItemBtn = document.getElementById("addItemBtn");

cartContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const cartItem = event.target.parentElement;
        const productName = cartItem.querySelector("span").textContent;

        cartItem.remove();
        console.log(`Product removed: ${productName}`);
    }
});

const randomProducts = [
    { name: "Headset", price: "₱1999" },
    { name: "Webcam", price: "₱3499" },
    { name: "USB Hub", price: "₱899" }
];

addItemBtn.addEventListener("click", () => {
    const randomProduct = randomProducts[Math.floor(Math.random() * randomProducts.length)];

    const newItem = document.createElement("div");
    newItem.className = "cart-item";
    newItem.innerHTML = `
    <span>${randomProduct.name} - ${randomProduct.price}</span>
    <button class="remove-btn">Remove</button>
    `;

    cartContainer.appendChild(newItem);
    console.log(`Added: ${randomProduct.name}`);
});

// 4. KEYBOARD EVENTS

const productSearch = document.getElementById("productSearch");
const searchResult = document.querySelectorAll(".search-result");

productSearch.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();

    searchResult.forEach((result) => {
        const productName = result.getAttribute("data-product").toLocaleLowerCase();

        if (productName.includes(query) && query !== "") {
            result.classList.add("visible")
        } else {
            result.classList.remove("visible");
        }
    });
});
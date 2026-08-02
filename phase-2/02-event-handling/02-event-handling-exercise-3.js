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

const productContainer = document.getElementById("productContainer");
const addNewBtn = document.getElementById("addNewBtn");

productContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const cartItem = event.target.closest(".cart-item");
        const productName = cartItem.querySelector("span").textContent;

        cartItem.remove();
        console.log(`Deleted: ${productName}`);
    }
});

const productLists = [
    { name:"Monitor" },
    { name:"Headset" },
    { name:"Earphones" }
]

addNewBtn.addEventListener("click", (event) => {
    const randomProduct = productLists[Math.floor(Math.random() * productLists.length)];

    const newProduct = document.createElement("div");
    newProduct.className = "cart-item";
    newProduct.innerHTML = `
    <span>${randomProduct.name}</span>
    <button class="delete-btn">Delete</button>
    `;

    productContainer.appendChild(newProduct);
});
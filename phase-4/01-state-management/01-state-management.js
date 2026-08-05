// STATE MANAGEMENT - Phase 4

// ========================================
// 1. SIMPLE STATE & RENDER
// ========================================

// Define state (all data in ONE place)
const counterState = {
    count: 0
};

// Define how to update state
function updateCounter(operation) {
    if (operation === "increment") {
        counterState.count += 1;
    } else if (operation === "decrement") {
        counterState.count -= 1;
    } else if (operation === "reset") {
        counterState.count = 0;
    }
    
    // After updating state, re-render
    renderCounter();
}

// Define how to render based on state
function renderCounter() {
    const countElement = document.getElementById("count");
    countElement.textContent = counterState.count;
}

// Connect to buttons
document.getElementById("incrementBtn").addEventListener("click", () => {
    updateCounter("increment");
});

document.getElementById("decrementBtn").addEventListener("click", () => {
    updateCounter("decrement");
});

document.getElementById("resetBtn").addEventListener("click", () => {
    updateCounter("reset");
});

console.log("Section 1 loaded: Counter with state");

// ========================================
// 2. SHOPPING CART STATE
// ========================================

// SAMPLE DATA
const productsData = [
    { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
    { id: 2, name: "Mouse", price: 599, category: "Electronics" },
    { id: 3, name: "Desk", price: 5999, category: "Furniture" },
    { id: 4, name: "Chair", price: 3999, category: "Furniture" },
    { id: 5, name: "Monitor", price: 12999, category: "Electronics" }
];

// DEFINE STATE (ONE source of truth)
const appState = {
    products: productsData,
    selectedCategory: "all",
    cartItems: [],  // { id, name, price, quantity }
    isLoading: false,
    error: null
};

// UPDATE STATE - Change category
function selectCategory(category) {
    appState.selectedCategory = category;
    render();  // Re-render everything after state change
}

// UPDATE STATE - Add to cart
function addToCart(productId) {
    const product = appState.products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = appState.cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;  // Already in cart, increase quantity
    } else {
        appState.cartItems.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    render();  // Re-render after state change
    console.log("Cart updated:", appState.cartItems);
}

// UPDATE STATE - Remove from cart
function removeFromCart(productId) {
    appState.cartItems = appState.cartItems.filter(item => item.id !== productId);
    render();
    console.log("Cart updated:", appState.cartItems);
}

// RENDER - Display products based on selected category
function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    // Filter products based on selected category
    const filteredProducts = appState.selectedCategory === "all"
        ? appState.products
        : appState.products.filter(p => p.category === appState.selectedCategory);
    
    // Render each product
    filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <div>
                <strong>${product.name}</strong><br>
                ₱${product.price} (${product.category})
            </div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

// RENDER - Display cart items
function renderCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartCountSpan = document.getElementById("cartCount");
    const cartTotalSpan = document.getElementById("cartTotal");
    
    cartItemsDiv.innerHTML = "";
    
    if (appState.cartItems.length === 0) {
        cartItemsDiv.innerHTML = "<p>Cart is empty</p>";
    } else {
        appState.cartItems.forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                ${item.name} x${item.quantity} = ₱${item.price * item.quantity}
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsDiv.appendChild(div);
        });
    }
    
    // Update cart count and total
    cartCountSpan.textContent = appState.cartItems.length;
    
    const total = appState.cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);
    cartTotalSpan.textContent = total;
}

// RENDER - Update category buttons
function renderCategoryButtons() {
    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach(btn => {
        const category = btn.getAttribute("data-category");
        if (category === appState.selectedCategory) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// MASTER RENDER - Call all render functions
function render() {
    renderProducts();
    renderCart();
    renderCategoryButtons();
}

// SETUP - Add event listeners to category buttons
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        selectCategory(category);
    });
});

// Initial render
render();

console.log("Section 2 loaded: Shopping cart with state");
console.log("\n=== State Management Loaded ===");
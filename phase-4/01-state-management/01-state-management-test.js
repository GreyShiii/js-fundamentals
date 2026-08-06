// 1. SIMPLE STATE & RENDER
const counterState = {
    count: 0
};

function updateCounter(operation) {
    if (operation === "increment") {
        counterState.count += 1;
    } else if (operation === "decrement") {
        counterState.count -= 1;
    } else if (operation === "reset") {
        counterState.count = 0;
    }

    renderCounter();
}

function renderCounter() {
    const countElement = document.getElementById("count");
    countElement.textContent = counterState.count;
}

document.getElementById("incrementBtn").addEventListener("click", () => {
    updateCounter("increment");
});

document.getElementById("decrementBtn").addEventListener("click", () => {
    updateCounter("decrement");
});

document.getElementById("resetBtn").addEventListener("click", () => {
    updateCounter("reset");
});

// 2. SHOPPING CART STATE
const productsData = [
  { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
  { id: 2, name: "Mouse", price: 599, category: "Electronics" },
  { id: 3, name: "Desk", price: 5999, category: "Furniture" },
  { id: 4, name: "Chair", price: 3999, category: "Furniture" },
  { id: 5, name: "Monitor", price: 12999, category: "Electronics" },
];

const appState = {
  products: productsData,
  selectedCategory: "all",
  cartItem: [],
};

function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const filteredProducts = appState.selectedCategory === "all"
  ? appState.products
  : appState.products.filter((product) => product.category === appState.selectedCategory)

  filteredProducts.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div>
        <strong>${product.name}</strong><br>
        ${product.price} (${product.category})
      </div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    productList.appendChild(div);
  })
}

function selectedCategory(category) {
  appState.selectedCategory = category;
}

function renderCart() {
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";

  if (appState.cartItem.length === 0) {
    cartItems.innerHTML = `<p>Cart is empty</p>`;
  } else {
    appState.cartItem.forEach((item) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <strong>${item.name}</strong> x (${item.quantity}) - P${item.price * item.quantity}
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItems.appendChild(div);
    });
  }
  const totalItems = appState.cartItem.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  const total = appState.cartItem.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  cartTotal.textContent = total;
}

function addToCart(productId) {
  const product = appState.products.find((product) => product.id === productId);
  const existingProduct = appState.cartItem.find((product) => product.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    appState.cartItem.push({
      id: product.id,
      name: product.name,
      price:  product.price,
      quantity: 1
    });
  }
  renderCart();
}

function removeFromCart(productId) {
  appState.cartItem = appState.cartItem.filter((item) => item.id !== productId);
  renderCart();
}

function renderCategoryButtons() {
  const button = document.querySelectorAll(".category-btn");
  button.forEach((btn) => {
    const category = btn.getAttribute("data-category");
    if (category === appState.selectedCategory) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function render() {
  renderProducts();
  renderCart();
  renderCategoryButtons();
}

document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedButton = btn.getAttribute("data-category");
    selectedCategory(selectedButton);
    render();
  });
})

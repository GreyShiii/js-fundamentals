// Create an HTML page with:
// Category filter buttons: "All", "Electronics", "Furniture"
// Display products based on selected category
// Active category button should be highlighted (darker color)

const products = [
    { id: 1, name: "Laptop", price: 49999, category: "Electronics" },
    { id: 2, name: "Mouse", price: 599, category: "Electronics" },
    { id: 3, name: "Desk", price: 5999, category: "Furniture" },
    { id: 4, name: "Chair", price: 3999, category: "Furniture" },
    { id: 5, name: "Monitor", price: 12999, category: "Electronics" }
];

const appState = {
    products: products,
    selectedCategory: "all"
};

function selectedCategory(category) {
    appState.selectedCategory = category;
    render();
};

function renderProducts() {
    const productDisplay = document.getElementById("productDisplay");
    productDisplay.innerHTML = "";

    const filteredProducts = appState.selectedCategory === "all"
    ? appState.products
    : appState.products.filter((product) => product.category === appState.selectedCategory);

    filteredProducts.forEach((product) => {
        const div = document.createElement("div");
        div.className = "products";
        div.innerHTML = `
            <strong>${product.name}: </strong><span>${product.price}</span>
        `;
        productDisplay.appendChild(div);
    });
};

function renderCategoryButton() {
    const categoryBtn = document.querySelectorAll(".category-btn");
    categoryBtn.forEach((btn) => {
            const category = btn.getAttribute("data-category");
            if (category === appState.selectedCategory) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
    });
};

document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonCategory = btn.getAttribute("data-category");
        selectedCategory(buttonCategory);
    });
});

function render() {
    renderProducts();
    renderCategoryButton();
}
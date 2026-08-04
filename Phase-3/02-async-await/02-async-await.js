// ASYNC/AWAIT - Phase 3.2

// ========================================
// 1. SIMPLE ASYNC/AWAIT
// ========================================

const simpleBtn = document.getElementById("simpleBtn");
const output1 = document.getElementById("output1");

simpleBtn.addEventListener("click", async () => {
    output1.textContent = "Loading...";
    output1.className = "loading";
    
    // async function can use 'await' inside
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    
    output1.className = "success";
    output1.innerHTML = `
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
    `;
    
    console.log("Data received:", data);
});

console.log("Section 1 loaded: Simple async/await");

// ========================================
// 2. ASYNC/AWAIT WITH TRY/CATCH
// ========================================

const errorBtn = document.getElementById("errorBtn");
const output2 = document.getElementById("output2");

errorBtn.addEventListener("click", async () => {
    output2.textContent = "Loading...";
    output2.className = "loading";
    
    try {
        // Try to fetch
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid");
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        output2.className = "success";
        output2.textContent = `Success: ${JSON.stringify(data)}`;
        
    } catch (error) {
        // Catch any error that happened above
        output2.className = "error";
        output2.textContent = `Error: ${error.message}`;
        console.log("Error caught:", error);
    }
});

console.log("Section 2 loaded: async/await with try/catch");

// ========================================
// 3. MULTIPLE ASYNC OPERATIONS
// ========================================

const multipleBtn = document.getElementById("multipleBtn");
const output3 = document.getElementById("output3");

multipleBtn.addEventListener("click", async () => {
    output3.textContent = "Loading...";
    output3.className = "loading";
    
    try {
        // Fetch user data
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await userResponse.json();
        
        // Fetch products data
        const productsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3");
        const products = await productsResponse.json();
        
        // Display both
        output3.className = "success";
        output3.innerHTML = `
            <p><strong>User:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Posts:</strong> ${products.length}</p>
            <p><strong>First Post:</strong> ${products[0].title}</p>
        `;
        
        console.log("User:", user);
        console.log("Products:", products);
        
    } catch (error) {
        output3.className = "error";
        output3.textContent = `Error: ${error.message}`;
    }
});

console.log("Section 3 loaded: Multiple async operations");

// ========================================
// 4. ASYNC WITH LOADING STATE
// ========================================

const loadingBtn = document.getElementById("loadingBtn");
const output4 = document.getElementById("output4");

async function loadProducts() {
    try {
        output4.innerHTML = `<p class="loading">Loading products...</p>`;
        
        // Fetch products
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const products = await response.json();
        
        // Clear loading message
        output4.innerHTML = "";
        
        // Render products
        products.forEach(product => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <strong>ID: ${product.id}</strong><br>
                ${product.title.substring(0, 50)}
            `;
            output4.appendChild(div);
        });
        
        console.log(`Rendered ${products.length} products`);
        
    } catch (error) {
        output4.innerHTML = `<p class="error">Failed to load: ${error.message}</p>`;
        console.log("Error:", error);
    }
}

loadingBtn.addEventListener("click", loadProducts);

console.log("Section 4 loaded: async/await with loading state");

console.log("\n=== All sections loaded! ===");
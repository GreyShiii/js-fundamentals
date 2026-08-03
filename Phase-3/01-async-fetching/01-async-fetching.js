// ASYNC & FETCHING - Phase 3.1

// 1. SIMPLE FETCH - Basic GET request

const fetchBtn = document.getElementById("fetchBtn");
const output1 = document.getElementById("output1");

fetchBtn.addEventListener("click", () => {
    output1.textContent = "Loading...";
    output1.className = "loading";

    // Fetch data from JSONPlaceholder (free API for testing)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json()) // Convert to JSON
    .then(data => {
        // Data arrived! Use it
        output1.className = "";
        output1.innerHTML = `
        <strong>Post ID:</strong> ${data.id}<br>
        <strong>Title:</strong> ${data.title}<br>
        <strong>Body:</strong> ${data.body} 
        `;
        console.log("Data recieved:", data);
    });
});

// 2. FETCH WITH ERROR HANDLING

const fetchWithErrorBtn = document.getElementById("fetchWithErrorBtn");
const output2 = document.getElementById("output2");

fetchWithErrorBtn.addEventListener("click", () => {
    output2.textContent = "Loading...";
    output2.className = "loading";
    
    // Fetch from non-existent endpoint (will fail)
    fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
        .then(response => {
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            output2.className = "";
            output2.textContent = `Success: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            // Something went wrong!
            output2.className = "error";
            output2.textContent = `Error: ${error.message}`;
            console.log("Error caught:", error);
        });
});

// 3. FETCH & RENDER PRODUCTS TO DOM

const loadProductsBtn = document.getElementById("loadProductsBtn");
const productList = document.getElementById("productList");

loadProductsBtn.addEventListener("click", () => {
    productList.innerHTML = "<p class='loading'>Loading products...</p>";
    
    // Fetch multiple posts and render as products
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(data => {
            productList.innerHTML = "";  // Clear loading message
            
            // Loop through fetched data and render to DOM
            data.forEach(product => {
                const div = document.createElement("div");
                div.className = "product";
                div.innerHTML = `
                    <strong>ID: ${product.id}</strong><br>
                    ${product.title}
                `;
                productList.appendChild(div);
            });
            
            console.log(`Rendered ${data.length} products`);
        })
        .catch(error => {
            productList.innerHTML = `<p class='error'>Failed to load: ${error.message}</p>`;
            console.log("Error:", error);
        });
});

// 4. SIMULATING DELAYED RESPONSE

const delayedFetchBtn = document.getElementById("delayedFetchBtn");
const output4 = document.getElementById("output4");

delayedFetchBtn.addEventListener("click", () => {
    output4.innerHTML = "<p class='loading'>Fetching... (simulating 2 second delay)</p>";
    
    // Create a simulated delay
    new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: "Laptop",
                price: 49999,
                category: "Electronics"
            });
        }, 2000);  // 2 second delay
    })
    .then(data => {
        output4.innerHTML = `
            <strong>Product:</strong> ${data.name}<br>
            <strong>Price:</strong> ₱${data.price}<br>
            <strong>Category:</strong> ${data.category}
        `;
        output4.className = "";
        console.log("Data after 2 seconds:", data);
    });
});
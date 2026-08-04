// Exercise 3: Multiple async Calls in Sequence

// Write code that:

// Create an HTML page with a button "Load Complete Data" and a div for output
// When clicked, create an async function that:
// Fetches a user from: https://jsonplaceholder.typicode.com/users/2
// Fetches posts for that user: https://jsonplaceholder.typicode.com/posts?userId=2&_limit=4
// Use try/catch for error handling
// Display:
// User name and email
// Number of posts
// First post title (first 40 characters)
// Test: Click button and see all data appear
// Log both user and posts to console

// Hint:

// Use async function (not arrow function in addEventListener)
// Fetch user first, then fetch posts
// Both inside the same try block
// Use .substring(0, 40) to limit title length

const loadCompleteData = document.getElementById("loadCompleteData");
const output = document.getElementById("output");

async function loadData() {
    output.innerHTML = "<p class='loading'>Loading products...</p>";

    try {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/2");
        if (!userResponse.ok) {
            throw new Error(`HTTP Response status error: ${userResponse.status}`);
        }
        const user = await userResponse.json();

        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=2&_limit=4");
        if (!postsResponse.ok) {
            throw new Error(`HTTP Response status error: ${postsResponse.status}`);
        }
        const posts = await postsResponse.json();

        // Display
        output.innerHTML = "";

        const div = document.createElement("div");
        div.className = "success";
        div.innerHTML = `
            <p>Name: ${user.name}</p><br>
            <p>Email: ${user.email}</p><br>
            <p>Number of posts: ${posts.length}</p><br>
            <p>Title: ${posts[0].title.substring(0, 40)}</p><br>
        `;
        output.appendChild(div);
        console.log("User:", user);
        console.log("Posts:", posts);
        
    } catch(error) {
        output.innerHTML = `<p class='error'>${error.message}</p>`;
        console.log("Error:", error);
    }
}

loadCompleteData.addEventListener("click", loadData);
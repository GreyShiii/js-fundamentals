// Exercise 1: Convert .then() to async/await

// Write code that:

// Create an HTML page with a button "Load Post" and a div for output
// Fetch a post from: https://jsonplaceholder.typicode.com/posts/2
// Use async/await (NOT .then()) to:
// Wait for response
// Convert to JSON
// Display the post ID, title, and body
// Test: Click button and see post appear
// Log the data to console

const loadPost = document.getElementById("loadPost");
const output = document.getElementById("output");

loadPost.addEventListener("click", async () => {
    output.className = "loading";
    output.textContent = "Loading...";

    try {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const posts = await postsResponse.json();

    output.className = "";
    output.innerHTML = `
        <p>ID: ${posts.id}</p><br>
        <p>Title: ${posts.title}</p><br>
        <p>Body: ${posts.body}</p><br>
    `;
    console.log("Result:", posts);
    
    } catch (error) {
        output.className = "error";
        output.textContent = `Error: ${error.message}`;
        console.log("Error:", error);
    }
});
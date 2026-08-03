// Exercise 1: Simple Fetch & Display
// Write code that:
// Create an HTML page with a button "Load Post" and a div to display the result
// When button is clicked, fetch a post from: https://jsonplaceholder.typicode.com/posts/1
// Use .then() to convert response to JSON
// Use another .then() to display the data:
// Show the post ID
// Show the post title
// Show the post body
// Test: Click the button and see the post appear in the div
// Log the data to console to see the object
// Hint: Use innerHTML or create elements to display the fetched data. Use .then(response => response.json()).then(data => { ... })

const loadPost = document.getElementById("loadPost");
const result = document.getElementById("result");

loadPost.addEventListener("click", () => {
  result.className = "loading";
  result.textContent = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      result.className = "";
      result.textContent = "";
      
      const div = document.createElement("div");
      div.innerHTML = `
            <p>ID: ${data.id}</p><br>
            <p>Title: ${data.title}</p><br>
            <p>Body: ${data.body}</p>
        `;
      result.appendChild(div);

      console.log("Result:", data);
    });
});

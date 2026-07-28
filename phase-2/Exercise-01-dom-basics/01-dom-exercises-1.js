// Write code that:
// 1. Create an HTML page with 3 buttons (any text you want)
// 2. Use querySelectorAll to select all buttons
// 3. Use forEach to loop through each button
// 4. Add a click listener to EACH button that:
//    - Logs "Button clicked: [button text]"
//    - Changes the button's background color to red
// 5. Test: Click each button and see the output in console + color change

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("Button clicked:", btn.textContent);
        btn.style.backgroundColor = "red";
    })
})

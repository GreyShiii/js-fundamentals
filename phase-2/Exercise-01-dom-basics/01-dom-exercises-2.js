// Write code that:
// 1. Create an HTML page with:
//    - An <input> field (for product name)
//    - A button "Add Product"
//    - A <div id="productList"> to show products
// 2. When "Add Product" is clicked:
//    - Get the input value
//    - Add it to the product list (create a <div> for each)
//    - Clear the input field
// 3. Test: Type "Mouse", click Add, then "Keyboard", click Add
//    Should show both in the list

const productInput = document.getElementById("productInput");
const productBtn = document.getElementById("productBtn");
const productList = document.getElementById("productList");

productBtn.addEventListener("click", () => {
    const productValue = productInput.value;
    const productDiv = document.createElement("div");
    productDiv.textContent = productValue;

    productList.appendChild(productDiv);
    productInput.value = "";
})
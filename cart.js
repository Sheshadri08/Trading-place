// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart");
let total = 0;

// If cart is empty
if (cart.length === 0) {
  container.innerHTML = "<h3>Your cart is empty 🛒</h3>";
} else {
  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;

    container.appendChild(div);
  });
}

// Show total
document.getElementById("total").innerText = "Total: ₹" + total;

// Remove item function
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart");
let total = 0;

cart.forEach((item, index) => {
  total += item.price;

  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="removeItem(${index})">Remove</button>
  `;

  container.appendChild(div);
});

document.getElementById("total").innerText = "Total: ₹" + total;

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

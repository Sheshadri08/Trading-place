const products = [
  { id: 1, name: "Elegant Watch", price: 299.99, category: "Luxury", img: "https://via.placeholder.com/200" },
  { id: 2, name: "Gold Necklace", price: 449.99, category: "Premium", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Sunglasses", price: 199.99, category: "Luxury", img: "https://via.placeholder.com/200" },
  { id: 4, name: "Silk Scarf", price: 89.99, category: "Exclusive", img: "https://via.placeholder.com/200" },
  { id: 5, name: "Diamond Ring", price: 1299.99, category: "Luxury", img: "https://via.placeholder.com/200" },
];

let currentFilter = "All";

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  const search = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(p => {
    return (
      (currentFilter === "All" || p.category === currentFilter) &&
      p.name.toLowerCase().includes(search)
    );
  });

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button onclick="addToCart(${p.id}, '${p.name}', ${p.price})">
        Add to Cart
      </button>
    `;

    container.appendChild(div);
  });
}

function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  // animation feedback
  alert(name + " added to cart!");
}

function filterCategory(category) {
  currentFilter = category;
  displayProducts();
}

document.getElementById("search").addEventListener("input", displayProducts);

displayProducts();
updateCartCount();

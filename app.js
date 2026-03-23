const products = [
  {
    id: 1,
    name: "Elegant Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    rating: 4.5,
    reviews: 120
  },
  {
    id: 2,
    name: "Gold Necklace",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    rating: 4.3,
    reviews: 45
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    rating: 4.2,
    reviews: 30
  },
  {
    id: 5,
    name: "Diamond Ring",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1605106702734-205df224ecce",
    rating: 4.9,
    reviews: 210
  }
];

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// ⭐ Convert rating to stars
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "⭐" : "☆";
  }
  return stars;
}

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <p>${getStars(p.rating)} (${p.reviews} reviews)</p>
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
}

document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

displayProducts(products);
updateCartCount();

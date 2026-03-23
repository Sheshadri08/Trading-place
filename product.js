const products = [
  {
    id: 1,
    name: "Elegant Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    rating: 4.5,
    reviews: 120,
    description: "Premium stylish watch with leather strap."
  },
  {
    id: 2,
    name: "Gold Necklace",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    rating: 4.7,
    reviews: 89,
    description: "Elegant gold necklace for special occasions."
  }
];

// ⭐ stars
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? "⭐" : "☆";
  }
  return stars;
}

// Load selected product
const id = localStorage.getItem("selectedProduct");
const product = products.find(p => p.id == id);

const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
    <div class="product-detail">
      <img src="${product.image}">
      <div>
        <h1>${product.name}</h1>
        <p>${getStars(product.rating)} (${product.reviews} reviews)</p>
        <h2>$${product.price}</h2>
        <p>${product.description}</p>

        <button onclick="addToCart()">Add to Cart</button>
        <button onclick="buyNow()">Buy Now</button>
      </div>
    </div>
  `;
}

function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function buyNow() {
  alert("Proceeding to checkout...");
  window.location.href = "checkout.html";
}

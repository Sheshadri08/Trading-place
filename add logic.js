const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

function displayProducts(filteredProducts) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  filteredProducts.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      </div>
    `;
  });
}

function filterProducts() {
  let filtered = [...products];

  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categorySelect.value;
  const sortValue = sortSelect.value;

  // 🔍 Search
  if (searchValue) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchValue)
    );
  }

  // 📂 Category
  if (categoryValue !== "all") {
    filtered = filtered.filter(p =>
      p.category === categoryValue
    );
  }

  // 🔃 Sorting
  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// 🎯 Event listeners
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
sortSelect.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);

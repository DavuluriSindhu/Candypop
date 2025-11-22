const products = [
  { name: "Floral Dress", price: 999, img: "https://images.unsplash.com/photo-1520975680246-1e6c9a1f3c6f" },
  { name: "Sky Blue Hoodie", price: 1399, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
  { name: "Yellow Tee", price: 499, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" }
];

// Render Products
if (document.getElementById("productList")) {
  let list = document.getElementById("productList");
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

// Cart Logic
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// Render Cart
if (document.getElementById("cartItems")) {
  let box = document.getElementById("cartItems");
  cart.forEach(item => {
    box.innerHTML += `
      <div class="product-card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `;
  });
}

// Payment → Thank You → Redirect Home
function completePayment() {
  alert("Thank You! Your order is confirmed ❤️");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

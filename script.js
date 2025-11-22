const products = [
  { name: "Candy Pink Dress", price: 999, img: "https://images.unsplash.com/photo-1520975680246-1e6c9a1f3c6f" },
  { name: "Sky Blue Hoodie", price: 1299, img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
  { name: "Yellow Summer Tee", price: 599, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" }
];

// RENDER PRODUCTS
if (document.getElementById("productList")) {
  const list = document.getElementById("productList");
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addToCart(${i})">Add to Cart</button>
      </div>`;
  });
}

// CART
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// RENDER CART
if (document.getElementById("cartItems")) {
  const cartBox = document.getElementById("cartItems");
  cart.forEach(item => {
    cartBox.innerHTML += `
      <div class="product-card">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>`;
  });
}

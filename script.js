const products = [
  { name: "Elegant Pink Dress", price: 999, category: "women", img: "https://images.unsplash.com/photo-1520975680246-1e6c9a1f3c6f" },
  { name: "Signature Blue Hoodie", price: 1299, category: "men", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246" },
  { name: "Yellow Cotton Tee", price: 599, category: "kids", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" }
];

// RENDER PRODUCTS
function renderProducts() {
  const list = document.getElementById("productList");
  if (!list) return;

  list.innerHTML = "";
  
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn-premium" onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}
renderProducts();

// CART
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

// RENDER CART
if (document.getElementById("cartItems")) {
  const box = document.getElementById("cartItems");
  cart.forEach(item => {
    box.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      </div>
    `;
  });
}

// PAYMENT
function payNow() {
  alert("Payment Successful! (Integrate Razorpay here)");
}

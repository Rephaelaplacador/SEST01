const products = [
  { id: 1, name: "Chicken", price: 147.0, image: "images/chicken.png" },
  { id: 2, name: "Meat", price: 350.0, image: "images/meat.png" },
  { id: 3, name: "Vegetables", price: 150.0, image: "images/vegetables.png" },
  { id: 4, name: "Drinks", price: 50.0, image: "images/drinks.png" },
];

let cart = [];

function displayProducts() {
  const productsContainer = document.getElementById("products");
  
 
  productsContainer.innerHTML = "<h2>Available Products</h2>";
  const productItemsContainer = document.createElement("div");
  productItemsContainer.classList.add("product-items");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-name">${product.name}</div>
      <div class="product-price">₱${product.price.toFixed(2)}</div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productItemsContainer.appendChild(productDiv);
  });

  productsContainer.appendChild(productItemsContainer); 
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    displayCart();
  }
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    displayCart();
  }
}

function incrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
    displayCart();
  }
}

function decrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    displayCart();
  }
}

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; 

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;

    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
      <div class="product-info">
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name}</span>
      </div>
      <div class="quantity-controls">
        <button onclick="decrementQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="incrementQuantity(${item.id})">+</button>
      </div>
      <button class="remove-button" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  document.getElementById("total-items").innerText = totalItems;
  document.getElementById("total-price").innerText = `${totalPrice.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = []; 
    displayCart(); 
  }
}

displayProducts();

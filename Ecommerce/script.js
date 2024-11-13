//create sample products
const products = [
  { id: 1, name: "Apple", price: 20.0 },
  { id: 2, name: "Orange", price: 15.0 },
  { id: 3, name: "Mango", price: 25.0 },
  { id: 4, name: "Banana", price: 50.0 },
];

//cart array
let cart = [];

// Function to display products on the page
function displayProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productsContainer.appendChild(productDiv);
  });
}

// Function to add a product to the cart (default quantity of 1)
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    // Check if the product is already in the cart
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      // If the product is in the cart, increment its quantity
      cartItem.quantity += 1;
    } else {
      // Add new item to cart with quantity of 1
      cart.push({ ...product, quantity: 1 });
    }
    displayCart();
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    displayCart(); // Update the cart display
  }
}
// Function to increment the quantity of a product in the cart
function incrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1; // Increment quantity
    displayCart(); // Update the cart display
  }
}

// Function to decrement the quantity of a product in the cart
function decrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity -= 1; // Decrement quantity
    displayCart(); // Update the cart display
  }
}

// Function to display items in the cart
function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear current cart items

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;

    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
            <button onclick="decrementQuantity(${item.id})">-</button>
            <button onclick="incrementQuantity(${item.id})">+</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  // Update the total price and total items in the cart
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
  document.getElementById("total-items").textContent = totalItems;
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = []; // Clear cart
    displayCart(); // Update cart display
  }
}

// initialize page with product
displayProducts();

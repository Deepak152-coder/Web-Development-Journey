document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Product List
  const products = [
    { id: 1, Name: "Proct 1", Price: 29.99 },
    { id: 2, Name: "Proct 2", Price: 19.99 },
    { id: 3, Name: "Proct 3", Price: 59.99 },
  ];

  // 🔹 Load cart from localStorage to keep data after refresh
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 🔹 Selecting HTML elements
  const ProductList = document.getElementById("product-list");
  const cartItemsDisplay = document.getElementById("cart-items");
  const EmptyCartMsg = document.getElementById("empty-cart");
  const CartTotal = document.getElementById("cart-total");
  const TotalPriceDisplay = document.getElementById("total-price");
  const CheckOutBtn = document.getElementById("checkout-btn");

  renderCart(); // 🔹 Show saved items on page load

  // 🔹 Display products dynamically in product section
  products.forEach((i) => {
    const ProductDiv = document.createElement("div");
    ProductDiv.classList.add("product");
    ProductDiv.innerHTML = `
      <span>${i.Name} - $ ${i.Price.toFixed(2)}</span>
      <button data-id="${i.id}">Add to Cart</button>  <!-- Product ID stored -->
    `;
    ProductList.appendChild(ProductDiv);
  });

  // 🔹 Add to cart when clicking "Add to Cart" button
  ProductList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const ProductId = parseInt(e.target.getAttribute("data-id")); // Read product id
      const product = products.find((p) => p.id === ProductId); // Find product object
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product); // Add to cart array
    localStorage.setItem("cart", JSON.stringify(cart)); // 🔹 Save updated cart
    renderCart(); // Update UI
  }

  // 🔹 Display Cart Items
  function renderCart() {
    cartItemsDisplay.innerHTML = ""; // Clear UI before re-render

    let totalPrice = 0;

    if (cart.length > 0) {
      EmptyCartMsg.classList.add("hidden"); // Hide "empty cart" text
      CartTotal.classList.remove("hidden"); // Show total price section

      cart.forEach((item) => {
        totalPrice += item.Price; // 🔹 Calculate total amount
        const cartItem = document.createElement("div");
        cartItem.classList.add("product");

        // Every item has a Remove button linked with its ID ⚠ important
        cartItem.innerHTML = `
          ${item.Name} - $ ${item.Price.toFixed(2)}
          <button data-id="${item.id}">Remove</button>
        `;
        cartItemsDisplay.appendChild(cartItem);
      });

      TotalPriceDisplay.textContent = `$ ${totalPrice.toFixed(2)}`; // Show total
    } else {
      EmptyCartMsg.classList.remove("hidden"); // Show empty message
      TotalPriceDisplay.textContent = `$ 0.00`;
    }
  }

  // 🔹 Checkout clears cart + storage
  CheckOutBtn.addEventListener("click", () => {
    cart.length = 0; // Empty array
    localStorage.removeItem("cart"); // 🔹 Delete from localStorage
    alert("Checkout Successfully!");
    renderCart();
  });

  // 🔹 Remove item using event delegation (because buttons generated dynamically)
  cartItemsDisplay.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.getAttribute("data-id"));

      const index = cart.findIndex((x) => x.id === id); // Find item index
      if (index !== -1) {
        cart.splice(index, 1); // Remove one element
        localStorage.setItem("cart", JSON.stringify(cart)); // 🔹 Update localStorage
        renderCart(); // Refresh UI
      }
    }
  });
});

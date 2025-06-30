let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartItems.innerHTML = "";

  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${product.item} = Rs ${product.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  totalDisplay.textContent = `Total: Rs ${total.toFixed(2)}`;
}

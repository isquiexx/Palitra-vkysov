let cart = []; 

function addToCart(product) {
  cart.push(product);
  showPopup(`${product.name} добавлен в корзину!`);
}

function updateCartCount() {
  const cartCountElement = document.querySelector(".cart-count");
  cartCountElement.textContent = cart.length;
  cartCountElement.style.display = cart.length > 0 ? "block" : "none";
}

function showPopup(message) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.textContent = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}
const addToCartButton = document.querySelector(".add-to-cart");
addToCartButton.addEventListener("click", () => {
  const product = {
    name: "Молоко ПРОСТОКВАШИНО Отборное",
    price: 109.98,
  };
  addToCart(product);
});

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
});
const style = document.createElement("style");
style.textContent = `
  .popup {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #bda285;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-size: 16px;
  }
  .cart-count {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #bda285;
    color: white;
    border-radius: 50%;
    padding: 5px 7px;
    font-size: 10px;
    display: none;
  }

  .cart-icon:active {
    background-color: #bda285;
  }
`;
document.head.appendChild(style);

const cartIcon = document.querySelector(".cart-icon");
const cartCountElement = document.createElement("span");
cartCountElement.className = "cart-count";
cartIcon.appendChild(cartCountElement);
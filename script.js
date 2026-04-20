let cart = [];

// LOADER
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
};

// ADD TO CART
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) item.qty++;
  else cart.push({name, price, qty:1});

  updateCart();
}

// UPDATE CART
function updateCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  let totalItems = 0;

  cart.forEach(item => {
    totalItems += item.qty;
    list.innerHTML += `<li>${item.name} x ${item.qty}</li>`;
  });

  document.getElementById("cart-count").innerText = totalItems;
}

// OPEN CART
function openCart() {
  document.getElementById("cart").classList.add("active");
}

// CLOSE CART
function closeCart() {
  document.getElementById("cart").classList.remove("active");
}

// SEND ORDER
function sendOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let message = `🛒 Order Details:%0A`;

  cart.forEach(item => {
    message += `${item.name} x ${item.qty}%0A`;
  });

  message += `%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Address: ${address}`;

  let whatsappNumber = "91XXXXXXXXXX"; // replace

  let url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");
}
// Business numbers
const ORDER_NUMBER = '233201334826'; // receives orders
// ===== WhatsApp Confirmation Reply Generator =====
function generateReply(customerPhone, customerName, orderItem, deliveryDate) {
  const message = 
`Hello ${customerName} 👋

Thank you for ordering from Andria’s Bites 🍰

Your order for ${orderItem} scheduled for ${deliveryDate} has been received and is being processed.

Please make payment via:
• MTN MoMo / Telecel Cash
• Number: +2330203724175

Once payment is confirmed, we’ll proceed with your order ❤️

Thank you for choosing Andria’s Bites.`;


  window.open(
    `https://wa.me/2330203724175?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}
const container = document.getElementById('products-container');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.getElementById('popup-close');

// Clear container first (prevents duplicates)
container.innerHTML = "";

// Generate Cards
products.forEach(product => {

  const card = document.createElement('div');
  card.classList.add('card');

  const buttonText = product.available ? "Order Now" : "Out of Stock";
 let link = "#";

if (product.available) {
  if (product.type === "cake") link = "cake.html";
  if (product.type === "donut") link = "donuts.html";
  if (product.type === "waffle") link = "waffles.html";
  if (product.type === "pastry") link = "pastries.html";
}


  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <a href="${link}" class="btn ${product.available ? '' : 'out-of-stock'}">
      ${buttonText}
    </a>
  `;

  const btn = card.querySelector('.btn');

  if (!product.available) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showOutOfStockPopup(product.name);
    });
  }

  container.appendChild(card);
});

// Popup
function showOutOfStockPopup(productName) {
  popupMessage.textContent = `${productName} is currently out of stock. Please check back later! 🍫`;
  popup.style.display = 'flex';
}

popupClose.addEventListener('click', () => popup.style.display = 'none');

window.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});

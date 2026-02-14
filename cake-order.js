// Get the cake product from data.js
const cake = products.find(p => p.type === 'cake');

const sizeSelect = document.getElementById('size');
const flavorSelect = document.getElementById('flavor');
const total = document.getElementById('total');
const orderBtn = document.getElementById('orderBtn');

// Populate sizes
cake.sizes.forEach(s => {
  const option = document.createElement('option');
  option.value = s.price;
  option.textContent = `${s.size} – GHS ${s.price}`;
  sizeSelect.appendChild(option);
});

// Populate flavors
cake.flavors.forEach(f => {
  const option = document.createElement('option');
  option.value = f;
  option.textContent = f;
  flavorSelect.appendChild(option);
});

// Update total when size changes
sizeSelect.addEventListener('change', () => {
  total.textContent = sizeSelect.value;
});

// Set initial total
total.textContent = sizeSelect.value;

// WhatsApp order button
orderBtn.addEventListener('click', () => {
  const sizeText = sizeSelect.options[sizeSelect.selectedIndex].text;
  const flavor = flavorSelect.value;
  const messageText = document.getElementById('message').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const delivery = document.getElementById('delivery').value;
  const price = total.textContent;

  if (!name || !phone || !delivery) {
    alert('Please fill in all required fields.');
    return;
  }

  const text = `Hello Andria's Bites 👋%0A%0ACake Order Details:%0A• Size: ${sizeText}%0A• Flavor: ${flavor}%0A• Message: ${messageText}%0A• Price: GHS ${price}%0A• Delivery Date: ${delivery}%0A%0ACustomer:%0A${name}%0APhone: ${phone}%0A%0AMake payment via MTN MoMo / Telecel Cash.`;

  // Open WhatsApp link
  window.open(`https://wa.me/233545700691?text=${text}`, '_blank');
});

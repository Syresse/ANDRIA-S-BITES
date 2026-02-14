// DATA.JS – Andria's Bites Products

const products = [

  // 🎂 Cakes
  {
    type: 'cake',
    name: 'Custom Cakes',
    image: 'image/cake_pastries_image.jpg',
    description: 'Delicious custom cakes for every occasion.',
    available: true,

    sizes: {
      "6 inches": {
        "Vanilla": 450,
        "Red Velvet": 450,
        "Chocolate": 450
      },
      "8 inches": {
        "Vanilla": 600,
        "Red Velvet": 550,
        "Chocolate": 600
      }
    },

    special: {
      "Heart Shaped": 400,
      "Bento Vanilla": 150,
      "Bento Red Velvet": 200,
      "Bento Chocolate": 200
    }
  },


  // 🧇 Waffles
  {
    type: 'waffle',
    name: 'Waffles',
    image: 'image/waffle_image.jpg',
    description: 'Golden, fluffy waffles.',
    available: true,
    options: [
      { quantity: 3, price: 15 }
    ]
  },


  // 🍩 Donuts
  {
    type: 'donut',
    name: 'Donuts',
    image: 'image/donut_image.jpg',
    description: 'Soft and sweet donuts.',
    available: true,
    options: [
      { quantity: 5, price: 10, glazedExtra: true }
    ]
  },


  // 🥐 Pastries
  {
    type: 'pastry',
    name: 'Pastries',
    image: 'image/pastries_card_photo.jpg',
    description: 'Fresh baked pastries.',
    available: true,
    options: [
      { name: 'Rockies', price: 7 },
      { name: 'Pie', price: 15 },
      { name: 'Springroll', price: 5 },
      { name: 'Samosa', price: 7 }
    ]
  }

];



// Product Data Array
const products = [
  {
    id: 1,
    name: "HP Laptop",
    price: 899,
    category: "electronics",
    image: "./images/hp.jpg"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 120,
    category: "fashion",
    image: "./images/running shoe.jpg"
  },
  {
    id: 3,
    name: "Leather Sofa",
    price: 499,
    category: "furniture",
    image: "./images/leather sofa.jpg"
  },
  {
    id: 4,
    name: "iPhone 14",
    price: 1099,
    category: "electronics",
    image: "./images/iphone 14.jpg"
  },
  {
    id: 5,
    name: "Wrist Watch",
    price: 150,
    category: "fashion",
    image: "./images/wrist watch.jpg"
  },
  {
    id: 6,
    name: "Office Chair",
    price: 220,
    category: "furniture",
    image: "./images/office chair.jpg"
  },
  {
    id: 7,
    name: "Wireless Headphones",
    price: 80,
    category: "electronics",
    image: "./images/wireless headphone.jpg"
  },
  {
    id: 8,
    name: "Designer Handbag",
    price: 300,
    category: "fashion",
    image: "./images/designer handbag.jpg"
  },
  {
    id: 9,
    name: "Leather Jacket",
    price: 2500,
    category: "fashion",
    image: "./images/leather jacket.jpg"
  },
  {
    id: 10,
    name: "Queen Size Bed",
    price: 799,
    category: "furniture",
    image: "./images/queen size bed.jpg"
  },
  {
    id: 11,
    name: "Wooden Dining Table",
    price: 650,
    category: "furniture",
    image: "./images/wooden dinner table.jpg"
  },
  {
    id: 12,
    name: "Double Door Refrigerator",
    price: 999,
    category: "electronics",
    image: "./images/double door refrigerator.jpg"
  },
  {
    id: 13,
    name: "Samsung Smart TV",
    price: 1200,
    category: "electronics",
    image: "./images/samsung smart tv.jpg"
  },
  {
    id: 14,
    name: "Microwave Oven",
    price: 299,
    category: "electronics",
    image: "./images/microwave oven.jpg"
  },
];


function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Render products dynamically
const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;
  productGrid.appendChild(card);
});

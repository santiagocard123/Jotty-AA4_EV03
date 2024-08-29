import React, { useState } from 'react';
import './Products.css';
import netcodexImage from '../img/pollo.jpeg'

const productsData = [
  {
    id: 1,
    category: 'ram',
    image: netcodexImage,
    title: 'High-Speed RAM',
    price: '$80',
    brand: 'Netcodex'
  },
  {
    id: 2,
    category: 'pc',
    image: netcodexImage,
    title: 'Gaming PC',
    price: '$1200',
    brand: 'AMD'
  },
  {
    id: 3,
    category: 'consoles',
    image: netcodexImage,
    title: 'Next-Gen Console',
    price: '$500',
    brand: 'Intel'
  },
  {
    id: 4,
    category: 'controllers',
    image: netcodexImage,
    title: 'Wireless Controller',
    price: '$60',
    brand: 'ADATA'
  },
  
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="products-container">
      <div className="filter">
        <h2>Filter by Category</h2>
        <ul>
          <li onClick={() => handleCategoryChange('all')}>All</li>
          <li onClick={() => handleCategoryChange('ram')}>RAM</li>
          <li onClick={() => handleCategoryChange('pc')}>PC</li>
          <li onClick={() => handleCategoryChange('consoles')}>Consoles</li>
          <li onClick={() => handleCategoryChange('controllers')}>Controllers</li>
        </ul>
      </div>
      <div className="products-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-brand">Brand: {product.brand}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

import React from 'react';
import './ProductRain.css';

const ProductRain = () => {
  const products = [
    { id: 1, name: 'Neon Jacket', price: 59.99, color: 'text-pink-500', bg: 'bg-pink-100' },
    { id: 2, name: 'Holographic Bag', price: 39.99, color: 'text-purple-500', bg: 'bg-purple-100' },
    { id: 3, name: 'Glow Sneakers', price: 79.99, color: 'text-blue-500', bg: 'bg-blue-100' },
    { id: 4, name: 'Rainbow Beanie', price: 22.99, color: 'text-yellow-500', bg: 'bg-yellow-100' },
  ];

  return (
    <div className="product-rain-container">
      <h2 className="section-title">🌈 Color Storm Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className={`product-card ${product.bg} hover:scale-105 transition-transform`}
          >
            <div className="product-badge" style={{ background: 'conic-gradient(from 180deg, violet, indigo, blue, green, yellow, orange, red)' }}></div>
            <h3 className={`product-name ${product.color}`}>{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button 
              className="add-to-cart"
              style={{ background: 'linear-gradient(45deg, #ff00cc, #3333ff)' }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRain;
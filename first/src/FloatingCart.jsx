import React, { useState } from 'react';
import './FloatingCart.css';

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Rainbow Tee', price: 24.99, color: 'bg-rainbow' },
    { id: 2, name: 'Glow Socks', price: 12.50, color: 'bg-purple-400' }
  ]);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className={`floating-cart ${isOpen ? 'open' : ''}`}>
      <button 
        className="cart-toggle"
        onClick={toggleCart}
        style={{
          background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
        }}
      >
        🛍️ {items.length}
      </button>
      
      {isOpen && (
        <div className="cart-content">
          <h3>Your Colorful Cart</h3>
          <ul>
            {items.map(item => (
              <li key={item.id} className={`cart-item ${item.color}`}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <button className="checkout-btn" style={{ background: 'linear-gradient(to right, #ff758c, #ff7eb3)' }}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
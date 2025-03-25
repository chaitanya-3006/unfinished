import React, { useState } from 'react';
import './InteractiveNav.css';

const InteractiveNav = () => {
  const [activeTab, setActiveTab] = useState('Home');
  
  const tabs = [
    { name: 'Home', emoji: '🏠' },
    { name: 'Shop', emoji: '🛒' },
    { name: 'Deals', emoji: '🎉' },
    { name: 'Gallery', emoji: '🎨' },
    { name: 'Contact', emoji: '📱' },
  ];

  return (
    <nav className="interactive-nav">
      <div className="logo" style={{ background: 'linear-gradient(45deg, #ff00cc, #3333ff)' }}>
        ChromaShop
      </div>
      <ul className="nav-tabs">
        {tabs.map(tab => (
          <li 
            key={tab.name}
            className={`nav-item ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
            style={{
              '--hover-color': `hsl(${Math.random() * 360}, 100%, 70%)`
            }}
          >
            <span className="emoji">{tab.emoji}</span>
            {tab.name}
            <span className="active-indicator"></span>
          </li>
        ))}
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search colorful items..." />
        <button style={{ background: 'linear-gradient(45deg, #ff00cc, #3333ff)' }}>
          🔍
        </button>
      </div>
    </nav>
  );
};

export default InteractiveNav;
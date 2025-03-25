import React, { useState } from 'react';
import './MoodSelector.css';

const MoodSelector = () => {
  const moods = [
    { name: 'Vibrant', colors: ['#FF3CAC', '#784BA0', '#2B86C5'] },
    { name: 'Tropical', colors: ['#F27121', '#E94057', '#8A2387'] },
    { name: 'Electric', colors: ['#00F260', '#0575E6', '#021B79'] },
    { name: 'Pastel', colors: ['#FF9A9E', '#FAD0C4', '#FBC2EB'] },
  ];

  const [activeMood, setActiveMood] = useState(moods[0]);

  return (
    <div className="mood-selector">
      <h3>Set Your Shopping Mood:</h3>
      <div className="mood-options">
        {moods.map((mood, index) => (
          <button
            key={index}
            className={`mood-btn ${activeMood.name === mood.name ? 'active' : ''}`}
            onClick={() => setActiveMood(mood)}
            style={{
              background: `linear-gradient(135deg, ${mood.colors[0]}, ${mood.colors[1]}, ${mood.colors[2]})`
            }}
          >
            {mood.name}
          </button>
        ))}
      </div>
      <div className="mood-preview" style={{
        background: `linear-gradient(135deg, ${activeMood.colors[0]}, ${activeMood.colors[1]}, ${activeMood.colors[2]})`
      }}>
        <p>Your {activeMood.name} theme is active!</p>
      </div>
    </div>
  );
};

export default MoodSelector;
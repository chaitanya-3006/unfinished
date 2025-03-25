import React from 'react';
import FloatingCart from './FloatingCart.jsx';
import ProductRain from './ProductRain.jsx';
import MoodSelector from './MoodSelector.jsx';
import InteractiveNav from './InteractiveNav.jsx';
import GradientBackground from './GradientBackground.jsx';


const App = () => {
  return (
    <div className="app">
      <GradientBackground>
        { <InteractiveNav /> }
        { <MoodSelector /> }
        { <ProductRain /> }
        <FloatingCart />
      </GradientBackground>
    </div>
  );
};

export default App;
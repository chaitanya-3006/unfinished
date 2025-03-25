import React from 'react';
import './GradientBackground.css';

const GradientBackground = ({ children }) => {
  return (
    <div className="gradient-background">
      <div className="gradient-animation"></div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;
// src/Slider.js
import React from 'react';

const Slider = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min="0"
      max="5"
      step="1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Slider;
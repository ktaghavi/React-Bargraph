// src/App.jsx
import React, { useState } from 'react';
import Slider from './Slider';
import Graph from './Graph';

const App = () => {
  // Define initial state for each slider
  const [sliderValues, setSliderValues] = useState({
    graph1: 0,
    graph2: 0,
    graph3: 0,
    graph4: 0,
    graph5: 0,
    graph6: 0,
    graph7: 0,
  });

  // Define colors for each graph
  const colors = {
    graph1: '#FF5733', // Red-Orange
    graph2: '#33FF57', // Green
    graph3: '#3357FF', // Blue
    graph4: '#F3FF33', // Yellow
    graph5: '#FF33FF', // Magenta
    graph6: '#33FFF3', // Cyan
    graph7: '#FF8633', // Orange
  };

  // Handle slider change
  const handleSliderChange = (graph, value) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [graph]: value,
    }));
  };

  // Data for each graph
  const data1 = [{ name: 'Value', value: parseInt(sliderValues.graph1, 10) }];
  const data2 = [{ name: 'Value', value: parseInt(sliderValues.graph2, 10) }];
  const data3 = [{ name: 'Value', value: parseInt(sliderValues.graph3, 10) }];
  const data4 = [{ name: 'Value', value: parseInt(sliderValues.graph4, 10) }];
  const data5 = [{ name: 'Value', value: parseInt(sliderValues.graph5, 10) }];
  const data6 = [{ name: 'Value', value: parseInt(sliderValues.graph6, 10) }];
  const data7 = [{ name: 'Value', value: parseInt(sliderValues.graph7, 10) }];

  return (
    <div>
      <h1>Dynamic Graphs with Sliders</h1>

      <div>
        <h2>Anger</h2>
        <Slider value={sliderValues.graph1} onChange={(value) => handleSliderChange('graph1', value)} />
        <Graph data={data1} color={colors.graph1} />
      </div>

      <div>
        <h2>Disgust</h2>
        <Slider value={sliderValues.graph2} onChange={(value) => handleSliderChange('graph2', value)} />
        <Graph data={data2} color={colors.graph2} />
      </div>

      <div>
        <h2>Fear</h2>
        <Slider value={sliderValues.graph3} onChange={(value) => handleSliderChange('graph3', value)} />
        <Graph data={data3} color={colors.graph3} />
      </div>

      <div>
        <h2>Joy</h2>
        <Slider value={sliderValues.graph4} onChange={(value) => handleSliderChange('graph4', value)} />
        <Graph data={data4} color={colors.graph4} />
      </div>

      <div>
        <h2>Neutral</h2>
        <Slider value={sliderValues.graph5} onChange={(value) => handleSliderChange('graph5', value)} />
        <Graph data={data5} color={colors.graph5} />
      </div>

      <div>
        <h2>Sadness</h2>
        <Slider value={sliderValues.graph6} onChange={(value) => handleSliderChange('graph6', value)} />
        <Graph data={data6} color={colors.graph6} />
      </div>

      <div>
        <h2>Suprise</h2>
        <Slider value={sliderValues.graph7} onChange={(value) => handleSliderChange('graph7', value)} />
        <Graph data={data7} color={colors.graph7} />
      </div>
    </div>
  );
};

export default App;
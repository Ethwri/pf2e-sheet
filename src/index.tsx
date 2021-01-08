import * as React from 'react';
import ReactDOM from 'react-dom';
import AttributeHotbar from  './components/AttributeHotbar/AttributeHotbar';
import HealthBar from  './components/HealthBar/HealthBar';
import LevelZero from  './components/LevelZero/LevelZero';
import Skills from  './components/Skills/Skills';


ReactDOM.render(
  <div>
    <React.StrictMode>hello there</React.StrictMode>
    <HealthBar />
    <AttributeHotbar />
    <LevelZero />
    <Skills />
  </div>,
  document.getElementById('root')
);

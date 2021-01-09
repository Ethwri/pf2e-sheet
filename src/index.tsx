import * as React from 'react';
import ReactDOM from 'react-dom';
import AttributeHotbar from './components/AttributeHotbar/AttributeHotbar';
import Ac from './components/AC/ArmorClass';
import HealthBar from './components/HealthBar/HealthBar';
import LevelZero from './components/LevelZero/LevelZero';
import Skills from './components/Skills/Skills';
import SavingThrows from './components/SavingThrows/SavingThrows';

ReactDOM.render(
  <div>
    <React.StrictMode>hello there</React.StrictMode>
    <HealthBar />
    <Ac />
    <AttributeHotbar />
    <LevelZero />
    <SavingThrows />
    <Skills />
  </div>,
  document.getElementById('root')
);

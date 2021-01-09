import * as React from 'react';
import ReactDOM from 'react-dom';
import AttributeHotbar from './components/AttributeHotbar/AttributeHotbar';
import Ac from './components/AC/ArmorClass';
import HealthBar from './components/HealthBar/HealthBar';
import LevelZero from './components/LevelZero/LevelZero';
import Skills from './components/Skills/Skills';
import SavingThrows from './components/SavingThrows/SavingThrows';
import './layout.css';

ReactDOM.render(
  <div className="container">
    <div className="item-a">
      <p>this is a header</p>
    </div>
    <div className="item-b">
      <LevelZero />
    </div>
    <div className="item-f">
      <HealthBar />
    </div>
    <div className="item-g">
      <Ac />
    </div>
    <div className="item-c">
      <AttributeHotbar />
      <SavingThrows />
      <Skills />
    </div>
    <div className="item-d"></div>
    <div className="item-e"></div>
  </div>,
  document.getElementById('root')
);

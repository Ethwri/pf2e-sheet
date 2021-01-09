import * as React from 'react';
import ReactDOM from 'react-dom';
import AttributeHotbar from './components/AttributeHotbar/AttributeHotbar';
import Ac from './components/AC/ArmorClass';
import HealthBar from './components/HealthBar/HealthBar';
import LevelZero from './components/LevelZero/LevelZero';
import Skills from './components/Skills/Skills';
import SavingThrows from './components/SavingThrows/SavingThrows';
import Action from './components/Actions/Actions';
import './layout.css';
import logo from './public/PF2Logo.png';

ReactDOM.render(
  <div className="container">
    <div className="item-a">
      <img src={logo} />
      <h2> Character Builder</h2>
    </div>
    <div className="item-b">
      <LevelZero />
    </div>
    <div className="item-f">
      <HealthBar />
    </div>
    <div className="item-c">
      <AttributeHotbar />
      <SavingThrows />
      <Skills />
    </div>
    <div className="item-d">
      <Action />
    </div>
    <div className="item-e"></div>
  </div>,
  document.getElementById('root')
);

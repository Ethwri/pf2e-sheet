import * as React from 'react';
import ReactDOM from 'react-dom';
import AttributeHotbar from  './components/AttributeHotbar/AttributeHotbar';
import HealthBar from  './components/HealthBar/HealthBar';

ReactDOM.render(
  <div>
    <React.StrictMode>hello there</React.StrictMode>
    <HealthBar />
    <AttributeHotbar />
  </div>,
  document.getElementById('root')
);

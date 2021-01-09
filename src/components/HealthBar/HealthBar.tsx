import * as React from 'react';
import './HealthBar.css';
import Ac from '../AC/ArmorClass';
import { HitpointsResponse } from 'src/lib/api/types';
// import React, { useState } from 'react';

function HealthBar() {
  const [current, setCurrent] = React.useState(0);
  const [max, setMax] = React.useState(1);
  React.useEffect(() => {
    getAttributes();
  });

  const getAttributes = () => {
    fetch('http://localhost:1234/hitpoints', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: HitpointsResponse) => {
        setCurrent(response.current);
        setMax(response.max);
      });
  };

  const currentWidth = () => {
    return (current / max) * 100 + '%';
  };

  const style = {
    width: currentWidth()
  };

  return (
    <div className="health-hotbar">
      <small>HEALTH</small>
      <div className="healthbar">
        <div style={style} className="current-health"></div>
      </div>
      <small>
        {current}/{max}
      </small>
      <Ac />
    </div>
  );
}

export default HealthBar;

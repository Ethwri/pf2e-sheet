import * as React from 'react';
// import {
//   LevelZeroResponse,
//   raceOptions,
//   BackgroundOptions,
//   ClassOptions
// } from '../../../src/lib/api/types';
import './LevelList.css';

export default function LevelList(props: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={`level-box ${open ? 'active' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <span>Level {props.LvlNum}</span>
    </div>
  );
}

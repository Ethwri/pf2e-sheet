import * as React from 'react';
import {
  LevelZeroResponse,
  raceOptions,
  BackgroundOptions,
  ClassOptions
} from '../../../src/lib/api/types';
import './LevelZero.css';
import './LevelList/LevelList';
import LevelList from './LevelList/LevelList';

export default function LevelZero() {
  const [name, setName] = React.useState('');
  const [ancestery, setAncestery] = React.useState(raceOptions.DWARF);
  const [background, setBackground] = React.useState(BackgroundOptions.CASTLE);
  const [charClass, setCharClass] = React.useState(ClassOptions.FIGHTER);
  const [experience, setExperience] = React.useState(0);
  React.useEffect(() => {
    getAttributes();
  });

  const getAttributes = () => {
    fetch('http://localhost:1234/levelzero', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: LevelZeroResponse) => {
        setName(response.name);
        setAncestery(response.ancestery);
        setBackground(response.background);
        setCharClass(response.class);
        setExperience(response.experience);
      });
  };

  // level list build function
  const levels = [];
  for (let i = 1; i < 21; i++) {
    levels.push(<LevelList LvlNum={i} />);
  }

  return (
    <div className="level-zero">
      <form>
        <h3>Character Builder</h3>

        <label>Name:</label>
        <input type="text" value={name} />

        <br />
        <label>Choose an Ancestry:</label>
        <select defaultValue={ancestery} className="select-dropdown">
          {Object.values(raceOptions).map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
          ;
        </select>
        {/* <br />
        <label>Heritage:</label>
        <select
          defaultValue="dwarf"
          className="select-dropdown heritage-dropdown"
        >
          <option value="dwarf">Dwarf</option>
          <option value="elf">Elf</option>
          <option value="gnome">Gnome</option>
          <option value="goblin">Goblin</option>
          <option value="halfling">Halfling</option>
          <option value="human">Human</option>
        </select> */}

        <br />
        <label>Choose a Background:</label>
        <select defaultValue={background} className="select-dropdown">
          {Object.values(raceOptions).map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
          ;
        </select>
        <br />
        <label>Choose a Class:</label>
        <select defaultValue="dwarf" className="select-dropdown">
          <option value="dwarf">Alchemist</option>
          <option value="elf">Elf</option>
          <option value="gnome">Gnome</option>
          <option value="goblin">Goblin</option>
          <option value="halfling">Halfling</option>
          <option value="human">Human</option>
          {/* fill these options with Classes*/}
        </select>
      </form>
      {levels}
    </div>
  );
}

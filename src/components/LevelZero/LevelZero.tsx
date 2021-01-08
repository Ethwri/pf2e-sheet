import * as React from 'react';
import './LevelZero.css';

export default function LevelZero() {
    return (    
        <div className="level-zero">
            <h1>Level Zero</h1>

            <label >Name:</label>
            <input type="text"/>

            <br />
            <label >Choose an Ancestry:</label>
            <select className="select-dropdown">
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="goblin">Goblin</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                {/* this select dropdown could be its own component that
                grabs its own list of selectables based on the criteria eg:
                                    ancestries
                                    background
                                    class
                                    feats
                                    class feats
                                    equipment
                                     */}
            </select>
            <br />
            <label >Heritage:</label>
            <select className="select-dropdown heritage-dropdown">
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="goblin">Goblin</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
            </select>
            
            <br />
            <label >Choose a Background:</label>
            <select className="select-dropdown">
                <option value="dwarf">Pirate</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="goblin">Goblin</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                {/* fill these options with Backgrounds*/}
            </select>

            <br />
            <br />
            <label >Choose a Class:</label>
            <select className="select-dropdown">
                <option value="dwarf">Alchemist</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="goblin">Goblin</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                {/* fill these options with Classes*/}
            </select>
        </div>
    )
}
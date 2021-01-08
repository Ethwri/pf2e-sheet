import * as React from 'react';
import './Skills.css';

export default function LevelZero() {
    return (    
        <div className="skill-list">
                
                <div className="individual-skill">
                    <label >Acrobatics</label>
                    <input type="checkbox" id="T"></input>
                    <input type="checkbox" id="E"></input>
                    <input type="checkbox" id="M"></input>
                    <input type="checkbox" id="L"></input><br />
                </div>

                <div className="individual-skill">
                <label >Arcana</label>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input><br />
                </div>
                
                <div className="individual-skill">
                <label >Athletics</label>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input><br />
                </div>
                
                
           
        </div>
    )
}
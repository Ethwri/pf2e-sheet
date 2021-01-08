import * as React from 'react';
import './Skills.css';
import './IndivSkills/IndivSkills';
import IndivSkills from './IndivSkills/IndivSkills';

export default function LevelZero() {
  return (
    <div className="skill-list">
      <h5>Skill</h5>
      <h5>Attribute</h5>
      <h5>Proficiency</h5>
      <h5>Actions</h5>
      <IndivSkills />
      <IndivSkills />
      <IndivSkills />
    </div>
  );
}

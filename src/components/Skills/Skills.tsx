import * as React from 'react';
import './Skills.css';
import './IndivSkills/IndivSkills';
import IndivSkills from './IndivSkills/IndivSkills';
import { SkillResponse } from 'src/lib/api/types';

export default function LevelZero() {
  const [skill, setSkill] = React.useState('');

  setSkill();

  return (
    <div className="skill-list">
      <h5>Skill</h5>
      <h5>Attribute</h5>
      <h5>Proficiency</h5>
      <h5>Actions</h5>
      {skill.map((skill) => (
        <IndivSkills
          skill={SkillResponse.skill}
          attr={attr.modifier}
          proficiency={proficiency}
        />
      ))}
    </div>
  );
}

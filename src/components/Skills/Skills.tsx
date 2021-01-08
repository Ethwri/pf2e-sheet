import * as React from 'react';
import './Skills.css';
import './IndivSkills/IndivSkills';
import IndivSkills from './IndivSkills/IndivSkills';
import { SkillResponse } from 'src/lib/api/types';
import { attributes } from 'mock/attr';

export default function LevelZero() {
  const [skills, setSkills] = React.useState<SkillResponse[]>([]);
  //   const [attribute, setAttribute] = React.useState('');
  //   const [modifier, setModifier] = React.useState(0);
  //   const [proficiency, setProficiency] = React.useState(0);
  React.useEffect(() => {
    getSkills();
  });

  const getSkills = () => {
    fetch('http://localhost:1234/skills', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: SkillResponse[]) => {
        setSkills(response);
      });
  };

  return (
    <div className="skill-list">
      <h5>Skill</h5>
      <h5>Attribute</h5>
      <h5>Proficiency</h5>
      <h5>Actions</h5>
      {skills.map((skill: SkillResponse) => (
        <IndivSkills
          skill={skill.skill}
          attr={skill.attr}
          proficiency={skill.proficiency}
        />
      ))}
    </div>
  );
}

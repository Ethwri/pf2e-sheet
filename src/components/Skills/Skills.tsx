import * as React from 'react';
import './Skills.css';
import IndivSkills from './IndivSkills/IndivSkills';
import { SkillResponse } from 'src/lib/api/types';

export default function Skills() {
  const [skills, setSkills] = React.useState<SkillResponse[]>([]);
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

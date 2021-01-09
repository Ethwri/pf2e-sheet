import * as React from 'react';
import './SavingThrows.css';
import IndivSaves from './IndivSaves/IndivSaves';
import { SkillResponse } from 'src/lib/api/types';

export default function SavingThrows() {
  const [savingThrows, setsavingThrows] = React.useState<SkillResponse[]>([]);
  React.useEffect(() => {
    getSaves();
  });

  const getSaves = () => {
    fetch('http://localhost:1234/savingThrows', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: SkillResponse[]) => {
        setsavingThrows(response);
      });
  };

  return (
    <div className="saves-list">
      {savingThrows.map((save: SkillResponse) => (
        <IndivSaves {...save} />
      ))}
    </div>
  );
}

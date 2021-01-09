import * as React from 'react';
import './Ac.css';
import { acdcinitive } from 'src/lib/api/types';

export default function Ac() {
  const [Ac, setAc] = React.useState<acdcinitive>();
  React.useEffect(() => {
    getAc();
  });

  const getAc = () => {
    fetch('http://localhost:1234/acdcini', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: acdcinitive) => {
        setAc(response);
      });
  };
  return (
    <div className="ac">
      <p>AC:{Ac?.ac}</p>
    </div>
  );
}

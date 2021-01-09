import * as React from 'react';
import { SkillResponse } from 'src/lib/api/types';

export default function IndivSaves(props: SkillResponse) {
  return (
    <>
      <text>{props.skill}</text>
      <text>{props.attr.modifier}</text>
      <div>
        <input type="checkbox" id="T"></input>
        <input type="checkbox" id="E"></input>
        <input type="checkbox" id="M"></input>
        <input type="checkbox" id="L"></input>
      </div>
    </>
  );
}

import * as React from 'react';
import { SkillResponse } from 'src/lib/api/types';

export default function IndivSkills(props: SkillResponse) {
  return (
    <>
      <text>{props.skill}</text>
      <text>
        {props.attr.name} {props.attr.modifier}
      </text>
      <div>
        <input type="checkbox" id="T"></input>
        <input type="checkbox" id="E"></input>
        <input type="checkbox" id="M"></input>
        <input type="checkbox" id="L"></input>
      </div>
      <select>
        <option value="Action">Actions</option>
      </select>
    </>
  );
}

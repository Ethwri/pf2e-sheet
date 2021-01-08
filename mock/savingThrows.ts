import { SkillResponse } from '../src/lib/api/types';
import * as attributes from './attr';

export const fortitude: SkillResponse = {
  skill: 'Fortitude',
  attr: attributes.con,
  proficiency: 2
};

export const reflex: SkillResponse = {
  skill: 'Reflex',
  attr: attributes.dex,
  proficiency: 1
};

export const will: SkillResponse = {
  skill: 'Will',
  attr: attributes.wis,
  proficiency: 0
};

export const SavingThrows: SkillResponse[] = [will, reflex, fortitude];

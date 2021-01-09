import { CharectarResponse } from '../src/lib/api/types';
import { skills } from './skills';
import { attributes } from './attr';
import { hitpoints } from './hitpoints';
import { levelzero } from './levelzero';
import { SavingThrows } from './savingThrows';
import { acdcini } from './acdc';

export const Charectar: CharectarResponse = {
  levelzero: levelzero,
  attributes: attributes,
  skills: skills,
  hitpoints: hitpoints,
  savingThrows: SavingThrows,
  acdcini: acdcini
};

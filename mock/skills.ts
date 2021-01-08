import * as attributes from './attr';
import { SkillResponse } from '../src/lib/api/types';

const Acrobatics: SkillResponse = {
  skill: 'Acrobatics',
  attr: attributes.dex,
  proficiency: 1
};

const Arcana: SkillResponse = {
  skill: 'Arcana',
  attr: attributes.int,
  proficiency: 1
};
const Athletics: SkillResponse = {
  skill: 'Athletics',
  attr: attributes.str,
  proficiency: 1
};
const Crafting: SkillResponse = {
  skill: 'Crafting',
  attr: attributes.int,
  proficiency: 1
};
const Deception: SkillResponse = {
  skill: 'Deception',
  attr: attributes.cha,
  proficiency: 1
};
const Diplomacy: SkillResponse = {
  skill: 'Diplomacy',
  attr: attributes.cha,
  proficiency: 1
};
const Intimidation: SkillResponse = {
  skill: 'Intimidation',
  attr: attributes.cha,
  proficiency: 1
};
const Lore: SkillResponse = {
  skill: 'Lore',
  attr: attributes.int,
  proficiency: 1
};
const Medicine: SkillResponse = {
  skill: 'Medicine',
  attr: attributes.cha,
  proficiency: 1
};
const Nature: SkillResponse = {
  skill: 'Nature',
  attr: attributes.wis,
  proficiency: 1
};
const Occultism: SkillResponse = {
  skill: 'Occultism',
  attr: attributes.int,
  proficiency: 1
};
const Perecption: SkillResponse = {
  skill: 'Perecption',
  attr: attributes.wis,
  proficiency: 1
};
const Religion: SkillResponse = {
  skill: 'Religion',
  attr: attributes.wis,
  proficiency: 1
};
const Society: SkillResponse = {
  skill: 'Society',
  attr: attributes.int,
  proficiency: 1
};
const Stealth: SkillResponse = {
  skill: 'Stealth',
  attr: attributes.dex,
  proficiency: 1
};
const Survival: SkillResponse = {
  skill: 'Survival',
  attr: attributes.wis,
  proficiency: 1
};
const Thievery: SkillResponse = {
  skill: 'Thievery',
  attr: attributes.dex,
  proficiency: 1
};

export const skills = [
  Acrobatics,
  Arcana,
  Athletics,
  Crafting,
  Deception,
  Diplomacy,
  Intimidation,
  Lore,
  Medicine,
  Nature,
  Occultism,
  Perecption,
  Religion,
  Society,
  Stealth,
  Survival,
  Thievery
];

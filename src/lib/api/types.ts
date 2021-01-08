export interface CharectarResponse {
  levelzero: LevelZeroResponse;
  attributes: AttributeResponse[];
  skills: SkillResponse[];
}

export interface LevelZeroResponse {
  name: string;
  ancestery: raceOptions;
  background: BackgroundOptions;
  class: ClassOptions;
  experience: number;
}

export interface AttributeResponse {
  name: string;
  base: number;
  modifier: number;
}

export interface HitpointsResponse {
  current: number;
  max: number;
  temp: number;
}

export interface SkillResponse {
  skill: string;
  attr: AttributeResponse;
  proficiency: number;
}

export enum raceOptions {
  HUMAN = 'Human',
  DWARF = 'Dwarf',
  ELF = 'Elf',
  GOBLIN = 'Goblin',
  GNOME = 'Gnome',
  HALFING = 'Halfling'
}

export enum BackgroundOptions {
  TRIBAL = 'Tribal',
  MARINE = 'Marine',
  WANDERING = 'Wandering',
  RURAL = 'Rural',
  VILLAGE = 'Village',
  URBAN = 'Urban',
  CASTLE = 'Castle',
  OUTLAW = 'Outlaw'
}

export enum ClassOptions {
  BARBARIAN = 'Barbarian',
  BARD = 'Bard',
  CLERIC = 'Cleric',
  DRUID = 'Druid',
  FIGHTER = 'Fighter',
  MONK = 'Monk',
  PALADIN = 'Paladin',
  RANGER = 'Ranger',
  ROGUE = 'Rogue',
  SORCERER = 'Sorcerer',
  WIZARD = 'Wizard'
}

export interface CharectarResponse {
  levelzero: LevelZeroResponse;
  attributes: AttributeListResponse;
}

export interface LevelZeroResponse {
  name: string;
  ancestery: string;
  background: string;
  class: string;
  experience: number;
}

export interface AttributeListResponse {
  str: AttributeResponse;
  dex: AttributeResponse;
  con: AttributeResponse;
  int: AttributeResponse;
  wis: AttributeResponse;
  cha: AttributeResponse;
}

export interface AttributeResponse {
  name: string;
  base: number;
  modifier: number;
}

export interface SkillListResponse {
  acrobatics: SkillListResponse;
}

export interface SkillResponse {
  skill: string;
  attr: AttributeResponse;
  proficiency: number;
}

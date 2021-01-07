export interface CharectarResponse {
  levelzero: LevelZeroResponse;
  attributes: AttributeResponse[];
}

export interface LevelZeroResponse {
  name: string;
  ancestery: string;
  background: string;
  class: string;
  experience: number;
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

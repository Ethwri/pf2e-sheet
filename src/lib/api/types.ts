export interface CharectarResponse {
  levelzero: LevelZeroResponse;
  attributes: AttributeResponse[];
  skills: SkillResponse[];
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

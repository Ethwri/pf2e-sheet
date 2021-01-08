import {
  LevelZeroResponse,
  raceOptions,
  BackgroundOptions,
  ClassOptions
} from '../src/lib/api/types';

export const levelzero: LevelZeroResponse = {
  name: 'Amon',
  ancestery: raceOptions.ELF,
  background: BackgroundOptions.MARINE,
  class: ClassOptions.SORCERER,
  experience: 500
};

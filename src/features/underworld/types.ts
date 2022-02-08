import type { DeepPartial } from '../../types';

export interface IUnderworldState {
  adventure: number;
  extractor: number;
  gate: number;
  gladiator: number;
  goblinPit: number;
  goblinUpgrade: number;
  gold: number;
  heart: number;
  keeper: number;
  keeperUpgrade: number;
  torture: number;
  trollBlock: number;
  trollUpgrade: number;
}

export interface IUnderworldPlanerState {
  current: IUnderworldState;
  currentHeroesLevel: number;
  target: IUnderworldState;
  targetHeroesLevel: number;
}

export type Payload = { payload: DeepPartial<IUnderworldState> };

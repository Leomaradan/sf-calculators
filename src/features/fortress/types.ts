import type { DeepPartial } from '../../types';

export interface IFortressState {
  fortress: number;
  quarters: number;
  woodcutter: number;
  quarry: number;
  mine: number;
  academy: number;
  treasury: number;
  barracks: number;
  archery: number;
  mageTower: number;
  smithy: number;
  fortifications: number;
  hok: number;
  soldier: number;
  archer: number;
  mage: number;
}

export interface IFortressPlanerState {
  current: IFortressState;
  target: IFortressState;
}

export type Payload = { payload: DeepPartial<IFortressState> };

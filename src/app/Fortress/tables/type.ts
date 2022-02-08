export interface ITable {
  gold: number;
  level: number;
  stone: number;
  wood: number;
}

export interface IUnit extends ITable {
  limit: number;
}

export type IUpgrade = Omit<ITable, 'gold'>;

export interface IUnitUpgrade extends IUpgrade {
  neededStone: number;
  neededWood: number;
  unitLevel: number;
}

export interface IWoodAndStone extends ITable {
  resourceHour: number;
  storage: number;
}

export interface ITreasury extends ITable {
  slot: number;
}

export interface IQuarters extends ITable {
  timeReduction: number;
}

export interface IAcademy extends ITable {
  timeToFill: number;
}

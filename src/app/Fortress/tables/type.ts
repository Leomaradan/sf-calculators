export interface ITable {
  level: number;
  gold: number;
  wood: number;
  stone: number;
}

export interface IUnit extends ITable {
  limit: number;
}

export type IUpgrade = Omit<ITable, 'gold'>;

export interface IWoodAndStone extends ITable {
  storage: number;
  resourceHour: number;
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

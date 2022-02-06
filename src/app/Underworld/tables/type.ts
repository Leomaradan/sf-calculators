export interface ITable {
  level: number;
  gold: number;
  soul: number;
}

export interface IUpgrade extends ITable {
  unitLevel: number;
}

export type IFight = Omit<ITable, 'gold'>;

export interface IGate extends ITable {
  heroes: number;
  bonusSoul: number;
}

export interface ISoulExtractor extends ITable {
  storage: number;
  resourceHour: number;
}

export interface IUnit extends ITable {
  unitNumber: number;
  unitName: string;
  unitLevel: number;
}

export interface IGladiatorTorture extends ITable {
  bonus: number;
}

export interface IAdventure extends ITable {
  thirst: number;
  thirstBonus: number;
  thirstMax: number;
}

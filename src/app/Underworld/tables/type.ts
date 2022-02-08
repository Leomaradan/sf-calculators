export interface ITable {
  gold: number;
  level: number;
  soul: number;
}

export interface IUpgrade extends ITable {
  unitLevel: number;
}

export type IFight = Omit<ITable, 'gold'>;

export interface IGate extends ITable {
  bonusSoul: number;
  heroes: number;
}

export interface ISoulExtractor extends ITable {
  resourceHour: number;
  storage: number;
}

export interface IUnit extends ITable {
  unitLevel: number;
  unitName: string;
  unitNumber: number;
}

export interface IGladiatorTorture extends ITable {
  bonus: number;
}

export interface IAdventure extends ITable {
  thirst: number;
  thirstBonus: number;
  thirstMax: number;
}

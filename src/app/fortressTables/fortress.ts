import { ITable } from "./type";

export const fortressLevel: ITable[] = [
  { level: 1, gold: 10, wood: 0, stone: 0 },
  { level: 2, gold: 20, wood: 150, stone: 50 },
  { level: 3, gold: 30, wood: 440, stone: 140 },
  { level: 4, gold: 40, wood: 1100, stone: 333 },
  { level: 5, gold: 50, wood: 2500, stone: 800 },
  { level: 6, gold: 60, wood: 6000, stone: 2000 },
  { level: 7, gold: 70, wood: 13417, stone: 4433 },
  { level: 8, gold: 80, wood: 27200, stone: 9280 },
  { level: 9, gold: 90, wood: 57375, stone: 19125 },
  { level: 10, gold: 100, wood: 154000, stone: 50000 },
  { level: 11, gold: 110, wood: 379500, stone: 122100 },
  { level: 12, gold: 120, wood: 830400, stone: 273600 },
  { level: 13, gold: 130, wood: 1872000, stone: 619200 },
  { level: 14, gold: 140, wood: 3744000, stone: 1248000 },
  { level: 15, gold: 150, wood: 7200000, stone: 2340000 },
  { level: 16, gold: 160, wood: 15120000, stone: 5040000 },
  { level: 17, gold: 170, wood: 27350000, stone: 9000000 },
  { level: 18, gold: 180, wood: 50000000, stone: 17500000 },
  { level: 19, gold: 190, wood: 90000000, stone: 30000000 },
  { level: 20, gold: 200, wood: 165000000, stone: 54000000 },
];

type IHoK = Omit<ITable, "gold">;

export const hallOfKnightsUpgradeLevel: IHoK[] = [
  { level: 1, wood: 720, stone: 240 },
  { level: 2, wood: 1408, stone: 448 },
  { level: 3, wood: 2640, stone: 800 },
  { level: 4, wood: 4800, stone: 1536 },
  { level: 5, wood: 9600, stone: 3200 },
  { level: 6, wood: 18400, stone: 6080 },
  { level: 7, wood: 32640, stone: 11136 },
  { level: 8, wood: 61200, stone: 20400 },
  { level: 9, wood: 147840, stone: 48000 },
  { level: 10, wood: 331200, stone: 106560 },
  { level: 11, wood: 664320, stone: 218880 },
  { level: 12, wood: 1497600, stone: 495360 },
  { level: 13, wood: 2995200, stone: 998400 },
  { level: 14, wood: 5760000, stone: 1872000 },
  { level: 15, wood: 21880000, stone: 7200000 },
  { level: 16, wood: 21880000, stone: 7200000 },
  { level: 17, wood: 40000000, stone: 14000000 },
  { level: 18, wood: 72000000, stone: 24000000 },
  { level: 19, wood: 132000000, stone: 43200000 },
  { level: 20, wood: 240000000, stone: 80000000 },
];

import { ITable } from "./type";

export interface IAcademy extends ITable {
  timeToFill: number;
}

export const academyLevel: IAcademy[] = [
  { level: 1, gold: 7, wood: 7, stone: 9, timeToFill: 60 },
  { level: 2, gold: 14, wood: 28, stone: 37, timeToFill: 66 },
  { level: 3, gold: 21, wood: 81, stone: 103, timeToFill: 72 },
  { level: 4, gold: 28, wood: 203, stone: 246, timeToFill: 78 },
  { level: 5, gold: 35, wood: 462, stone: 591, timeToFill: 84 },
  { level: 6, gold: 42, wood: 1108, stone: 1477, timeToFill: 90 },
  { level: 7, gold: 49, wood: 2477, stone: 3247, timeToFill: 96 },
  { level: 8, gold: 56, wood: 5022, stone: 6853, timeToFill: 120 },
  { level: 9, gold: 63, wood: 10592, stone: 14123, timeToFill: 144 },
  { level: 10, gold: 70, wood: 28431, stone: 36923, timeToFill: 192 },
  { level: 11, gold: 77, wood: 70062, stone: 90162, timeToFill: 240 },
  { level: 12, gold: 84, wood: 153305, stone: 202043, timeToFill: 288 },
  { level: 13, gold: 91, wood: 374400, stone: 495360, timeToFill: 384 },
  { level: 14, gold: 98, wood: 748800, stone: 998400, timeToFill: 480 },
  { level: 15, gold: 105, wood: 1440000, stone: 1872000, timeToFill: 576 },
  { level: 16, gold: 112, wood: 3024000, stone: 4032000, timeToFill: 600 },
  { level: 17, gold: 119, wood: 5470000, stone: 7200000, timeToFill: 624 },
  { level: 18, gold: 126, wood: 10000000, stone: 14000000, timeToFill: 648 },
  { level: 19, gold: 133, wood: 18000000, stone: 24000000, timeToFill: 660 },
  { level: 20, gold: 140, wood: 33000000, stone: 43000000, timeToFill: 720 },
];

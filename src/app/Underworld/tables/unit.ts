import type { ITable, IUnit, IUpgrade } from './type';

export const goblinPit: IUnit[] = [
  {
    gold: 400,
    level: 1,
    soul: 0,
    unitLevel: 12,
    unitName: 'common Goblin',
    unitNumber: 1,
  },
  {
    gold: 800,
    level: 2,
    soul: 396,
    unitLevel: 15,
    unitName: 'common Goblins',
    unitNumber: 2,
  },
  {
    gold: 1200,
    level: 3,
    soul: 1060,
    unitLevel: 20,
    unitName: 'commonGoblins',
    unitNumber: 3,
  },
  {
    gold: 1600,
    level: 4,
    soul: 2715,
    unitLevel: 30,
    unitName: 'commonGoblins',
    unitNumber: 4,
  },
  {
    gold: 2000,
    level: 5,
    soul: 7070,
    unitLevel: 40,
    unitName: 'commonGoblins',
    unitNumber: 5,
  },
  {
    gold: 2400,
    level: 6,
    soul: 16120,
    unitLevel: 55,
    unitName: 'nastyGoblins',
    unitNumber: 5,
  },
  {
    gold: 2800,
    level: 7,
    soul: 34450,
    unitLevel: 65,
    unitName: 'deceitfulGoblins',
    unitNumber: 5,
  },
  {
    gold: 3200,
    level: 8,
    soul: 63110,
    unitLevel: 80,
    unitName: 'treacherousGoblins',
    unitNumber: 5,
  },
  {
    gold: 3600,
    level: 9,
    soul: 148500,
    unitLevel: 80, // Unknown unit level
    unitName: 'helmetedGoblins',
    unitNumber: 5,
  },
  {
    gold: 4000,
    level: 10,
    soul: 329650,
    unitLevel: 80, // Unknown unit level
    unitName: 'heavilyArmedGoblins',
    unitNumber: 5,
  },
  {
    gold: 4400,
    level: 11,
    soul: 677150,
    unitLevel: 80, // Unknown unit level
    unitName: 'wellEquippedGoblins',
    unitNumber: 5,
  },
  {
    gold: 4800,
    level: 12,
    soul: 1532500,
    unitLevel: 80, // Unknown unit level
    unitName: 'veryDangerousGoblins',
    unitNumber: 5,
  },
  {
    gold: 5200,
    level: 13,
    soul: 3088800,
    unitLevel: 80, // Unknown unit level
    unitName: 'especiallyDangerousGoblins',
    unitNumber: 5,
  },
  {
    gold: 5600,
    level: 14,
    soul: 5791500,
    unitLevel: 80, // Unknown unit level
    unitName: 'highlyDangerousGoblins',
    unitNumber: 5,
  },
  {
    gold: 6000,
    level: 15,
    soul: 12474000,
    unitLevel: 80, // Unknown unit level
    unitName: 'extremelyDangerousGoblins',
    unitNumber: 5,
  },
];

export const trollBlock: IUnit[] = [
  {
    gold: 990,
    level: 1,
    soul: 165,
    unitLevel: 12,
    unitName: 'relatively common Troll',
    unitNumber: 1,
  },
  {
    gold: 1980,
    level: 2,
    soul: 616,
    unitLevel: 15,
    unitName: 'Troll with hatchet',
    unitNumber: 1,
  },
  {
    gold: 2970,
    level: 3,
    soul: 1650,
    unitLevel: 20,
    unitName: 'helmeted Troll with hatchet',
    unitNumber: 1,
  },
  {
    gold: 3960,
    level: 4,
    soul: 4220,
    unitLevel: 30,
    unitName: 'Troll with halberd',
    unitNumber: 1,
  },
  {
    gold: 4950,
    level: 5,
    soul: 11000,
    unitLevel: 40,
    unitName: 'Troll with nice helmet',
    unitNumber: 1,
  },
  {
    gold: 5940,
    level: 6,
    soul: 25080,
    unitLevel: 55,
    unitName: 'Troll with armor',
    unitNumber: 1,
  },
  {
    gold: 6930,
    level: 7,
    soul: 45930,
    unitLevel: 65,
    unitName: 'Troll with heavy armor',
    unitNumber: 1,
  },
  {
    gold: 7920,
    level: 8,
    soul: 84150,
    unitLevel: 80,
    unitName: 'Troll with 2 weapons',
    unitNumber: 1,
  },
  {
    gold: 8910,
    level: 9,
    soul: 198000,
    unitLevel: 100,
    unitName: 'grim Trolls',
    unitNumber: 2,
  },
  {
    gold: 9900,
    level: 10,
    soul: 439550,
    unitLevel: 100, // Unknown unit level
    unitName: 'Trolls with several weapons',
    unitNumber: 2,
  },
  {
    gold: 10890,
    level: 11,
    soul: 902850,
    unitLevel: 80, // Unknown unit level
    unitName: 'Trolls with armory',
    unitNumber: 2,
  },
  {
    gold: 11880,
    level: 12,
    soul: 2043300,
    unitLevel: 100, // Unknown unit level
    unitName: 'Trolls with large armory',
    unitNumber: 2,
  },
  {
    gold: 12870,
    level: 13,
    soul: 4118400,
    unitLevel: 100, // Unknown unit level
    unitName: 'terrible Trolls',
    unitNumber: 3,
  },
  {
    gold: 13860,
    level: 14,
    soul: 7722000,
    unitLevel: 100, // Unknown unit level
    unitName: 'terribly dangerous Trolls',
    unitNumber: 3,
  },
  {
    gold: 14850,
    level: 15,
    soul: 16632000,
    unitLevel: 100, // Unknown unit level
    unitName: 'terribly dangerous Trolls',
    unitNumber: 4,
  },
];

export const keeper: IUpgrade[] = [
  { gold: 1500, level: 1, soul: 198, unitLevel: 12 },
  { gold: 3000, level: 2, soul: 739, unitLevel: 15 },
  { gold: 4500, level: 3, soul: 1980, unitLevel: 20 },
  { gold: 6000, level: 4, soul: 5065, unitLevel: 30 },
  { gold: 7500, level: 5, soul: 13200, unitLevel: 40 },
  { gold: 9000, level: 6, soul: 25080, unitLevel: 55 },
  { gold: 10500, level: 7, soul: 45930, unitLevel: 65 },
  { gold: 12000, level: 8, soul: 84150, unitLevel: 80 },
  { gold: 13500, level: 9, soul: 198000, unitLevel: 100 },
  { gold: 15000, level: 10, soul: 439550, unitLevel: 100 }, // Unknown unit level
  { gold: 16500, level: 11, soul: 902850, unitLevel: 100 }, // Unknown unit level
  { gold: 18000, level: 12, soul: 2043300, unitLevel: 100 }, // Unknown unit level
  { gold: 19500, level: 13, soul: 4118400, unitLevel: 100 }, // Unknown unit level
  { gold: 21000, level: 14, soul: 7722000, unitLevel: 100 }, // Unknown unit level
  { gold: 22500, level: 15, soul: 16632000, unitLevel: 100 }, // Unknown unit level
];

export const unitUpgrade: ITable[] = [
  { gold: 0, level: 0, soul: 0 },
  { gold: 2, level: 1, soul: 100 },
  { gold: 3, level: 2, soul: 150 },
  { gold: 6, level: 3, soul: 300 },
  { gold: 9, level: 4, soul: 450 },
  { gold: 12, level: 5, soul: 600 },
  { gold: 15, level: 6, soul: 750 },
  { gold: 19, level: 7, soul: 950 },
  { gold: 23, level: 8, soul: 1150 },
  { gold: 28, level: 9, soul: 1400 },
  { gold: 32, level: 10, soul: 1600 },
  { gold: 37, level: 11, soul: 1850 },
  { gold: 42, level: 12, soul: 2100 },
  { gold: 47, level: 13, soul: 2350 },
  { gold: 53, level: 14, soul: 2650 },
  { gold: 59, level: 15, soul: 2950 },
  { gold: 65, level: 16, soul: 3250 },
  { gold: 71, level: 17, soul: 3550 },
  { gold: 77, level: 18, soul: 3850 },
  { gold: 83, level: 19, soul: 4150 },
  { gold: 90, level: 20, soul: 4500 },
  { gold: 97, level: 21, soul: 4850 },
  { gold: 104, level: 22, soul: 5200 },
  { gold: 111, level: 23, soul: 5550 },
  { gold: 118, level: 24, soul: 5900 },
  { gold: 126, level: 25, soul: 6300 },
  { gold: 133, level: 26, soul: 6650 },
];

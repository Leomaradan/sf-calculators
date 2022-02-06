import type { IUnit, ITable, IUpgrade } from './type';

export const goblinPit: IUnit[] = [
  {
    level: 1,
    gold: 400,
    soul: 0,
    unitNumber: 1,
    unitName: 'common Goblin',
    unitLevel: 12,
  },
  {
    level: 2,
    gold: 800,
    soul: 396,
    unitNumber: 2,
    unitName: 'common Goblins',
    unitLevel: 15,
  },
  {
    level: 3,
    gold: 1200,
    soul: 1060,
    unitNumber: 3,
    unitName: 'commonGoblins',
    unitLevel: 20,
  },
  {
    level: 4,
    gold: 1600,
    soul: 2715,
    unitNumber: 4,
    unitName: 'commonGoblins',
    unitLevel: 30,
  },
  {
    level: 5,
    gold: 2000,
    soul: 7070,
    unitNumber: 5,
    unitName: 'commonGoblins',
    unitLevel: 40,
  },
  {
    level: 6,
    gold: 2400,
    soul: 16120,
    unitNumber: 5,
    unitName: 'nastyGoblins',
    unitLevel: 55,
  },
  {
    level: 7,
    gold: 2800,
    soul: 34450,
    unitNumber: 5,
    unitName: 'deceitfulGoblins',
    unitLevel: 65,
  },
  {
    level: 8,
    gold: 3200,
    soul: 63110,
    unitNumber: 5,
    unitName: 'treacherousGoblins',
    unitLevel: 80,
  },
  {
    level: 9,
    gold: 3600,
    soul: 148500,
    unitNumber: 5,
    unitName: 'helmetedGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 10,
    gold: 4000,
    soul: 329650,
    unitNumber: 5,
    unitName: 'heavilyArmedGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 11,
    gold: 4400,
    soul: 677150,
    unitNumber: 5,
    unitName: 'wellEquippedGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 12,
    gold: 4800,
    soul: 1532500,
    unitNumber: 5,
    unitName: 'veryDangerousGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 13,
    gold: 5200,
    soul: 3088800,
    unitNumber: 5,
    unitName: 'especiallyDangerousGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 14,
    gold: 5600,
    soul: 5791500,
    unitNumber: 5,
    unitName: 'highlyDangerousGoblins',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 15,
    gold: 6000,
    soul: 12474000,
    unitNumber: 5,
    unitName: 'extremelyDangerousGoblins',
    unitLevel: 80, // Unknown unit level
  },
];

export const trollBlock: IUnit[] = [
  {
    level: 1,
    gold: 990,
    soul: 165,
    unitNumber: 1,
    unitName: 'relatively common Troll',
    unitLevel: 12,
  },
  {
    level: 2,
    gold: 1980,
    soul: 616,
    unitNumber: 1,
    unitName: 'Troll with hatchet',
    unitLevel: 15,
  },
  {
    level: 3,
    gold: 2970,
    soul: 1650,
    unitNumber: 1,
    unitName: 'helmeted Troll with hatchet',
    unitLevel: 20,
  },
  {
    level: 4,
    gold: 3960,
    soul: 4220,
    unitNumber: 1,
    unitName: 'Troll with halberd',
    unitLevel: 30,
  },
  {
    level: 5,
    gold: 4950,
    soul: 11000,
    unitNumber: 1,
    unitName: 'Troll with nice helmet',
    unitLevel: 40,
  },
  {
    level: 6,
    gold: 5940,
    soul: 25080,
    unitNumber: 1,
    unitName: 'Troll with armor',
    unitLevel: 55,
  },
  {
    level: 7,
    gold: 6930,
    soul: 45930,
    unitNumber: 1,
    unitName: 'Troll with heavy armor',
    unitLevel: 65,
  },
  {
    level: 8,
    gold: 7920,
    soul: 84150,
    unitNumber: 1,
    unitName: 'Troll with 2 weapons',
    unitLevel: 80,
  },
  {
    level: 9,
    gold: 8910,
    soul: 198000,
    unitNumber: 2,
    unitName: 'grim Trolls',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 10,
    gold: 9900,
    soul: 439550,
    unitNumber: 2,
    unitName: 'Trolls with several weapons',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 11,
    gold: 10890,
    soul: 902850,
    unitNumber: 2,
    unitName: 'Trolls with armory',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 12,
    gold: 11880,
    soul: 2043300,
    unitNumber: 2,
    unitName: 'Trolls with large armory',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 13,
    gold: 12870,
    soul: 4118400,
    unitNumber: 3,
    unitName: 'terrible Trolls',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 14,
    gold: 13860,
    soul: 7722000,
    unitNumber: 3,
    unitName: 'terribly dangerous Trolls',
    unitLevel: 80, // Unknown unit level
  },
  {
    level: 15,
    gold: 14850,
    soul: 16632000,
    unitNumber: 4,
    unitName: 'terribly dangerous Trolls',
    unitLevel: 80, // Unknown unit level
  },
];

export const keeper: IUpgrade[] = [
  { level: 1, gold: 1500, soul: 198, unitLevel: 12 },
  { level: 2, gold: 3000, soul: 739, unitLevel: 15 },
  { level: 3, gold: 4500, soul: 1980, unitLevel: 20 },
  { level: 4, gold: 6000, soul: 5065, unitLevel: 30 },
  { level: 5, gold: 7500, soul: 13200, unitLevel: 40 },
  { level: 6, gold: 9000, soul: 25080, unitLevel: 55 },
  { level: 7, gold: 10500, soul: 45930, unitLevel: 65 },
  { level: 8, gold: 12000, soul: 84150, unitLevel: 80 },
  { level: 9, gold: 13500, soul: 198000, unitLevel: 80 }, // Unknown unit level
  { level: 10, gold: 15000, soul: 439550, unitLevel: 80 }, // Unknown unit level
  { level: 11, gold: 16500, soul: 902850, unitLevel: 80 }, // Unknown unit level
  { level: 12, gold: 18000, soul: 2043300, unitLevel: 80 }, // Unknown unit level
  { level: 13, gold: 19500, soul: 4118400, unitLevel: 80 }, // Unknown unit level
  { level: 14, gold: 21000, soul: 7722000, unitLevel: 80 }, // Unknown unit level
  { level: 15, gold: 22500, soul: 16632000, unitLevel: 80 }, // Unknown unit level
];

export const unitUpgrade: ITable[] = [
  { level: 0, gold: 0, soul: 0 },
  { level: 1, soul: 100, gold: 2 },
  { level: 2, soul: 150, gold: 3 },
  { level: 3, soul: 300, gold: 6 },
  { level: 4, soul: 450, gold: 9 },
  { level: 5, soul: 600, gold: 12 },
  { level: 6, soul: 750, gold: 15 },
  { level: 7, soul: 950, gold: 19 },
  { level: 8, soul: 1150, gold: 23 },
  { level: 9, soul: 1400, gold: 28 },
  { level: 10, soul: 1600, gold: 32 },
  { level: 11, soul: 1850, gold: 37 },
  { level: 12, soul: 2100, gold: 42 },
  { level: 13, soul: 2350, gold: 47 },
  { level: 14, soul: 2650, gold: 53 },
  { level: 15, soul: 2950, gold: 59 },
  { level: 16, soul: 3250, gold: 65 },
  { level: 17, soul: 3550, gold: 71 },
  { level: 18, soul: 3850, gold: 77 },
  { level: 19, soul: 4150, gold: 83 },
  { level: 20, soul: 4500, gold: 90 },
  { level: 21, soul: 4850, gold: 97 },
  { level: 22, soul: 5200, gold: 104 },
  { level: 23, soul: 5550, gold: 111 },
  { level: 24, soul: 5900, gold: 118 },
  { level: 25, soul: 6300, gold: 126 },
  { level: 26, soul: 6650, gold: 133 },
];

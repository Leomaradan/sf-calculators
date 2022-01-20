import type { ITable } from './type';

export const mineLevel: ITable[] = [
  { gold: 15, level: 1, stone: 17, wood: 50 },
  { gold: 30, level: 2, stone: 67, wood: 200 },
  { gold: 45, level: 3, stone: 187, wood: 587 },
  { gold: 60, level: 4, stone: 444, wood: 1467 },
  { gold: 75, level: 5, stone: 1067, wood: 3333 },
  { gold: 90, level: 6, stone: 2667, wood: 8000 },
  { gold: 105, level: 7, stone: 5911, wood: 17889 },
  { gold: 120, level: 8, stone: 12373, wood: 36267 },
  { gold: 135, level: 9, stone: 25500, wood: 76500 },
  { gold: 150, level: 10, stone: 60000, wood: 184800 },
  { gold: 165, level: 11, stone: 133200, wood: 414000 },
  { gold: 180, level: 12, stone: 273600, wood: 830400 },
  { gold: 195, level: 13, stone: 619200, wood: 1872000 },
  { gold: 210, level: 14, stone: 1248000, wood: 3744000 },
  { gold: 225, level: 15, stone: 2340000, wood: 7200000 },
  { gold: 240, level: 16, stone: 5040000, wood: 15120000 },
  { gold: 255, level: 17, stone: 9000000, wood: 27350000 },
  { gold: 270, level: 18, stone: 17500000, wood: 50000000 },
  { gold: 285, level: 19, stone: 30000000, wood: 90000000 },
  { gold: 300, level: 20, stone: 54000000, wood: 165000000 },
];

/**
 * Extraction time. First index is mine level (starting with 1), second index is quarter level
 */
export const extractionTimeMatrix: number[][] = [
  [60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15],
  [120, 114, 108, 102, 96, 90, 84, 78, 72, 66, 60, 54, 48, 42, 36, 30],
  [180, 171, 162, 153, 144, 135, 126, 117, 108, 99, 90, 81, 72, 63, 54, 45],
  [240, 228, 216, 204, 192, 180, 168, 156, 144, 132, 120, 108, 96, 84, 72, 60],
  [
    360, 342, 324, 306, 288, 270, 252, 234, 216, 198, 180, 162, 144, 126, 108,
    90,
  ],
  [
    480, 456, 432, 408, 384, 360, 336, 312, 288, 264, 240, 216, 192, 168, 144,
    120,
  ],
  [
    600, 570, 540, 510, 480, 450, 420, 390, 360, 330, 300, 270, 240, 210, 180,
    150,
  ],
  [
    720, 684, 648, 612, 576, 540, 504, 468, 432, 396, 360, 324, 288, 252, 216,
    180,
  ],
  [
    840, 798, 756, 714, 672, 630, 588, 546, 504, 462, 420, 378, 336, 294, 252,
    210,
  ],
  [
    960, 912, 864, 816, 768, 720, 672, 624, 576, 528, 480, 432, 384, 336, 288,
    240,
  ],
  [
    1080, 1026, 972, 918, 864, 810, 756, 702, 648, 594, 540, 486, 432, 378, 324,
    270,
  ],
  [
    1200, 1140, 1080, 1020, 960, 900, 840, 780, 720, 660, 600, 540, 480, 420,
    360, 300,
  ],
  [
    1440, 1368, 1296, 1224, 1152, 1080, 1008, 936, 864, 792, 720, 648, 576, 504,
    432, 360,
  ],
  [
    1680, 1596, 1512, 1428, 1344, 1260, 1176, 1092, 1008, 924, 840, 756, 672,
    588, 504, 420,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
  [
    1920, 1824, 1728, 1632, 1536, 1440, 1344, 1248, 1152, 1056, 960, 864, 768,
    672, 576, 480,
  ],
];

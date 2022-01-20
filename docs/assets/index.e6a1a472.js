var Se = Object.defineProperty;
var Q = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty,
  Ne = Object.prototype.propertyIsEnumerable;
var P = (e, t, l) =>
    t in e
      ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[t] = l),
  N = (e, t) => {
    for (var l in t || (t = {})) Fe.call(t, l) && P(e, l, t[l]);
    if (Q) for (var l of Q(t)) Ne.call(t, l) && P(e, l, t[l]);
    return e;
  };
import {
  c as Ce,
  u as Le,
  a as He,
  D as xe,
  F as $,
  j as ke,
  b as Re,
  d as Me,
  e as q,
  L as x,
  y as $e,
  f as qe,
  r as Ae,
  p as Ue,
  g as je,
  h as De,
  i as Qe,
  k as Pe,
  l as Ie,
  P as Oe,
  m as Be,
  H as Ee,
  R as Ke,
  n as I,
  S as Ge,
} from './vendor.5fcd8770.js';
const We = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === 'childList')
        for (const i of n.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(s) {
    const n = {};
    return (
      s.integrity && (n.integrity = s.integrity),
      s.referrerpolicy && (n.referrerPolicy = s.referrerpolicy),
      s.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : s.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const n = l(s);
    fetch(s.href, n);
  }
};
We();
const _e = {
    current: {
      fortress: 0,
      academy: 0,
      archery: 0,
      barracks: 0,
      fortifications: 0,
      mageTower: 0,
      mine: 0,
      quarry: 0,
      smithy: 0,
      treasury: 0,
      woodcutter: 0,
      quarters: 0,
      archer: 0,
      mage: 0,
      hok: 0,
      soldier: 0,
    },
    target: {
      fortress: 0,
      academy: 0,
      archery: 0,
      barracks: 0,
      fortifications: 0,
      mageTower: 0,
      mine: 0,
      quarry: 0,
      smithy: 0,
      treasury: 0,
      woodcutter: 0,
      quarters: 0,
      archer: 0,
      mage: 0,
      hok: 0,
      soldier: 0,
    },
  },
  O = Ce({
    name: 'fortress',
    initialState: _e,
    reducers: {
      setCurrent: (e, t) => {
        e.current = N(N({}, e.current), t.payload);
      },
      setTarget: (e, t) => {
        e.target = N(N({}, e.target), t.payload);
      },
    },
  }),
  { setCurrent: Ye, setTarget: ze } = O.actions;
var Je = O.reducer;
const Ve = () => Le(),
  A = He,
  Xe = { home: 'Home', title: 'S & F Calculator', tools: 'Tools' },
  Ze = {
    buildingAcademy: 'academy',
    buildingArchery: 'archery guild',
    buildingBarracks: 'barracks',
    buildingFortifications: 'fortifications',
    buildingFortress: 'fortress',
    buildingMageTower: 'mages tower',
    buildingMine: 'gem mine',
    buildingQuarry: 'quarry',
    buildingQuarters: "laborer's quarters",
    buildingSmithy: 'smithy',
    buildingTreasury: 'treasury',
    buildingWoodcutter: "woodcutter's hut",
    description: 'Fortress construction planner',
    extractionGemTime: 'gem extraction time',
    quartersTimeReduction: 'time reduction',
    timeToFill: 'time to fill',
    title: 'Fortress',
    treasurySlot: 'slot',
    unitArcher: 'archer',
    unitLimit: 'unit limit',
    unitMage: 'mage',
    unitSoldier: 'soldier',
    upgradeHoK: 'hall of knights',
  },
  eo = {
    count: 'count',
    day: 'day',
    dayShort: 'd',
    gold: 'gold',
    hour: 'hour',
    hourShort: 'h',
    max: 'max',
    minute: 'minute',
    minuteShort: 'm',
    resources: 'resources',
    second: 'second',
    secondShort: 's',
    stone: 'stone',
    wood: 'wood',
  };
var oo = { app: Xe, fortress: Ze, general: eo };
const to = { home: 'Accueil', title: 'S & F Calculateur', tools: 'Outils' },
  lo = {
    buildingAcademy: 'acad\xE9mie',
    buildingArchery: 'guilde des archers',
    buildingBarracks: 'caserne',
    buildingFortifications: 'fortifications',
    buildingFortress: 'forteresse',
    buildingMageTower: 'tour des mages',
    buildingMine: 'mine de gemmes',
    buildingQuarry: 'carri\xE8re',
    buildingQuarters: 'quartier ouvrier',
    buildingSmithy: 'forge',
    buildingTreasury: 'banque',
    buildingWoodcutter: 'camp de b\xFBcherons',
    description: 'Planificateur de d\xE9veloppement de forteresse',
    extractionGemTime: "temps d'extraction de gemmes",
    quartersTimeReduction: 'r\xE9duction du temps de construction',
    timeToFill: 'temps pour remplir',
    title: 'Forteresse',
    treasurySlot: 'emplacement',
    unitArcher: 'archer',
    unitLimit: "limite d'unit\xE9s",
    unitMage: 'mage de combat',
    unitSoldier: 'soldat',
    upgradeHoK: 'salle des chevaliers',
  },
  ro = {
    count: 'nombre',
    day: 'jour',
    dayShort: 'j',
    gold: 'or',
    hour: 'heur',
    hourShort: 'h',
    max: 'max',
    minute: 'minute',
    minuteShort: 'm',
    resources: 'ressources',
    second: 'seconde',
    secondShort: 's',
    stone: 'pierre',
    wood: 'bois',
  };
var so = { app: to, fortress: lo, general: ro };
const C = { 'en-US': oo, 'fr-FR': so },
  U = Object.keys(C),
  L = {};
U.forEach((e) => {
  L[e.substring(0, 2)] = e;
});
const B = (e) => {
    if (e) {
      const l = e.substring(0, 2);
      if (U.includes(e)) return e;
      if (L[l]) return L[l];
    }
    const t = Array.isArray(window.navigator.language)
      ? window.navigator.language
      : [window.navigator.language];
    for (const l of t) {
      const r = l,
        s = r.substring(0, 2);
      if (U.includes(r)) return r;
      if (L[s]) return L[s];
    }
    return 'en-US';
  },
  k = xe({
    allDictionary: C,
    dictionary: C['en-US'],
    userLanguage: 'en-US',
    userLanguageChange: () => {},
  }),
  f = () => $(k).dictionary,
  E = () => {
    const e = $(k);
    return (t) => {
      const l = t.split('.');
      let r = e.dictionary;
      return (
        l.forEach((s) => {
          r[s] !== void 0 && (r = r[s]);
        }),
        String(r)
      );
    };
  },
  no = () => $(k).userLanguage,
  o = ke,
  d = Re,
  a = Me,
  K = (e) => {
    const [t, ...l] = e.split('');
    return `${t.toUpperCase()}${l.join('')}`;
  },
  w = ({ children: e, word: t }) => {
    const l = q(
      () =>
        typeof e == 'string'
          ? t !== !0
            ? K(e)
            : e
                .split(' ')
                .map((s) => (s.length > 3 ? K(s) : s))
                .join(' ')
          : e,
      [e, t],
    );
    return o(a, { children: l });
  },
  G = ({ children: e, label: t }) => {
    const l = q(() => Math.ceil(1e4 * Math.random()), []);
    return d(a, {
      children: [
        o('button', {
          className: 'btn btn-secondary',
          'data-bs-target': `#modal${l}`,
          'data-bs-toggle': 'modal',
          type: 'button',
          children: t,
        }),
        o('div', {
          'aria-hidden': 'true',
          className: 'modal fade',
          id: `modal${l}`,
          tabIndex: -1,
          children: o('div', {
            className: 'modal-dialog',
            children: o('div', {
              className: 'modal-content',
              children: o('div', { className: 'modal-body', children: e }),
            }),
          }),
        }),
      ],
    });
  },
  v = ({
    additionalStats: e,
    childForm: t,
    current: l,
    currentLabel: r,
    label: s,
    max: n,
    setCurrent: i,
    setTarget: g,
    target: u,
    targetLabel: c,
  }) => {
    const h = typeof n == 'number' ? n : n.current,
      y = typeof n == 'number' ? n : n.target,
      F = (S) => {
        const T = parseInt(S.currentTarget.value, 10);
        i(T), T > u && g(T);
      },
      b = (S) => {
        const T = parseInt(S.currentTarget.value, 10);
        T >= l && g(T);
      };
    return d('div', {
      className: 'row level-selector',
      children: [
        o('div', {
          className: 'col-lg-4 col-md-12',
          children: d('label', {
            className: 'form-label',
            children: [
              t && o('i', { className: 'bi bi-arrow-return-right' }),
              o(w, { children: s }),
            ],
          }),
        }),
        d('div', {
          className: 'col-lg-4 col-md-12',
          children: [
            o('input', {
              'aria-label': r,
              className: 'form-control',
              max: h,
              min: '0',
              onInput: F,
              placeholder: r,
              type: 'number',
              value: l,
            }),
            e &&
              d(a, {
                children: [
                  o('p', {
                    className: 'd-none d-sm-block',
                    children: o('small', {
                      children: o(e, { type: 'current', value: l }),
                    }),
                  }),
                  o('div', {
                    className: 'd-block d-sm-none',
                    children: o(G, {
                      label: '...',
                      children: o(e, { type: 'current', value: l }),
                    }),
                  }),
                ],
              }),
          ],
        }),
        d('div', {
          className: 'col-lg-4 col-md-12',
          children: [
            o('input', {
              'aria-label': c,
              className: 'form-control',
              max: y,
              min: l,
              onInput: b,
              placeholder: c,
              type: 'number',
              value: u,
            }),
            e &&
              d(a, {
                children: [
                  o('p', {
                    className: 'd-none d-sm-block',
                    children: o('small', {
                      children: o(e, { type: 'target', value: u }),
                    }),
                  }),
                  o('div', {
                    className: 'd-block d-sm-none',
                    children: o(G, {
                      label: '...',
                      children: o(e, { type: 'target', value: u }),
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  H = 86400,
  R = 3600,
  j = 60,
  ao = (e, t) => {
    const l = Math.floor(e / H),
      r = Math.floor((e - l * H) / R),
      s = Math.floor((e - r * R - l * H) / j),
      n = e - l * H - r * R - s * j;
    let i = r.toString(),
      g = s.toString(),
      u = n.toString();
    r < 10 && e >= H && (i = `0${i}`),
      s < 10 && e >= R && (g = `0${g}`),
      n < 10 && e >= j && (u = `0${u}`);
    const c = [];
    return (
      l !== 0 && c.push(`${l}${t.general.dayShort}`),
      r !== 0 && c.push(`${i}${t.general.hourShort}`),
      s !== 0 && c.push(`${g}${t.general.minuteShort}`),
      n !== 0 && c.push(`${u}${t.general.secondShort}`),
      c.join(' ')
    );
  },
  M = ({ children: e, minutes: t }) => {
    const l = f();
    if (typeof e == 'number') {
      const r = t ? 60 * e : e;
      return o(a, { children: ao(r, l) });
    }
    return o(a, { children: e });
  },
  W = [
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
    { level: 15, gold: 105, wood: 144e4, stone: 1872e3, timeToFill: 576 },
    { level: 16, gold: 112, wood: 3024e3, stone: 4032e3, timeToFill: 600 },
    { level: 17, gold: 119, wood: 547e4, stone: 72e5, timeToFill: 624 },
    { level: 18, gold: 126, wood: 1e7, stone: 14e6, timeToFill: 648 },
    { level: 19, gold: 133, wood: 18e6, stone: 24e6, timeToFill: 660 },
    { level: 20, gold: 140, wood: 33e6, stone: 43e6, timeToFill: 720 },
  ],
  io = [
    { level: 1, gold: 15, wood: 30, stone: 13 },
    { level: 2, gold: 30, wood: 120, stone: 53 },
    { level: 3, gold: 45, wood: 352, stone: 149 },
    { level: 4, gold: 60, wood: 880, stone: 356 },
    { level: 5, gold: 75, wood: 2e3, stone: 853 },
    { level: 6, gold: 90, wood: 4800, stone: 2133 },
    { level: 7, gold: 105, wood: 10733, stone: 4729 },
    { level: 8, gold: 120, wood: 21760, stone: 9899 },
    { level: 9, gold: 135, wood: 45900, stone: 20400 },
    { level: 10, gold: 150, wood: 110880, stone: 48e3 },
    { level: 11, gold: 165, wood: 248400, stone: 106560 },
    { level: 12, gold: 180, wood: 498240, stone: 218880 },
    { level: 13, gold: 195, wood: 1123200, stone: 495360 },
    { level: 14, gold: 210, wood: 2246400, stone: 998400 },
    { level: 15, gold: 225, wood: 432e4, stone: 1872e3 },
    { level: 16, gold: 240, wood: 9072e3, stone: 4032e3 },
    { level: 17, gold: 255, wood: 1641e4, stone: 72e5 },
    { level: 18, gold: 270, wood: 3e7, stone: 14e6 },
    { level: 19, gold: 285, wood: 54e6, stone: 24e6 },
    { level: 20, gold: 300, wood: 99e6, stone: 432e5 },
  ],
  co = [
    { level: 1, gold: 10, wood: 0, stone: 0 },
    { level: 2, gold: 20, wood: 150, stone: 50 },
    { level: 3, gold: 30, wood: 440, stone: 140 },
    { level: 4, gold: 40, wood: 1100, stone: 333 },
    { level: 5, gold: 50, wood: 2500, stone: 800 },
    { level: 6, gold: 60, wood: 6e3, stone: 2e3 },
    { level: 7, gold: 70, wood: 13417, stone: 4433 },
    { level: 8, gold: 80, wood: 27200, stone: 9280 },
    { level: 9, gold: 90, wood: 57375, stone: 19125 },
    { level: 10, gold: 100, wood: 154e3, stone: 5e4 },
    { level: 11, gold: 110, wood: 379500, stone: 122100 },
    { level: 12, gold: 120, wood: 830400, stone: 273600 },
    { level: 13, gold: 130, wood: 1872e3, stone: 619200 },
    { level: 14, gold: 140, wood: 3744e3, stone: 1248e3 },
    { level: 15, gold: 150, wood: 72e5, stone: 234e4 },
    { level: 16, gold: 160, wood: 1512e4, stone: 504e4 },
    { level: 17, gold: 170, wood: 2735e4, stone: 9e6 },
    { level: 18, gold: 180, wood: 5e7, stone: 175e5 },
    { level: 19, gold: 190, wood: 9e7, stone: 3e7 },
    { level: 20, gold: 200, wood: 165e6, stone: 54e6 },
  ],
  go = [
    { level: 1, wood: 720, stone: 240 },
    { level: 2, wood: 1408, stone: 448 },
    { level: 3, wood: 2640, stone: 800 },
    { level: 4, wood: 4800, stone: 1536 },
    { level: 5, wood: 9600, stone: 3200 },
    { level: 6, wood: 18400, stone: 6080 },
    { level: 7, wood: 32640, stone: 11136 },
    { level: 8, wood: 61200, stone: 20400 },
    { level: 9, wood: 147840, stone: 48e3 },
    { level: 10, wood: 331200, stone: 106560 },
    { level: 11, wood: 664320, stone: 218880 },
    { level: 12, wood: 1497600, stone: 495360 },
    { level: 13, wood: 2995200, stone: 998400 },
    { level: 14, wood: 576e4, stone: 1872e3 },
    { level: 15, wood: 2188e4, stone: 72e5 },
    { level: 16, wood: 2188e4, stone: 72e5 },
    { level: 17, wood: 4e7, stone: 14e6 },
    { level: 18, wood: 72e6, stone: 24e6 },
    { level: 19, wood: 132e6, stone: 432e5 },
    { level: 20, wood: 24e7, stone: 8e7 },
  ],
  uo = [
    { gold: 15, level: 1, stone: 17, wood: 50 },
    { gold: 30, level: 2, stone: 67, wood: 200 },
    { gold: 45, level: 3, stone: 187, wood: 587 },
    { gold: 60, level: 4, stone: 444, wood: 1467 },
    { gold: 75, level: 5, stone: 1067, wood: 3333 },
    { gold: 90, level: 6, stone: 2667, wood: 8e3 },
    { gold: 105, level: 7, stone: 5911, wood: 17889 },
    { gold: 120, level: 8, stone: 12373, wood: 36267 },
    { gold: 135, level: 9, stone: 25500, wood: 76500 },
    { gold: 150, level: 10, stone: 6e4, wood: 184800 },
    { gold: 165, level: 11, stone: 133200, wood: 414e3 },
    { gold: 180, level: 12, stone: 273600, wood: 830400 },
    { gold: 195, level: 13, stone: 619200, wood: 1872e3 },
    { gold: 210, level: 14, stone: 1248e3, wood: 3744e3 },
    { gold: 225, level: 15, stone: 234e4, wood: 72e5 },
    { gold: 240, level: 16, stone: 504e4, wood: 1512e4 },
    { gold: 255, level: 17, stone: 9e6, wood: 2735e4 },
    { gold: 270, level: 18, stone: 175e5, wood: 5e7 },
    { gold: 285, level: 19, stone: 3e7, wood: 9e7 },
    { gold: 300, level: 20, stone: 54e6, wood: 165e6 },
  ],
  vo = [
    [60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15],
    [120, 114, 108, 102, 96, 90, 84, 78, 72, 66, 60, 54, 48, 42, 36, 30],
    [180, 171, 162, 153, 144, 135, 126, 117, 108, 99, 90, 81, 72, 63, 54, 45],
    [
      240, 228, 216, 204, 192, 180, 168, 156, 144, 132, 120, 108, 96, 84, 72,
      60,
    ],
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
      1080, 1026, 972, 918, 864, 810, 756, 702, 648, 594, 540, 486, 432, 378,
      324, 270,
    ],
    [
      1200, 1140, 1080, 1020, 960, 900, 840, 780, 720, 660, 600, 540, 480, 420,
      360, 300,
    ],
    [
      1440, 1368, 1296, 1224, 1152, 1080, 1008, 936, 864, 792, 720, 648, 576,
      504, 432, 360,
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
  ],
  _ = [
    { level: 1, gold: 5, wood: 35, stone: 12, timeReduction: 5 },
    { level: 2, gold: 10, wood: 138, stone: 46, timeReduction: 10 },
    { level: 3, gold: 15, wood: 406, stone: 129, timeReduction: 15 },
    { level: 4, gold: 20, wood: 1015, stone: 308, timeReduction: 20 },
    { level: 5, gold: 25, wood: 2308, stone: 738, timeReduction: 25 },
    { level: 6, gold: 30, wood: 5538, stone: 1849, timeReduction: 30 },
    { level: 7, gold: 35, wood: 12385, stone: 4092, timeReduction: 35 },
    { level: 8, gold: 40, wood: 25108, stone: 8566, timeReduction: 40 },
    { level: 9, gold: 45, wood: 52962, stone: 17654, timeReduction: 45 },
    { level: 10, gold: 50, wood: 142154, stone: 46154, timeReduction: 50 },
    { level: 11, gold: 55, wood: 350308, stone: 112708, timeReduction: 55 },
    { level: 12, gold: 60, wood: 766523, stone: 252554, timeReduction: 60 },
    { level: 13, gold: 65, wood: 1872e3, stone: 619200, timeReduction: 65 },
    { level: 14, gold: 70, wood: 3744e3, stone: 1248e3, timeReduction: 70 },
    { level: 15, gold: 75, wood: 72e5, stone: 234e4, timeReduction: 75 },
  ],
  Y = [
    { level: 1, gold: 25, wood: 40, stone: 13, slot: 6 },
    { level: 2, gold: 50, wood: 160, stone: 53, slot: 7 },
    { level: 3, gold: 75, wood: 469, stone: 149, slot: 8 },
    { level: 4, gold: 100, wood: 1173, stone: 356, slot: 9 },
    { level: 5, gold: 125, wood: 2667, stone: 853, slot: 10 },
    { level: 6, gold: 150, wood: 6400, stone: 2133, slot: 11 },
    { level: 7, gold: 175, wood: 14311, stone: 4729, slot: 12 },
    { level: 8, gold: 200, wood: 29013, stone: 9899, slot: 13 },
    { level: 9, gold: 225, wood: 61200, stone: 20400, slot: 14 },
    { level: 10, gold: 250, wood: 147840, stone: 48e3, slot: 15 },
    { level: 11, gold: 275, wood: 331200, stone: 106560, slot: 16 },
    { level: 12, gold: 300, wood: 664320, stone: 218880, slot: 17 },
    { level: 13, gold: 325, wood: 1497600, stone: 495360, slot: 18 },
    { level: 14, gold: 350, wood: 2995200, stone: 998400, slot: 19 },
    { level: 15, gold: 375, wood: 0, stone: 0, slot: 20 },
    { level: 16, gold: 375, wood: 0, stone: 0, slot: 21 },
    { level: 17, gold: 375, wood: 576e4, stone: 1872e3, slot: 22 },
  ],
  z = [
    { level: 1, gold: 5, wood: 41, stone: 7, limit: 2 },
    { level: 2, gold: 10, wood: 164, stone: 27, limit: 4 },
    { level: 3, gold: 15, wood: 480, stone: 76, limit: 6 },
    { level: 4, gold: 20, wood: 1200, stone: 182, limit: 8 },
    { level: 5, gold: 25, wood: 2727, stone: 436, limit: 10 },
    { level: 6, gold: 30, wood: 6545, stone: 1091, limit: 12 },
    { level: 7, gold: 35, wood: 14535, stone: 2417, limit: 14 },
    { level: 8, gold: 40, wood: 29673, stone: 5062, limit: 16 },
    { level: 9, gold: 45, wood: 62591, stone: 10432, limit: 18 },
    { level: 10, gold: 50, wood: 168e3, stone: 27273, limit: 20 },
    { level: 11, gold: 55, wood: 414e3, stone: 66600, limit: 22 },
    { level: 12, gold: 60, wood: 830400, stone: 136800, limit: 24 },
    { level: 13, gold: 65, wood: 1872e3, stone: 309600, limit: 26 },
    { level: 14, gold: 70, wood: 3744e3, stone: 624e3, limit: 28 },
    { level: 15, gold: 75, wood: 72e5, stone: 117e4, limit: 30 },
  ],
  J = [
    { level: 1, gold: 4, wood: 20, stone: 14, limit: 3 },
    { level: 2, gold: 8, wood: 82, stone: 55, limit: 6 },
    { level: 3, gold: 12, wood: 240, stone: 153, limit: 9 },
    { level: 4, gold: 16, wood: 600, stone: 364, limit: 12 },
    { level: 5, gold: 20, wood: 1364, stone: 873, limit: 15 },
    { level: 6, gold: 24, wood: 3273, stone: 2182, limit: 18 },
    { level: 7, gold: 28, wood: 7318, stone: 4836, limit: 21 },
    { level: 8, gold: 32, wood: 14836, stone: 10124, limit: 24 },
    { level: 9, gold: 36, wood: 31295, stone: 20864, limit: 27 },
    { level: 10, gold: 40, wood: 84e3, stone: 54545, limit: 30 },
    { level: 11, gold: 44, wood: 207e3, stone: 133200, limit: 33 },
    { level: 12, gold: 48, wood: 415200, stone: 273600, limit: 36 },
    { level: 13, gold: 52, wood: 936e3, stone: 619200, limit: 39 },
    { level: 14, gold: 56, wood: 1872e3, stone: 1248e3, limit: 42 },
    { level: 15, gold: 60, wood: 36e5, stone: 234e4, limit: 45 },
  ],
  V = [
    { level: 1, gold: 6, wood: 61, stone: 20, limit: 1 },
    { level: 2, gold: 12, wood: 240, stone: 76, limit: 2 },
    { level: 3, gold: 18, wood: 675, stone: 205, limit: 3 },
    { level: 4, gold: 24, wood: 1636, stone: 524, limit: 4 },
    { level: 5, gold: 30, wood: 4091, stone: 1364, limit: 5 },
    { level: 6, gold: 36, wood: 9409, stone: 3109, limit: 6 },
    { level: 7, gold: 42, wood: 19473, stone: 6644, limit: 7 },
    { level: 8, gold: 48, wood: 41727, stone: 13909, limit: 8 },
    { level: 9, gold: 54, wood: 113400, stone: 36818, limit: 9 },
    { level: 10, gold: 60, wood: 282273, stone: 90818, limit: 10 },
    { level: 11, gold: 66, wood: 622800, stone: 205200, limit: 11 },
    { level: 12, gold: 72, wood: 1404e3, stone: 464400, limit: 12 },
    { level: 13, gold: 78, wood: 2808e3, stone: 936e3, limit: 13 },
    { level: 14, gold: 84, wood: 54e5, stone: 1755e3, limit: 14 },
    { level: 15, gold: 90, wood: 1134e4, stone: 378e4, limit: 15 },
  ],
  mo = [
    { level: 1, gold: 4, wood: 25, stone: 8 },
    { level: 2, gold: 8, wood: 100, stone: 33 },
    { level: 3, gold: 12, wood: 293, stone: 93 },
    { level: 4, gold: 16, wood: 733, stone: 222 },
    { level: 5, gold: 20, wood: 1667, stone: 533 },
    { level: 6, gold: 24, wood: 4e3, stone: 1333 },
    { level: 7, gold: 28, wood: 8944, stone: 2956 },
    { level: 8, gold: 32, wood: 18133, stone: 6187 },
    { level: 9, gold: 36, wood: 38250, stone: 12750 },
    { level: 10, gold: 40, wood: 92400, stone: 3e4 },
    { level: 11, gold: 44, wood: 207e3, stone: 66600 },
    { level: 12, gold: 48, wood: 415200, stone: 136800 },
    { level: 13, gold: 52, wood: 936e3, stone: 309600 },
    { level: 14, gold: 56, wood: 1872e3, stone: 624e3 },
    { level: 15, gold: 60, wood: 36e5, stone: 117e4 },
    { level: 16, gold: 64, wood: 756e4, stone: 252e4 },
    { level: 17, gold: 68, wood: 13675e3, stone: 45e5 },
    { level: 18, gold: 72, wood: 25e6, stone: 875e4 },
    { level: 19, gold: 76, wood: 45e6, stone: 15e6 },
    { level: 20, gold: 80, wood: 825e5, stone: 27e6 },
  ],
  wo = [
    { level: 1, wood: 270, stone: 210 },
    { level: 2, wood: 528, stone: 392 },
    { level: 3, wood: 990, stone: 700 },
    { level: 4, wood: 1800, stone: 1344 },
    { level: 5, wood: 3600, stone: 2800 },
    { level: 6, wood: 6900, stone: 5320 },
    { level: 7, wood: 12240, stone: 9744 },
    { level: 8, wood: 22950, stone: 17850 },
    { level: 9, wood: 55400, stone: 42e3 },
    { level: 10, wood: 124200, stone: 93240 },
    { level: 11, wood: 249120, stone: 191520 },
    { level: 12, wood: 561600, stone: 433440 },
    { level: 13, wood: 1123600, stone: 873600 },
    { level: 14, wood: 216e4, stone: 1638e3 },
    { level: 15, wood: 4536e3, stone: 3528e3 },
    { level: 16, wood: 8205e3, stone: 63e5 },
    { level: 17, wood: 15e6, stone: 1225e4 },
    { level: 18, wood: 27e6, stone: 21e6 },
    { level: 19, wood: 495e5, stone: 378e5 },
    { level: 20, wood: 9e7, stone: 7e7 },
  ],
  ho = [
    { level: 1, wood: 720, stone: 60 },
    { level: 2, wood: 1408, stone: 112 },
    { level: 3, wood: 2640, stone: 200 },
    { level: 4, wood: 4800, stone: 384 },
    { level: 5, wood: 9600, stone: 800 },
    { level: 6, wood: 18400, stone: 1520 },
    { level: 7, wood: 32640, stone: 2784 },
    { level: 8, wood: 61200, stone: 5100 },
    { level: 9, wood: 147840, stone: 12e3 },
    { level: 10, wood: 331200, stone: 26640 },
    { level: 11, wood: 664320, stone: 54720 },
    { level: 12, wood: 1497600, stone: 123840 },
    { level: 13, wood: 2995200, stone: 249600 },
    { level: 14, wood: 576e4, stone: 468e3 },
    { level: 15, wood: 12096e3, stone: 1008e3 },
    { level: 16, wood: 2188e4, stone: 18e5 },
    { level: 17, wood: 4e7, stone: 35e5 },
    { level: 18, wood: 72e6, stone: 6e6 },
    { level: 19, wood: 132e6, stone: 108e5 },
    { level: 20, wood: 24e7, stone: 2e7 },
  ],
  fo = [
    { level: 1, wood: 360, stone: 180 },
    { level: 2, wood: 704, stone: 336 },
    { level: 3, wood: 1320, stone: 600 },
    { level: 4, wood: 2400, stone: 1152 },
    { level: 5, wood: 4800, stone: 2400 },
    { level: 6, wood: 9200, stone: 4560 },
    { level: 7, wood: 16320, stone: 8352 },
    { level: 8, wood: 30600, stone: 15300 },
    { level: 9, wood: 73920, stone: 36e3 },
    { level: 10, wood: 165600, stone: 79920 },
    { level: 11, wood: 332160, stone: 164150 },
    { level: 12, wood: 748800, stone: 371520 },
    { level: 13, wood: 1497600, stone: 748800 },
    { level: 14, wood: 288e4, stone: 1404e3 },
    { level: 15, wood: 6048e3, stone: 3024e3 },
    { level: 16, wood: 1094e4, stone: 54e5 },
    { level: 17, wood: 2e7, stone: 105e5 },
    { level: 18, wood: 36e6, stone: 18e6 },
    { level: 19, wood: 66e6, stone: 324e5 },
    { level: 20, wood: 12e7, stone: 6e7 },
  ],
  X = [
    { level: 1, gold: 2, wood: 0, stone: 0, storage: 375, resourceHour: 150 },
    { level: 2, gold: 4, wood: 30, stone: 20, storage: 605, resourceHour: 220 },
    { level: 3, gold: 6, wood: 88, stone: 56, storage: 990, resourceHour: 330 },
    {
      level: 4,
      gold: 8,
      wood: 220,
      stone: 133,
      storage: 1625,
      resourceHour: 500,
    },
    {
      level: 5,
      gold: 10,
      wood: 500,
      stone: 320,
      storage: 2625,
      resourceHour: 750,
    },
    {
      level: 6,
      gold: 12,
      wood: 1200,
      stone: 800,
      storage: 4312,
      resourceHour: 1150,
    },
    {
      level: 7,
      gold: 14,
      wood: 2683,
      stone: 1773,
      storage: 6800,
      resourceHour: 1700,
    },
    {
      level: 8,
      gold: 16,
      wood: 5440,
      stone: 3712,
      storage: 12750,
      resourceHour: 2550,
    },
    {
      level: 9,
      gold: 18,
      wood: 11475,
      stone: 7650,
      storage: 23100,
      resourceHour: 3850,
    },
    {
      level: 10,
      gold: 20,
      wood: 30800,
      stone: 2e4,
      storage: 46e3,
      resourceHour: 5750,
    },
    {
      level: 11,
      gold: 22,
      wood: 75900,
      stone: 48840,
      storage: 86500,
      resourceHour: 8650,
    },
    {
      level: 12,
      gold: 24,
      wood: 166080,
      stone: 109440,
      storage: 156e3,
      resourceHour: 13e3,
    },
    {
      level: 13,
      gold: 26,
      wood: 405600,
      stone: 268320,
      storage: 312e3,
      resourceHour: 19500,
    },
    {
      level: 14,
      gold: 28,
      wood: 873600,
      stone: 582400,
      storage: 6e5,
      resourceHour: 3e4,
    },
    {
      level: 15,
      gold: 30,
      wood: 18e5,
      stone: 117e4,
      storage: 108e4,
      resourceHour: 45e3,
    },
    {
      level: 16,
      gold: 32,
      wood: 378e4,
      stone: 252e4,
      storage: 1687500,
      resourceHour: 67500,
    },
    {
      level: 17,
      gold: 34,
      wood: 6837500,
      stone: 45e5,
      storage: 26e5,
      resourceHour: 1e5,
    },
    {
      level: 18,
      gold: 36,
      wood: 125e5,
      stone: 875e4,
      storage: 405e4,
      resourceHour: 15e4,
    },
    {
      level: 19,
      gold: 38,
      wood: 225e5,
      stone: 15e6,
      storage: 63e5,
      resourceHour: 225e3,
    },
    {
      level: 20,
      gold: 40,
      wood: 4125e4,
      stone: 27e6,
      storage: 105e5,
      resourceHour: 35e4,
    },
  ],
  Z = [
    { level: 1, gold: 3, wood: 22, stone: 0, storage: 125, resourceHour: 50 },
    { level: 2, gold: 6, wood: 90, stone: 16, storage: 192, resourceHour: 70 },
    {
      level: 3,
      gold: 9,
      wood: 264,
      stone: 45,
      storage: 300,
      resourceHour: 100,
    },
    {
      level: 4,
      gold: 12,
      wood: 660,
      stone: 107,
      storage: 520,
      resourceHour: 160,
    },
    {
      level: 5,
      gold: 15,
      wood: 1500,
      stone: 256,
      storage: 875,
      resourceHour: 250,
    },
    {
      level: 6,
      gold: 18,
      wood: 3600,
      stone: 640,
      storage: 1425,
      resourceHour: 380,
    },
    {
      level: 7,
      gold: 21,
      wood: 8050,
      stone: 1419,
      storage: 2320,
      resourceHour: 580,
    },
    {
      level: 8,
      gold: 24,
      wood: 16320,
      stone: 2970,
      storage: 4250,
      resourceHour: 850,
    },
    {
      level: 9,
      gold: 27,
      wood: 34425,
      stone: 6120,
      storage: 7500,
      resourceHour: 1250,
    },
    {
      level: 10,
      gold: 30,
      wood: 92400,
      stone: 16e3,
      storage: 14800,
      resourceHour: 1850,
    },
    {
      level: 11,
      gold: 33,
      wood: 227700,
      stone: 39072,
      storage: 28500,
      resourceHour: 2850,
    },
    {
      level: 12,
      gold: 36,
      wood: 498240,
      stone: 87552,
      storage: 51600,
      resourceHour: 4300,
    },
    {
      level: 13,
      gold: 39,
      wood: 1216800,
      stone: 214656,
      storage: 104e3,
      resourceHour: 6500,
    },
    {
      level: 14,
      gold: 42,
      wood: 2620800,
      stone: 465920,
      storage: 195e3,
      resourceHour: 9750,
    },
    {
      level: 15,
      gold: 45,
      wood: 54e5,
      stone: 936e3,
      storage: 36e4,
      resourceHour: 15e3,
    },
    {
      level: 16,
      gold: 48,
      wood: 1134e4,
      stone: 2016e3,
      storage: 562500,
      resourceHour: 22500,
    },
    {
      level: 17,
      gold: 51,
      wood: 20512500,
      stone: 36e5,
      storage: 858e3,
      resourceHour: 33e3,
    },
    {
      level: 18,
      gold: 54,
      wood: 375e5,
      stone: 7e6,
      storage: 135e4,
      resourceHour: 5e4,
    },
    {
      level: 19,
      gold: 57,
      wood: 675e5,
      stone: 12e6,
      storage: 21e5,
      resourceHour: 75e3,
    },
    {
      level: 20,
      gold: 60,
      wood: 12375e4,
      stone: 216e5,
      storage: 345e4,
      resourceHour: 115e3,
    },
  ],
  po = ({ value: e }) => {
    var r, s;
    const t =
        (s =
          (r = W.find((n) => n.level === e)) == null ? void 0 : r.timeToFill) !=
        null
          ? s
          : 0,
      {
        fortress: { timeToFill: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [
            o(w, { children: l }),
            ' :',
            ' ',
            o(M, { minutes: !0, children: t }),
          ],
        });
  },
  p = ({ children: e }) => {
    const t = no();
    return typeof e == 'number'
      ? o(a, { children: Intl.NumberFormat(t).format(e) })
      : o(a, { children: e });
  },
  bo = ({ value: e }) => {
    var r, s;
    const t =
        (s = (r = z.find((n) => n.level === e)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [o(w, { children: l }), ' :', ' ', o(p, { children: t })],
        });
  },
  yo = (e, t) => new Array(t - e).fill(0).map((l, r) => r + e + 1),
  To = {
    academy: W,
    archer: ho,
    archery: z,
    barracks: J,
    fortifications: io,
    fortress: co,
    hok: go,
    mage: fo,
    mageTower: V,
    mine: uo,
    quarry: Z,
    quarters: _,
    smithy: mo,
    soldier: wo,
    treasury: Y,
    woodcutter: X,
  },
  So = () => {
    const e = A((i) => i.fortress),
      { general: t } = f(),
      l = q(() => {
        let i = 0,
          g = 0,
          u = 0;
        return (
          Object.keys(e.current).forEach((c) => {
            const h = c;
            yo(e.current[h], e.target[h]).forEach((F) => {
              const b = To[h].find((S) => S.level === F);
              b && (b.gold && (i += b.gold), (g += b.wood), (u += b.stone));
            });
          }),
          { gold: i, stone: u, wood: g }
        );
      }, [e]),
      { gold: r, stone: s, wood: n } = l;
    return o(a, {
      children: d('table', {
        className: 'table',
        children: [
          o('thead', {
            children: d('tr', {
              children: [
                o('th', {
                  scope: 'col',
                  children: o(w, { children: t.resources }),
                }),
                o('th', {
                  scope: 'col',
                  children: o(w, { children: t.count }),
                }),
              ],
            }),
          }),
          d('tbody', {
            children: [
              d('tr', {
                children: [
                  o('th', {
                    scope: 'row',
                    children: o(w, { children: t.gold }),
                  }),
                  o('td', { children: o(p, { children: r }) }),
                ],
              }),
              d('tr', {
                children: [
                  o('th', {
                    scope: 'row',
                    children: o(w, { children: t.wood }),
                  }),
                  o('td', { children: o(p, { children: n }) }),
                ],
              }),
              d('tr', {
                children: [
                  o('th', {
                    scope: 'row',
                    children: o(w, { children: t.stone }),
                  }),
                  o('td', { children: o(p, { children: s }) }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Fo = ({ type: e, value: t }) => {
    var n;
    const l = (n = A((i) => i.fortress[e].quarters)) != null ? n : 0,
      r = t > 0 ? vo[t - 1][l] : 0,
      {
        fortress: { extractionGemTime: s },
      } = f();
    return t === 0
      ? o(a, {})
      : d(a, {
          children: [
            o(w, { children: s }),
            ' :',
            ' ',
            o(M, { minutes: !0, children: r }),
          ],
        });
  },
  No = ({ value: e }) => {
    var r, s;
    const t =
        (s = (r = V.find((n) => n.level === e)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [o(w, { children: l }), ' :', ' ', o(p, { children: t })],
        });
  },
  Co = ({ value: e }) => {
    var c, h;
    const t = Z.find((y) => y.level === e),
      l = (c = t == null ? void 0 : t.storage) != null ? c : 0,
      r = (h = t == null ? void 0 : t.resourceHour) != null ? h : 0,
      s = (l / r) * 3600,
      {
        fortress: { timeToFill: n },
        general: { hourShort: i, max: g, stone: u },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [
            o(w, { children: u }),
            ' :',
            ' ',
            o(p, { children: r }),
            '/',
            i,
            ', ',
            g,
            ' ',
            o(p, { children: l }),
            ' (',
            n,
            ' :',
            ' ',
            o(M, { children: s }),
            ')',
          ],
        });
  },
  Lo = ({ value: e }) => {
    var r, s;
    const t =
        (s =
          (r = _.find((n) => n.level === e)) == null
            ? void 0
            : r.timeReduction) != null
          ? s
          : 0,
      {
        fortress: { quartersTimeReduction: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, { children: [o(w, { children: l }), ' : ', t, '%'] });
  },
  Ho = ({ value: e }) => {
    var r, s;
    const t =
        (s = (r = J.find((n) => n.level === e)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [o(w, { children: l }), ' :', ' ', o(p, { children: t })],
        });
  },
  xo = ({ value: e }) => {
    var r, s;
    const t =
        (s = (r = Y.find((n) => n.level === e)) == null ? void 0 : r.slot) !=
        null
          ? s
          : 0,
      {
        fortress: { treasurySlot: l },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, { children: [o(w, { children: l }), ' : ', t] });
  },
  ko = ({ value: e }) => {
    var c, h;
    const t = X.find((y) => y.level === e),
      l = (c = t == null ? void 0 : t.storage) != null ? c : 1,
      r = (h = t == null ? void 0 : t.resourceHour) != null ? h : 1,
      s = (l / r) * 3600,
      {
        fortress: { timeToFill: n },
        general: { hourShort: i, max: g, wood: u },
      } = f();
    return e === 0
      ? o(a, {})
      : d(a, {
          children: [
            o(w, { children: u }),
            ' :',
            ' ',
            o(p, { children: r }),
            '/',
            i,
            ', ',
            g,
            ' ',
            o(p, { children: l }),
            ' (',
            n,
            ' :',
            ' ',
            o(M, { children: s }),
            ')',
          ],
        });
  },
  m = (e, t) => [
    (s) => {
      e(Ye({ [t]: s }));
    },
    (s) => {
      e(ze({ [t]: s }));
    },
  ],
  Ro = () => {
    const { current: e, target: t } = A((Te) => Te.fortress),
      l = Ve(),
      { fortress: r } = f(),
      [s, n] = m(l, 'academy'),
      [i, g] = m(l, 'archery'),
      [u, c] = m(l, 'barracks'),
      [h, y] = m(l, 'fortifications'),
      [F, b] = m(l, 'fortress'),
      [S, T] = m(l, 'mageTower'),
      [oe, te] = m(l, 'mine'),
      [le, re] = m(l, 'quarry'),
      [se, ne] = m(l, 'quarters'),
      [de, ae] = m(l, 'smithy'),
      [ie, ce] = m(l, 'treasury'),
      [ge, ue] = m(l, 'woodcutter'),
      [ve, me] = m(l, 'hok'),
      [we, he] = m(l, 'soldier'),
      [fe, pe] = m(l, 'archer'),
      [be, ye] = m(l, 'mage');
    return d(a, {
      children: [
        d('div', {
          className: 'container',
          children: [
            o(v, {
              current: e.fortress,
              label: r.buildingFortress,
              max: 20,
              setCurrent: F,
              setTarget: b,
              target: t.fortress,
            }),
            o(v, {
              childForm: !0,
              current: e.hok,
              label: r.upgradeHoK,
              max: { current: e.fortress, target: t.fortress },
              setCurrent: ve,
              setTarget: me,
              target: t.hok,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: Lo,
              current: e.quarters,
              label: r.buildingQuarters,
              max: 15,
              setCurrent: se,
              setTarget: ne,
              target: t.quarters,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: ko,
              current: e.woodcutter,
              label: r.buildingWoodcutter,
              max: 20,
              setCurrent: ge,
              setTarget: ue,
              target: t.woodcutter,
            }),
            o(v, {
              additionalStats: Co,
              current: e.quarry,
              label: r.buildingQuarry,
              max: 20,
              setCurrent: le,
              setTarget: re,
              target: t.quarry,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: Fo,
              current: e.mine,
              label: r.buildingMine,
              max: 20,
              setCurrent: oe,
              setTarget: te,
              target: t.mine,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: po,
              current: e.academy,
              label: r.buildingAcademy,
              max: 20,
              setCurrent: s,
              setTarget: n,
              target: t.academy,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: bo,
              current: e.archery,
              label: r.buildingArchery,
              max: 15,
              setCurrent: i,
              setTarget: g,
              target: t.archery,
            }),
            o(v, {
              additionalStats: Ho,
              current: e.barracks,
              label: r.buildingBarracks,
              max: 15,
              setCurrent: u,
              setTarget: c,
              target: t.barracks,
            }),
            o(v, {
              additionalStats: No,
              current: e.mageTower,
              label: r.buildingMageTower,
              max: 15,
              setCurrent: S,
              setTarget: T,
              target: t.mageTower,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              additionalStats: xo,
              current: e.treasury,
              label: r.buildingTreasury,
              max: 20,
              setCurrent: ie,
              setTarget: ce,
              target: t.treasury,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              current: e.smithy,
              label: r.buildingSmithy,
              max: 20,
              setCurrent: de,
              setTarget: ae,
              target: t.smithy,
            }),
            o(v, {
              childForm: !0,
              current: e.soldier,
              label: r.unitSoldier,
              max: { current: e.smithy, target: t.smithy },
              setCurrent: we,
              setTarget: he,
              target: t.soldier,
            }),
            o(v, {
              childForm: !0,
              current: e.archer,
              label: r.unitArcher,
              max: { current: e.smithy, target: t.smithy },
              setCurrent: fe,
              setTarget: pe,
              target: t.archer,
            }),
            o(v, {
              childForm: !0,
              current: e.mage,
              label: r.unitMage,
              max: { current: e.smithy, target: t.smithy },
              setCurrent: be,
              setTarget: ye,
              target: t.mage,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(v, {
              current: e.fortifications,
              label: r.buildingFortifications,
              max: 20,
              setCurrent: h,
              setTarget: y,
              target: t.fortifications,
            }),
          ],
        }),
        o(So, {}),
      ],
    });
  },
  Mo = ({ tools: e }) => {
    const t = E();
    return o('div', {
      className: 'row row-cols-1 row-cols-md-2 g-4',
      children: e.map(({ route: l, title: r, description: s }) =>
        o(
          'div',
          {
            className: 'col',
            children: o('div', {
              className: 'card',
              children: d('div', {
                className: 'card-body',
                children: [
                  o('h5', { className: 'card-title', children: t(r) }),
                  o('p', { className: 'card-text', children: t(s) }),
                  o(x, {
                    to: l,
                    children: o('i', { className: 'bi bi-calculator' }),
                  }),
                ],
              }),
            }),
          },
          l,
        ),
      ),
    });
  },
  $o = ({ tools: e }) => {
    const { app: t } = f(),
      l = E();
    return (
      $e(() => {
        document.title = t.title;
      }, [t.title]),
      o('nav', {
        className: 'navbar navbar-expand-lg navbar-dark fixed-top bg-dark',
        children: d('div', {
          className: 'container-fluid',
          children: [
            o(x, { className: 'navbar-brand', to: '/', children: t.title }),
            o('button', {
              className: 'navbar-toggler',
              type: 'button',
              'data-bs-toggle': 'collapse',
              'data-bs-target': '#navbarCollapse',
              'aria-controls': 'navbarCollapse',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation',
              children: o('span', { className: 'navbar-toggler-icon' }),
            }),
            o('div', {
              className: 'collapse navbar-collapse',
              id: 'navbarCollapse',
              children: d('ul', {
                className: 'navbar-nav me-auto mb-2 mb-md-0',
                children: [
                  o('li', {
                    className: 'nav-item',
                    children: o(x, {
                      className: 'nav-link active',
                      'aria-current': 'page',
                      to: '/',
                      children: t.home,
                    }),
                  }),
                  d('li', {
                    className: 'nav-item dropdown',
                    children: [
                      o('a', {
                        className: 'nav-link dropdown-toggle',
                        href: '#',
                        id: 'dropdownNav',
                        'data-bs-toggle': 'dropdown',
                        'aria-expanded': 'false',
                        children: t.tools,
                      }),
                      o('ul', {
                        className: 'dropdown-menu',
                        'aria-labelledby': 'dropdownNav',
                        children: e.map(({ route: r, title: s }) =>
                          o(
                            'li',
                            {
                              children: o(x, {
                                className: 'dropdown-item',
                                to: r,
                                children: l(s),
                              }),
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  qo = qe({ fortress: Je }),
  Ao = { key: 'root', storage: Qe },
  Uo = Ae.exports.createLogger({
    predicate: (e, t) => !t.type.includes('persist/'),
    collapsed: !0,
    duration: !0,
    diff: !0,
  }),
  jo = Ue(Ao, qo),
  Do = je(Uo),
  ee = De(jo, void 0, Do);
var Qo = () => {
  const e = Pe(ee);
  return { store: ee, persistor: e };
};
const Po = ({ children: e, defaultLanguage: t }) => {
    const l = B(t),
      [r, s] = Ie(l),
      n = {
        allDictionary: C,
        dictionary: C[r],
        userLanguage: r,
        userLanguageChange: (i) => {
          const g = B(i);
          s(g);
        },
      };
    return o(k.Provider, { value: n, children: e });
  },
  D = [
    {
      description: 'fortress.description',
      page: Ro,
      route: '/fortress',
      title: 'fortress.title',
    },
  ];
function Io() {
  const { persistor: e, store: t } = Qo();
  return o(Oe, {
    store: t,
    children: o(Be, {
      loading: null,
      persistor: e,
      children: o(Po, {
        children: d(Ee, {
          children: [
            o($o, { tools: D }),
            o('main', {
              className: 'container',
              children: o('div', {
                className: 'page-container p-5',
                children: d(Ke, {
                  children: [
                    o(I, { element: o(Mo, { tools: D }), path: '/' }),
                    D.map(({ page: l, route: r }) =>
                      o(I, { element: o(l, {}), path: r }, r),
                    ),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
Ge(o(Io, {}), document.getElementById('app'));

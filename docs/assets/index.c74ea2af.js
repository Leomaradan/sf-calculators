var Se = Object.defineProperty;
var Q = Object.getOwnPropertySymbols;
var Fe = Object.prototype.hasOwnProperty,
  Ne = Object.prototype.propertyIsEnumerable;
var P = (t, e, l) =>
    e in t
      ? Se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (t[e] = l),
  N = (t, e) => {
    for (var l in e || (e = {})) Fe.call(e, l) && P(t, l, e[l]);
    if (Q) for (var l of Q(e)) Ne.call(e, l) && P(t, l, e[l]);
    return t;
  };
import {
  c as Ce,
  a as Le,
  r as He,
  p as xe,
  b as ke,
  d as Re,
  e as Me,
  f as $e,
  D as qe,
  F as $,
  j as Ae,
  g as Ue,
  h as je,
  y as De,
  L as x,
  i as q,
  u as Qe,
  k as Pe,
  l as Ie,
  P as Oe,
  m as Be,
  H as Ee,
  R as Ke,
  n as I,
  S as Ge,
} from './vendor.fd504d52.js';
const We = function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const n of s)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
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
      setCurrent: (t, e) => {
        t.current = N(N({}, t.current), e.payload);
      },
      setTarget: (t, e) => {
        t.target = N(N({}, t.target), e.payload);
      },
    },
  }),
  { setCurrent: Ye, setTarget: ze } = O.actions;
var Je = O.reducer;
const Ve = Le({ fortress: Je }),
  Xe = { key: 'root', storage: Me },
  Ze = He.exports.createLogger({
    predicate: (t, e) => !e.type.includes('persist/'),
    collapsed: !0,
    duration: !0,
    diff: !0,
  }),
  eo = xe(Xe, Ve),
  oo = ke(Ze),
  B = Re(eo, void 0, oo);
var to = () => {
  const t = $e(B);
  return { store: B, persistor: t };
};
const lo = { home: 'Home', title: 'S & F Calculator', tools: 'Tools' },
  ro = {
    count: 'count',
    gold: 'gold',
    resources: 'resources',
    stone: 'stone',
    wood: 'wood',
    day: 'day',
    dayShort: 'd',
    hour: 'hour',
    hourShort: 'h',
    minute: 'minute',
    minuteShort: 'm',
    second: 'second',
    secondShort: 's',
    max: 'max',
  },
  so = {
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
    title: 'Fortress',
    description: 'Fortress construction planner',
    unitArcher: 'archer',
    unitMage: 'mage',
    unitSoldier: 'soldier',
    upgradeHoK: 'hall of knights',
    timeToFill: 'time to fill',
    quartersTimeReduction: 'time reduction',
    treasurySlot: 'slot',
    extractionGemTime: 'gem extraction time',
    unitLimit: 'unit limit',
  };
var no = { app: lo, general: ro, fortress: so };
const ao = { home: 'Accueil', title: 'S & F Calculateur', tools: 'Outils' },
  io = {
    count: 'nombre',
    gold: 'or',
    resources: 'ressources',
    stone: 'pierre',
    wood: 'bois',
    day: 'jour',
    dayShort: 'j',
    hour: 'heur',
    hourShort: 'h',
    minute: 'minute',
    minuteShort: 'm',
    second: 'seconde',
    secondShort: 's',
    max: 'max',
  },
  co = {
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
    title: 'Forteresse',
    description: 'Planificateur de d\xE9veloppement de forteresse',
    unitArcher: 'archer',
    unitMage: 'mage de combat',
    unitSoldier: 'soldat',
    upgradeHoK: 'salle des chevaliers',
    timeToFill: 'temps pour remplir',
    quartersTimeReduction: 'r\xE9duction du temps de construction',
    extractionGemTime: "temps d'extraction de gemmes",
    treasurySlot: 'emplacement',
    unitLimit: "limite d'unit\xE9s",
  };
var go = { app: ao, general: io, fortress: co };
const C = { 'en-US': no, 'fr-FR': go },
  A = Object.keys(C),
  L = {};
A.forEach((t) => {
  L[t.substring(0, 2)] = t;
});
const E = (t) => {
    if (t) {
      const l = t.substring(0, 2);
      if (A.includes(t)) return t;
      if (L[l]) return L[l];
    }
    const e = Array.isArray(window.navigator.language)
      ? window.navigator.language
      : [window.navigator.language];
    for (const l of e) {
      const r = l,
        s = r.substring(0, 2);
      if (A.includes(r)) return r;
      if (L[s]) return L[s];
    }
    return 'en-US';
  },
  k = qe({
    allDictionary: C,
    dictionary: C['en-US'],
    userLanguage: 'en-US',
    userLanguageChange: () => {},
  }),
  f = () => $(k).dictionary,
  K = () => {
    const t = $(k);
    return (e) => {
      const l = e.split('.');
      let r = t.dictionary;
      return (
        l.forEach((s) => {
          r[s] !== void 0 && (r = r[s]);
        }),
        String(r)
      );
    };
  },
  uo = () => $(k).userLanguage,
  o = Ae,
  d = Ue,
  c = je,
  vo = ({ tools: t }) => {
    const { app: e } = f(),
      l = K();
    return (
      De(() => {
        document.title = e.title;
      }, [e.title]),
      o('nav', {
        className: 'navbar navbar-expand-lg navbar-dark fixed-top bg-dark',
        children: d('div', {
          className: 'container-fluid',
          children: [
            o(x, { className: 'navbar-brand', to: '/', children: e.title }),
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
                      children: e.home,
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
                        children: e.tools,
                      }),
                      o('ul', {
                        className: 'dropdown-menu',
                        'aria-labelledby': 'dropdownNav',
                        children: t.map(({ route: r, title: s }) =>
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
  };
const mo = ({ tools: t }) => {
    const e = K();
    return o('div', {
      className: 'row row-cols-1 row-cols-md-2 g-4',
      children: t.map(({ route: l, title: r, description: s }) =>
        o(
          'div',
          {
            className: 'col',
            children: o('div', {
              className: 'card',
              children: d('div', {
                className: 'card-body',
                children: [
                  o('h5', { className: 'card-title', children: e(r) }),
                  o('p', { className: 'card-text', children: e(s) }),
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
  G = (t) => {
    const [e, ...l] = t.split('');
    return `${e.toUpperCase()}${l.join('')}`;
  },
  m = ({ word: t, children: e }) => {
    const l = q(
      () =>
        typeof e == 'string'
          ? t !== !0
            ? G(e)
            : e
                .split(' ')
                .map((s) => (s.length > 3 ? G(s) : s))
                .join(' ')
          : e,
      [e, t],
    );
    return o(c, { children: l });
  },
  W = ({ label: t, children: e }) => {
    const l = q(() => Math.ceil(Math.random() * 1e4), []);
    return d(c, {
      children: [
        o('button', {
          type: 'button',
          className: 'btn btn-secondary',
          'data-bs-toggle': 'modal',
          'data-bs-target': `#modal${l}`,
          children: t,
        }),
        o('div', {
          className: 'modal fade',
          id: `modal${l}`,
          tabIndex: -1,
          'aria-hidden': 'true',
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
  u = ({
    currentLabel: t,
    max: e,
    targetLabel: l,
    current: r,
    setCurrent: s,
    setTarget: n,
    target: a,
    label: g,
    childForm: w,
    additionalStats: i,
  }) => {
    const h = typeof e == 'number' ? e : e.current,
      y = typeof e == 'number' ? e : e.target,
      F = (S) => {
        const T = parseInt(S.currentTarget.value, 10);
        s(T), T > a && n(T);
      },
      b = (S) => {
        const T = parseInt(S.currentTarget.value, 10);
        T >= r && n(T);
      };
    return d('div', {
      className: 'row level-selector',
      children: [
        o('div', {
          className: 'col-lg-4 col-md-12',
          children: d('label', {
            className: 'form-label',
            children: [
              w && o('i', { className: 'bi bi-arrow-return-right' }),
              o(m, { children: g }),
            ],
          }),
        }),
        d('div', {
          className: 'col-lg-4 col-md-12',
          children: [
            o('input', {
              type: 'number',
              min: '0',
              max: h,
              value: r,
              onInput: F,
              className: 'form-control',
              placeholder: t,
              'aria-label': t,
            }),
            i &&
              d(c, {
                children: [
                  o('p', {
                    className: 'd-none d-sm-block',
                    children: o('small', {
                      children: o(i, { value: r, type: 'current' }),
                    }),
                  }),
                  o('div', {
                    className: 'd-block d-sm-none',
                    children: o(W, {
                      label: '...',
                      children: o(i, { value: r, type: 'current' }),
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
              type: 'number',
              min: r,
              max: y,
              value: a,
              onInput: b,
              className: 'form-control',
              placeholder: l,
              'aria-label': l,
            }),
            i &&
              d(c, {
                children: [
                  o('p', {
                    className: 'd-none d-sm-block',
                    children: o('small', {
                      children: o(i, { value: a, type: 'target' }),
                    }),
                  }),
                  o('div', {
                    className: 'd-block d-sm-none',
                    children: o(W, {
                      label: '...',
                      children: o(i, { value: a, type: 'target' }),
                    }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  wo = () => Qe(),
  U = Pe,
  _ = [
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
  ho = [
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
  fo = [
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
  po = [
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
  bo = [
    { level: 1, gold: 15, wood: 50, stone: 17 },
    { level: 2, gold: 30, wood: 200, stone: 67 },
    { level: 3, gold: 45, wood: 587, stone: 187 },
    { level: 4, gold: 60, wood: 1467, stone: 444 },
    { level: 5, gold: 75, wood: 3333, stone: 1067 },
    { level: 6, gold: 90, wood: 8e3, stone: 2667 },
    { level: 7, gold: 105, wood: 17889, stone: 5911 },
    { level: 8, gold: 120, wood: 36267, stone: 12373 },
    { level: 9, gold: 135, wood: 76500, stone: 25500 },
    { level: 10, gold: 150, wood: 184800, stone: 6e4 },
    { level: 11, gold: 165, wood: 414e3, stone: 133200 },
    { level: 12, gold: 180, wood: 830400, stone: 273600 },
    { level: 13, gold: 195, wood: 1872e3, stone: 619200 },
    { level: 14, gold: 210, wood: 3744e3, stone: 1248e3 },
    { level: 15, gold: 225, wood: 72e5, stone: 234e4 },
    { level: 16, gold: 240, wood: 1512e4, stone: 504e4 },
    { level: 17, gold: 255, wood: 2735e4, stone: 9e6 },
    { level: 18, gold: 270, wood: 5e7, stone: 175e5 },
    { level: 19, gold: 285, wood: 9e7, stone: 3e7 },
    { level: 20, gold: 300, wood: 165e6, stone: 54e6 },
  ],
  yo = [
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
  Y = [
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
  z = [
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
  J = [
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
  V = [
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
  X = [
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
  To = [
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
  So = [
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
  Fo = [
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
  No = [
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
  Z = [
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
  ee = [
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
  p = ({ children: t }) => {
    const e = uo();
    return typeof t == 'number'
      ? o(c, { children: Intl.NumberFormat(e).format(t) })
      : o(c, { children: t });
  },
  Co = (t, e) => new Array(e - t).fill(0).map((l, r) => r + t + 1),
  Lo = {
    academy: _,
    archery: J,
    barracks: V,
    fortress: fo,
    fortifications: ho,
    mageTower: X,
    mine: bo,
    quarry: ee,
    quarters: Y,
    smithy: To,
    treasury: z,
    woodcutter: Z,
    archer: Fo,
    hok: po,
    mage: No,
    soldier: So,
  },
  Ho = () => {
    const t = U((a) => a.fortress),
      { general: e } = f(),
      l = q(() => {
        let a = 0,
          g = 0,
          w = 0;
        return (
          Object.keys(t.current).forEach((i) => {
            const h = i;
            Co(t.current[h], t.target[h]).forEach((F) => {
              const b = Lo[h].find((S) => S.level === F);
              b && (b.gold && (a += b.gold), (g += b.wood), (w += b.stone));
            });
          }),
          { gold: a, wood: g, stone: w }
        );
      }, [t]),
      { gold: r, wood: s, stone: n } = l;
    return o(c, {
      children: d('table', {
        className: 'table',
        children: [
          o('thead', {
            children: d('tr', {
              children: [
                o('th', {
                  scope: 'col',
                  children: o(m, { children: e.resources }),
                }),
                o('th', {
                  scope: 'col',
                  children: o(m, { children: e.count }),
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
                    children: o(m, { children: e.gold }),
                  }),
                  o('td', { children: o(p, { children: r }) }),
                ],
              }),
              d('tr', {
                children: [
                  o('th', {
                    scope: 'row',
                    children: o(m, { children: e.wood }),
                  }),
                  o('td', { children: o(p, { children: s }) }),
                ],
              }),
              d('tr', {
                children: [
                  o('th', {
                    scope: 'row',
                    children: o(m, { children: e.stone }),
                  }),
                  o('td', { children: o(p, { children: n }) }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  H = 86400,
  R = 3600,
  j = 60,
  xo = (t, e) => {
    const l = Math.floor(t / H),
      r = Math.floor((t - l * H) / R),
      s = Math.floor((t - r * R - l * H) / j),
      n = t - l * H - r * R - s * j;
    let a = r.toString(),
      g = s.toString(),
      w = n.toString();
    r < 10 && t >= H && (a = `0${a}`),
      s < 10 && t >= R && (g = `0${g}`),
      n < 10 && t >= j && (w = `0${w}`);
    const i = [];
    return (
      l !== 0 && i.push(`${l}${e.general.dayShort}`),
      r !== 0 && i.push(`${a}${e.general.hourShort}`),
      s !== 0 && i.push(`${g}${e.general.minuteShort}`),
      n !== 0 && i.push(`${w}${e.general.secondShort}`),
      i.join(' ')
    );
  },
  M = ({ children: t, minutes: e }) => {
    const l = f();
    if (typeof t == 'number') {
      const r = e ? t * 60 : t;
      return o(c, { children: xo(r, l) });
    }
    return o(c, { children: t });
  },
  ko = ({ value: t }) => {
    var r, s;
    const e =
        (s =
          (r = _.find((n) => n.level === t)) == null ? void 0 : r.timeToFill) !=
        null
          ? s
          : 0,
      {
        fortress: { timeToFill: l },
      } = f();
    return d(c, {
      children: [
        o(m, { children: l }),
        ' :',
        ' ',
        o(M, { minutes: !0, children: e }),
      ],
    });
  },
  Ro = ({ value: t }) => {
    var r, s;
    const e =
        (s = (r = J.find((n) => n.level === t)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return d(c, {
      children: [o(m, { children: l }), ' :', ' ', o(p, { children: e })],
    });
  },
  Mo = ({ value: t }) => {
    var r, s;
    const e =
        (s = (r = X.find((n) => n.level === t)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return d(c, {
      children: [o(m, { children: l }), ' :', ' ', o(p, { children: e })],
    });
  },
  $o = ({ value: t }) => {
    var i, h;
    const e = ee.find((y) => y.level === t),
      l = (i = e == null ? void 0 : e.storage) != null ? i : 0,
      r = (h = e == null ? void 0 : e.resourceHour) != null ? h : 0,
      s = (l / r) * 3600,
      {
        general: { hourShort: n, stone: a, max: g },
        fortress: { timeToFill: w },
      } = f();
    return d(c, {
      children: [
        o(m, { children: a }),
        ' :',
        ' ',
        o(p, { children: r }),
        '/',
        n,
        ', ',
        g,
        ' ',
        o(p, { children: l }),
        ' (',
        w,
        ' :',
        ' ',
        o(M, { children: s }),
        ')',
      ],
    });
  },
  qo = ({ value: t }) => {
    var r, s;
    const e =
        (s =
          (r = Y.find((n) => n.level === t)) == null
            ? void 0
            : r.timeReduction) != null
          ? s
          : 0,
      {
        fortress: { quartersTimeReduction: l },
      } = f();
    return d(c, { children: [o(m, { children: l }), ' : ', e, '%'] });
  },
  Ao = ({ value: t }) => {
    var r, s;
    const e =
        (s = (r = V.find((n) => n.level === t)) == null ? void 0 : r.limit) !=
        null
          ? s
          : 0,
      {
        fortress: { unitLimit: l },
      } = f();
    return d(c, {
      children: [o(m, { children: l }), ' :', ' ', o(p, { children: e })],
    });
  },
  Uo = ({ value: t }) => {
    var r, s;
    const e =
        (s = (r = z.find((n) => n.level === t)) == null ? void 0 : r.slot) !=
        null
          ? s
          : 0,
      {
        fortress: { treasurySlot: l },
      } = f();
    return d(c, { children: [o(m, { children: l }), ' : ', e] });
  },
  jo = ({ value: t }) => {
    var i, h;
    const e = Z.find((y) => y.level === t),
      l = (i = e == null ? void 0 : e.storage) != null ? i : 1,
      r = (h = e == null ? void 0 : e.resourceHour) != null ? h : 1,
      s = (l / r) * 3600,
      {
        general: { hourShort: n, wood: a, max: g },
        fortress: { timeToFill: w },
      } = f();
    return d(c, {
      children: [
        o(m, { children: a }),
        ' :',
        ' ',
        o(p, { children: r }),
        '/',
        n,
        ', ',
        g,
        ' ',
        o(p, { children: l }),
        ' (',
        w,
        ' :',
        ' ',
        o(M, { children: s }),
        ')',
      ],
    });
  },
  Do = ({ value: t, type: e }) => {
    var n;
    const l = (n = U((a) => a.fortress[e].quarters)) != null ? n : 0,
      r = t > 0 ? yo[t - 1][l] : 0,
      {
        fortress: { extractionGemTime: s },
      } = f();
    return d(c, {
      children: [
        o(m, { children: s }),
        ' :',
        ' ',
        o(M, { minutes: !0, children: r }),
      ],
    });
  },
  v = (t, e) => [
    (s) => {
      t(Ye({ [e]: s }));
    },
    (s) => {
      t(ze({ [e]: s }));
    },
  ],
  Qo = () => {
    const { current: t, target: e } = U((Te) => Te.fortress),
      l = wo(),
      { fortress: r } = f(),
      [s, n] = v(l, 'academy'),
      [a, g] = v(l, 'archery'),
      [w, i] = v(l, 'barracks'),
      [h, y] = v(l, 'fortifications'),
      [F, b] = v(l, 'fortress'),
      [S, T] = v(l, 'mageTower'),
      [oe, te] = v(l, 'mine'),
      [le, re] = v(l, 'quarry'),
      [se, ne] = v(l, 'quarters'),
      [de, ae] = v(l, 'smithy'),
      [ie, ce] = v(l, 'treasury'),
      [ge, ue] = v(l, 'woodcutter'),
      [ve, me] = v(l, 'hok'),
      [we, he] = v(l, 'soldier'),
      [fe, pe] = v(l, 'archer'),
      [be, ye] = v(l, 'mage');
    return d(c, {
      children: [
        d('div', {
          className: 'container',
          children: [
            o(u, {
              label: r.buildingFortress,
              max: 20,
              current: t.fortress,
              target: e.fortress,
              setCurrent: F,
              setTarget: b,
            }),
            o(u, {
              label: r.upgradeHoK,
              max: { current: t.fortress, target: e.fortress },
              current: t.hok,
              target: e.hok,
              setCurrent: ve,
              setTarget: me,
              childForm: !0,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingQuarters,
              max: 15,
              current: t.quarters,
              target: e.quarters,
              setCurrent: se,
              setTarget: ne,
              additionalStats: qo,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingWoodcutter,
              max: 20,
              current: t.woodcutter,
              target: e.woodcutter,
              setCurrent: ge,
              setTarget: ue,
              additionalStats: jo,
            }),
            o(u, {
              label: r.buildingQuarry,
              max: 20,
              current: t.quarry,
              target: e.quarry,
              setCurrent: le,
              setTarget: re,
              additionalStats: $o,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingMine,
              max: 20,
              current: t.mine,
              target: e.mine,
              setCurrent: oe,
              setTarget: te,
              additionalStats: Do,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingAcademy,
              max: 20,
              current: t.academy,
              target: e.academy,
              setCurrent: s,
              setTarget: n,
              additionalStats: ko,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingArchery,
              max: 15,
              current: t.archery,
              target: e.archery,
              setCurrent: a,
              setTarget: g,
              additionalStats: Ro,
            }),
            o(u, {
              label: r.buildingBarracks,
              max: 15,
              current: t.barracks,
              target: e.barracks,
              setCurrent: w,
              setTarget: i,
              additionalStats: Ao,
            }),
            o(u, {
              label: r.buildingMageTower,
              max: 15,
              current: t.mageTower,
              target: e.mageTower,
              setCurrent: S,
              setTarget: T,
              additionalStats: Mo,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingTreasury,
              max: 20,
              current: t.treasury,
              target: e.treasury,
              setCurrent: ie,
              setTarget: ce,
              additionalStats: Uo,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingSmithy,
              max: 20,
              current: t.smithy,
              target: e.smithy,
              setCurrent: de,
              setTarget: ae,
            }),
            o(u, {
              label: r.unitSoldier,
              max: { current: t.smithy, target: e.smithy },
              current: t.soldier,
              target: e.soldier,
              setCurrent: we,
              setTarget: he,
              childForm: !0,
            }),
            o(u, {
              label: r.unitArcher,
              max: { current: t.smithy, target: e.smithy },
              current: t.archer,
              target: e.archer,
              setCurrent: fe,
              setTarget: pe,
              childForm: !0,
            }),
            o(u, {
              label: r.unitMage,
              max: { current: t.smithy, target: e.smithy },
              current: t.mage,
              target: e.mage,
              setCurrent: be,
              setTarget: ye,
              childForm: !0,
            }),
            o('hr', { className: 'd-none d-lg-block' }),
            o(u, {
              label: r.buildingFortifications,
              max: 20,
              current: t.fortifications,
              target: e.fortifications,
              setCurrent: h,
              setTarget: y,
            }),
          ],
        }),
        o(Ho, {}),
      ],
    });
  },
  Po = ({ children: t, defaultLanguage: e }) => {
    const l = E(e),
      [r, s] = Ie(l),
      n = {
        allDictionary: C,
        dictionary: C[r],
        userLanguage: r,
        userLanguageChange: (a) => {
          const g = E(a);
          s(g);
        },
      };
    return o(k.Provider, { value: n, children: t });
  },
  D = [
    {
      route: '/fortress',
      title: 'fortress.title',
      description: 'fortress.description',
      page: Qo,
    },
  ];
function Io() {
  const { persistor: t, store: e } = to();
  return o(Oe, {
    store: e,
    children: o(Be, {
      loading: null,
      persistor: t,
      children: o(Po, {
        children: d(Ee, {
          children: [
            o(vo, { tools: D }),
            o('main', {
              className: 'container',
              children: o('div', {
                className: 'page-container p-5',
                children: d(Ke, {
                  children: [
                    o(I, { path: '/', element: o(mo, { tools: D }) }),
                    D.map(({ route: l, page: r }) =>
                      o(I, { path: l, element: o(r, {}) }, l),
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

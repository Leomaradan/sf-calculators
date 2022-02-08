import { createSlice } from '@reduxjs/toolkit';
import type { Payload, IUnderworldPlanerState } from './types';

const initialState: IUnderworldPlanerState = {
  current: {
    adventure: 0,
    extractor: 0,
    gate: 0,
    gladiator: 0,
    goblinPit: 0,
    goblinUpgrade: 0,
    gold: 0,
    heart: 0,
    keeper: 0,
    keeperUpgrade: 0,
    torture: 0,
    trollBlock: 0,
    trollUpgrade: 0,
  },
  currentHeroesLevel: 1,
  target: {
    adventure: 0,
    extractor: 0,
    gate: 0,
    gladiator: 0,
    goblinPit: 0,
    goblinUpgrade: 0,
    gold: 0,
    heart: 0,
    keeper: 0,
    keeperUpgrade: 0,
    torture: 0,
    trollBlock: 0,
    trollUpgrade: 0,
  },
  targetHeroesLevel: 1,
};

export const underworldSlice = createSlice({
  initialState,
  name: 'underworld',
  reducers: {
    seTargetHeroesLevel: (state, action: { payload: number }) => {
      state.targetHeroesLevel = action.payload;
    },
    setCurrent: (state, action: Payload) => {
      // eslint-disable-next-line no-param-reassign
      state.current = { ...state.current, ...action.payload };
    },
    setCurrentHeroesLevel: (state, action: { payload: number }) => {
      state.currentHeroesLevel = action.payload;
    },
    setTarget: (state, action: Payload) => {
      state.target = { ...state.target, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  seTargetHeroesLevel,
  setCurrent,
  setCurrentHeroesLevel,
  setTarget,
} = underworldSlice.actions;

export default underworldSlice.reducer;

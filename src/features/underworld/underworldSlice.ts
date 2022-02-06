import { createSlice } from '@reduxjs/toolkit';
import type { IUnderworldPlanerState, Payload } from './types';

const initialState: IUnderworldPlanerState = {
  current: {
    heart: 0,
    adventure: 0,
    extractor: 0,
    gate: 0,
    gladiator: 0,
    goblinUpgrade: 0,
    goblinPit: 0,
    gold: 0,
    keeper: 0,
    keeperUpgrade: 0,
    torture: 0,
    trollBlock: 0,
    trollUpgrade: 0,
  },
  target: {
    heart: 0,
    adventure: 0,
    extractor: 0,
    gate: 0,
    gladiator: 0,
    goblinUpgrade: 0,
    goblinPit: 0,
    gold: 0,
    keeper: 0,
    keeperUpgrade: 0,
    torture: 0,
    trollBlock: 0,
    trollUpgrade: 0,
  },
  currentHeroesLevel: 1,
  targetHeroesLevel: 1,
};

export const underworldSlice = createSlice({
  name: 'underworld',
  initialState,
  reducers: {
    setCurrent: (state, action: Payload) => {
      // eslint-disable-next-line no-param-reassign
      state.current = { ...state.current, ...action.payload };
    },
    setTarget: (state, action: Payload) => {
      state.target = { ...state.target, ...action.payload };
    },
    seTargetHeroesLevel: (state, action: { payload: number }) => {
      state.targetHeroesLevel = action.payload;
    },
    setCurrentHeroesLevel: (state, action: { payload: number }) => {
      state.currentHeroesLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCurrent,
  setTarget,
  seTargetHeroesLevel,
  setCurrentHeroesLevel,
} = underworldSlice.actions;

export default underworldSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { IFortressPlanerState, Payload } from './types';

const initialState: IFortressPlanerState = {
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
};

export const fortressSlice = createSlice({
  name: 'fortress',
  initialState,
  reducers: {
    setCurrent: (state, action: Payload) => {
      // eslint-disable-next-line no-param-reassign
      state.current = { ...state.current, ...action.payload };
    },
    setTarget: (state, action: Payload) => {
      state.target = { ...state.target, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setTarget } = fortressSlice.actions;

export default fortressSlice.reducer;

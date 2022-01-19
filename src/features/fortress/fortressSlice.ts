import { createSlice, DeepPartial, PayloadAction } from "@reduxjs/toolkit";

export interface IFortressState {
  fortress: number;
  quarters: number;
  woodcutter: number;
  quarry: number;
  mine: number;
  academy: number;
  treasury: number;
  barracks: number;
  archery: number;
  mageTower: number;
  smithy: number;
  fortifications: number;
  hok: number;
  soldier: number;
  archer: number;
  mage: number;
}

export interface IFortressPlanerState {
  current: IFortressState;
  target: IFortressState;
}

type Payload = PayloadAction<DeepPartial<IFortressState>>;

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
  name: "fortress",
  initialState,
  reducers: {
    setCurrent: (state, action: Payload) => {
      state.current = Object.assign({}, state.current, action.payload);
    },
    setTarget: (state, action: Payload) => {
      state.target = Object.assign({}, state.target, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrent, setTarget } = fortressSlice.actions;

export default fortressSlice.reducer;

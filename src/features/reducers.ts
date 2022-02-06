import { combineReducers } from '@reduxjs/toolkit';
import fortressSlice from './fortress/fortressSlice';
import underworldSlice from './underworld/underworldSlice';

const rootReducer = combineReducers({
  fortress: fortressSlice,
  underworld: underworldSlice,
});

export default rootReducer;

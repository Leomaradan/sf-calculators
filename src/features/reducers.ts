import { combineReducers } from '@reduxjs/toolkit';
import fortressSlice from './fortress/fortressSlice';

const rootReducer = combineReducers({
  fortress: fortressSlice,
});

export default rootReducer;

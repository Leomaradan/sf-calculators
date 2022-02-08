import { combineReducers } from '@reduxjs/toolkit';
import albumSlice from './album/albumSlice';
import fortressSlice from './fortress/fortressSlice';
import underworldSlice from './underworld/underworldSlice';

const rootReducer = combineReducers({
  album: albumSlice,
  fortress: fortressSlice,
  underworld: underworldSlice,
});

export default rootReducer;

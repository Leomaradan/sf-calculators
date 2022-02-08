import { combineReducers } from '@reduxjs/toolkit';
import albumSlice from './album/albumSlice';
import fortressSlice from './fortress/fortressSlice';

const rootReducer = combineReducers({
  album: albumSlice,
  fortress: fortressSlice,
});

export default rootReducer;

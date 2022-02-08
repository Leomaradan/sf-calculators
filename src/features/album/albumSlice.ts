import { createSlice } from '@reduxjs/toolkit';
import type { Payload, IAlbumState } from './types';

const initialState: IAlbumState = {
  commonItems: [],
  mageItems: [],
  monsters: [],
  scoutItems: [],
  warriorItems: [],
};

const albumSlice = createSlice({
  initialState,
  name: 'album',
  reducers: {
    toggle: (state, { payload: { category, item } }: Payload) => {
      const itemIndex = state[category].findIndex(
        (search) =>
          search.id === item.id &&
          search.group === item.group &&
          search.page === item.page,
      );

      if (itemIndex === -1) {
        state[category].push(item);
      } else {
        state[category] = state[category].filter(
          (search, index) => index !== itemIndex,
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = albumSlice.actions;

export default albumSlice.reducer;

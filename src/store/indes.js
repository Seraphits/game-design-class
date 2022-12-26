import { configureStore, createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initalState: [],
  reducers: {
    sddSong(state, sction) {
      state.push(action.payload);
    },
    removeSong(state, action) {

    }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
})

console.log(store);

import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    songs: []
  },
  reducers: {
    addSong: (state, action) => {
      const existe = state.songs.find(s => s.idTrack === action.payload.idTrack);
      if (!existe) {
        state.songs.push(action.payload);
      }
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter(s => s.idTrack !== action.payload);
    }
  }
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;

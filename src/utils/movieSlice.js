import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    NowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addtoNowPlaying: (state, action) => {
      state.NowPlaying = action.payload;
    },
    addtotrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addtoNowPlaying, addtotrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;

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
    addtoTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addtoUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addtoPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addtotrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  addtoNowPlaying,
  addtotrailerVideo,
  addtoPopularMovies,
  addtoTopRated,
  addtoUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;

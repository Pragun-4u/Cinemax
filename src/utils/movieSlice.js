import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "Movies",
  initialState: {
    NowPlaying: null,
    trailerVideo: null,
    TopRated: null,
    UpcomingMovies: null,
    PopularMovies: null,
    MovieDetails: null,
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
    addtoMovieDetails: (state, action) => {
      state.MovieDetails = action.payload;
    },
    clearMovieDetails: (state) => {
      state.MovieDetails = null;
    },
  },
});
export const {
  addtoNowPlaying,
  addtotrailerVideo,
  addtoPopularMovies,
  addtoTopRated,
  addtoUpcomingMovies,
  addtoMovieDetails,
  clearMovieDetails,
} = movieSlice.actions;
export default movieSlice.reducer;

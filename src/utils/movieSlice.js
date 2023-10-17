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
    addtoMovieDetailsCredit: (state, action) => {
      const credits = action.payload;
      state.MovieDetails = { ...state.MovieDetails, credits };
    },
    addtoMovieDetailsRecommendations: (state, action) => {
      const Recommendations = action.payload;
      state.MovieDetails = { ...state.MovieDetails, Recommendations };
    },
    addtoMovieDetailsID: (state, action) => {
      const results = action.payload;
      state.MovieDetails = { ...state.MovieDetails, results };
    },
    addtoMovieDetailsSimilar: (state, action) => {
      const Similar = action.payload;
      state.MovieDetails = { ...state.MovieDetails, Similar };
    },
    clearMovieDetails: (state) => {
      state.MovieDetails = {};
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
  addtoMovieDetailsID,
  addtoMovieDetailsCredit,
  addtoMovieDetailsRecommendations,
  addtoMovieDetailsSimilar,
} = movieSlice.actions;
export default movieSlice.reducer;

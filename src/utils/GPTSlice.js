import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTPage: false,
    movieResults: null,
    movieNames: null,
    LoadingState: false,
  },
  reducers: {
    toggleshowGPTPage: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
    addMoviesNameandResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    LoadingState: (state) => {
      state.LoadingState = !state.LoadingState;
    },
  },
});
export const { toggleshowGPTPage, addMoviesNameandResult, LoadingState } =
  GPTSlice.actions;
export default GPTSlice.reducer;

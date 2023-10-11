import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTPage: false,
  },
  reducers: {
    toggleshowGPTPage: (state) => {
      state.showGPTPage = !state.showGPTPage;
    },
  },
});
export const { toggleshowGPTPage } = GPTSlice.actions;
export default GPTSlice.reducer;

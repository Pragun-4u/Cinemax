import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: {
    appLanguage: "en",
  },
  reducers: {
    changeAppLanguage: (state, action) => {
      state.appLanguage = action.payload;
    },
  },
});
export const { changeAppLanguage } = languageSlice.actions;
export default languageSlice.reducer;

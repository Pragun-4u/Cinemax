import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GPTSlice from "./GPTSlice";
import languageSlice from "./languageSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    GPT: GPTSlice,
    Lang: languageSlice,
  },
});

export default appStore;

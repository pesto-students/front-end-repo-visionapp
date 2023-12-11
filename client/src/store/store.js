import { configureStore } from "@reduxjs/toolkit";
import postDetailsSlice from "../features/postDetailsSlice";

const store = configureStore({
  reducer: {
    post: postDetailsSlice,
  },
});

export default store;
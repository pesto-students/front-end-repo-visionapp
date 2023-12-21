import { configureStore } from "@reduxjs/toolkit";
import postDetailsSlice from "../features/postDetailsSlice";
import providerDetailsSlice from "../features/providerDetailsSlice";

const store = configureStore({
  reducer: {
    post: postDetailsSlice,
    provider: providerDetailsSlice
  },
});

export default store;
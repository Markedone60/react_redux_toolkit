import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import profileSelectSlice from "./profileSelectSlice";
import profileUploadSlice from "./profileUploadSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    profileUploader: profileUploadSlice,
    profileSelect: profileSelectSlice
  }
})

export default store;
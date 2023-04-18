import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const profileUploadSlice = createSlice({
  name: "profileUploader",
  initialState,
  reducers: {
    upload(state, action) {
      if (action.payload) {
        state.unshift(action.payload);
      }
      return state
    }
  }
})

export const { upload } = profileUploadSlice.actions;

export default profileUploadSlice.reducer;

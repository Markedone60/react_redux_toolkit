import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

const profileSelectSlice = createSlice({
  name: "profileSelect",
  initialState,
  reducers: {
    select(state, action) {
      if (action.payload) state.value = action.payload
      else state.value = null;
    }
  }
})

export const { select } = profileSelectSlice.actions;

export default profileSelectSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    valueInput: 0
  },
  reducers: {
    valueChange(state, action) {
      if (action.payload < 1) state.valueInput = 0
      else if (action.payload > 5) state = 5
      else state.valueInput = action.payload;
    }
  }
})

export const { valueChange } = counterSlice.actions;

export default counterSlice.reducer
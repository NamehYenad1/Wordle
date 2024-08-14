import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ConfettiState } from "../../types/confettiTypes";

const initialState: ConfettiState = {
  isVisible: false,
};

const confettiSlice = createSlice({
  name: "confetti",
  initialState,
  reducers: {
    confettiToggled: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

// Export actions
export const { confettiToggled } = confettiSlice.actions;

// Export reducer
export default confettiSlice.reducer;

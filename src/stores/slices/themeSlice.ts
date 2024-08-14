import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeState } from "../../types/themeTypes";

const initialState: ThemeState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggled: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

// Export actions
export const { themeToggled } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;

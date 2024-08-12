import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toast, ToastState } from "../../types/toastTypes";

const initialState: ToastState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    toastAdded: (state, action: PayloadAction<Omit<Toast, "id">>) => {
      state.toasts.push({ ...action.payload, id: crypto.randomUUID() });
    },
    toastRemoved: (state, action: PayloadAction<string>) => {
      // Remove the toast by id
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

// Export actions
export const { toastAdded, toastRemoved } = toastSlice.actions;

// Export reducer
export default toastSlice.reducer;

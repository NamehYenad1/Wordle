import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./slices/toastSlice";
import confettiReducer from "./slices/confettiSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    toast: toastReducer,
    confetti: confettiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

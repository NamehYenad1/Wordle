import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../stores/store";

// Custom hook for useSelector with RootState type
export const useSelectorWithType: TypedUseSelectorHook<RootState> = useSelector;

// Custom hook for useDispatch with AppDispatch type
export const useDispatchWithType = () => useDispatch<AppDispatch>();

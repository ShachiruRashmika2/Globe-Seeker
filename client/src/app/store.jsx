import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../Features/Country/CountrySlice";
import darkModeReducer from "../Features/Country/DarkModeSlicer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {}
};

export const store = configureStore({
  reducer: {
    country: countryReducer,
    darkMode: darkModeReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    country: state.country,
    darkMode: state.darkMode,
  });
});

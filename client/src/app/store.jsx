// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../Features/Country/CountrySlice";

// Load from localStorage
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
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

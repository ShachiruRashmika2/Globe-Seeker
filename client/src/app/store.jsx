// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../Features/Country/CountrySlice";

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

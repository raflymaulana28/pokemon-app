import { configureStore } from "@reduxjs/toolkit";
import pokemonReducers from "./slice";

export const Store = configureStore({
  reducer: pokemonReducers,
});

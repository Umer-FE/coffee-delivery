import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Same folder mein hai

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

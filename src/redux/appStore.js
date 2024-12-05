import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // To add slice to a store we use a big reducer which consists of each slice's reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

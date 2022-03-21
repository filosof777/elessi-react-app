import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./store";

export const store = configureStore({
  reducer: { product: ProductSlice },
});


import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItem } = ProductSlice.actions;
export default ProductSlice.reducer;

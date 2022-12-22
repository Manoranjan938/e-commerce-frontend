import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;

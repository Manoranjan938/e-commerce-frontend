import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import loginSlice from "../features/login/loginSlice";
import productSlice from "../features/products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    security: loginSlice,
    products: productSlice,
  },
});

export default store;

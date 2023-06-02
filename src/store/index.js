import { configureStore } from "@reduxjs/toolkit";
import { initProducts, productReducer } from "../reducers/productSlice";
import { initData } from "../data/dataDefaults";
import { categoryReducer, initCategory } from "../reducers/categorySlice";
import { cartReducer } from "../reducers/cartSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});
store.dispatch(initProducts(initData.products));
store.dispatch(initCategory(initData.categories));

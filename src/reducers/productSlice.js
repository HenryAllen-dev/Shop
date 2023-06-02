import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
const productAdapter = createEntityAdapter();
const initialState = productAdapter.getInitialState();
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initProducts: (state, action) => {
      productAdapter.setAll(state, action.payload);
    },
    addProduct: productAdapter.addOne,
    deleteProduct: productAdapter.removeOne,
    updateProduct: productAdapter.updateOne,
  },
});
export const productReducer = productSlice.reducer;
export const { initProducts, addProduct, deleteProduct, updateProduct } =
  productSlice.actions;
export const { selectAll, selectById, selectEntities } =
  productAdapter.getSelectors((state) => state.products);

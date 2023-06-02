import { createSlice } from "@reduxjs/toolkit";
const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    initCategory: (_, action) => {
      return action.payload;
    },
    deleteCategory: (state, action) => {
      return state.filter((category) => category.id !== Number(action.payload));
    },
    editCategory: (state, action) => {
      const { id, updatedCategory } = action.payload;
      const productIndex = state.findIndex((product) => product.id === id);
      state[productIndex] = { ...state[productIndex], ...updatedCategory };
    },
    addCategory: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { initCategory, deleteCategory, editCategory, addCategory } =
  categorySlice.actions;
export const categoryReducer = categorySlice.reducer;

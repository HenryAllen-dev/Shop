import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  isCartOpen: false,
  cartTotalAmount: 0,
  cartTotalQty: 0,
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      const productExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (productExist) {
        const findIndex = state.cartItems.indexOf(productExist);
        state.cartItems[findIndex].cartQty += 1;
        toast.info("Product quantity increased");
      } else {
        state.cartItems.push({ ...action.payload, cartQty: 1 });
        toast.success("Product Added to your Cart");
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      toast.error("Product removed successfully");
    },
    getTotals: (state) => {
      let { total, qty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty, off } = cartItem;

          const itemTotal = ((100 - off) * price * cartQty) / 100;
          cartTotal.total += itemTotal;
          cartTotal.qty += cartQty;
          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      state.cartTotalQty = qty;
      state.cartTotalAmount = total.toFixed(2);
    },
    decreaseCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product.cartQty > 1) {
        const findIndex = state.cartItems.indexOf(product);
        state.cartItems[findIndex].cartQty -= 1;
        toast.info("Product quantity decreased");
      } else if (product.cartQty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error("Product removed");
      }
    },
    resetCart: () => {
      toast.success("Thank you :D");
      return initialState;
    },
  },
});
export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
  populateCart,
  toggleCart,
  resetCart,
} = cartSlice.actions;

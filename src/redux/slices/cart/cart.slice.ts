import { createSlice } from "@reduxjs/toolkit";
import { cartData } from "../../../mockData/cartData";
import { cartReducer } from "./cart.reducer";
import { ICartState } from "./cart.type";

export const initialState: ICartState = {
  cartItems: cartData,
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: cartReducer,
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  setCartDrawVisibilty,
  setCartItems,
  clearCart,
} = cartSlice.actions;

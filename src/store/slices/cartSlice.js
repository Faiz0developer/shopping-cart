import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.push(newItem);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    addQuantity(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      existingItem.quantity++;

      existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    },
    minusQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const { add, remove, addQuantity, minusQuantity } = cartSlice.actions;

export default cartSlice.reducer;

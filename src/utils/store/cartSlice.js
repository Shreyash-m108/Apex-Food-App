import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const incoming = action.payload;
      const existing = state.items.find((i) => i.id === incoming.id);
      existing
        ? (existing.qty += 1)
        : state.items.push({ ...incoming, qty: 1 });
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        if (existing.qty > 1) {
          existing.qty -= 1;
        } else {
          state.items.filter((i) => i.id !== id);
        }
      }
    },
    emptyCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;

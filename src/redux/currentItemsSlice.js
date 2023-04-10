import { createSlice } from "@reduxjs/toolkit";

import { items } from "../data/items";

const itemsSlice = createSlice({
  name: "currentItems",
  initialState: { items },
  // reducers: {
  //   filter(state, action) {
  //     state.items = state.items.filter(
  //       (item) => item.category === action.payload
  //     );
  //   },
  // },
});

export const itemsReducer = itemsSlice.reducer;
export const { filter } = itemsSlice.actions;

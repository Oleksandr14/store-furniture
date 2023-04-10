import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const ordersReducer = orderSlice.reducer;
export const { addOrder, deleteOrder } = orderSlice.actions;

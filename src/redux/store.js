import { configureStore } from "@reduxjs/toolkit";

import { itemsReducer } from "./currentItemsSlice";
import { ordersReducer } from "./orders";

export const store = configureStore({
  reducer: {
    currentItems: itemsReducer,
    orders: ordersReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "../features/basket/basket";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});

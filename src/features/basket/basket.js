import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const [basket, setBasket] = useState([]);

export const basketSlice = createSlice({
  name: "basket",
  value: basket,

  reducers: {},
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;

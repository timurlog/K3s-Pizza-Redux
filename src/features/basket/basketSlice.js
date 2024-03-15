import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const [basket, setBasket] = useState([
  {
    name: "Pizza Forestiere",
    price: 14.5,
    priceString: "$14,50",
    quantity: 0,
  },
  {
    name: "Pizza Cannibale",
    price: 15.5,
    priceString: "$15,50",
    quantity: 0,
  },
  {
    name: "Pizza BBQ Chicken",
    price: 15.5,
    priceString: "$15,50",
    quantity: 0,
  },
  {
    name: "Pizza Goatcheese Bacon",
    price: 16.5,
    priceString: "$16,50",
    quantity: 0,
  },
  {
    name: "Pizza Tonno",
    price: 14.5,
    priceString: "$14,50",
    quantity: 0,
  },
  {
    name: "Pizza Chicken Kebab",
    price: 16.5,
    priceString: "$16,50",
    quantity: 0,
  },
  {
    name: "Pizza Margherita",
    price: 12.5,
    priceString: "$12,50",
    quantity: 0,
  },
  {
    name: "Pizza Hawaii",
    price: 14.5,
    priceString: "$14,50",
    quantity: 0,
  },
  {
    name: "Pizza 4 Cheese",
    price: 14.5,
    priceString: "$14,50",
    quantity: 0,
  },
  {
    name: "Pizza Ham",
    price: 13.5,
    priceString: "$13,50",
    quantity: 0,
  },
  {
    name: "Pizza Funghi",
    price: 12.5,
    priceString: "$12,50",
    quantity: 0,
  },
  {
    name: "Pizza Chicken Delight",
    price: 15.5,
    priceString: "$15,50",
    quantity: 0,
  },
]);

export const basketSlice = createSlice({
  name: "basket",
  value: basket,

  reducers: {},
});

export const {} = basketSlice.actions;

export default basketSlice.reducer;

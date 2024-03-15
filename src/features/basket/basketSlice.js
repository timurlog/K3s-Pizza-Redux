import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [
      {
        name: "Pizza Forestiere",
        price: 14.5,
        priceString: "$14,50",
        quantity: 0,
        id: 0,
      },
      {
        name: "Pizza Cannibale",
        price: 15.5,
        priceString: "$15,50",
        quantity: 0,
        id: 1,
      },
      {
        name: "Pizza BBQ Chicken",
        price: 15.5,
        priceString: "$15,50",
        quantity: 0,
        id: 2,
      },
      {
        name: "Pizza Goatcheese Bacon",
        price: 16.5,
        priceString: "$16,50",
        quantity: 0,
        id: 3,
      },
      {
        name: "Pizza Tonno",
        price: 14.5,
        priceString: "$14,50",
        quantity: 0,
        id: 4,
      },
      {
        name: "Pizza Chicken Kebab",
        price: 16.5,
        priceString: "$16,50",
        quantity: 0,
        id: 5,
      },
      {
        name: "Pizza Margherita",
        price: 12.5,
        priceString: "$12,50",
        quantity: 0,
        id: 6,
      },
      {
        name: "Pizza Hawaii",
        price: 14.5,
        priceString: "$14,50",
        quantity: 0,
        id: 7,
      },
      {
        name: "Pizza 4 Cheese",
        price: 14.5,
        priceString: "$14,50",
        quantity: 0,
        id: 8,
      },
      {
        name: "Pizza Ham",
        price: 13.5,
        priceString: "$13,50",
        quantity: 0,
        id: 9,
      },
      {
        name: "Pizza Funghi",
        price: 12.5,
        priceString: "$12,50",
        quantity: 0,
        id: 10,
      },
      {
        name: "Pizza Chicken Delight",
        price: 15.5,
        priceString: "$15,50",
        quantity: 0,
        id: 11,
      },
    ],
  },

  reducers: {
    addPizza: (state, action) => {
      const i = action.payload;
      state.value[i].quantity += 1;
    },
    rmPizza: (state, action) => {
      const i = action.payload;
      state.value[i].quantity -= 1;
    },
  },
});

export const { addPizza, rmPizza } = basketSlice.actions;

export default basketSlice.reducer;

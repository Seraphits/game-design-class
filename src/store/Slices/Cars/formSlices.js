import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlices";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    }
  },
  extraReducers(builer) {
    builer.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = 0;
    });
  }
})

export const { changeName, changeCost } = formSlice.actions;
export const formReduce = formSlice.reducer;

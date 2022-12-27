import { configureStore } from "@reduxjs/toolkit";
import {
  carsReduce,
  addCar,
  removeCar,
  changeSearchTerm
} from './Slices/Cars/carsSlices';
import {
  formReduce,
  changeName,
  changeCost
} from './Slices/Cars/formSlices';

const store = configureStore({
  reducer: {
    cars: carsReduce,
    form: formReduce
  }
});

export {
  store,
  changeName, changeCost, addCar, removeCar,changeSearchTerm
} ;

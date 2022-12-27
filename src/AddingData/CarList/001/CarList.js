import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../../../store';

export const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) =>{
    return state.cars.cars
  });
  const hanleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  }
  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className='panel' >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='button is-danger'
        onClick={() => hanleCarDelete(car)}
        >Delete</button>
      </div>
    );
  });

  return (
    <div className='car-list'>
      {renderedCars}
      <hr/>
    </div>
  )
}

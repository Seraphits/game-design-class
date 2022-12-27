import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CarList = () => {
  const cars = useSelector((state) =>{
    return state.cars.cars
  })
  console.log(cars);

  return (
    <div>CarList</div>
  )
}

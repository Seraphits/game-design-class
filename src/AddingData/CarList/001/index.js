import React from 'react'
import { Wrapper } from '../../../UI/Utility'
import { CarForm } from './CarForm'
import { CarList } from './CarList'
import { CarSearch } from './CarSearch'
import { CarValue } from './CarValue'
import './styles.css'

export const CarList001 = () => {
  return (
    <Wrapper>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
    </Wrapper>
  )
}

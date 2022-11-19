import React from 'react'
import { Link } from 'react-router-dom'
import { Beaver } from '../Animations/Objects/Beaver';
import { Wrapper, Grid } from '../UI/Utility';

export const Animations = () => {
  return (
    <Wrapper>
      <h1>Animations List</h1>

      <h2>Animations for Games</h2>
      <Grid>
        <Link to='/animations/tabla'>Tabla</Link>
        <Link to='/animations/dagga'>Dagga</Link>
        <Link to='/animations/hand'>Hand</Link>
      </Grid>
      <h2>Test Objects</h2>
      <div>
        <Beaver/>

      </div>
    </Wrapper>
  )
}

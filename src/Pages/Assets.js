import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '../UI/Utility'

export const Assets = () => {
  return (
    <div>Assets
      <Grid>
        <Link to='/assets/animations'>Animations</Link>
        <Link to='/assets/buttons'>Buttons</Link>
        <Link to='/assets/accordion'>Accordion</Link>
        <Link to='/assets/dropdown'>DropDown</Link>
        <Link to='/assets/modal'>Modal</Link>
        <Link to='/assets/table001'>Table 001</Link>
        <Link to='/assets/table002'>Table 002</Link>
        <Link to='/assets/table003'>Table 003</Link>
        <Link to='/assets/table004'>Table 004</Link>
        <Link to='/assets/counter001'>Counter 001</Link>
        <Link to='/assets/counter002'>Counter 002</Link>

      </Grid>
    </div>
  )
}

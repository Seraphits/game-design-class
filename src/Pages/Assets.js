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

      </Grid>
    </div>
  )
}

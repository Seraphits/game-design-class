import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Grid } from '../UI/Utility'

const AddingData = () => {
  return (
    <Wrapper>

      <h1>Adding Data Page</h1>
      <h2>Adding Data test that are done</h2>
      <Grid>

      </Grid>
      <h2>Adding Data test that are being worked on</h2>
      <Grid>
        <Link to='/addingdata/GraphQL/001'>GraphQL 001</Link>
      </Grid>
    </Wrapper>
  )
}

export default AddingData

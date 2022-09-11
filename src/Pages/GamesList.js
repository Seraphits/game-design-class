import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Grid } from '../UI/Utility';

const GamesList = () => {
  return (
    <Wrapper>
      <h1>Game List</h1>
      <h2>Game test that are done</h2>
      <Grid>
        <Link to='/games/memory'>Memory Game<br/>9/10/2022</Link>
        <Link to='/games/floppybird'>Floppy Bird<br/>9/9/2022</Link>
      </Grid>
      <h2>Game test that are being worked on</h2>
      <Grid>
        <Link to='/games/flashcards'>Flash Cards</Link>
      </Grid>
    </Wrapper>
  )
}

export default GamesList



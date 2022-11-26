import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper, Grid } from '../UI/Utility';

const GamesList = () => {
  return (
    <Wrapper>
      <h1>Game List</h1>
      <h2>Game test that are done</h2>
      <Grid>
        <Link to='/games/memory/002'>Memory Game 2<br/>9/24/2022</Link>
        <Link to='/games/memory/001'>Memory Game<br/>9/10/2022</Link>
        <Link to='/games/floppybird'>Floppy Bird<br/>9/9/2022</Link>
      </Grid>
      <h2>Game test that are being worked on</h2>
      <Grid>
        <Link to='/games/tablasound'>TablaSound</Link>
        <Link to='/games/tablaanimated'>TablaAnimated</Link>
        <Link to='/games/tablastyled'>TablaStyled</Link>
        <Link to='/games/tablarefactor'>TablaRefactor</Link>
        <Link to='/games/tablarandom'>TablaRandom</Link>
        <Link to='/games/tabla'>Tabla</Link>
        <Link to='/games/flashcards'>Flash Cards</Link>
        {/* <Link to='/games/memory/003'>Memory Game 3</Link> */}
      </Grid>
    </Wrapper>
  )
}

export default GamesList



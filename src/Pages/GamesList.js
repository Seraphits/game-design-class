import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GamesList = () => {
  return (
    <div>
      Game List
      Game that are done
      <Grid>
        <Link to='/games/floppybird'>Floppy Bird 9/9/2020</Link>
      </Grid>
      Game that are being worked on
      <Grid>
        <Link to='/games/flashcards'>Flash Cards</Link>
        <Link to='/games/memory'>Memory Game</Link>
      </Grid>
    </div>
  )
}

export default GamesList

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( 5, 1fr);
  padding: 2rem;
`;

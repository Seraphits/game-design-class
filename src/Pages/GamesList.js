import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GamesList = () => {
  return (
    <div>
      Game List
      <Grid>
        <Link to='/games/floppybird'>Floppy Bird</Link>
        <Link to='/games/flashcards'>Flash Cards</Link>

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

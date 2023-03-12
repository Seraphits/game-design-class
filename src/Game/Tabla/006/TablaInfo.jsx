import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../../UI/Utility';

export const TablaInfo = () => {
  return (
    <Wrapper>
      <h1>Tabla Game Information</h1>
      <Link to="/games/tablasound" >Return to game</Link>
      <h2>What you are learning?</h2>
      <p>Tabla Sounds helps you to connect the sounds of the Tabla with names of the sounds. </p>

    </Wrapper>
  )
}

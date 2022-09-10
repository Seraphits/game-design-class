import React from 'react'
import styled from 'styled-components';
// import FlashCard from './FlashCard';

const FlashCardList = ({flashcards}) => {
  return (
    <div>
      {/* FlashCardList */}
      {/* <FlashCard/> */}
      {/* <Grid>
        {flashcards.map(flashcard => {
          return <FlashCard flashcard={flashcard} key={flashcard.id} />
        })}
      </Grid> */}
    </div>
  )
}

export default FlashCardList

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( 5, 1fr);
  padding: 2rem;
`;

import React, { useState } from 'react'
import styled from 'styled-components'
import FlashCardList from './FlashCardList'

const FlashCardsPage = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE_FlASHCARDS)
  return (
    <Page>
      {/* FlashCardsPage */}
      {/* <FlashCardList/> */}
      <FlashCardList flashcards={flashcards} />
    </Page>
  )
}

export default FlashCardsPage

const SAMPLE_FlASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2 ?",
    answer: "4",
    options: [
      '2',
      '3',
      '4',
      '5',
      '6',
    ]
  },
  {
    id: 2,
    question: "What is 2 + 3 ?",
    answer: "5",
    options: [
      '2',
      '3',
      '4',
      '5',
      '6',
    ]
  }
]

const Page = styled.div`
 background-color: #C8d0da;
`;


// https://www.youtube.com/watch?v=hEtZ040fsD8&list=PLnDn_KDQdE0awlu-BMp8UuRdPMRVTveoU&index=4&t=1486s

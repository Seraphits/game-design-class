import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FlipCard from './FlipCard'
// import { letters } from './letters'

const MG002 = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    console.log("handleChoice" + card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Compare 2 Selected Cards
  useEffect(() => {
    console.log("Comparing Cards");
    if (choiceOne && choiceTwo) {
      console.log("Two Picked");
      if (choiceOne.letter === choiceTwo.letter) {
        console.log("match");
        resetTurn()
      } else {
        console.log("No Match");
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // Reset choices & choice
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  console.log("carsd:" + cards);
  return (
    <div>
      <h1>Merory Game 2</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardGrid>
        {cards.map(card => (
          <FlipCard key={card.id} card={card}
            handleChoice={handleChoice}
          />
        ) )}
      </CardGrid>
    </div>
  )
}

export default MG002

const CardGrid = styled.div`
   display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: aliceblue;
`;


const cardImages = [
  { "id": "A", "letter": "A" },
  { "id": "B", "letter": "B" },
  { "id": "C", "letter": "C" },
  { "id": "D", "letter": "D" },
  { "id": "E", "letter": "E" },
  { "id": "F", "letter": "F" },
]

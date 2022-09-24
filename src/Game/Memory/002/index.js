import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FlipCard from './FlipCard'
// import { letters } from './letters'

const MG002 = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  // const [flipped, setFlipped] = useState("false")

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random(), matched: false, flipped: "false" }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card, matched) => {
    console.log(matched);
    console.log( card);
    console.log( turns);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // set flipped1
  useEffect(() => {
    // console.log("Comparing Cards");
    if (choiceOne ) {
      // console.log("Two Picked");
      if (choiceOne) {
        console.log("Clicked");
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.id === choiceOne.id) {
              console.log("Clicked 1");
              return {...card,  flipped: "true"}
            } else {
              console.log("Set rest 1");
              return card
            }
          })
        })

      }
    }
  }, [choiceOne, choiceTwo])
// set flipped2
useEffect(() => {
  // console.log("Comparing Cards");
  if (choiceTwo) {
    // console.log("Two Picked");
    if (choiceTwo) {
      console.log("Clicked");
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.id === choiceTwo.id) {
            console.log("Clicked 2");
            return {...card,  flipped: "true"}
          } else {
            console.log("set rest 2");
            return card
          }
        })
      })

    }
  }
}, [choiceOne, choiceTwo])

  // Compare 2 Selected Cards
  useEffect(() => {
    // console.log("Comparing Cards");
    if (choiceOne && choiceTwo) {
      // console.log("Two Picked");
      if (choiceOne.letter === choiceTwo.letter) {
        console.log("match");
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.letter === choiceOne.letter) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log("No Match");
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // console.log(cards);

  // Reset choices & choice
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  // console.log("carsd:" + cards);
  return (
    <div>
      <h1>Merory Game 2</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardGrid>
        {cards.map(card => (
          <FlipCard key={card.id} card={card}
            handleChoice={handleChoice}
            // flipped={flipped}
            // flipped={card === choiceOne || card === choiceTwo || card.matched }
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
  { "ID": "A", "letter": "A" },
  { "ID": "B", "letter": "B" },
  { "ID": "C", "letter": "C" },
  { "ID": "D", "letter": "D" },
  { "ID": "E", "letter": "E" },
  { "ID": "F", "letter": "F" },
]

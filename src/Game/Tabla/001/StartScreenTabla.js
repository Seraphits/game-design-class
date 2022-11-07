import React, { useState } from 'react'
import { QuestionComp } from './Question';
import { makeQu } from './MakeQu';
import TablaData from "../Data";

export const StartScreenTabla = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const handleClick = () => {
    console.log("startScreen");
    makeQu()
    setShowQuestion(true);
  }
  const makeQu = () => {

    const pickCards = [...TablaData].sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random(), picked: "false" })).slice(0, 4)
    const quText = [...pickCards].sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id1: Math.random(), picked: "true" })).slice(3)
    setCards(pickCards)
    // console.log("text");
    setText(quText)
  }
  return (
    <div>StartScreenTabla
      {showQuestion ? (
          <QuestionComp/>
        ) : (
          <div onClick={ handleClick }>Start Game</div>
        )
      }


    </div>
  )
}
// {setStartScreen(false)}

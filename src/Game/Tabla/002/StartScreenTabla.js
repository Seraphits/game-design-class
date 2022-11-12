import React, { useState } from 'react'
import { QuestionComp } from './Question';
import { makeQu } from './MakeQu';
// import TablaData from "../Data";

export const StartScreenTabla = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const handleClick = () => {
    console.log("startScreen");
    // makeQu()
    setShowQuestion(true);
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

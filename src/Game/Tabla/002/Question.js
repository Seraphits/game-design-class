import React, { useEffect, useState } from 'react';
import {QuestionCard, Question, Opions, Opion} from './QuestionStyled';
import TablaData from "../Data";

export const QuestionComp= () => {
  const [showResults, setResults] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();

  const optionClicked = (card) => {
    setSelected(card);
  }
  // Make QU
  const makeQu = () => {
    const pickCards = [...TablaData].sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random(), picked: "false" })).slice(0, 4)
    const quText = [...pickCards].sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id1: Math.random(), picked: "true" })).slice(3)
    setCards(pickCards)
    // console.log("text");
    setText(quText)
  }

  useEffect(() => {
    console.log("Make Qu");
    makeQu()
  },[])

    console.log("options");
  console.log(cards);
  console.log("text");
  console.log(text);
  const summit = () => {
    console.log("Click Submit");
    if(!selected) {
      console.log("Please make a choose");
    } else {
      console.log("chech answer");
      console.log(selected.id);
      console.log(text[0].id);
      if (selected.id === text[0].id) {
        console.log("Match");
        setCorrect("true")
      } else {
        console.log("Not a Match");
        setCorrect("false")
      }
    }
  }
  return (
    <>
      {cards ? (
        <QuestionCard>
          <Question>
            {text[0].hindi}
          </Question>
          <Opions>
          {cards.map((option) =>{
            return (
              <Opion key={option.id}
              onClick={() => optionClicked(option)}
              variant={option.picked}
              >
                {option.hindi}
              </Opion>
            )
          })}
        </Opions>
      </QuestionCard>
      ) : (
        <div> hi</div>
      )}


      {/* <button onClick={() => summit()}>Submit</button> */}
    </>
  )
}
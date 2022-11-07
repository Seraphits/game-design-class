import React, { useState } from 'react';
import {QuestionCard, Question, Opions, Opion} from './QuestionStyled';


export const QuestionComp= () => {
  const [showResults, setResults] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();

  const optionClicked = (card) => {
    setSelected(card);
  }

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
    <QuestionCard>
      <Question>
        hi
        {/* {text[0].hindi} */}
      </Question>
      <Opions>
        {/* {cards.map((option) =>{
          return (
            <Opion key={option.id}
            onClick={() => optionClicked(option)}
            variant={option.picked}
            >
              {option.hindi}
            </Opion>
          )
        })} */}
      </Opions>
      {/* <button onClick={() => summit()}>Submit</button> */}
    </QuestionCard>
  )
}

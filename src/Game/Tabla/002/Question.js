import React, { useEffect, useState } from 'react';
import {QuestionCard, Question, Opions, Opion} from './QuestionStyled';
import TablaData from "../Data";
import Right from '../002/Right';
import Wrong from '../002/Wrong';

export const QuestionComp= () => {
  // const [showResults, setResults] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  // select card
  const optionClicked = (card) => {
    setSelected(card);
  }

  useEffect(() => {
    // console.log("useEffect run");
    if (selected) {
      // console.log("Cards");
      // console.log(cards);
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.id === selected.id) {
            return {...card, picked: "true"}
          } else {
            return {...card, picked: "false"}
          }
        })
      })
      // console.log("Cards all false1");
      // console.log(cards);
    }
  }, [selected])

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

 // check answer
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
        if (score > 25) {
          setScore(0)
          setLevel(level + 1)
          console.log("Level Up");
        } else {
          setScore(score +1);
          console.log("score + 1");
        }
      } else {
        console.log("Not a Match");
        setCorrect("false")
        if (score < level) {
          setScore(0)
          console.log("score to 0");
        } else {
          setScore(score - level)
          console.log("score - level");
        }
      }
    }
  }
  useEffect(() => {
    console.log("correct");
    console.log(correct);
  },[correct])
console.log("score Qu component");
console.log(score);
  return (
    <QuestionCard>
      {score} {level}
      {correct ? (
        <>

         {(correct === "true") ? (
            <Right score={score} level={level} />
          )
          :(
            <Wrong/>
          )
        }
        {/* <button onClick={() => makeQu()}>New Question</button> */}
      </>
      ) : (
        <>
          {cards  ? (
        <>
          {/* {score} {level} */}
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
        {selected ? (
          <button onClick={() => summit()}>Submit</button>
        ) : (
          <p>Select The Letters that are the Same</p>
        )}
      </>
      ) : (
        <div> Loading</div>
      )}
        </>
      )}
    </QuestionCard>
  )
}

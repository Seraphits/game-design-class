import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TablaData from "./Data";
// import TablaData from "./questions";
// import { FinalResults } from './FinalResults';ß
import { Header } from './Header';

export const TablaRan = () => {
  const questions = TablaData;
  const [showFinalResults, setFinalResults] = useState(true);
  const [score, setScore] = useState(0);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const [selected, setSelected] = useState();

// console.log("selected");
// console.log(selected);

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

  // console.log("options");
  // console.log(cards);
  // console.log("text");
  // console.log(text);
// select card
  const optionClicked = (card) => {
    setSelected(card);
  }
  useEffect(() => {
    console.log("useEffect run");
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


  // check answer
  const summit = () => {
    console.log("Click Submit");
    console.log(selected);
    if(!selected) {
      console.log("Please make a choose");
    } else {
      console.log("chech answer");
    }

  }

  const restartGame = () => {
    setScore(0);
    // setCurrentQuestion(0);
    setFinalResults(false);
    makeQu()
    // console.log("options");
    // console.log(currentOptios);
    // console.log("question");
    // console.log(currentQuestion);
    // console.log(question);
  }
  // console.log("Cards out");
  // console.log(cards);
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Current Score */}
      <h2>Current Score: {score}</h2>

      { showFinalResults ? (
        // {/* Final Results Card */}
        <FinalResultsCard>
          <h2>New Game</h2>
          {/* <h3>{score} out of {questions.length} correct - ({Math.round((score/questions.length) *100)}%)</h3> */}
          <button onClick={() => restartGame()} >play again</button>
        </FinalResultsCard>)
    :
        (
          // {/* Question card */}
          <QuestionCard>
            {/* <h2>Question {currentQuestion + 1} of {questions.length}</h2> */}
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
            <button onClick={() => summit()}>Submit</button>
          </QuestionCard>
        )
      }
    </div>
  )
}

const QuestionCard = styled.div`
  background-color: lightgreen;
  padding: 1rem;
  margin: 2rem;
`;
const Question = styled.div`
  /* list-style: none; */
  text-align: center;
`;
const Opions = styled.ul`
  list-style: none;
  display: grid;
`;
const Opion = styled.li`
  background-color: aliceblue;
  padding: 1rem;
  margin: 1rem;
  border: 3px solid green;
  color: ${(props) => props.variant === "true" ? "green" : "red"};
`;

const FinalResultsCard = styled.div`
  background-color: lightcoral;
  padding: 1rem;
  margin: 2rem;
`;

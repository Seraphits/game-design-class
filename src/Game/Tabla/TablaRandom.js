import React, { useState } from 'react';
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



  // Make QU
  const makeQu = () => {
    const pickCards = [...TablaData].sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() })).slice(0, 4)
    const quText = [...pickCards].sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id1: Math.random() })).slice(3)
    setCards(pickCards)
    console.log("text");
    setText(quText)
  }

  console.log("options");
  console.log(cards);
  console.log("text");
  console.log(text);
// Helper Funtions
  const optionClicked = (isCorrect) => {
    console.log(isCorrect);
    if(isCorrect) {
      setScore(score +1)
    }
    // if(currentQuestion +1 < questions.length) {
    //   setCurrentQuestion(currentQuestion + 1);
    // } else {
    //   setFinalResults(true);
    // }
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
              {/* {questions[currentQuestion].question} */}
            </Question>
            <Opions>
              {/* {questions[currentQuestion].options.map((option) =>{
                return (
                  <Opion key={option.id}
                  onClick={() => optionClicked(option.isCorrect)} >
                    {option.option}
                  </Opion>
                )
              })} */}
            </Opions>
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
`;

const FinalResultsCard = styled.div`
  background-color: lightcoral;
  padding: 1rem;
  margin: 2rem;
`;

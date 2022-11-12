import React, { useState } from 'react';
import styled from 'styled-components';
// import TablaData from "./Data";
import TablaData from "./questions";
// import { FinalResults } from './FinalResults';ß
import { Header } from './Header';

export const Tabla = () => {
  console.log("tabla:");
  console.log(TablaData);
  const questions = TablaData;
  console.log("questions" );
  console.log(questions);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(2);

  // Helper Funtions
  const optionClicked = (isCorrect) => {
    console.log(isCorrect);
    if(isCorrect) {
      setScore(score +1)
    }
    if(currentQuestion +1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
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
          <h2>Final Results</h2>
          <h3>{score} out of {questions.length} correct - ({Math.round((score/questions.length) *100)}%)</h3>
          <button onClick={() => restartGame()} >play again</button>
        </FinalResultsCard>)
    :
        (
          // {/* Question card */}
          <QuestionCard>
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
            <Question>
              {questions[currentQuestion].question}
            </Question>
            <Opions>
              {questions[currentQuestion].options.map((option) =>{
                return (
                  <Opion key={option.id}
                  onClick={() => optionClicked(option.isCorrect)} >
                    {option.option}
                  </Opion>
                )
              })}
              {/* <Opion ><div>{sounds[currentSounds1].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds2].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds3].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds4].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds5].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds6].hindi}</div></Opion > */}
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

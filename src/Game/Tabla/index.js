import React, { useState } from 'react';
import styled from 'styled-components';
// import TablaData from "./Data";
import TablaData from "./questions";
import { FinalResults } from './FinalResults';
import { Header } from './Header';

export const Tabla = () => {
  console.log("tabla" + TablaData);
  console.log(TablaData);
  const sounds = TablaData;
  console.log("sounds" + sounds);
  console.log(sounds);
 const [showFinalResults, setFinalResults] = useState(false);
 const [score, setScore] = useState(34);
 const [currentSounds1, setCurrentSound1] = useState(0);
 const [currentSounds2, setCurrentSound2] = useState(1);
 const [currentSounds3, setCurrentSound3] = useState(2);
 const [currentSounds4, setCurrentSound4] = useState(3);
 const [currentSounds5, setCurrentSound5] = useState(4);
 const [currentSounds6, setCurrentSound6] = useState(5);
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
          <h3>1 out of 5 correct - (20%)</h3>
          <button>play again</button>
        </FinalResultsCard>)
    :
        (
          // {/* Question card */}
          <QuestionCard>
            <h2>Question 1</h2>
            <Question>
              {sounds[currentSounds1].hindi}
            </Question>
            <Opions>
              <Opion ><div>{sounds[currentSounds1].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds2].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds3].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds4].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds5].hindi}</div></Opion >
              <Opion ><div>{sounds[currentSounds6].hindi}</div></Opion >
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

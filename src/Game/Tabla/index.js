import React, { useState } from 'react';
import styled from 'styled-components';
import TablaData from "./Data";
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
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Current Score */}
      <h2>Current Score: {score}</h2>

      { showFinalResults ? (
        // {/* Final Results Card */}
        <div>
          <h2>Final Results</h2>
          <h3>1 out of 5 correct - (20%)</h3>
          <button>play again</button>
        </div>)
    :
        (
          // {/* Question card */}
          <div className='question-card'>
            <h2>Question 1</h2>
            <ul>
              <li><div>{sounds[currentSounds1].hindi}</div></li>
              <li><div>{sounds[currentSounds2].hindi}</div></li>
            </ul>
            <ul>
              <li><div>Same</div></li>
              <li><div>Different</div></li>
            </ul>
          </div>
        )
    }




    </div>
  )
}


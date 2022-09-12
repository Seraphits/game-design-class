import React from 'react'
import { Wrapper } from '../UI/Utility';

const Home = () => {
  return (
    <Wrapper>
      <h1>Hi and Welcome to my site.</h1>
      <p> I use this site for testing Functionality.  This means two things </p>
      <ol>
        <li>Minimal thought and effort is put into the UX design.</li>
        <li>The same project will be built multiple times</li>
        <ul>
          <li>with new or different features</li>
          <li>testing different was of making it</li>
        </ul>
      </ol>
      <p>Now, is 2022, I feel like I am relearning React JS, after not useing it for a few years. Last time I used React JS, I used all class-based component and lifecycle.  Now everything is functional components with hooks.</p>
      <p>Why I chose to organize this site this way?</p>
      <ol>
        <li>track my progress and learning</li>
        <li> easily test different functionality to decide which I want to move into the next phase of development </li>
      </ol>
    </Wrapper>
  )
}

export default Home



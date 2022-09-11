import React from 'react'
import styled from 'styled-components';

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
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  /* text-align: center;
  color: aliceblue; */
  margin: 2rem;
`;

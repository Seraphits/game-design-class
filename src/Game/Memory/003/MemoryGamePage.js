import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'
import { Wrapper } from '../../../UI/Utility'



const MemoryGamePage = () => {
  return (
    <Page>
      <Wrapper>
      <br/>
      <Heading1>Memory Game Page</Heading1>
      <br></br>
      <Cards/>
      <br></br>
      </Wrapper>
    </Page>
  )
}

export default MemoryGamePage


const Page = styled.div`
  background-color: rgb(33, 33, 33);
  color: aliceblue;
  height: 100vh;

  margin: 0 auto;
  padding: 0 auto;
`;
const Heading1 = styled.div`
  text-align: center;
  color: aliceblue;
`;


// Following this tutorial https://www.youtube.com/watch?v=c16KLlM3ZNw

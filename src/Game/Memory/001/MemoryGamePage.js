import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'


const MemoryGamePage = () => {
  return (
    <Page>
      <Heading1>Memory Game Page</Heading1>
      <br></br>
      <Cards/>
    </Page>
  )
}

export default MemoryGamePage


const Page = styled.div`
  background-color: rgb(33, 33, 33);
  height: 100vh;

  margin: 0 auto;
  padding: 0 auto;
`;
const Heading1 = styled.div`
  text-align: center;
  color: aliceblue;
`;


// Follows https://www.youtube.com/watch?v=c16KLlM3ZNw

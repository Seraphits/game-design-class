import React, { useState } from 'react'
import styled from 'styled-components'


const MemoryGamePage = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      Memory Game Page
      <br></br>
      <button onClick={() => setState(state + 1)}>add 1</button>
      <h1>{state}</h1>
      <Kid state={state}/>
      <Kid state={state}/>
      <Kid state={state}/>
      <Kid state={state}/>
    </div>
  )
}

export default MemoryGamePage

function Kid({state}){
  return(
    <Box>
      <p>{state}</p>
    </Box>
  )
}
const Box = styled.div`

  color: red;
  background-color: gainsboro;
`;

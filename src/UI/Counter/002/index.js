import React from 'react'
import { Wrapper } from '../../Utility';
import Button from '../../Buttons/Button'
import useCounter from './useCounter';



export const CounterPage002 = ( {initialCount} ) => {
  const {count, increment } = useCounter(initialCount);

  return (
    <Wrapper>CounterPage 002
     <h1>Count is {count}</h1>
    <Button onClick={ increment  } >Add 1</Button>
    </Wrapper>
  )
}

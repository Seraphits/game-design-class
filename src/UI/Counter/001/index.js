import React, { useEffect, useState } from 'react'
import { Wrapper } from '../../Utility';
import Button from '../../Buttons/Button'

export const CounterPage = ( {initialCount} ) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Wrapper>CounterPage
     <h1>Count is {count}</h1>
    <Button onClick={handleClick } >Add 1</Button>
    </Wrapper>
  )
}

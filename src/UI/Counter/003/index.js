import React, { useState } from 'react'
import { Wrapper } from '../../Utility';
import Button from '../../Buttons/Button'
import { Panel } from '../../BuildingBlocks/Panel';




export const CounterPage003 = ( {initialCount} ) => {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1 );
  }

  const deccrement = () => {
    setCount(count - 1 );
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    setValueToAdd(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  }

  return (
    <Wrapper><h1>CounterPage 003</h1> <br/>
      <Panel className='m-3' >
     <p className='text-lg'>Count is {count}</p>
     <div className='flex flex-row'>
      <Button onClick={ increment  } >Add 1</Button>
      <Button onClick={ deccrement  } >Subtract 1</Button>
     </div>
    <form onSubmit={handleSubmit}>
      <label>Amount to add</label>
      <input
        value={valueToAdd || '' }
        onChange={handleChange}
        type='number'
        className='p-1 m-3 bg-gray-50 border border-gray-300' />
      <button>Submit</button>
    </form>
    </Panel>
    </Wrapper>
  )
}

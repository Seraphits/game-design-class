import React, { useReducer } from 'react'
import { Wrapper } from '../../Utility';
import Button from '../../Buttons/Button'
import { Panel } from '../../BuildingBlocks/Panel';

const INCREMENT_COUNT = 'increment' ;
const SET_ADD_VALUE = 'change-add-value';

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
     return {
      ...state,
      count: state.count + 1
    }
  }

  if (action.type === SET_ADD_VALUE) {
    return {
      ...state,
      valueToAdd: action.payload
    }
  }

  return state;
}


export const CounterPage004 = ( {initialCount} ) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const deccrement = () => {
    // setCount(count - 1 );
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // setValueToAdd(value)
    dispatch({
      type: SET_ADD_VALUE,
      payload: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  }

  return (
    <Wrapper><h1>CounterPage 004</h1> <br/>
      <Panel className='m-3' >
     <p className='text-lg'>Count is {state.count}</p>
     <div className='flex flex-row'>
      <Button onClick={ increment  } >Add 1</Button>
      <Button onClick={ deccrement  } >Subtract 1</Button>
     </div>
    <form onSubmit={handleSubmit}>
      <label>Amount to add</label>
      <input
        value={state.valueToAdd || '' }
        onChange={handleChange}
        type='number'
        className='p-1 m-3 bg-gray-50 border border-gray-300' />
      <button>Submit</button>
    </form>
    </Panel>
    </Wrapper>
  )
}

import React, { useReducer } from 'react'
import produce from 'immer'
import { Wrapper } from '../../Utility';
import Button from '../../Buttons/Button'
import { Panel } from '../../BuildingBlocks/Panel';

const INCREMENT_COUNT = 'increment' ;
const DECREMENT_COUNT = 'decrement' ;
const SET_ADD_VALUE = 'change-add-value';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count =state.count - 1;
      return;
    case  SET_ADD_VALUE:
      state.valueToAdd = action.payload;
      return;
    case  ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      throw new Error('unexpected action type: ' + action.type)
  }
}


export const CounterPage005 = ( {initialCount} ) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const deccrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    })
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
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    })

  }

  return (
    <Wrapper><h1>CounterPage 005</h1> <br/>
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

import React from 'react'
import '../../Tailwind.css'
import { Wrapper } from '../../Utility'
import { Table } from './table'

export const TablePage002 = () => {
  const data = [
    { name:'Orange', color:'bg-orange-500', score: 5 },
    { name:'Apple', color:'bg-red-500', score: 3 },
    { name:'Banana', color:'bg-yellow-300', score: 1 },
    { name:'Lime', color:'bg-green-500', score: 4 }
  ]
  return (
    <Wrapper>
      <h1>TablePage</h1> <br/>
      <Table data={data} />
    </Wrapper>

  )
}

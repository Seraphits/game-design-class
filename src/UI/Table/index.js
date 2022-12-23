import React from 'react'
import '../Tailwind.css'
import { Wrapper } from '../Utility'
import { Table } from './table'

export const TablePage = () => {
  const data = [
    { name:'Orange', color:'bg-orange-500', score: 5 },
    { name:'Apple', color:'bg-red-500', score: 3 },
    { name:'Banana', color:'bg-yellow-300', score: 1 },
    { name:'Lime', color:'bg-green-500', score: 4 }
  ]
  return (
    <Wrapper>
      <div>TablePage</div>
      <Table data={data} />
    </Wrapper>

  )
}

import React from 'react'
import '../../Tailwind.css'
import { Wrapper } from '../../Utility'
import { SortableTable } from './SortableTable';
// import { Table } from './table'

export const TablePage003 = () => {
  const data = [
    { name:'Orange', color:'bg-orange-500', score: 5 },
    { name:'Apple', color:'bg-red-500', score: 3 },
    { name:'Banana', color:'bg-yellow-300', score: 1 },
    { name:'Lime', color:'bg-green-500', score: 4 }
  ];
  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      // header: () => <th className='bg-red-500' >Score</th>
      sortValue: (fruit) => fruit.score,
      // header: () => <th onclick={DOSORT()}>Score</th>
    },
    {
      label: 'Score X 2',
      render: (fruit) => fruit.score ** 2
    }
  ]

  const keyFn = (fruit) => {
    return fruit.name;
  }

  return (
    <Wrapper>
      <h1>TablePage</h1> <br/>
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </Wrapper>

  )
}

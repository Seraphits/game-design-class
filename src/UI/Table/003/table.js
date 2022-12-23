import React, { Fragment } from 'react'

export const Table = ({ data, config, keyFn }) => {
  const renderedHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label} >{column.header()}</Fragment> ;
    }
    return (
      <th key={column.label} >{column.label} </th>
    )
  })

  const renderedRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return <td className='p-2' key={column.label}>{column.render(rowData)} </td>
    })
    return (
      <tr className='border-b' key={keyFn(rowData)} >
        {renderCells}
      </tr>
    )
  })
  return (
     <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {renderedHeader}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
     </table>
  )
}

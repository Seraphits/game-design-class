import React, { useState } from 'react'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'
import { Table } from './table'
import useSort from '../../Counter/002/useSort'

export const SortableTable = (props) => {
  const { config, data } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  } = useSort(data, config);



  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () =>
      <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(column.label) }>
        <div className='flex items-center'>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  })



  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy ) {
    return (
      <div>
        <GoArrowSmallUp/>
        <GoArrowSmallDown/>
      </div>
    );
  // }
  // if (sortOrder === null) {
  //   return "show Both 2";
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp/>
      </div>
    );
  }  else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown/>
      </div>
    );
  }
}

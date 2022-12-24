import React, { useState } from 'react'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go'
import { Table } from './table'

export const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null)
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () =>
      <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label) }>
        <div className='flex items-center'>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  })

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue} = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a,b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1 ;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder ;
      }
    })
  }

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

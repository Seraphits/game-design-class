import React, { useEffect, useState, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import { Panel } from '../BuildingBlocks/Panel';

export const DropDown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    };
    document.addEventListener('click', handler, true);
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false); // Close dropdown
    onChange(option); //option clickes
  }

  const renderedOptions = options.map((option) => {
    return (
    <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option) } key={option.value} >
      {option.label}
    </div>
    )})
  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer ' onClick={handleClick } >
        {value?.label || 'Select...'}
        <GoChevronDown/>
      </Panel>
      {isOpen && <Panel className="absolute top-full" >   {renderedOptions}  </Panel>}
    </div>
  )
}

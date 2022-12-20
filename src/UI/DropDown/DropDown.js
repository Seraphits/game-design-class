import React, { useState } from 'react'

export const DropDown = ({options, selection, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false); // Close dropdown
    onSelect(option); //option clickes
  }

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  const renderedOptions = options.map((option) => {
    return (
    <div onClick={() => handleOptionClick(option) } key={option.value} >
      {option.label}
    </div>
    )})
  return (
    <div>
      <div onClick={handleClick } >
        {selection?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions} </div>}
    </div>
  )
}

import React, { useState } from 'react'
import { Wrapper } from '../Utility'
import { DropDown } from './DropDown'

export const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options = [
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
    { label: "yellow", value: "yellow" },
  ]

  return (
    <Wrapper>
      <h1>Dropdown</h1>
      <DropDown options={options} selection={selection} onSelect={handleSelect} />
    </Wrapper>
  )
}

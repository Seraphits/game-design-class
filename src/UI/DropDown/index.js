import React, { useState } from 'react'
import '../Tailwind.css'
import { Grid, Wrapper } from '../Utility'
import { DropDown } from './DropDown'

export const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  }

  const options1 = [
    { label: "red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
    { label: "yellow", value: "yellow" },
  ]
  // const options2 = [
  //   { label: "red2", value: "red2" },
  //   { label: "blue2", value: "blue2" },
  //   { label: "green2", value: "green2" },
  //   { label: "yellow2", value: "yellow2" },
  // ]

  return (
    <Wrapper>
      <h1>Dropdown</h1>
      <Grid>
        <DropDown options={options1} value={selection} onChange={handleSelect} />
        {/* <DropDown options={options2} value={selection} onChange={handleSelect} /> */}
      </Grid>
    </Wrapper>
  )
}

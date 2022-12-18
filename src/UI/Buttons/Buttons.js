import React from 'react'
import { Grid, Wrapper } from '../Utility'
import Button from './Button'

export const Buttons = () => {
  return (
    <Wrapper>
      <h1>Buttons</h1>
      <Grid>
        <div>
          <p>name of button</p>
          <Button>Button1</Button>
        </div>
        <div>
          <p>name of button</p>
          <Button>Button2</Button>
        </div>
        <div>
          <p>name of button</p>
          <Button>Button3</Button>
        </div>
        <div>
          <p>name of button</p>
          <Button>Button4</Button>
        </div>
      </Grid>
    </Wrapper>
  )
}

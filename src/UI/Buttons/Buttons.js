import React from 'react'
import { Grid, Wrapper } from '../Utility'
import Button from './Button'

export const Buttons = () => {
  return (
    <Wrapper>
      <h1>Buttons</h1>
      <Grid>
        <div>
          <div>
            <p>name of button</p>
            <Button primary>Button1</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button secondary>Button2</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button  success>Button3</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button warning>Button4</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button danger>Button4</Button>
          </div>
        </div>
        <div>
          <div>
            <p>name of button</p>
            <Button primary rounded>Button1</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button secondary rounded>Button2</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button  success rounded>Button3</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button warning rounded>Button4</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button danger rounded>Button4</Button>
          </div>
        </div>
        <div>
          <div>
            <p>name of button</p>
            <Button primary outline>Button1</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button secondary outline>Button2</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button  success outline>Button3</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button warning outline>Button4</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button danger outline>Button4</Button>
          </div>
        </div>
        <div>
          <div>
            <p>name of button</p>
            <Button primary rounded outline>Button1</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button secondary rounded outline>Button2</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button  success rounded outline>Button3</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button warning rounded outline>Button4</Button>
          </div>
          <div>
            <p>name of button</p>
            <Button danger rounded outline>Button4</Button>
          </div>
        </div>
      </Grid>
    </Wrapper>
  )
}


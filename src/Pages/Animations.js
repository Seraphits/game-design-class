import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Beaver } from '../Animations/Objects/Beaver';
import { ObjectDagga } from '../Animations/Objects/Dagga';
import { ObjectHand } from '../Animations/Objects/Hand';
import { ObjectTabla } from '../Animations/Objects/Tabla';
import { TablaSet } from '../Animations/Scenes/TablaSet';
import { Wrapper, Grid } from '../UI/Utility';

export const Animations = () => {
  return (
    <Wrapper>
      <h1>Animations List</h1>

      <h2>Animations for Games</h2>
      <Grid>

        <Link to='/animations/tabla'>Tabla</Link>
        <Link to='/animations/dagga'>Dagga</Link>
        <Link to='/animations/hand'>Hand</Link>
      </Grid>
      <h2>Test Objects</h2>
      <div>
        <Frame><ObjectDagga/></Frame>
        <Frame><ObjectTabla/></Frame>
        <Frame><ObjectHand/></Frame>
        <Frame1><TablaSet/></Frame1>
        <Beaver/>

      </div>
    </Wrapper>
  )
}

const Frame = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color:  transparent;
  /* background-color:  pink; */
  /* border: 2px solid orange; */
  border-radius: 1.5rem;
  /* margin: 2rem;÷ */
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Frame1 = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color:  transparent;
  /* background-color:  blue; */
  /* border: 2px solid orange; */
  border-radius: 1.5rem;
  /* margin: 2rem;÷ */
  /* display: grid; */
  justify-content: center;
  align-items: center;
`;
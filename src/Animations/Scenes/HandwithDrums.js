import React from 'react'
import styled from 'styled-components';
import { ObjectHand } from '../Objects/Hand';
import { TablaSet } from './TablaSet';

export const HandwithDrums = () => {
  return (
    <>
        <TablaSet/>
        <Hand1><ObjectHand/></Hand1>
        <Hand2><ObjectHand/></Hand2>
    </>
  )
}

const Hand1 = styled.div`
  position: absolute;
  background-color:  transparent;
  width: 80%;
  height: 30%;
  top: 0;
  right: -35%;
  transform: translateY(-50%) rotate(10deg) translateX(5%);
  transition: all .5s;
  &:hover {
    transform:  rotate(-35deg) translateY(0);

  }
`;
const Hand2 = styled.div`
  position: absolute;
  background-color:  transparent;
  width: 79.5%;
  height: 29.5%;
  top: -5%;
  right: 15%;
  transform: translateY(-60%) rotate(15deg) ;
  &:hover {
  transition: all .5s;
    transform:  rotate(-45deg) translateY(-5%) translateX(-5%);

  }
`;

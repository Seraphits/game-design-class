import React from 'react'
import styled, { keyframes } from 'styled-components';
import { ObjectHand } from '../Objects/Hand';
import { TablaSet } from './TablaSet';

export const PlayTablaKeyFrame = () => {
  return (
    <>
        <TablaSet/>
        <Hand1><ObjectHand/></Hand1>
        <Hand2><ObjectHand/></Hand2>
    </>
  )
}

const MoveHand1 = keyframes`
  from {transform: translateY(-30%) rotate(10deg) translateX(5%);}
  to { transform:  rotate(-35deg)  translateY(20%) translateX(-10%); }
`
const MoveHand2 = keyframes`
  from {transform: translateY(-60%) rotate(15deg) }
  to { transform:  rotate(-45deg) translateY(-5%) translateX(-5%) }
`
const Hand1 = styled.div`
  position: absolute;
  background-color:  transparent;
  width: 80%;
  height: 30%;
  top: 0;
  right: -35%;
  animation: ${MoveHand1} .4s both infinite alternate;
`;
const Hand2 = styled.div`
  position: absolute;
  background-color:  transparent;
  width: 79.5%;
  height: 29.5%;
  top: -5%;
  right: 15%;
  animation: ${MoveHand2} .4s both infinite alternate .2s;
`;


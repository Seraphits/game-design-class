import React from 'react'
import styled from 'styled-components';

export const ObjectHand = () => {
  return (
    <Frame>

      <Fingers/>
      <Hand/>
    </Frame>
  )
}
const Frame = styled.div`
  position: absolute;
  width: 80%;
  height: 30%;
  top: 10%;
  right: 0;
  background-color:  transparent;
`;
const Hand = styled.div`
  position: absolute;
  width: 35%;
  height: 35%;
  border: 1px solid black;
  border-left: 0;
  background-color:  burlywood;
  border-radius: 0  1.5rem 1.5rem 0;
  left: 33%;
  top: 27%;
  transform: rotate(10deg) ;
`;
const Fingers = styled.div`
  position: relative;
  width: 30%;
  height: 15%;
  border: 1px solid black;
  background-color:  burlywood;
  border-radius: 1.5rem;
  left: 10%;
  top: 20%;
  &:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 100%;
    border-radius: 1.5rem;
    border: 1px solid black;
    background-color:  burlywood;
    top: 60%;
    left: -10%;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    border: 1px solid black;
    background-color:  burlywood;
    top: 120%;
    left: 10%;
  }
`;

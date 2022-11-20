import React from 'react'
import styled from 'styled-components';

export const ObjectTabla = () => {
  return (
    <div>
      <h3>ObjectTabla</h3>
      <p>smaller drum </p>
      <Frame>
        <Tabla/>
        <DrumTopWhite>
          <DrumTopBlack />
        </DrumTopWhite>
      </Frame>
    </div>
  )
}

const Frame = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color:  transparent;
  /* border: 2px solid orange; */
  border-radius: 1.5rem;
  margin: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Tabla = styled.div`
  position: absolute;
  background-color: #c4a378;
  width: 52%;
  height: 80%;
  border-radius: 25% 25% 50% 50%;
  left: 20%;
  /* transform: translateX(%) ; */
`;
const DrumTopWhite = styled.div`
  position: absolute;
  width: 52%;
  height: 32%;
  background-color: #ede0ce;
  border-radius: 100%;
  /* transform: rotate(-15deg); */
  top: 5%;
  left: 20%;
  /* box-shadow: 1px 3px 0 2px beige; */
  &:before {
    content: "";
    position: absolute;
    width: 93%;
    height: 93%;
    border-radius: 100%;
    background-color: white;
    left 2.5%
  }
`;
const DrumTopBlack = styled.div`
  position: absolute;
  width: 30%;
  height: 30%;
  background-color: black;
  border-radius: 100%;
  right: 40%;
  bottom: 40%
`;

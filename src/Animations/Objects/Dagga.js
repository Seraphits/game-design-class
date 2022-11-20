import React from 'react'
import styled from 'styled-components';

export const ObjectDagga = () => {
  return (
    <>
      {/* <h3>ObjectDagga</h3>
      <p>larger drum</p>
      <Frame> */}
        <Dagga/>
          <DrumTopWhite>
            <DrumTopBlack />
          </DrumTopWhite>
      {/* </Frame> */}
    </>

  )
}

const Dagga = styled.div`
  position: absolute;
  background-color: #ba986c;
  width: 72%;
  height: 80%;
  border-radius: 25% 25% 50% 50%;
  transform: translateX(13%) ;
`;
const DrumTopWhite = styled.div`
  position: absolute;
  width: 72%;
  height: 42%;
  background-color: #ede0ce;
  border-radius: 100%;
  /* transform: rotate(-15deg); */
  top: 5%;
  left: 9.5%;
  /* box-shadow: 2px 5px 0 2px #edcb9f; */
  &:before {
    content: "";
    position: absolute;
    width: 95%;
    height: 95%;
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

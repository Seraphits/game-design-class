import React from 'react'
import styled, {css} from 'styled-components'
import { ObjectDagga } from '../Objects/Dagga'
import { ObjectTabla } from '../Objects/Tabla'

export const TablaSet = () => {
  return (
    <>
      <FrameDagga><ObjectDagga/></FrameDagga>
      <FrameTabla><ObjectTabla/></FrameTabla>
    </>
  )
}

const Frame = css`
  position: absolute;

  background-color: transparent;

  /* border: 2px solid orange; */
  border-radius: 1.5rem;
  margin: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const FrameTabla = styled.div`
  ${Frame}
  /* background-color:  red; */
  width: 90%;
  height:90%;
  left:20%;
`;
const FrameDagga = styled.div`
  ${Frame}
  /* background-color:  green; */
  width: 90%;
  height: 100%;
  right: 4%;
  top: -20%;
`;

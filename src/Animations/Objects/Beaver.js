import React from 'react'
import styled from 'styled-components';

export const Beaver = () => {
  return (
    <div>
      <p>Beaver</p>
      <Frame>
        <BeaverBody>
          <Bow/>
          <Heart/>
          <LeftArm/>
          <RightArm/>
        </BeaverBody>
        <LeftEye><Lashes/></LeftEye>
        <RightEye><Lashes/></RightEye>
      </Frame>

    </div>
  )
}

export const Frame = styled.div`
  width: 350px;
  height: 420px;
  background-color: #f0d0d1;
  border: 20px solid white;
  position: relative;
`;
export const BeaverBody = styled.div`
  position: absolute;
  width: 70%;
  height: 90%;
  background: #a35a37;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50% 50% 0 0;
`;
export const Bow = styled.div`
  position: absolute;
  width: 30px;
  height: 25px;
  background: #f0d0d1;
  right: 25%;
  top: 8%;
  border-radius: 50% 15% 15% 50%;
  transform: rotate(10deg);
  &:before {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f0d0d1;
    border-radius: 15% 50% 50% 15%;
    left: -30px;
  }
`;
export const Heart = styled.div`
  position: absolute;
  width: 85px;
  height: 85px;
  background: #f0d0d1;
  top:70%;
  left:50%;
  transform: translateX(-50%) rotate(45deg);
  &:before {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f0d0d1;
    left: 0;
    top: 0;
    transform: translateY(-50%);
    border-radius: 50%
  }
  &:after {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f0d0d1;
    left: 0;
    top: 0;
    transform: translateX(-50%);
    border-radius: 50%
  }
`;
export const LeftArm = styled.div`
  position: absolute;
  width: 45%;
  height: 20%;
  background: #7a3b1a;
  left: 0;
  bottom: 10%;
  border-radius: 0 50% 50% 0 ;
  transform: skewY(5deg);
`;
export const RightArm = styled.div`
  position: absolute;
  width: 45%;
  height: 20%;
  background: #7a3b1a;
  Right: 0;
  bottom: 10%;
  border-radius:50% 0  0 50%  ;
  transform: skewY(-5deg);
`;
export const LeftEye = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  border: 3px solid #3c2114;
  border-top: 0;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  top: 35%;
  left: 35%;
`;
export const RightEye = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  border: 3px solid #3c2114;
  border-top: 0;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  top: 35%;
  right: 35%;
`;
export const Lashes = styled.div`
  position: absolute;
  /* width: 2px;
  height: 10px;
  background: #3c2114;
  bottom: -8px;
  left: 48%;
  &:after{
    content: "";
    position: absolute;

  } */
`;

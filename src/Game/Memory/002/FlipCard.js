import React from 'react'
import styled from 'styled-components';

const FlipCard = ({card, handleChoice, flipped }) => {

  const handleClick = () => {
    // console.log("handleClick" + card);

    handleChoice(card)
    console.log(flipped);
  }

  return (
    <div>
      <div key={card.id}>
        <Front variant={card.flipped} >{card.letter}<br/>{card.flipped} </Front>
        <Back variant={card.flipped}onClick={ handleClick }><Tabla/></Back>
      </div>
    </div>
  )
}

export default FlipCard

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
  border: 2px solid orange;
  border-radius: 1.5rem;
  margin: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Front = styled(Card)`
  color: white;
  color: ${(props) => props.variant == "true" ? "pink" : "yellow"};
  font-size: 4rem;
  display: ${(props) => props.variant === "false" ? "none" : "grid"};
`;
const Back = styled(Card)`
 display: ${(props) => props.variant === "true" ? "none" : "grid"};

`;
const Tabla = styled.div`
position: relative;
  width: 25px;
  height: 25px;
  background-color: black;
  border-radius: 50%;
  box-shadow: 1px 1px 0 25px white,
      10px 15px 0 32px burlywood;
  left: -10px;
  top: -10px;
`;

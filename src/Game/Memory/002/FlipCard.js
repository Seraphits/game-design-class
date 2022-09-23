import React from 'react'
import styled from 'styled-components';

const FlipCard = ({card, handleChoice}) => {

  const handleClick = () => {
    console.log("handleClick" + card);
    handleChoice(card)
  }

  return (
    <div>
      <div key={card.id}>
        <Front>{card.letter}</Front>
        <Back onClick={ handleClick }><Tabla/></Back>
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
  color: white;
  font-size: 4rem;
`;
const Back = styled(Card)`

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

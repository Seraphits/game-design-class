import React from 'react'
// import Cards from './Cards'
// import "./Styled.css"

export default function Card(props) {
// { card, index, clickhandler }
  // const cardClassName = card.status ? 'active' : ''

  return (
    <div
    // onClick={() => clickhandler(index)}
    >
      {/* <img src={card.img} alt={card.name} /> */}
      {props.id}
    </div>
  );
}


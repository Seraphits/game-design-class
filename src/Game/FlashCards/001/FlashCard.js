import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const FlashCard = ({flashcard}) => {
  const [flip, setFlip] = useState(false)
  return (
    <div></div>
    // <Card
    //     className={`card ${flip ? 'flip' : ''} `}
    //     onClick={() => setFlip(!flip)}>
    //   <CardFront>
    //     {flashcard.question}
    //     <Options>
    //       {flashcard.options.map(option => {
    //       return <Option>{option} </Option>})}
    //     </Options>
    //   </CardFront>
    //   <CardBack>
    //     {flashcard.answer}
    //   </CardBack>
    // </Card>
  )
}

export default FlashCard

// const Card = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   border-radius: .25rem;
//   box-shadow: 0 0 5px 2px rgba(0,0,0,.3);
//   background-color: white;
//   height: 150px;
//   width: 150px;
// `;
// const CardFace = css`
//   position: absolute;
//   padding: 1rem;
//   backface-visibility: hidden;
// `
// const CardFront = styled.div`
//   ${CardFace};
//   color: goldenrod;
//   /* background-color: gainsboro; */
// `;
// const CardBack = styled.div`
//   ${CardFace};
//   transform: rotateY('180deg');
// color: blue;
// background-color: peru;
// `;
// const Options = styled.div`

// `;
// const Option = styled.div`

// `;

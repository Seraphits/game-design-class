import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { getAllLetters } from "./letter-data";

export default function Cards() {
    const letters = getAllLetters();
    const [cards, setCards] = useState(letters);
    const lettersX2 = letters.concat(letters).sort(() => Math.random() - .5);
    // useEffect(() => setCards(lettersX2),[]);
    console.log("cards:" + lettersX2);

    // const [previousCardState, setPreviousCardState] = useState(-1)
    // const previousIndex = useRef(-1)

    // const matchCheck = (currentCard) => {
    //     if(cards[currentCard].id === cards[previousCardState].id){
    //         cards[previousCardState].status = 'active matched'
    //         cards[currentCard].status = 'active matched'
    //         setPreviousCardState(-1)
    //     }else{
    //         cards[currentCard].status = 'active'
    //         setCards([...cards])
    //         setTimeout(() => {
    //             setPreviousCardState(-1)
    //             cards[currentCard].status = 'unmatch'
    //             cards[previousCardState].status = 'unmatch'
    //             setCards([...cards])
    //         }, 1000);
    //     }
    // }

    // const clickhandler = (index) => {

    //     if(index !== previousIndex.current){
    //         if(cards[index].status === 'active matched'){
    //             alert('already matched')
    //         }else{
    //             if(previousCardState === -1){
    //                 previousIndex.current = index
    //                 cards[index].status = 'active'
    //                 setCards([...cards])
    //                 setPreviousCardState(index)
    //             }else{
    //                 matchCheck(index)
    //                 previousIndex.current = -1
    //             }
    //         }
    //     }else{
    //         alert('card currently seleted')
    //     }

    // }

    return (
      <Container>
        { cards.map((card, index) => {
            return <Card key={index}
            card={card} index={index}
            items={cards}
            //  clickhandler={clickhandler}
             />
        })}
      </Container>
    );
}



const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  max-width: 18rem;
  height: 18rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.3rem;
`;

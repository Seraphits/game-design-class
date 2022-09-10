import React, { useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

export default function Cards() {
  const [cards, setCards] = useState([
      { id: 0, name: "A", status: "", img: "/Metal/letter_A.png" },
      { id: 1, name: "B", status: "", img: "/Metal/letter_B.png" },
      { id: 2, name: "C", status: "", img: "/Metal/letter_C.png" },
      { id: 3, name: "D", status: "", img: "/Metal/letter_D.png" },
      { id: 4, name: "E", status: "", img: "/Metal/letter_E.png" },
      { id: 5, name: "F", status: "", img: "/Metal/letter_F.png" },
      { id: 6, name: "G", status: "", img: "/Metal/letter_G.png" },
      { id: 7, name: "H", status: "", img: "/Metal/letter_H.png" },
      { id: 0, name: "A", status: "", img: "/Metal/letter_A.png" },
      { id: 1, name: "B", status: "", img: "/Metal/letter_B.png" },
      { id: 2, name: "C", status: "", img: "/Metal/letter_C.png" },
      { id: 3, name: "D", status: "", img: "/Metal/letter_D.png" },
      { id: 4, name: "E", status: "", img: "/Metal/letter_E.png" },
      { id: 5, name: "F", status: "", img: "/Metal/letter_F.png" },
      { id: 6, name: "G", status: "", img: "/Metal/letter_G.png" },
      { id: 7, name: "H", status: "", img: "/Metal/letter_H.png" },
    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {

        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched'){
                alert('already matched')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('card currently seleted')
        }

    }

    return (
      <Container>
        { cards.map((card, index) => {
            return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
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

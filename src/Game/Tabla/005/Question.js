import React, { useEffect, useState } from 'react';
import {QuestionCard, Question, Opions, Opion, Submittext, Submit} from './QuestionStyled';
import TablaData from "../TablaData";
// import TablaData from "../Data";
import Right from './Right';
import Wrong from './Wrong';
import { SubmitButton } from './Button.styled';
import { TablaSet } from '../../../Animations/Scenes/TablaSet';
import styled from 'styled-components';

export const QuestionComp= () => {
  // const [showResults, setResults] = useState(false);
  const [text, setText] = useState();
  const [cards, setCards] = useState();
  const [selected, setSelected] = useState();
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [quSound] = useState();

  // select card
  const optionClicked = (card) => {
    setSelected(card);
  }

  useEffect(() => {
    // console.log("useEffect run");
    if (selected) {
      // console.log("Cards");
      // console.log(cards);
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.id === selected.id) {
            return {...card, picked: "true"}
          } else {
            return {...card, picked: "false"}
          }
        })
      })
      // console.log("Cards all false1");
      // console.log(cards);
    }
  }, [selected])

  // Make QU
  const makeQu = () => {
    const pickCards = [...TablaData].sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random(), picked: "false" })).slice(0, 4)
    const quText = [...pickCards].sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, id1: Math.random(), picked: "true" })).slice(3)
    setCards(pickCards)
    // console.log("text");
    setText(quText)
  }

  useEffect(() => {
    console.log("Make Qu");
    makeQu()
  },[])

 // check answer
  const summit = () => {
    console.log("Click Submit");
    if(!selected) {
      console.log("Please make a choose");
    } else {
      console.log("chech answer");
      console.log(selected.id);
      console.log(text[0].id);
      if (selected.id === text[0].id) {
        console.log("Match");
        setCorrect("true")
        if (score > 25) {
          setScore(0)
          setLevel(level + 1)
          console.log("Level Up");
        } else {
          setScore(score +1);
          console.log("score + 1");
        }
      } else {
        console.log("Not a Match");
        setCorrect("false")
        if (score < level) {
          setScore(0)
          console.log("score to 0");
        } else {
          setScore(score - level)
          console.log("score - level");
        }
      }
    }
  }
  useEffect(() => {
    console.log("correct");
    console.log(correct);
  },[correct])
console.log("score Qu component");
console.log(score);
console.log(text);

// useEffect(() => {
//   if (text) {
//     let quSound = new Audio(`/Sounds/Tabla/${text[0].spoken}`)
//   }
// },[text])

const PlayQuSound = ()=>  {
    let quSound = new Audio(`/Sounds/Tabla/${text[0].played}`)
      console.log("text");
      console.log(text[0].spoken);
      console.log("quSound");
      console.log(quSound);
      quSound.play();
    }

return (
    <QuestionCard>
      {correct ? (
        <>

         {(correct === "true") ? (
            <Right score={score} level={level} />
          )
          :(
            <Wrong/>
          )
        }
        {/* <button onClick={() => makeQu()}>New Question</button> */}
      </>
      ) : (
        <>
          {cards  ? (
        <>
          {/* {score} {level} */}
          <Question>
            {/* {text[0].english} */}
            <br/>
            <div  >
              {/* {text[0].spoken} */}
            </div>

            {quSound ? (<p>Loading</p>) : (<><PlayButton onClick={PlayQuSound}><TablaSet></TablaSet></PlayButton><p>Click the Tabla</p></>)}
{/* <p>Play</p> */}
          </Question>
          <Opions>
          {cards.map((option) =>{
            return (
              <Opion key={option.id}
              onClick={() => optionClicked(option)}
              variant={option.picked}
              >
                {option.english}

              </Opion>
            )
          })}
        </Opions>
        <Submit>
        {selected ? (
            <SubmitButton onClick={() => summit()}>Submit</SubmitButton>
          ) : (
            <Submittext>Select The Letters that makes the sound played.</Submittext>
          )}
        </Submit>
      </>
      ) : (
        <div> Loading</div>
      )}
        </>
      )}
    </QuestionCard>
  )
}
const PlayButton = styled.button`
  position: relative;
  width: 150px;
  height: 150px;
  background-color:  transparent;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* padding: 1rem; */
  border: none;
  &:hover {
        transform:  translateX(-5px) translateY(-5px);
        box-shadow: 0 1rem 2rem rgba(white, .2);
    }
`;

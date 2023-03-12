import React, { useState } from 'react'
import { QuestionComp } from './Question';
import { InfoButton, Logo, LogoH3, PlayButton, SoundH1, SoundWord, SplashScreen, Tabla1, Tabla2, TablaH1, TablaPair, TablaWord } from './StartScreenTabla.styled';
// import { makeQu } from './MakeQu';
// import TablaData from "../Data";
// import TP from './img/tabla-pair.png';
import { StartGameButton } from './Button.styled';
import { ObjectTabla } from '../../../Animations/Objects/Tabla';
import styled from 'styled-components';
import { ObjectDagga } from '../../../Animations/Objects/Dagga';
import { TablaSet } from '../../../Animations/Scenes/TablaSet';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const StartScreenTabla = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  // const [text, setText] = useState();
  // const [cards, setCards] = useState();
  const handleClick = () => {
    console.log("startScreen");
    // makeQu()
    setShowQuestion(true);
  }

  return (
    <div>
      {showQuestion ? (
          <QuestionComp/>
        ) : (
          <SplashScreen>
            <Logo>
                <LogoH3>Scrambled Sounds</LogoH3>
            </Logo>
            <TablaPair>
              <Frame><TablaSet/></Frame>
            </TablaPair>
            <Tabla1>
              <Frame><ObjectDagga/></Frame>
            </Tabla1>
            <Tabla2>
              <Frame><ObjectTabla/></Frame>
            </Tabla2>
              <TablaWord>
                  <TablaH1>TABLA</TablaH1>
              </TablaWord>
              <SoundWord>
                  <SoundH1>Sounds</SoundH1>
              </SoundWord>
              <PlayButton>
                  <StartGameButton onClick={ handleClick } >PLAY</StartGameButton><br/><br/>
                  <InfoButton to="/games/tablainfo" >About This Game</InfoButton>
              </PlayButton>
          </SplashScreen>
        )
      }


    </div>
  )
}
// {setStartScreen(false)} .  <div onClick={ handleClick }>Start Game</div>
const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color:  transparent;
  margin: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`;

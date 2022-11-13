import React, { useState } from 'react'
import { QuestionComp } from './Question';
import { Logo, LogoH3, PicContainer, PlayButton, SoundH1, SoundWord, SplashScreen, Tabla1, Tabla2, TablaH1, TablaPair, TablaWord } from './StartScreenTabla.styled';
// import { makeQu } from './MakeQu';
// import TablaData from "../Data";
import TP from './img/tabla-pair.png';
import { StartGameButton } from './Button.styled';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
    <div>StartScreenTabla
      {showQuestion ? (
          <QuestionComp/>
        ) : (
          <SplashScreen>
            <Logo>
                <LogoH3>Scrambled Sounds</LogoH3>
            </Logo>
            <TablaPair>
              <PicContainer>
                <img scr={TP} alt='Tabla Set' />
              </PicContainer>

                 {/* <img src="./img/tabla-pair.png" alt="" class="img__tabla--1"> */}
            </TablaPair>
            <Tabla1>
              <PicContainer>
                {/* <img src="/img/Tabla1.png" alt="" class="img__tabla--1"></img> */}
              </PicContainer>
            </Tabla1>
            <Tabla2>
              <PicContainer>
                {/* <img src="/img/Tabla2.png" alt="" class="img__tabla--1"> */}
              </PicContainer>
            </Tabla2>
              <TablaWord>
                  <TablaH1>TABLA</TablaH1>
              </TablaWord>
              <SoundWord>
                  <SoundH1>Sounds</SoundH1>
              </SoundWord>
              <PlayButton>
                  <StartGameButton href="#" >PLAY</StartGameButton>
              </PlayButton>
          </SplashScreen>
        )
      }


    </div>
  )
}
// {setStartScreen(false)} .  <div onClick={ handleClick }>Start Game</div>

import React, { useState } from 'react'
import { QuestionComp } from './Question';
import { Logo, LogoH3, PicContainer, SplashScreen, Tabla1, Tabla2, TablaPair } from './StartScreenTabla.styled';
// import { makeQu } from './MakeQu';
// import TablaData from "../Data";

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
                <img scr='../../../public/img/tabla-pair.png' alt='Tabla Set' />
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
              {/*  <div class="tabla__item--tabla tabla__item">
                  <h1 class="text__vertical h1__tabla">TABLA</h1>
              </div>
              <div class="tabla__item--sounds tabla__item">
                  <h1 class=" h1__sounds">Sounds</h1>
              </div>
              <div class="tabla__item--play tabla__item">
                  <a href="#" class="btn__color__scrambled--1 btn__hero1">PLAY</a>
              </div> */}
          </SplashScreen>
        )
      }


    </div>
  )
}
// {setStartScreen(false)} .  <div onClick={ handleClick }>Start Game</div>

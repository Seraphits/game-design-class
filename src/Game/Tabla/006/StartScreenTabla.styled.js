import { Link } from "react-router-dom";
import styled from "styled-components";

export const SplashScreen = styled.div`
  background: black;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100vh;
  width: 100vw;
  @media all and (orientation: portrait){
    grid-template-rows: repeat(10, 1fr);
    }
`;
export const Logo = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 6;
`;
export const LogoH3 = styled.h3`
  color: green;
  font-family: 'Henny Penny', cursive;
  font-size: clamp(1.5rem, 5vh, 5rem )  ;
  padding-top : 2vh ;
  padding-left: 3vw;
`;

export const TablaPair = styled.div`
  grid-row: 2 / 8;
  grid-column: 3 / 8;
  @media  (min-aspect-ratio: 3/2){
      grid-row: 2 / 8;
      grid-column: 2 / 4;
  }
  @media all and (orientation: portrait){
      display: none;
  }
`;
export const Tabla1 = styled.div`
  display: none;
  @media all and (orientation: portrait){
      display: grid;
      grid-row: 2 / 5;
      grid-column: 5 / 8;
  }
  @media  (min-aspect-ratio: 3/2){
      display: block;
      grid-row: 2 / 6;
      grid-column: 6 / 8;
  }
`;
export const Tabla2 = styled.div`
  display: none;
  @media all and (orientation: portrait){
      display: grid;
      grid-row: 6 / 9;
      grid-column: 2 / 4;
  }
  @media  (min-aspect-ratio: 3/2){
      display: block;
      grid-row: 3 / 7;
      grid-column: 5 / 7;
  }
`;
export const TablaWord = styled.div`
  grid-row: 2 / 8;
  grid-column: 1 / 2;
  display: grid;
  align-items: center;
  justify-content: right;
  @media  (min-aspect-ratio: 3/2) {
      grid-row: 2 / 7;
      grid-column: 4 / 5;
  }
  @media all and (orientation: portrait){
      grid-row: 2 / 9;
      grid-column: 4 / 5;
      transform: rotate(-30deg);
  }
`;
export const TablaH1 = styled.h1`
  font-size: clamp(1.5rem, 11vh, 15rem ) ;
  color: burlywood;
  font-family: 'Hanalei', cursive;
  writing-mode: vertical-rl;
  text-orientation: upright;
  @media  screen and (orientation: portrait) {
      font-size: clamp(1.5rem, 10vh, 11rem ) ;
  }
`;
export const SoundWord = styled.div`
  display: none ;
  margin: auto;
  @media  all and (orientation: portrait){
      display: block ;
      grid-row: -1 / -3;
      grid-column: 2 / 6;
  }
  @media  screen and (max-width: 700px) {
      display: none;
  }
`;
export const SoundH1 = styled.h1`
  font-size: clamp(1.5rem, 6vh, 15rem );
  font-family: 'Henny Penny', cursive;
  color: rgb(211, 179, 138);
`;
export const PlayButton = styled.div`
  grid-row: -1 / -3;
  grid-column: -1 / -3;
  margin: auto;
  @media  screen and (max-width: 700px) and (orientation: portrait) {
    grid-row: -1 / -3;
    grid-column: 1 / 9;
  }
`;
export const InfoButton = styled(Link)`
  color: white;
  background: transparent;
  margin: 2rem;

`;

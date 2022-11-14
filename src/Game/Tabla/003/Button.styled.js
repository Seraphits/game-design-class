import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const SplashButton = css`
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        // padding: 2vh 5vh;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        padding: 1rem 4rem;
        font-size: 2rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        // change for the <botton> element
        border:none;
        cursor: pointer;
        /* &__splash {
            padding: clamp(1rem, 3vh, 4rem) clamp(4rem, 5vh, 6rem);
            font-size: clamp(2rem, 4vh, 4rem);
        } */
    }
    &:hover {
        transform:  translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(black, .2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(black, .2);
    }
    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    &--animated {
        animation: moveInBotton .5s ease-out .75s ;
        animation-fill-mode: backwards;
    }
`;

export const GreenButton = css`
  background-color: green;
  color: white;
  &::after {
      background-color: green;
  }
`;
export const StartGameButton = styled.button`
  ${SplashButton}
  ${GreenButton}
`;

export const SubmitButton = styled.button`
  ${SplashButton}
  ${GreenButton}
  &,
    &:link,
    &:visited {
        border-radius: 10rem;
        transition: all .2s;
        padding: .5rem 2rem;
        font-size: 1rem;
    }




`;

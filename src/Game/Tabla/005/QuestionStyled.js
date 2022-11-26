import styled from "styled-components";

export const QuestionCard = styled.div`
  background: black;
  /* display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr); */
  height: 100vh;
  width: 100vw;
  /* @media all and (orientation: portrait){
    grid-template-rows: repeat(10, 1fr);
    } */
`;
export const Question = styled.div`
  /* list-style: none; */
  text-align: center;
  color: white;
  font-size: 2rem;
  padding: clamp(1rem, 3vh, 5rem );
`;
export const Opions = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 0;
  margin: 2rem;
`;
export const Opion = styled.li`
  background-color: aliceblue;
  /* padding: 1rem; */
  /* margin: 1rem; */
  border: 3px solid green;
  color: ${(props) => props.variant === "true" ? " orange" : "green"};
  font-size: clamp(1.5rem, 5vh, 5rem );
  text-align: center;
  padding: clamp(1rem, 10vh, 5rem );
`;

export const FinalResultsCard = styled.div`
  background-color: lightcoral;
  padding: 1rem;
  margin: 2rem;
`;

export const Submit = styled.div`
  color: white;
  text-align: right;
  padding: 2rem;
`;

export const Submittext = styled.div`
  color: white;
`;

export const ResultsText = styled.p`
  font-size: clamp(1.5rem, 20vh, 20rem ) ;
  color: burlywood;
  font-family:  cursive;
  padding: 0;
  margin: 0;
  /* background:pink; */
`;
export const Results = styled.div`
  position: relative;
  text-align: center;
  padding: 15vh;
  margin: auto;
  /* display: grid;
  justify-content: center;
  align-items: center;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: red; */
`;
export const AminationsFrame = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-color:  transparent;
  /* background-color:  blue; */
  /* border: 2px solid orange; */
  /* border-radius: 1.5rem; */
  /* margin: 0; */
  /* display: grid; */

  /* justify-content: center;
  align-items: center;*/
`;

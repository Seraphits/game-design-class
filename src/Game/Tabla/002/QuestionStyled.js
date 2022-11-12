import styled from "styled-components";

export const QuestionCard = styled.div`
  display: ${(props) => props.variant === "true" ? "green" : "red"};
  background-color: lightgreen;
  padding: 1rem;
  margin: 2rem;
`;
export const Question = styled.div`
  /* list-style: none; */
  text-align: center;
`;
export const Opions = styled.ul`
  list-style: none;
  display: grid;
`;
export const Opion = styled.li`
  background-color: aliceblue;
  padding: 1rem;
  margin: 1rem;
  border: 3px solid green;
  color: ${(props) => props.variant === "true" ? "green" : "red"};
`;

export const FinalResultsCard = styled.div`
  background-color: lightcoral;
  padding: 1rem;
  margin: 2rem;
`;

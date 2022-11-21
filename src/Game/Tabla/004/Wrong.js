import React, { useState } from 'react'
import { SubmitButton } from './Button.styled';
import { QuestionComp } from './Question';
import { ResultsText, Results } from './QuestionStyled';

function Wrong(score, level) {
  const [showQuestion, setShowQuestion] = useState(false);
  const handleClick = () => {
    console.log("startScreen");
    // makeQu()
    setShowQuestion(true);
  }

  console.log("score wrong component");
  console.log(score[1]);
  console.log("level");
  console.log(level[0]);

  return (
    <div>

      {showQuestion ? (
          <QuestionComp/>
        ) : (
          <Results>
            <ResultsText>Wrong</ResultsText>
            <SubmitButton onClick={() => handleClick()}>New Question</SubmitButton>
          </Results>
        )
      }
    </div>
  )
}

export default Wrong;

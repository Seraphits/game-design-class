import React, { useState } from 'react'
import { SubmitButton } from './Button.styled';
import { QuestionComp } from './Question';
import { Results, ResultsText } from './QuestionStyled';

function Right() {
  const [showQuestion, setShowQuestion] = useState(false);
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
          <Results>
            <ResultsText>Right</ResultsText>
              <SubmitButton onClick={() => handleClick()}>New Question</SubmitButton>
          </Results>
        )
      }
    </div>

  )
}

export default Right

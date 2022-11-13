import React, { useState } from 'react'
import { QuestionComp } from './Question';

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
          <>
            Right
            <button onClick={() => handleClick()}>New Question</button>
          </>
        )
      }
    </div>

  )
}

export default Right

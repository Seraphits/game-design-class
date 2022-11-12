import React, { useState } from 'react'
import { QuestionComp } from './Question';

function Wrong() {
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
            Wrong
            <button onClick={() => handleClick()}>New Question</button>
          </>
        )
      }





    </div>
  )
}

export default Wrong

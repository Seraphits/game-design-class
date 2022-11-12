import React, { useState } from 'react'
import { QuestionComp } from './Question';

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

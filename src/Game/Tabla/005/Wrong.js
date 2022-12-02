import React, { useEffect, useState } from 'react'
import { DeflatTablaKeyFrame } from '../../../Animations/Scenes/DeflatTablaKeyFrame';
import { SubmitButton } from './Button.styled';
import { QuestionComp } from './Question';
import { ResultsText, Results, AminationsFrame } from './QuestionStyled';

function Wrong(score, level) {
  const [showQuestion, setShowQuestion] = useState(false);
  const handleClick = () => {
    console.log("startScreen");
    // makeQu()
    setShowQuestion(true);
  }


  useEffect(() => {
    let SoundWrong = new Audio("/Sounds/Results/Wrong_Tabla.mp3");
    SoundWrong.play();
  },[])

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
            <AminationsFrame><DeflatTablaKeyFrame/></AminationsFrame>
            {/* <ResultsText>Wrong</ResultsText> */}
            <br/><br/><br/>
            <SubmitButton onClick={() => handleClick()}>New Question</SubmitButton>
          </Results>
        )
      }
    </div>
  )
}

export default Wrong;

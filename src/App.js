import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const BIRD_SIZE         = 20;
const GAME_WIDTH        = 500;
const GAME_HEIGHT       = 500;
const GRAVITY           = 6;
const JUMP_HEIGHT       = 100;
const OBSTACLE_WIDTH    = 40

function App() {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameHasStarted, setGameHasStarted] = useState(false)
  const [obstacleHeight, setObstacleHeight] = useState(100)
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH)


  useEffect(() => {
    let timeId;

    if (gameHasStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition(birdPosition => birdPosition + GRAVITY)
      }, 24 )
    }
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameHasStarted])

  const handleClick = () => {
    let newBirdPosition = birdPosition - JUMP_HEIGHT;
    if (!gameHasStarted) {
      setGameHasStarted(true)
    } else if (newBirdPosition < 0) {
      setBirdPosition(0)
    } else {
      setBirdPosition(newBirdPosition)
    }
  };

  return (
    <Div onClick={handleClick} >
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Obstacle
          top={0}
          width={OBSTACLE_WIDTH}
          height={obstacleHeight}
          left={obstacleLeft}
        />

        <Bird size={BIRD_SIZE} top={birdPosition} />
      </GameBox>

    </Div>
  );
}

export default App;

const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: blue;
`
const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: green;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`

import React, { useState } from 'react';
import TablaSounds from '../Game/Tabla/TablaSounds';

export const Sounds = () => {
  const [sounds, setSounds] = useState(TablaSounds);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ currentSound, SetCurrentSound ] = useState(TablaSounds[0])
  return (
    <div>
      <h1>Sounds</h1>
      <audio src='/Sounds/Tabla/Dagga_GHE.mp3'/>
      {/* <Player/> */}
    </div>
  )
}

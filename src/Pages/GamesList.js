import React from 'react'
import { Link } from 'react-router-dom'

const GamesList = () => {
  return (
    <div>
      Game List
      <div>
        <Link to='/games/floppybird'>Floppy Bird</Link>
      </div>

    </div>
  )
}

export default GamesList

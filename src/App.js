import React from 'react'
import { Route, Switch } from 'react-router-dom'
import FlashCard from './Game/FlashCard'
import FloppyBird from './Game/FloppyBird'
import Header from './Layout/Header'
import GamesList from './Pages/GamesList'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/games/floppybird'><FloppyBird/></Route>
        <Route path='/games/flashcards'><FlashCard/></Route>
        <Route path='/games'><GamesList/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
    </div>
  )
}

export default App

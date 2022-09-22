import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GraphQL001 from './AddingData/GraphQL/001'
import FlashCard from './Game/FlashCards/001/FlashCardsPage'
import FloppyBird from './Game/FloppyBird/001/FloppyBird'
import MemoryGamePage from './Game/Memory/001/MemoryGamePage'
import MemoryGamePage2 from './Game/Memory/002'
import Header from './Layout/Header'
import AddingData from './Pages/AddingData'
import GamesList from './Pages/GamesList'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/games/floppybird'><FloppyBird/></Route>
        <Route path='/games/flashcards'><FlashCard/></Route>
        <Route path='/games/memory/001'><MemoryGamePage/></Route>
        <Route path='/games/memory/002'><MemoryGamePage2/></Route>
        <Route path='/games'><GamesList/></Route>
        <Route path='/addingdata/GraphQL/001'><GraphQL001/></Route>
        <Route path='/addingdata'><AddingData/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
    </div>
  )
}

export default App

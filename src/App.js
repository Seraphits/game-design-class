import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GraphQL001 from './AddingData/GraphQL/001'
import FlashCard from './Game/FlashCards/001/FlashCardsPage'
import FloppyBird from './Game/FloppyBird/001/FloppyBird'
import MemoryGamePage from './Game/Memory/001/MemoryGamePage'
import MemoryGamePage2 from './Game/Memory/002'
import { Tabla } from './Game/Tabla/001'
import { TablaRan } from './Game/Tabla/001/TablaRandom'
import { TablaRefactor } from './Game/Tabla/002/TablaRefactor'
// import MemoryGamePage3 from './Game/Memory/003/MemoryGamePage'
import Header from './Layout/Header'
import AddingData from './Pages/AddingData'
import GamesList from './Pages/GamesList'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/games/tablarefactor'><TablaRefactor/></Route>
        <Route path='/games/tablarandom'><TablaRan/></Route>
        <Route path='/games/tabla'><Tabla/></Route>
        <Route path='/games/floppybird'><FloppyBird/></Route>
        <Route path='/games/flashcards'><FlashCard/></Route>
        <Route path='/games/memory/001'><MemoryGamePage/></Route>
        <Route path='/games/memory/002'><MemoryGamePage2/></Route>
        {/* <Route path='/games/memory/003'><MemoryGamePage3/></Route> */}
        <Route path='/games'><GamesList/></Route>
        <Route path='/addingdata/GraphQL/001'><GraphQL001/></Route>
        <Route path='/addingdata'><AddingData/></Route>
        <Route path='/'><Home/></Route>
      </Switch>
    </div>
  )
}

export default App

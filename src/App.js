import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Content001 } from './AddingData/Content/001'
import GraphQL001 from './AddingData/GraphQL/001'
// import { ObjectDagga } from './Animations/Objects/Dagga'
// import { ObjectHand } from './Animations/Objects/Hand'
// import { ObjectTabla } from './Animations/Objects/Tabla'
import FlashCard from './Game/FlashCards/001/FlashCardsPage'
import FloppyBird from './Game/FloppyBird/001/FloppyBird'
import MemoryGamePage from './Game/Memory/001/MemoryGamePage'
import MemoryGamePage2 from './Game/Memory/002'
import { Tabla } from './Game/Tabla/001'
import { TablaRan } from './Game/Tabla/001/TablaRandom'
import { TablaRefactor } from './Game/Tabla/002/TablaRefactor'
import {TablaStyled} from './Game/Tabla/003'
import {TablaAnimated} from './Game/Tabla/004'
import {TablaSound} from './Game/Tabla/005'
import { TablaInfo } from './Game/Tabla/005/TablaInfo'
// import MemoryGamePage3 from './Game/Memory/003/MemoryGamePage'
import Header from './Layout/Header'
import AddingData from './Pages/AddingData'
import { Animations } from './Pages/Animations'
import GamesList from './Pages/GamesList'
import Home from './Pages/Home'
import { Sounds } from './Pages/Sounds'
import { Assets } from './Pages/Assets'
import { Buttons } from './UI/Buttons/Buttons'
import { AccordionPage } from './UI/Accordion/Index'
import { DropDownPage } from './UI/DropDown'
import { ModalPage } from './UI/Modal'
import { TablePage } from './UI/Table'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/addingdata/content/001'><Content001/></Route>
        <Route path='/sounds'><Sounds/></Route>
        {/* <Route path='/animations/hand'><ObjectHand/></Route>
        <Route path='/animations/dagga'><ObjectDagga/></Route>*/}
        <Route path='/assets/table'><TablePage/></Route>
        <Route path='/assets/modal'><ModalPage/></Route>
        <Route path='/assets/dropdown'><DropDownPage/></Route>
        <Route path='/assets/buttons'><Buttons/></Route>
        <Route path='/assets/accordion'><AccordionPage/></Route>
        <Route path='/assets/animations'><Animations/></Route>
        <Route path='/assets'><Assets/></Route>
        <Route path='/games/tablasound'><TablaSound/></Route>
        <Route path='/games/tablaanimated'><TablaAnimated/></Route>
        <Route path='/games/tablastyled'><TablaStyled/></Route>
        <Route path='/games/tablarefactor'><TablaRefactor/></Route>
        <Route path='/games/tablarandom'><TablaRan/></Route>
        <Route path='/games/tablainfo'><TablaInfo/></Route>
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

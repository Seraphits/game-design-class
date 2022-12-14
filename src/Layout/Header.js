import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
        </ul>
        <ul>
          <NavLink to='/games'>Games</NavLink>
        </ul>
        <ul>
          <NavLink to='/assets'>Assets</NavLink>
        </ul>
        <ul>
          <NavLink to='/sounds'>Sounds</NavLink>
        </ul>
        <ul>
          <NavLink to='/addingdata'>Data</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header

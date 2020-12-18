import React from 'react'
import { NavLink } from 'react-router-dom'

function LogOutBtn () {
  const logOut = () => {
    localStorage.removeItem('token')
  }

  return (
    <NavLink to={`/`}>
      <button onClick={logOut}>Log out</button>
    </NavLink>
  )
}

export default LogOutBtn

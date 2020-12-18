import React from 'react'
import { NavLink } from 'react-router-dom'

function RegLogBtn ({ to, text }) {
  return (
    <NavLink to={`/${to}`}>
      <button>{text}</button>
    </NavLink>
  )
}

export default RegLogBtn

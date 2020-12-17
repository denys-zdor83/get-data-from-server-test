import React from 'react'
import { NavLink } from 'react-router-dom'

import { LOGIN } from '../../utils/consts'

function LogInBtn () {
  return (
    <NavLink to={`/${LOGIN}`}>
      <button>Log in</button>
    </NavLink>
  )
}

export default LogInBtn

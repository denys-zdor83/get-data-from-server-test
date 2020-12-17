import React from 'react'
import { NavLink } from 'react-router-dom'

import { REGISTER } from '../../utils/consts'

function RegisterBtn () {
  return (
    <NavLink to={`/${REGISTER}`}>
      <button>Register</button>
    </NavLink>
  )
}

export default RegisterBtn

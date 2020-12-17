import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  LOGIN,
  SET_SINGLE_STATE_ITEM } from '../../utils/consts'

function LogOutBtn () {
  const dispatch = useDispatch()
  const logOut = () => {
    localStorage.removeItem('token')
    dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'isToken', set: false } })
  }

  return (
    <NavLink to={`/${LOGIN}`}>
      <button onClick={logOut}>Log out</button>
    </NavLink>
  )
}

export default LogOutBtn

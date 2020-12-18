import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute (props) {
  const token = localStorage.getItem('token')

  if (token) {
    return (
      <Route {...props} />
    )
  } else {
    return <Redirect to={'/login'} />
  }
}

export default ProtectedRoute

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute (props) {
  console.log(props)
  console.log('Entered Protected route')

  const isToken = useSelector(state => state.appData.isToken)
  console.log('isToken - ' + isToken)

  if (isToken) {
    console.log('Protected component')
    return (
      <Route {...props} />
    )
  } else {
    console.log('Protected redirect to login')
    return <Redirect to={'/login'} />
  }
}

export default ProtectedRoute

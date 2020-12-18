import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { LOGIN, REGISTER } from './utils/consts'
import Navbar from './components/Navbar/Navbar'
import AddUser from './components/AddUser'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UsersPage from './pages/UsersPage'
import ProtectedRoute from './components/ProtectedRoute'
import { useAppRequest } from './requests/requests'

function App () {
  const isModal = useSelector(state => state.appData.isModal)
  const token = localStorage.getItem('token')
  const appRequest = useAppRequest()

  React.useEffect(() => {
    appRequest()
  }, [token])

  const hocTemplate = (Component) => {
    console.log('hocTemplate work')
    return (
      <div>
        <Navbar />
        <Component />
      </div>
    )
  }

  return (
    <EnterPageContainer>
      <div className='main-block'>
        <Switch>
          <ProtectedRoute exact path={'/'} render={(props) => hocTemplate(UsersPage)} />
          <Route path={`/${LOGIN}`} component={() => hocTemplate(LoginPage)} />
          <Route path={`/${REGISTER}`} component={() => hocTemplate(RegisterPage)} />
        </Switch>
      </div>
      <div>
        {isModal &&
          ReactDOM.createPortal(
            <AddUser />,
            document.getElementById('modal')
          )
        }
      </div>
    </EnterPageContainer>
  )
}

const EnterPageContainer = styled.div`
    width: 100%;
    .main-block {
      width: 1200px;
      margin: 0 auto;
    }
`

export default App

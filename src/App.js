import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { 
  LOGIN, 
  REGISTER, 
  SET_SINGLE_STATE_ITEM } from './utils/consts'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import requestHandler from './utils/requestHandler';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const dispatch = useDispatch();
  const isToken = useSelector(state => state.appData.isToken);
  const isModal = useSelector(state => state.appData.isModal);

  const history = useHistory();
  console.log('App isToketn = ' + isToken)

  React.useEffect(() => {
    console.log('App start request - component did mount')
    const storageToken = localStorage.getItem('token');
    requestHandler({
      method: 'get',
      urlPrefix: 'info',
      headers: {"x-access-token": storageToken},
    })
    .then(response => {
      console.log("Success App request - set isToken true")
      dispatch({type: SET_SINGLE_STATE_ITEM, payload: {field: "isToken", set: true}});
    })
    .catch(error => {
      console.log("Error App request - " + error)
    })
  }, [isToken])

  const hocTemplate = (Component) => {
    console.log('hocTemplate work')
    return(
      <div>
        <Navbar />
        <Component />
      </div>
    )
  };

  return (
      <EnterPageContainer>
      {console.log('APP page start render')}

        <div className="main-block">
          <Switch>
            <ProtectedRoute 
              path={`/`} 
              exact 
              component={UsersPage} 
            />
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
      {console.log('APP page is rendered')}

      </EnterPageContainer>
  );
}

const EnterPageContainer = styled.div`
    width: 100%;
    .main-block {
      width: 1200px;
      margin: 0 auto;
    }
`

export default App;

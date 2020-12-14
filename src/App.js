import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { 
  LOGIN, 
  USER_PAGE, 
  REGISTER, 
  SET_SINGLE_STATE_ITEM } from './utils/consts'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import requestHandler from './utils/requestHandler';

function App() {
  const dispatch = useDispatch();
  const isToken = useSelector(state => state.appData.isToken);
  const isModal = useSelector(state => state.appData.isModal);

  const history = useHistory();

  React.useEffect(() => {
    const storageToken = localStorage.getItem('token');
    requestHandler({
      method: 'get',
      urlPrefix: 'info',
      headers: {"x-access-token": storageToken},
    })
    .then(response => {
      history.push('/')
      dispatch({type: SET_SINGLE_STATE_ITEM, payload: {field: "isToken", set: true}});
    })
    .catch(error => {
      history.push('/login')
    })
  }, [isToken])

  const hocTemplate = (Component) => {
    return(
      <div>
        <Navbar />
        <Component />
      </div>
    )
  };

  return (
      <EnterPageContainer>
        {/* {isModal ? <AddUser /> : ''} */}

        <div className="main-block">
          <Switch>
            <Route path={`/`} exact component={() => hocTemplate(UsersPage)} />
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

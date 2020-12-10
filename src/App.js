import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { LOGIN, USER_PAGE } from './utils/consts'
import Navbar from './components/Navbar'
import EnterPage from './components/EnterPage';
import { SET_IS_TOKEN } from './utils/consts'
import AddUser from './components/AddUser'


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.appData.isModal);

  React.useEffect(() => {
    const storageToken = localStorage.getItem('token');
    axios
        .get('http://localhost:8080/info', {
            headers: {
                "x-access-token": storageToken
            }
        })
        .then(response => {
          dispatch({type: SET_IS_TOKEN, payload: true})
          history.push(`/${USER_PAGE}`)
        })
        .catch(error => {
          console.log('Some mistake - ' + error.data)
          dispatch({type: SET_IS_TOKEN, payload: false})
          history.push(`/${LOGIN}`)
        })

  }, [dispatch])

  return (
      <EnterPageContainer>
        {isModal ? <AddUser /> : ''}

        <div className="main-block">
          <Navbar />

          <EnterPage />
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

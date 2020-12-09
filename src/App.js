import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { LOGIN, USER_PAGE } from './utils/consts'
import Navbar from './components/Navbar'
import EnterPage from './components/EnterPage';
import { SET_IS_TOKEN, SET_USERS } from './utils/consts'


function App() {
  const history = useHistory();
  const dispatch = useDispatch()

  const showList = (storageToken) => {
      axios({
          method: 'post',
          url: 'http://localhost:8080/',
          headers: {
              "x-access-token": storageToken,
          }
      })
      .then(response => {
        console.log(response.data.workers)
        dispatch({type: SET_USERS, payload: response.data.workers})
      })
      .catch(error => {
        console.log('Some mistake - ' + error)
      })
  }
  React.useEffect(() => {
    const storageToken = localStorage.getItem('token');
    axios
        .get('http://localhost:8080/info', {
            headers: {
                "x-access-token": storageToken
            }
        })
        .then(response => {
          showList(storageToken)
          dispatch({type: SET_IS_TOKEN, payload: true})
          history.push(`/${USER_PAGE}`)
        })
        .catch(error => {
          console.log('Some mistake - ' + error.data)
          dispatch({type: SET_IS_TOKEN, payload: false})
          history.push(`/${LOGIN}`)
        })

  }, [])

  return (
      <EnterPageContainer>

        <Navbar />

        <EnterPage />

      </EnterPageContainer>
  );
}

const EnterPageContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export default App;

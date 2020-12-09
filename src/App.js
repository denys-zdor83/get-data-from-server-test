import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import MainContext from './context/mainContext'
import Navbar from './components/Navbar'
import EnterPage from './components/EnterPage';

function App() {
  const [users, setUsers] = React.useState([]);
  const [isToken, setIsToken] = React.useState('');

  const showList = (storageToken) => {
      axios({
          method: 'post',
          url: 'http://localhost:8080/',
          headers: {
              "x-access-token": storageToken,
          }
      })
      .then(response => {
          console.log(response)
          setUsers(response.data.workers);
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
              setIsToken(true);
          })
          .catch(error => {
              console.log('Some mistake - ' + error.data)
              setIsToken(false);
          })

  }, [])
  // const usersArray = users.map(elem => {
  //     return (
  //         <tr key={elem._id}>
  //             <td>{elem.firstName}</td>
  //             <td>{elem.lastName}</td>
  //             <td>{elem.gender}</td>
  //             <td>{elem.position}</td>
  //             <td>{elem.salary}</td>
  //         </tr>
  //     )
  // })
  console.log(isToken)
  return (
    <MainContext.Provider value={{isToken, users}} >
      <EnterPageContainer>

        <Navbar />

        <EnterPage />

      </EnterPageContainer>
    </MainContext.Provider>
  );
}

const EnterPageContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
`

export default App;

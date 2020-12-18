import axios from 'axios'

function requestHandler ({ method, urlPrefix = '', data = {} }) {
  const storageToken = localStorage.getItem('token')
  return axios({
    method,
    url: `http://localhost:8080/${urlPrefix}`,
    headers: { 'x-access-token': storageToken },
    data
  })
}

export default requestHandler

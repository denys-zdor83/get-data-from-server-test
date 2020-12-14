import axios from 'axios'

function requestHandler({method, urlPrefix = '', headers, data = {}}) {
    return axios({
        method,
        url: `http://localhost:8080/${urlPrefix}`,
        headers,
        data
    })
}

export default requestHandler;
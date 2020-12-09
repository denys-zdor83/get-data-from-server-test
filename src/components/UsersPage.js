import React from 'react';
import styled from 'styled-components';

import axios from 'axios'

// export default ({ url = '', headers, method = 'get', params = {}, data = {} }) => {
//     return axios({
//       url,
//       method,
//       headers: {
//         Authorization: Bearer ${Cookies.get('token')},
//         TimeZone: moment().format('ZZ'),
//         ...headers
//       },
//       params,
//       data
//     })
//   }


const UsersPage = () => {

    return (
        <UsersContainer>
            <table>
                <thead>
                    <tr className="titleLine">
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                        <td>Position</td>
                        <td>Salary</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {usersArray} */}
                </tbody>
            </table>
        </UsersContainer>
    );
}

const UsersContainer = styled.div`
    width: 900px;
    margin: 0 auto;
    table {
        border-collapse: collapse;
        width: 100%;
        border: 2px solid #000;
    }
    .titleLine {
        background: #efe67a42;
        text-align: center;
        font-weight: bold;
    }
    td {
        padding: 10px;
        border: 1px solid #000;
    }
`

export default UsersPage;
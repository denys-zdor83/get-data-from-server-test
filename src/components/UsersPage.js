import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import axios from 'axios'


const UsersPage = () => {
  const users = useSelector(state => state.appData.users);


    const usersArray = users.map(elem => {
        return (
            <tr key={elem._id}>
                <td>{elem.firstName}</td>
                <td>{elem.lastName}</td>
                <td>{elem.gender}</td>
                <td>{elem.position}</td>
                <td>{elem.salary}</td>
            </tr>
        )
    })
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
                    {usersArray}
                </tbody>
            </table>
            <button>
                Add User
            </button>
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
        margin-bottom: 20px;
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
    button {
        border: none;
        width: 100px;
        height: 40px;
        background: #00ab2e;
        border-radius: 3px;
        color: #fff;
        font-size: 17px;
        box-shadow: 3px 3px 13px 2px #0000003d;
        cursor: pointer;
        outline: none;
    }
`

export default UsersPage;
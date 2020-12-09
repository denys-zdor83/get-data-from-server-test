import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useParams } from 'react-router-dom';

import { LOGIN, REGISTER } from './../utils/consts'
import Navbar from './Navbar'
import Child from './Child'
import RegisterPage from './../pages/RegisterPage';
import LoginPage from './../pages/LoginPage';
import UsersPage from './UsersPage';
import MainContext from './../context/mainContext'


const EnterPage = () => {
    let {isToken} = React.useContext(MainContext);

    return (
        <div>
            {
                isToken ? (
                    <UsersPage />
                ) : (
                    <LoginPage />
                )
            }

        </div>
    )
}


// const EnterPageContainer = styled.div`
//     width: 1200px;
//     margin: 0 auto;
// `

export default EnterPage;
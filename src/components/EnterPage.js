import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useParams } from 'react-router-dom';

import { LOGIN, REGISTER, USER_PAGE } from './../utils/consts'
import RegisterPage from './../pages/RegisterPage';
import LoginPage from './../pages/LoginPage';
import UsersPage from './UsersPage';


const EnterPage = () => {
    return (
        <Switch>
            <Route path={`/${LOGIN}`} component={LoginPage} />
            <Route path={`/${USER_PAGE}`} component={UsersPage} />
            <Route path={`/${REGISTER}`} component={RegisterPage} />
        </Switch>
    )
}


// const EnterPageContainer = styled.div`
//     width: 1200px;
//     margin: 0 auto;
// `

export default EnterPage;
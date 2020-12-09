import React from 'react'
import { useParams } from 'react-router-dom'

import RegisterPage from './../pages/RegisterPage';
import LoginPage from './../pages/LoginPage';
import UsersPage from './UsersPage';

const Child = () => {

    let { id } = useParams();
    console.log(id)

    let content;
    switch (id) {
        case "login": content = <LoginPage />;
        break;
        case "register": content = <RegisterPage />;
        break;
        default: content = <UsersPage />;
    }
  
    return (
        <div>
            {content}
        </div>
    );
}

export default Child
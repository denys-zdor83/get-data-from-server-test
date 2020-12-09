import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { LOGIN, REGISTER, USER_PAGE } from './../utils/consts'

function LoginPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPass] = React.useState('');
    const [errMessage, setErrMessage] = React.useState('');
    const history = useHistory();

    const changeHandler = (e) => {
        switch (e.target.name) {
            case 'email': setEmail(e.target.value);
            break;
            case 'password': setPass(e.target.value);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8080/login`, {email, password})
            .then(response => {
                localStorage.setItem('token', response.data.token)
                history.push(`/${USER_PAGE}`)
                setErrMessage('')
            })
            .catch(error => {
                console.log('Some mistake - ' + error)
                setErrMessage('Не верный логин или пароль')
                setEmail('')
                setPass('')
            })
    }

  return (
    <LoginContainer>
        <div className="login-block">
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={changeHandler} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange={changeHandler} />
                <div className="send-btn">
                    <button type="submit">Log in</button>
                </div>
            </form>
            <div className="error">
                {errMessage}
            </div>
        </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
    width: 100%;
    .login-block {
        background: #efe67a42;
        border-radius: 5px;
        box-shadow: 3px 3px 10px 3px #5c5c5c42;
        width: 260px;
        padding: 20px;
        margin: 0 auto;
        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
        }
        input {
            border: none;
            margin-bottom: 15px;
            box-shadow: 2px 2px 3px 0px #5c5c5c42;
            width: 100%;
            padding: 7px 10px;
            outline: none;
        }
        .send-btn {
            text-align: center;
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
        }
    }
    .error {
        color: #f00;
        text-align: center;
    }
`

export default LoginPage;
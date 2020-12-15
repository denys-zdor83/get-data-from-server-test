import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import requestHandler from './../utils/requestHandler';
import { 
    SET_SINGLE_STATE_ITEM,
    USER_PAGE,
    SET_FORM_DATA,
    LOGIN } from './../utils/consts'
import useClearDataHandler from '../utils/useClearDataHandler';


function LoginPage() {
    const formData = useSelector(state => state.appData.formData); 
    const {email, password} = formData;

    const dispatch = useDispatch();
    const history = useHistory();
    const clearData = useClearDataHandler();

    const changeHandler = (e) => {
        dispatch(
            {
                type: SET_FORM_DATA, 
                payload: {
                    field: e.target.name, 
                    set: e.target.value
                }
            }
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();
        requestHandler({
            method: 'post',
            urlPrefix: `${LOGIN}`,
            data: {email, password},
        })
        .then(response => {
            console.log('LOGIN Page succes set isToken true')
            localStorage.setItem('token', response.data.token)
            console.log('LOGIN Page set history "/"')
            // history.push(`/`)
            dispatch({
                type: SET_SINGLE_STATE_ITEM,
                payload: {
                    field: "isToken",
                    set: true
                }
            })
            clearData(SET_FORM_DATA, formData);
        })
        .catch(error => {
            console.log('Some mistake - ' + error);
        })
    }

  return (
    <LoginContainer>
        {console.log('LOGIN window start render')}
        <div className="login-block">
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={changeHandler} />
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={password} onChange={changeHandler} />
                <div className="send-btn">
                    <button type="submit">Enter</button>
                </div>
            </form>
        </div>
        {console.log('LOGIN window is rendered')}
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
`

export default LoginPage;
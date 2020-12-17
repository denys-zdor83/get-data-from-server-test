import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import requestHandler from './../utils/requestHandler'
import {
  SET_FORM_DATA,
  LOGIN,
  REGISTER } from './../utils/consts'
import useClearDataHandler from '../utils/useClearDataHandler'

function RegisterPage () {
  const formData = useSelector(state => state.appData.formData)
  const { name, email, password } = formData

  const dispatch = useDispatch()
  const history = useHistory()
  const clearData = useClearDataHandler()

  const changeHandler = (e) => {
    dispatch({ type: SET_FORM_DATA,
      payload: {
        field: e.target.name,
        set: e.target.value } })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    requestHandler({
      method: 'post',
      urlPrefix: `${REGISTER}`,
      data: {
        name,
        email,
        password
      }
    })
      .then(response => {
        console.log(response)
        clearData(SET_FORM_DATA, formData)
        history.push(`/${LOGIN}`)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <RegisterContainer>
      <div className='register-block'>
        <form onSubmit={submitHandler}>
          <label htmlFor=''>Name</label>
          <input type='text' name='name' value={name} onChange={changeHandler} />
          <label htmlFor=''>Email</label>
          <input type='text' name='email' value={email} onChange={changeHandler} />
          <label htmlFor=''>Password</label>
          <input type='password' name='password' value={password} onChange={changeHandler} />

          <div className='send-btn'>
            <button type='submit' >Send</button>
          </div>
        </form>
      </div>
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
  width: 100%;
  .register-block {
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

export default RegisterPage

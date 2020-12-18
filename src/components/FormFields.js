import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { useSubmitHandlerReg } from './../requests/requests'
import { SET_FORM_DATA } from './../utils/consts'
import { useChangeHandler } from './../actions/actions'

function FormFields (props) {
  let { string } = props
  const formData = useSelector(state => state.appData.formData)
  const { name, email, password } = formData

  const submitHandler = useSubmitHandlerReg()
  const changeHandler = useChangeHandler()

  return (
    <Generalblock>
      <form onSubmit={(e) => submitHandler(e, string, formData)}>
        {string === 'LoginPage' ||
          (
          <>
            <label htmlFor=''>Name</label>
            <input type='text' name='name' value={name} onChange={(e) => changeHandler(e, SET_FORM_DATA)} />
          </>
          )
        }
        <label htmlFor=''>Email</label>
        <input type='text' name='email' value={email} onChange={(e) => changeHandler(e, SET_FORM_DATA)} />
        <label htmlFor=''>Password</label>
        <input type='password' name='password' value={password} onChange={(e) => changeHandler(e, SET_FORM_DATA)} />

        <div className='send-btn'>
          <button type='submit' >Send</button>
        </div>
      </form>
    </Generalblock>
  )
}

const Generalblock = styled.div`
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
`

export default FormFields

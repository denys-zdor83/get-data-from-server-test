import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { SET_USER_DATA } from './../utils/consts'
import { useSubmitHandlerModal } from './../requests/requests'
import {
  useCloseModal,
  useChangeHandler,
  useClearDataHandler } from './../actions/actions'

const AddUser = () => {
  const userData = useSelector(state => state.appData.userData)
  const editID = useSelector(state => state.appData.editID)
  const { firstName, lastName, gender, salary, position } = userData

  const clearData = useClearDataHandler()
  const closeModal = useCloseModal()
  const changeHandler = useChangeHandler()
  const submitHandlerModal = useSubmitHandlerModal()

  React.useEffect(() => {
    return () => {
      clearData(SET_USER_DATA, userData)
    }
  }, [])

  return (
    <AddUserContainer onClick={closeModal}>
      <div className='modal' onClick={(event) => event.stopPropagation()}>
        <div className='cross' onClick={closeModal}>
          &times;
        </div>
        <form onSubmit={(e) => submitHandlerModal(e, editID, userData)}>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => changeHandler(e, SET_USER_DATA)}
          />
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => changeHandler(e, SET_USER_DATA)}
          />
          <label>Gender</label>
          <input
            type='text'
            name='gender'
            value={gender}
            onChange={(e) => changeHandler(e, SET_USER_DATA)}
          />
          <label>Salary</label>
          <input
            type='text'
            name='salary'
            value={salary}
            onChange={(e) => changeHandler(e, SET_USER_DATA)}
          />
          <label>Position</label>
          <input
            type='text'
            name='position'
            value={position}
            onChange={(e) => changeHandler(e, SET_USER_DATA)}
          />
          <div className='submit-btn'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </AddUserContainer>
  )
}

const AddUserContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #0006;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 300px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    position: relative;
  }
  .cross {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 6px;
    right: 6px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  label {
      display: block;
      margin-bottom: 3px;
  }
  input {
      padding: 5px;
      width: 100%;
      margin-bottom: 10px;
      outline: none;
  }
  .submit-btn {
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

export default AddUser

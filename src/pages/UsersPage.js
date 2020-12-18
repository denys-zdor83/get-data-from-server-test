import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import {
  usePostUsers,
  useDeleteUser } from './../requests/requests'
import {
  useShowModal,
  useOpenModal } from './../actions/actions'

const UsersPage = () => {
  const users = useSelector(state => state.appData.users)

  const showModal = useShowModal()
  const postUsers = usePostUsers()
  const deleteUser = useDeleteUser()
  const openModal = useOpenModal()

  React.useEffect(() => {
    postUsers()
  }, [])

  const usersArray = users.map(({ _id: id, firstName, lastName, gender, position, salary }) => {
    return (
      <tr key={id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{gender}</td>
        <td>{position}</td>
        <td>{salary}</td>
        <td>
          <span
            className='icon-btn'
            onClick={() => {
              openModal(
                id,
                { firstName, lastName, gender, position, salary },
                showModal
              )
            }}
          >Edit </span>
          <span
            className='icon-btn'
            onClick={() => { deleteUser(id, postUsers) }}
          >Delete</span>
        </td>
      </tr>
    )
  })
  return (
    <UsersContainer>
      {console.log('start render UserPage')}
      <table>
        <thead>
          <tr className='titleLine'>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>Position</td>
            <td>Salary</td>
            <td />
          </tr>
        </thead>
        <tbody>
          {usersArray}
        </tbody>
      </table>
      <button onClick={showModal}>
          Add User
      </button>
    </UsersContainer>
  )
}

const UsersContainer = styled.div`
    width: 900px;
    margin: 0 auto;
    .icon-btn {
        color: #00ab2e;
        text-decoration: underline;
        cursor: pointer;
    }
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

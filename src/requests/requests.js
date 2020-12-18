import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import requestHandler from './../utils/requestHandler'
import {
  SET_SINGLE_STATE_ITEM,
  REGISTER,
  SET_FORM_DATA,
  LOGIN } from './../utils/consts'
import { useClearDataHandler, useCloseModal } from './../actions/actions'

export const useAppRequest = () => {
  const history = useHistory()
  return React.useCallback((id, fn) => {
    requestHandler({
      method: 'get',
      urlPrefix: 'info'
    })
      .then(response => {
        history.push(`/`)
      })
      .catch(error => {
        console.log('Error App request - ' + error)
      })
  }, [])
}

export const usePaginationRequest = () => {
  const dispatch = useDispatch()

  return React.useCallback((num) => {
    requestHandler({
      method: 'post',
      urlPrefix: '',
      data: { page: num }
    })
      .then(response => {
        console.log(response)
        dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'users', set: response.data.workers } })
      })
      .catch(error => {
        console.log('Some mistake - ' + error)
      })
  }, [])
}

export const usePostUsers = () => {
  const dispatch = useDispatch()

  return React.useCallback(() => {
    requestHandler({
      method: 'post',
      urlPrefix: ''
    })
      .then(response => {
        console.log(response)
        dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'users', set: response.data.workers } })
        dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'pages', set: response.data.pages } })
      })
      .catch(error => {
        console.log('Some mistake - ' + error)
      })
  }, [])
}

export const useDeleteUser = () => {
  return React.useCallback((id, fn) => {
    requestHandler({
      method: 'delete',
      urlPrefix: `delete/${id}`
    })
      .then(response => {
        console.log(response)
        fn()
      })
      .catch(error => {
        console.log('Some mistake delete user - ' + error)
      })
  }, [])
}

export const useSubmitHandlerReg = () => {
  const history = useHistory()
  const clearData = useClearDataHandler()

  return React.useCallback((e, string, formData) => {
    e.preventDefault()
    console.log(e)
    const { name, email, password } = formData

    if (string === 'LoginPage') {
      e.preventDefault()
      requestHandler({
        method: 'post',
        urlPrefix: `${LOGIN}`,
        data: { email, password }
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('token', response.data.token)
          history.push(`/`)
          clearData(SET_FORM_DATA, formData)
        })
        .catch(error => {
          console.log('Mistake loginPage - ' + error)
        })
    } else {
      e.preventDefault()
      requestHandler({
        method: 'post',
        urlPrefix: `${REGISTER}`,
        data: { name, email, password }
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
  }, [])
}

export const useSubmitHandlerModal = () => {
  const dispatch = useDispatch()
  const postUsers = usePostUsers()
  const closeModal = useCloseModal()

  return React.useCallback((e, editID, userData) => {
    e.preventDefault()
    const { firstName, lastName, gender, salary, position } = userData

    if (editID.length) {
      requestHandler({
        method: 'put',
        urlPrefix: `update/${editID}`,
        data: {
          firstName,
          lastName,
          gender,
          salary,
          position
        }
      })
        .then(response => {
          console.log(response)
          postUsers()
        })
        .catch(error => {
          console.log('Some mistake - ' + error)
        })
      dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'editID', set: '' } })
      closeModal()
    } else {
      requestHandler({
        method: 'post',
        urlPrefix: 'create',
        data: {
          firstName,
          lastName,
          gender,
          salary,
          position
        }
      })
        .then(response => {
          console.log(response)
          postUsers()
        })
        .catch(error => {
          console.log('Some mistake - ' + error)
        })
      closeModal()
    }
  }, [])
}

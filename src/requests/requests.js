import React from 'react'
import { useDispatch } from 'react-redux'

import requestHandler from './../utils/requestHandler'
import { SET_SINGLE_STATE_ITEM, SET_USER_DATA } from './../utils/consts'

export const useShowModal = () => {
  const dispatch = useDispatch()

  return React.useCallback(() => {
    console.log('show modal worked')
    dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'isModal', set: true } })
  }, [])
}

export const usePostUsers = () => {
  const storageToken = localStorage.getItem('token')
  const dispatch = useDispatch()

  return React.useCallback(() => {
    requestHandler({
      method: 'post',
      urlPrefix: '',
      headers: { "x-access-token": storageToken }
    })
      .then(response => {
        dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'users', set: response.data.workers } })
      })
      .catch(error => {
        console.log('Some mistake - ' + error)
      })
  }, [])
}

export const useDeleteUser = () => {
  const storageToken = localStorage.getItem('token')

  return React.useCallback((id, fn) => {
    requestHandler({
      method: 'delete',
      urlPrefix: `delete/${id}`,
      headers: {"x-access-token": storageToken}
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

export const useOpenModal = () => {
  const dispatch = useDispatch()

  return React.useCallback((id, userData, fn) => {
    fn()
    dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'editID', set: id } })
    dispatch({ type: SET_USER_DATA, payload: { set: userData } })
  }, [])
}

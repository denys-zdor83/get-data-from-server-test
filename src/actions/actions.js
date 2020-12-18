import React from 'react'
import { useDispatch } from 'react-redux'

import {
  SET_SINGLE_STATE_ITEM,
  SET_USER_DATA } from './../utils/consts'

export const useShowModal = () => {
  const dispatch = useDispatch()

  return React.useCallback(() => {
    dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'isModal', set: true } })
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

export const useCloseModal = () => {
  const dispatch = useDispatch()

  return React.useCallback(() => {
    dispatch({ type: SET_SINGLE_STATE_ITEM, payload: { field: 'isModal', set: false } })
  }, [])
}

export const useChangeHandler = () => {
  const dispatch = useDispatch()

  return React.useCallback((e, type) => {
    dispatch({ type: type, payload: { field: e.target.name, set: e.target.value } })
  }, [])
}

export const useClearDataHandler = () => {
  const dispatch = useDispatch()

  return React.useCallback((type, obj) => {
    const clearData = Object.fromEntries(Object.entries(obj).map(([ key, value ]) => [ key, value = '' ] ))
    dispatch({ type, payload: { set: clearData } })
  }, [])
}

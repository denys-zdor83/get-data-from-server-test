import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { usePaginationRequest } from './../requests/requests'

const Pagination = () => {
  const pages = useSelector(state => state.appData.pages)
  const pagesArr = new Array(pages).fill('').map((elem, id) => id + 1)
  const paginationRequest = usePaginationRequest()

  let numbers = pagesArr.map((elem, id) => {
    return (
      <div className='number' onClick={() => paginationRequest(id + 1)}>{elem}</div>
    )
  })

  return (
    <PaginationContainer>
      <div className='numbers-block'>
        {numbers}
      </div>

    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .numbers-block {
    display: flex
  }
  .number {
    margin: 0 5px;
    cursor: pointer;
    font-size: 24px;
  }
`

export default Pagination

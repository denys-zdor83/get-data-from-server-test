import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { usePaginationRequest } from './../requests/requests'

const Pagination = () => {
  const pages = useSelector(state => state.appData.pages)
  const page = useSelector(state => state.appData.page)
  const pagesArr = new Array(pages).fill('').map((elem, id) => id + 1)

  const paginationRequest = usePaginationRequest()

  let numbers = pagesArr.map((elem, id) => {
    const num = id + 1
    if (num === page) {
      return <div className='number active' key={id} onClick={() => paginationRequest(num)}>{elem}</div>
    }
    return (
      <div className='number' key={id} onClick={() => paginationRequest(num)}>{elem}</div>
    )
  })

  return (
    <PaginationContainer>
      <div className='arrow' onClick={() => paginationRequest(page - 1)}>Prev</div>
      <div className='numbers-block'>
        {numbers}
      </div>
      <div className='arrow' onClick={() => paginationRequest(page + 1)}>Next</div>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  .numbers-block {
    display: flex;
    align-items: baseline;
    margin: 0 10px;
  }
  .number {
    margin: 0 5px;
    cursor: pointer;
    font-size: 20px;
  }
  .active {
    color: #00ab2e;
    font-size: 24px;
    font-weight: bold;
  }
  .arrow {
    cursor: pointer;
  }
`

export default Pagination

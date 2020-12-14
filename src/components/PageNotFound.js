import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'


function PageNotFound() {
  return (
    <PageNotFoundContainer>
      Sorry, but the page is not available
    </PageNotFoundContainer>
  );
}

const PageNotFoundContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
`

export default PageNotFound;
import React from 'react'
import styled from 'styled-components'

import FormFields from './../components/FormFields'

function RegisterPage () {
  return (
    <RegisterContainer>
      <FormFields props={'RegisterPage'} />
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
  width: 100%;
`

export default RegisterPage

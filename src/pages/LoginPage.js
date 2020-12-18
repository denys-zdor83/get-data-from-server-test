import React from 'react'
import styled from 'styled-components'

import FormFields from './../components/FormFields'

function LoginPage () {
  return (
    <LoginContainer>
      <FormFields string={'LoginPage'} />
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  width: 100%;
`

export default LoginPage

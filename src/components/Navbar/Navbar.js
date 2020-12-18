import React from 'react'
import styled from 'styled-components'

import LogOutBtn from './LogOutBtn'
import RegLogBtn from './RegLogBtn'
import { REGISTER, LOGIN } from './../../utils/consts'

function Navbar () {
  if (localStorage.getItem('token')) {
    return (
      <NavbarContainer>
        <LogOutBtn />
      </NavbarContainer>
    )
  } else {
    return (
      <NavbarContainer>
        <RegLogBtn to={LOGIN} text={'Log in'} />
        <RegLogBtn to={REGISTER} text={'Register'} />
      </NavbarContainer>
    )
  }
}

const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background: #efe67a42;
    border-radius: 5px;
    box-shadow: 3px 3px 10px 3px #5c5c5c42;
    margin-bottom: 50px;
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

export default Navbar

import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import LogOutBtn from "./LogOutBtn"
import LogInBtn from "./LogInBtn"
import RegisterBtn from "./RegisterBtn"

function Navbar () {
  const isToken = useSelector(state => state.appData.isToken)

  const SetButtons = () => {
    if (isToken) {
      return (
        <NavbarContainer>
          <LogOutBtn />
        </NavbarContainer>
      )
    } else {
      return (
        <NavbarContainer>
          <LogInBtn />
          <RegisterBtn />
        </NavbarContainer>
      )
    }
  }

  return (
    <SetButtons />
  )
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

export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { LOGIN, REGISTER } from './../utils/consts'

function Navbar() {
  const isToken = useSelector(state => state.appData.isToken);
  console.log(isToken)
  return (
    <NavbarContainer>
        <NavLink to={`/${LOGIN}`}>
          <button>{isToken ? "Log out" : "Log in"}</button>
        </NavLink>
        <NavLink to={`/${REGISTER}`}>
          <button className={isToken ? "hide" : ""}>Register</button>
        </NavLink>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background: #efe67a42;
    border-radius: 5px;
    box-shadow: 3px 3px 10px 3px #5c5c5c42;
    margin-top: 20px;
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
    .hide {
          display: none;
    }
`

export default Navbar;
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { 
  LOGIN, 
  REGISTER, 
  SET_SINGLE_STATE_ITEM } from './../utils/consts'

function Navbar() {
  const isToken = useSelector(state => state.appData.isToken);

  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('token')
    dispatch(
      {
        type: SET_SINGLE_STATE_ITEM, 
        payload: {
            field: "isToken", 
            set: false
        }
      }
    )
  }

  return (
    <NavbarContainer>
        {isToken ?
          <NavLink to={`/${LOGIN}`}>
            <button onClick={logOut}>Log out</button>
          </NavLink>
         :
          <NavLink to={`/${LOGIN}`}>
            <button>Log in</button>
          </NavLink>
         }

        {!isToken && 
          <NavLink to={`/${REGISTER}`}>
            <button>Register</button>
          </NavLink>
        }

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
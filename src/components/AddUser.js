import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SWITCH_MODAL } from './../utils/consts'

const AddUser = () => {
    const [firstName, setfirstName] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [position, setPosition] = React.useState('');
    const dispatch = useDispatch();
 
    const closeModal = () => {
      dispatch({type: SWITCH_MODAL, payload: false})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const storageToken = localStorage.getItem('token');
        axios({
            method: 'post',
            url: 'http://localhost:8080/create',
            headers: {
                "x-access-token": storageToken,
            },
            data: {
                firstName,
                lastName,
                gender,
                salary,
                position
              }
        })
        .then(response => {
          console.log(response)
          dispatch({type: SWITCH_MODAL, payload: false})

        })
        .catch(error => {
            console.log('Some mistake - ' + error)
        })
    }
  
    const changeHandler = (e) => {
      switch (e.target.name) {
        case 'firstName': setfirstName(e.target.value);
        break;
        case 'lastName': setlastName(e.target.value);
        break;
        case 'gender': setGender(e.target.value);
        break;
        case 'salary': setSalary(e.target.value);
        break;
        case 'position': setPosition(e.target.value);
        break;
      }
    }
    return (
        <AddUserContainer>
          <div className="modal">
            <div className="cross" onClick={closeModal}>
              &times;
            </div>
            <form onSubmit={ submitHandler }>
              <label>First Name</label>
              <input 
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={changeHandler}
              />
              <label>Last Name</label>
              <input 
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={changeHandler}
              />
              <label>Gender</label>
              <input 
                type="text" 
                name="gender" 
                value={gender} 
                onChange={changeHandler}
              />
              <label>Salary</label>
              <input 
                type="text" 
                name="salary" 
                value={salary} 
                onChange={changeHandler}
              />
              <label>Position</label>
              <input 
                type="text" 
                name="position" 
                value={position} 
                onChange={changeHandler}
              />
              <div className="submit-btn">
                <button type="submit" >Send</button>
              </div>
            </form>
          </div>
        </AddUserContainer>
    );
}

const AddUserContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #0006;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      width: 300px;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      position: relative;
    }
    .cross {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    label {
        display: block;
        margin-bottom: 3px;
    }
    input {
        padding: 5px;
        width: 100%;
        margin-bottom: 10px;
        outline: none;
    }
    .submit-btn {
        text-align: center;
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
    }
`

export default AddUser;
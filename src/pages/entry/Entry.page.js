import React, {useState} from 'react';

import {LoginForm} from '../../componenets/login/Login.comp';
import { ResetPassword } from '../../componenets/password-rest/PasswordReset.comp';

import './entry.style.css';

export const Entry = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [frmLoad, setFrmLoad]=useState("login");

  const handleOnChange = e =>{
    const {name, value} = e.target;

    switch(name){
      case 'email':
        setEmail(value);
        break;

        case 'password':
          setPassword(value);
          break;

        default:
        break;
    }
  };

  const handleOnSubmit = e =>{
    e.preventDefault()
    if(!email || !password){
      return alert("Please fill in the form!")
    }
    //TODO call api to submit the form
    console.log(email, password);
  }

  const handleOnResetSubmit = e =>{
    e.preventDefault()
    if(!email){
      return alert("Please enter email!")
    }

    //TODO call api to submit the form
    console.log(email);
  }

  const formSwitcher = frmType =>{
    setFrmLoad(frmType);

  }

  return (
    <div className="entry-page bg-info">
    <div className="p-5 mb-4 bg-light rounded-3 shadow">
    <div className='form-box'>
    {frmLoad === 'login' && (
    <LoginForm
    handleOnChange={handleOnChange}
    handleOnSubmit={handleOnSubmit}
    formSwitcher ={formSwitcher}
      email={email}
      pass={password}
    />
    )}

    {frmLoad === 'rest' && (
     <ResetPassword
    handleOnChange={handleOnChange}
    handleOnResetSubmit={handleOnResetSubmit}
    formSwitcher ={formSwitcher}
      email={email}
    />
    )}
    
    </div>
    </div>
    </div>
  )
}

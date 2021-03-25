import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogin, useActiveUser } from '../../hooks/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const activeUser = useActiveUser();
  const login = useLogin();
  const history = useHistory();

  activeUser && history.push('/');
  
  const handleSubmit = event => {
    event.preventDefault();
    login(email, password)
    .then(() => history.push('/'));
  };

  return (
    <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>
    <div className='title'>$PENDR</div>
    <div className='formContainer'>
      <div className='inputs'>
        <form onSubmit = {handleSubmit}>
          <input type ='text' name = 'email' value = {email} placeholder = 'Email' onChange = {({ target }) => setEmail(target.value)}/>
          <input type ='password' name = 'password' value= {password} placeholder = 'Password' onChange = {({ target }) => setPassword(target.value)}/>
          <button>Login</button>
        </form>
      </div>
    </div>
    </>
  );
}
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

  activeUser && history.push('/feed');

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then(() => history.push('/feed'));
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>
      <h1 className='title'>$PENDR</h1>
      <form onSubmit={handleSubmit} className='inputs'>
        <input type='text' name='email' value={email} placeholder='Email' onChange={({ target }) => setEmail(target.value)} />
        <input type='password' name='password' value={password} placeholder='Password' onChange={({ target }) => setPassword(target.value)} />
        <button>Login</button>
      </form>
    </>
  );
}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup } from '../../hooks/AuthContext';
import './Login.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signup = useSignup();
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, username, password)
      .then(() => history.push('/create'))
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>
      <h1 className='title'>$PENDR</h1>
      <form onSubmit={handleSubmit} className='inputs'>
        <input onChange={({ target }) => setEmail(target.value)} type='email' name='email' value={email} placeholder='Email' />
        <input onChange={({ target }) => setUsername(target.value)} type='username' name='username' value={username} placeholder='Username' />
        <input onChange={({ target }) => setPassword(target.value)} type='password' name='password' value={password} placeholder='Password' />
        <button>Sign Up</button>
      </form>
    </>
  );
}
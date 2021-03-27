import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSignup, useActiveUser } from '../../hooks/AuthContext';
import './Login.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const activeUser = useActiveUser();
  const signup = useSignup();
  const history = useHistory();

  activeUser && history.push('/feed');

  const handleSubmit = event => {
    event.preventDefault();
    signup(email, username, password)
    .then(() => history.push('/feed'))
  };

  return (
  <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>
    <div className='title'>$PENDR</div>
      <div className='formContainer'>
          <div className='inputs'>
            <form onSubmit={handleSubmit}>
              <input onChange={({ target }) => setEmail(target.value)} type ='email' name = 'email' value = {email} placeholder = 'Email'/>
              <input onChange={({ target }) => setUsername(target.value)} type ='username' name = 'username' value = {username} placeholder = 'Username'/>
              <input onChange={({ target }) => setPassword(target.value)} type ='password' name = 'password' value= {password} placeholder = 'Password'/>
              <button>Sign Up</button>
            </form>
          </div>
    </div>
  </>
  );
}
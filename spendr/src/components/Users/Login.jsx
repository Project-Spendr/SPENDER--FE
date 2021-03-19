import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useLogin, useActiveUser } from '../../hooks/AuthContext';
import styles from './Login.css';
// import logo from '../../photos/Logo.png';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const login = useLogin();

  const activeUser = useActiveUser();

  if(activeUser) return <Redirect to="/"/>;

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password)
      .then(() => window.location.assign('/'));
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <img src="placekitten.com"  alt="placekitten.com"/>
        <form onSubmit = {handleSubmit} className={styles.form}>
          <input type ='text' name = 'email' value = {email} placeholder = 'Email' onChange = {({ target }) => setEmail(target.value)}/>
          <input type ='password' name = 'password' value= {password} placeholder = 'Password' onChange = {({ target }) => setPassword(target.value)}/>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
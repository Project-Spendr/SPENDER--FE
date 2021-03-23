import React, { Component }  from 'react';
import request from 'superagent';
import styles from './Login.css';

export default class Signup extends Component  {
  
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSubmit = async(e) => {
    const { username, email, password } = this.state;
    e.preventDefault();
    try {
      await request.post('http://localhost:7890/api/v1/auth/signup', {
        username: username,
        email: email,
        password: password
      })
      .then(() => window.location.push('/'));
  } catch (e) {
    console.log(e)
  }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {

    const { username, email, password } = this.state;
    
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <img src="http://placekitten.com/200/300" className={styles.logo} alt="placekitten.com"/>
        <form onSubmit={this.handleSubmit} className={styles.form}>

          <input onChange={this.handleEmailChange} type ='text' name = 'email' value = {email} placeholder = 'Email'/>

          <input onChange={this.handleUsernameChange} type ='username' name = 'username' value = {username} placeholder = 'Username'/>

          <input onChange={this.handlePasswordChange} type ='password' name = 'password' value= {password} placeholder = 'Password'/>
          
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
}
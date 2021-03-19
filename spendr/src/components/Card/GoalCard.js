import React, { Component } from 'react'
import request from 'superagent';
import './GoalCard.css';

export default class GoalCard extends Component {

  state = {
    user: '',
    title: '',
    goalAmount: '',
    currentAmount: '',
    privateState: false,
    transactions: [],
    completed: false,
    dateCreated: ''
  }

  handleSubmit = async(e) => {
    const { user, title, goalAmount, currentAmount, transactions, completed, dateCreated, privateState } = this.state;
    e.preventDefault();
    await request.post('http://localhost:7890/create', {
      user: user,
      title: title,
      goalAmount: goalAmount,
      currentAmount: currentAmount,
      privateState: privateState,
      transactions: transactions,
      completed: completed,
      dateCreated: ''
    })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleAmountChange = (e) => {
    this.setState({ goalAmount: e.target.value })
  }

  handlePrivacyChange = (e) => {
    if (this.state.privateState === true) 
      {this.setState ({ privateState: false })} 
    else {this.setState ({ privateState: true })}
  }

  render() {

    const { user, title, goalAmount, privateState } = this.state;
    console.log({privateState})
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <section>
          <h1>LETS GET STARTED ON A NEW GOAL</h1>
          <h2>Week March 21 - 27</h2>
          </section>

          <section>
            <label>Name your Goal</label>
            <input onChange={this.handleTitleChange} title='title' value={title}/>
          </section>

          <section>
            <h1>Is this a challenge?</h1>
            <div class="switch-field">
            <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
            <label for="radio-one">Yes</label>
            <input type="radio" id="radio-two" name="switch-one" value="no" />
            <label for="radio-two">No</label>
            </div>
            {privateState ? <h1>Private</h1> 
                          : <h1>Public</h1>
                          }
  
            <label class="switch">
            <input type="checkbox" onChange={this.handlePrivacyChange} value="privateState"></input>
              <span class="slider round"></span>
              </label>
              <h2>How much?</h2>
              <input type='number' placeholder='$' name='goalAmount' value={goalAmount} onChange={this.handleAmountChange} min='1'></input>
          </section>

        
        <input type='reset'/>
        <input type='submit' onSubmit={this.handleSubmit} value="Submit" />
        </form>
        
      </div>
    )
  }
}

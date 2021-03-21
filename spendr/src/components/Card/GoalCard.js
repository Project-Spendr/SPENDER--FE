import React, { Component } from 'react'
import request from 'superagent';
import './GoalCard.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&display=swap');
</style>

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
    try {
    await request.post('http://localhost:27017/Spendr/create', {
      user: user,
      title: title,
      goalAmount: goalAmount,
      currentAmount: currentAmount,
      privateState: privateState,
      transactions: transactions,
      completed: completed,
      dateCreated: ''
    })
  } catch (e) {
    console.log(e)
  }
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

  handleReset = (e) => {
    window.location.reload(false)
  }

  render() {

    const { user, title, goalAmount, privateState } = this.state;
    console.log({privateState})
    return (
      <div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Roboto:wght@300&display=swap');
</style>        
        <div class='goal'>
        <form onSubmit={this.handleSubmit}>
          <section>
            <h1>{user}</h1>
          <h1 class='title'>LETS GET STARTED ON A NEW GOAL!</h1>
          <div class='goalContainer'>
          <h2 class='date'>Week March 21 - 27</h2>
          </div>
          </section>

          <section class='nameGoal'>
            <label>Name your Goal</label>
            <input onChange={this.handleTitleChange} title='title' value={title}/>
            <h2>How much?</h2>
              <input type='number' placeholder='$0.00' name='goalAmount' value={goalAmount} onChange={this.handleAmountChange} min='1'></input>
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
          </section>

        
        <input type='reset' onClick={this.handleReset} value="Cancel"/>
        <input type='submit' onSubmit={this.handleSubmit} value="Submit" />
        </form>
        </div>
      </div>
    )
  }
}

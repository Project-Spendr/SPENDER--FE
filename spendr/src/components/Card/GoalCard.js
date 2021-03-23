import React, { Component } from 'react'
import request from 'superagent';
import './GoalCard.css';
import './Switch.css';

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
    const { user, title, goalAmount, currentAmount, transactions, completed, privateState } = this.state;
    e.preventDefault();
    try {
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

    return (

      <div class='outerContainer'>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>

        <div class='goal'>
        <form onSubmit={this.handleSubmit}>
          <section>
            <h1>{user}</h1>
          <div class='goalTitle'>LETS GET STARTED ON A NEW GOAL!</div>
          <div class='date'>Week: March 21 - 27</div>
          </section>

          <section class='goalName'>
            <div>Name your Goal</div>
            <input onChange={this.handleTitleChange} title='title' value={title}/>
            <div>How much?</div>
              <input type='number' placeholder='$0.00' name='goalAmount' value={goalAmount} onChange={this.handleAmountChange} min='1'></input>
          </section>

          <section class="challenge">
            <div>Is this a challenge?</div>
            <div class="switch-field">
            <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
            <label for="radio-one">Yes</label>
            <input type="radio" id="radio-two" name="switch-one" value="no" />
            <label for="radio-two">No</label>
            </div>
            {privateState ? <div>Private</div> 
                          : <div>Public</div>
                          }
  
            <label class="switch">
            <input type="checkbox" onChange={this.handlePrivacyChange} value="privateState"></input>
              <span class="slider round"></span>
              </label>
          </section>
        <div class='cancelSubmit'>
        <input class='cancel' type='reset' onClick={this.handleReset} value="Cancel"/>
        <input class='submit' type='submit' onSubmit={this.handleSubmit} value="Submit" />
        </div>
        </form>
        </div>
      </div>
    )
  }
}

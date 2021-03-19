import React, { Component } from 'react'
import request from 'superagent';

export default class GoalCard extends Component {

  state = {
    user: '',
    title: '',
    goalAmount: '',
    currentAmount: '',
    transactions: [],
    completed: false,
    dateCreated: ''
  }

  handleSubmit = async(e) => {
    const { user, title, goalAmount, currentAmount, transactions, completed, dateCreated } = this.state;
    e.preventDefault();
    await request.post('http://localhost:7890/create', {
      user: user,
      title: title,
      goalAmount: goalAmount,
      currentAmount: currentAmount,
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

  render() {

    const { user, title, goalAmount } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <section>
          <h1>Congrats, {user}, on starting a new goal!</h1>
          <h2>Week March 21 - 27</h2>
          </section>

          <section>
            <label>Name your Goal</label>
            <input onChange={this.handleTitleChange} title='title' value={title}/>
          </section>

          <section>
            <h1>Is this a challenge?</h1>
              <input type='radio' id='Yes' name='Challenge'></input>
              <input type='radio' id='No' name='Challenge'></input>
          </section>

        
        <input type='reset' value="Reset" />
        <input type='submit' onSubmit={this.handleSubmit} value="Submit" />
        </form>
        
      </div>
    )
  }
}

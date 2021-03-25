import React, { useState } from 'react'
import { post } from '../../services/request';
import './GoalCard.css';
import { goalCreate } from '../../services/apiFetches';
import { useHistory } from 'react-router-dom';
// import './Switch.css';

export default function GoalCard() {
  const [title, setTitle] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [privateState, setPrivateState] = useState(false);
  const [dateCreated, setDateCreated] = useState('');
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    goalCreate(title, goalAmount, currentAmount, completed, privateState, dateCreated)
    .then(() => history.push('/'))
    }

  const handleReset = (e) => {
    window.location.reload(false)
  };

    return (

      <div class='outerContainer'>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barrio&family=Open+Sans:wght@600&family=Roboto:wght@500&display=swap');
</style>

        <div class='goal'>
        <form onSubmit={handleSubmit}>
          <section>
            {/* <h1>{username}</h1> */}
          <div class='goalTitle'>LETS GET STARTED ON A NEW GOAL!</div>
          <div class='date'>Week: March 21 - 27</div>
          </section>

          <section class='goalName'>
            <div>Name your Goal</div>
            <input onChange={({ target }) => setTitle(target.value)} title='title' value={title}/>
            <div>How much?</div>
              <input type='number' placeholder='$0.00' name='goalAmount' value={goalAmount} onChange={({ target }) => setGoalAmount(target.value)}min='1'></input>
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
            {/* <input type="checkbox" onChange={({ target }) => setPrivateState(target.value)} value="privateState"></input> */}
              <span class="slider round"></span>
              </label>
          </section>
        <div class='cancelSubmit'>
        <input class='cancel' type='reset' onClick={handleReset} value="Cancel"/>
        <input class='submit' type='submit' onSubmit={handleSubmit} value="Submit" />
        </div>
        </form>
        </div>
      </div>
    )
}

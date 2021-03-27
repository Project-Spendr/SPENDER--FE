import React, { Component } from 'react';
// import { findGoals } from '../../services/apiFetches';
import './StatusCard.css';

export default class StatusCard extends Component {

    // const [username, setUserName] = useState('');
    // const [title, setTitle] = useState('');
    // const [goalAmount, setGoalAmount] = useState('');
    // const [currentAmount, setCurrentAmount] = useState('');
    // const [completed, setCompleted] = useState(false);
    // const [userId, setUserId] = useState(1);

    // const loadGoals = async () => {
    //   const fetchedData = await 
    //   findGoals(userId)
    // }

  //   componentDidMount = async () => {
  //     await this.loadGoals();
  // }

  // state = {
  //   username: 'guy',
  //   userId: 1,
  //   currentAmount: 100,
  //   goalAmount: 200,
  //   title: 'stuff'
  // }

  render() {

    return (
      <>
        <section class='statusContainer'>{this.props.userId}
            <div class='userName'>{this.props.username}</div>
            <div class='title'>Has Paid ${this.props.currentAmount} of their ${this.props.goalAmount} towards the goal:</div>
            <div>{this.props.title}</div>
          <section class='likesComments'>
            <div class='likes'>6 Likes</div>
            <div class='comments'>6 Comments</div>
            <button class='likeButton'>Like</button> 
            <button class='commentButton'>Comment</button>     
          </section>   
        </section>
      </>
    )
  }
}



import React, { useState } from 'react';
import './StatusCard.css';

export default function StatusCard() {

    const [username, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [completed, setCompleted] = useState('');
    const [userId, setUserId] = useState('');

    return (
      <>
        <section class='statusContainer'>
            <div class='userName'>{username}</div>
            <div class='title'>Has Paid {currentAmount} of their {goalAmount}</div>
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



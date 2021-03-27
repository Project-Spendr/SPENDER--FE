import React, { Component } from 'react';
import './StatusCard.css';

export default class StatusCard extends Component {
  render() {
    return (
      <>
        <section class='statusContainer'>
            <div class='userName'>{this.props.username}</div>
            <div>Has Paid ${this.props.currentAmount} of their ${this.props.goalAmount} towards the goal:</div>
            <div class='title'>{this.props.title}</div>
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


